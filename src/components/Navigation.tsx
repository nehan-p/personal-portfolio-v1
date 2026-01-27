import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../assets/styles/Navigation.scss";

type NavItem = { label: string; id: string };

interface NavigationProps {
  parentToChild: {
    mode: string;
  };
  modeChange: () => void;
}

function Navigation({ parentToChild, modeChange }: NavigationProps) {
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const pillRef = useRef<HTMLDivElement | null>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const [indicator, setIndicator] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  const setBtnRef = (id: string) => (el: HTMLButtonElement | null) => {
    btnRefs.current[id] = el;
  };

  const scrollToSection = (id: string): void => {
    const el = document.getElementById(id);
    if (!el) return;

    // Close mobile menu after clicking
    setMobileMenuOpen(false);

    // Read the global offset from CSS
    const rootStyles = getComputedStyle(document.documentElement);
    const offsetStr = rootStyles.getPropertyValue("--nav-offset").trim();
    const offset = Number.parseInt(offsetStr || "96", 10);

    const y = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  };

  // Scroll state
  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section observer with bottom detection
  useEffect(() => {
    const elements = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    // Check if at bottom of page
    const checkBottom = (): void => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If scrolled to bottom (within 50px), set Contact as active
      if (scrollTop + windowHeight >= documentHeight - 50) {
        setActiveId("contact");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // First check if we're at the bottom
        checkBottom();
        
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // If at bottom, don't update from observer
        if (scrollTop + windowHeight >= documentHeight - 50) {
          return;
        }

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

    // Also listen to scroll for bottom detection
    window.addEventListener("scroll", checkBottom, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkBottom);
    };
  }, [navItems]);

  // Indicator positioning
  const recalcIndicator = (): void => {
    const pill = pillRef.current;
    const btn = btnRefs.current[activeId];
    if (!pill || !btn) return;

    const left = btn.offsetLeft;
    const width = btn.offsetWidth;

    setIndicator({ left, width });
  };

  useLayoutEffect(() => {
    recalcIndicator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  // Recalc on resize
  useEffect(() => {
    const onResize = (): void => recalcIndicator();
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

  // Pill scroll alignment
  useEffect(() => {
    const pill = pillRef.current;
    if (!pill) return;

    const onPillScroll = (): void => recalcIndicator();
    pill.addEventListener("scroll", onPillScroll, { passive: true });

    return () => pill.removeEventListener("scroll", onPillScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      if (!target.closest(".mobile-menu") && !target.closest(".mobile-menu-toggle")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <>
      <div className={`nav-shell ${scrolled ? "is-scrolled" : ""}`} id="navigation">
        <button
          className="nav-toggle"
          aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          onClick={modeChange}
          type="button"
        >
          {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </button>

        {/* Desktop navigation pill */}
        <div className="nav-pill desktop-only" ref={pillRef} role="navigation" aria-label="Primary">
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

        {/* Mobile hamburger button */}
        <button
          className="mobile-menu-toggle mobile-only"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className="nav-right-spacer desktop-only" aria-hidden="true" />
      </div>

      {/* Mobile slide-out menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "is-open" : ""}`}>
        <nav className="mobile-menu-content">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-menu-item ${activeId === item.id ? "is-active" : ""}`}
              onClick={() => scrollToSection(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Overlay backdrop */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navigation;
