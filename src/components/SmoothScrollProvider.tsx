"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";
import type LenisType from "@studio-freight/lenis";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    let lenis: LenisType | null = null;
    let rafId: number;

    const initLenis = () => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      // Handle wheel events - check if scrolling within a dropdown
      const handleWheel = (e: WheelEvent) => {
        let element = e.target as HTMLElement;
        
        // Traverse up the DOM tree to find scrollable container
        while (element && element !== document.body) {
          const hasOverflow = window.getComputedStyle(element).overflowY === 'auto' || 
                            window.getComputedStyle(element).overflowY === 'scroll';
          const isScrollable = hasOverflow && element.scrollHeight > element.clientHeight;
          
          if (isScrollable || element.hasAttribute('data-lenis-prevent')) {
            const scrollTop = element.scrollTop;
            const scrollHeight = element.scrollHeight;
            const clientHeight = element.clientHeight;
            const isAtTop = scrollTop === 0;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
            
            // If we can scroll in this direction, prevent Lenis
            if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
              lenis?.stop();
              setTimeout(() => lenis?.start(), 100);
              return;
            }
          }
          
          element = element.parentElement as HTMLElement;
        }
      };

      window.addEventListener('wheel', handleWheel, { passive: true });

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);

      // Scroll to top on route change
      lenis.scrollTo(0, { immediate: true });

      return () => {
        window.removeEventListener('wheel', handleWheel);
      };
    };

    initLenis();

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [pathname]);

  return <>{children}</>;
}

