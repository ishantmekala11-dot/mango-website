import { useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../lib/routes";
import { ButtonLink } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[var(--color-ink)]/85 backdrop-blur-sm border-b border-[var(--color-paper-dim)]/15">
      <nav
        aria-label="Primary"
        className="flex items-center justify-between h-16 px-6 sm:px-10 max-w-[100rem] mx-auto"
      >
        <NavLink
          to="/"
          className="font-mono text-[var(--text-md)] tracking-tight"
          aria-label="MANGO home"
        >
          MANGO
        </NavLink>

        <ul className="hidden lg:flex items-center gap-8">
          {routes
            .filter((r) => r.path !== "/join")
            .map((route) => (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    `font-mono-label transition-colors duration-200 ${
                      isActive
                        ? "text-[var(--color-cobalt-bright)]"
                        : "text-[var(--color-paper-dim)] hover:text-[var(--color-paper)]"
                    }`
                  }
                >
                  {route.label}
                </NavLink>
              </li>
            ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink to="/join" variant="primary" className="text-2xs">
            JOIN THE FUTURE →
          </ButtonLink>
        </div>

        <button
          type="button"
          className="lg:hidden min-h-11 min-w-11 flex items-center justify-center"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="font-mono-label">{menuOpen ? "CLOSE" : "MENU"}</span>
        </button>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
