/**
 * useSmoothScroll — Premium inertia-based scroll hook
 *
 * How it works:
 *  • Intercepts native wheel events and cancels them.
 *  • Accumulates a "target" scroll position with each wheel tick.
 *  • On every rAF frame, lerps (linearly interpolates) the real scroll
 *    position toward the target with a configurable friction factor.
 *  • The closer the scroll gets to the target, the slower it moves —
 *    producing the signature buttery ease-out deceleration.
 *
 * Tuning:
 *  • LERP_FACTOR  0.05 – 0.12   lower = slower/more floaty
 *  • WHEEL_MULT   0.8 – 1.5     higher = more distance per scroll tick
 */

import { useEffect } from "react";

const LERP_FACTOR  = 0.075;  // ← main "speed" knob (lower = slower & dreamier)
const WHEEL_MULT   = 0.9;    // ← how far each wheel tick moves the target
const SNAP_EPSILON = 0.05;   // ← stop rAF once within this many pixels

export function useSmoothScroll() {
  useEffect(() => {
    // Respect user's OS "reduce motion" preference
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    let currentY  = window.scrollY;
    let targetY   = window.scrollY;
    let rafId     = null;
    let isRunning = false;

    // ── lerp helper ──────────────────────────────────────────────
    const lerp = (a, b, t) => a + (b - a) * t;

    // ── rAF render loop ──────────────────────────────────────────
    const tick = () => {
      currentY = lerp(currentY, targetY, LERP_FACTOR);

      const diff = Math.abs(targetY - currentY);

      if (diff < SNAP_EPSILON) {
        // Close enough — snap exactly and stop the loop
        currentY  = targetY;
        isRunning = false;
      }

      window.scrollTo(0, currentY);

      if (isRunning) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    // ── wheel handler ─────────────────────────────────────────────
    const onWheel = (e) => {
      e.preventDefault();

      // Clamp the target within the document bounds
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      targetY = Math.max(0, Math.min(maxScroll, targetY + e.deltaY * WHEEL_MULT));

      startLoop();
    };

    // ── keyboard scroll support (ArrowUp/Down, PgUp/PgDn, Space, End, Home) ──
    const onKeyDown = (e) => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const step      = window.innerHeight * 0.15;
      const page      = window.innerHeight * 0.9;

      const tag = document.activeElement?.tagName?.toLowerCase();
      const isInput = ["input", "textarea", "select"].includes(tag);
      if (isInput) return; // don't hijack form fields

      switch (e.key) {
        case "ArrowDown":
          targetY = Math.min(maxScroll, targetY + step);
          startLoop();
          e.preventDefault();
          break;
        case "ArrowUp":
          targetY = Math.max(0, targetY - step);
          startLoop();
          e.preventDefault();
          break;
        case "PageDown":
        case " ":
          if (!e.shiftKey || e.key === "PageDown") {
            targetY = Math.min(maxScroll, targetY + page);
            startLoop();
            e.preventDefault();
          }
          break;
        case "PageUp":
          targetY = Math.max(0, targetY - page);
          startLoop();
          e.preventDefault();
          break;
        case "Home":
          targetY = 0;
          startLoop();
          e.preventDefault();
          break;
        case "End":
          targetY = maxScroll;
          startLoop();
          e.preventDefault();
          break;
        default:
          break;
      }
    };

    // ── keep internal state in sync when other things scroll ─────
    // (e.g., anchor links, programmatic scrollTo, etc.)
    const onScroll = () => {
      if (!isRunning) {
        currentY = window.scrollY;
        targetY  = window.scrollY;
      }
    };

    window.addEventListener("wheel",   onWheel,   { passive: false });
    window.addEventListener("keydown", onKeyDown, { passive: false });
    window.addEventListener("scroll",  onScroll,  { passive: true  });

    // ── anchor link navigation via custom event ───────────────
    const onSmoothScrollTo = (e) => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      targetY = Math.max(0, Math.min(maxScroll, e.detail.y));
      startLoop();
    };
    window.addEventListener("smoothScrollTo", onSmoothScrollTo);

    return () => {
      window.removeEventListener("wheel",          onWheel);
      window.removeEventListener("keydown",         onKeyDown);
      window.removeEventListener("scroll",          onScroll);
      window.removeEventListener("smoothScrollTo",  onSmoothScrollTo);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}
