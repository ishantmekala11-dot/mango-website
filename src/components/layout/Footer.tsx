import { NavLink } from "react-router-dom";
import { routes } from "../../lib/routes";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-paper-dim)]/15 mt-32">
      <div className="max-w-[100rem] mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-3 gap-12">
        <div>
          <p className="font-mono text-[var(--text-md)]">MANGO</p>
          <p className="mt-2 font-mono-label text-[var(--color-paper-dim)]">
            Modern Advocates for New Global Opinions
          </p>
          <p className="mt-4 text-[var(--color-paper-dim)] max-w-xs">
            A student-led Model UN and public speaking organization.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono-label text-[var(--color-paper-dim)] mb-4">Site</p>
          <ul className="flex flex-col gap-2">
            {routes.map((route) => (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  className="text-[var(--color-paper-dim)] hover:text-[var(--color-paper)] transition-colors duration-200"
                >
                  {route.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono-label text-[var(--color-paper-dim)] mb-4">Contact</p>
          <a
            href="mailto:hello@mango.org"
            className="text-[var(--color-paper-dim)] hover:text-[var(--color-paper)] transition-colors duration-200"
          >
            hello@mango.org
          </a>
        </div>
      </div>
      <div className="max-w-[100rem] mx-auto px-6 sm:px-10 py-6 border-t border-[var(--color-paper-dim)]/10 font-mono-label text-[var(--color-paper-dim)]">
        © {new Date().getFullYear()} MANGO. All rights reserved.
      </div>
    </footer>
  );
}
