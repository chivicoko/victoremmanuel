interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const positionClasses = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export const Tooltip = ({
  content,
  children,
  position = "top",
}: TooltipProps) => {
  return (
    <div className="relative group inline-block">
      {children}
      <span
        className={`
        absolute ${positionClasses[position]}
        text-surface bg-foreground text-[13.5px] px-2 py-1 rounded-md
        border border-border whitespace-nowrap z-50
        opacity-0 group-hover:opacity-100 pointer-events-none
        transition-opacity duration-200
      `}
      >
        <div
          className={`${position === "bottom" ? "-top-1.5 left-1/2 -translate-x-1/2" : position === "left" ? "-right-1.5 top-1/2 -translate-y-1/2" : position === "right" ? "-left-1.5 top-1/2 -translate-y-1/2" : "-bottom-1.5 left-1/2 -translate-x-1/2"} size-3 rounded-full bg-foreground absolute`}
        ></div>
        {content}
      </span>
    </div>
  );
};
