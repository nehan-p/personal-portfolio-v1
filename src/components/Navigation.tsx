import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "../assets/styles/Navigation.scss";

type NavItem = { label: string; id: string };

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Home", id: "home" },
      { label: "About", id: "about" },
      { label: "History", id: "history" },
      { label: "Projects", id: "projects" },
      { label: "Contact", id: "contact" },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);

  const pillRef = useRef<HTMLDivElement | null>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const [indicator, setIndicator] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  const setBtnRef = (id: string) => (el: HTMLButtonElement | null) => {
    btnRefs.current[id] = el;
  };

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  // Read the global offset from CSS (fallback if missing)
  const rootStyles = getComputedStyle(document.documentElement);
  const offsetStr = rootStyles.getPropertyValue("--nav-offset").trim();
  const offset = Number.parseInt(offsetStr || "96", 10);

  const y = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
};


  // shrink-wrap nav + subtle scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const elements = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible.length > 0) {
          setActiveId((visible[0].target as HTMLElement).id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -65% 0px",
        threshold: [0.05, 0.12, 0.2, 0.35],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navItems]);

  // PERFECT indicator positioning
  const recalcIndicator = () => {
    const pill = pillRef.current;
    const btn = btnRefs.current[activeId];
    if (!pill || !btn) return;

    // Position within the pill content box
    const left = btn.offsetLeft;
    const width = btn.offsetWidth;

    setIndicator({ left, width });
  };

  useLayoutEffect(() => {
    recalcIndicator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  // Recalc on resize + after fonts settle
  useEffect(() => {
    const onResize = () => recalcIndicator();
    window.addEventListener("resize", onResize);

    const t1 = window.setTimeout(() => recalcIndicator(), 60);
    const t2 = window.setTimeout(() => recalcIndicator(), 220);

    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If pill can scroll on mobile, keep indicator aligned while user scrolls it
  useEffect(() => {
    const pill = pillRef.current;
    if (!pill) return;

    const onPillScroll = () => recalcIndicator();
    pill.addEventListener("scroll", onPillScroll, { passive: true });

    return () => pill.removeEventListener("scroll", onPillScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  return (
    <div className={`nav-shell ${scrolled ? "is-scrolled" : ""}`} id="navigation">
      <button
        className="nav-toggle"
        aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        onClick={() => modeChange()}
        type="button"
      >
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </button>

      <div className="nav-pill" ref={pillRef} role="navigation" aria-label="Primary">
        <div
          className="nav-pill-indicator"
          style={{
            width: `${indicator.width}px`,
            transform: `translateX(${indicator.left}px)`,
          }}
        />
        {navItems.map((item) => (
          <button
            key={item.id}
            ref={setBtnRef(item.id)}
            className={`nav-pill-btn ${activeId === item.id ? "is-active" : ""}`}
            onClick={() => scrollToSection(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="nav-right-spacer" aria-hidden="true" />
    </div>
  );
}

export default Navigation;
