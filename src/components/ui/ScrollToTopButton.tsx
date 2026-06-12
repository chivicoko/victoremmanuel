"use client";

import useScrollVisibility from "@/hooks/useScrollVisibility";
import { ArrowUpFromDotIcon } from "lucide-react";
// import { North } from '@mui/icons-material';

export default function ScrollToTopButton() {
  const isVisible = useScrollVisibility(100);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-primary rounded-full text-muted py-3 px-2 cursor-pointer shadow-lg transition group z-9999"
      >
        <ArrowUpFromDotIcon className="w-5 h-5 duration-300 ease-in-out transform group-hover:-translate-y-1" />
      </button>
    )
  );
}
