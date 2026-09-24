import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../lib/routes";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/** Full-screen mobile nav overlay. Full keyboard support: Escape closes, focus trapped inside. */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>("a, button");
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      id="mobile-menu"
      ref={panelRef}
      className={`lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[var(--color-ink)] transition-transform duration-300 ease-[var(--ease-out)] ${
        open ? "translate-y-0" : "-translate-y-[110%]"
      }`}
      aria-hidden={!open}
    >
      <ul className="flex flex-col gap-2 p-8">
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink
              to={route.path}
              onClick={onClose}
              tabIndex={open ? 0 : -1}
              className={({ isActive }) =>
                `block py-3 text-[var(--text-lg)] ${
                  isActive ? "text-[var(--color-cobalt-bright)]" : "text-[var(--color-paper)]"
                }`
              }
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
