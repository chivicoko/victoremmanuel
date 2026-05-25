interface TooltipProps {
  content: string
  children: React.ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const positionClasses = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
}

export const Tooltip = ({ content, children, position = 'top' }: TooltipProps) => {
  return (
    <div className="relative group inline-block">
      {children}
      <span className={`
        absolute ${positionClasses[position]}
        bg-surface text-foreground text-xs px-2 py-1 rounded-md
        border border-border whitespace-nowrap z-50
        opacity-0 group-hover:opacity-100 pointer-events-none
        transition-opacity duration-200
      `}>
        {content}
      </span>
    </div>
  )
}