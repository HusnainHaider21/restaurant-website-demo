import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Utensils } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const links = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/menu', 'Menu'],
    ['/contact', 'Contact'],
  ];

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#fbfaf7]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Savory House home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-stone-950 text-amber-400 shadow-lg">
            <Utensils size={19} />
          </span>
          <span className="font-serif text-xl font-bold tracking-tight text-stone-950">
            Taste <span className="text-amber-700">Avenue</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? 'text-amber-700'
                    : 'text-stone-600 hover:text-stone-950'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/menu"
          className="hidden rounded-full bg-stone-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-amber-700 md:block"
        >
          Order Now
        </Link>

        {/* Mobile hamburger / close button */}
        <button
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-stone-200 bg-white text-stone-900 shadow-sm transition hover:border-amber-400 hover:text-amber-700 md:hidden"
        >
          {open ? <X size={24} strokeWidth={2.2} /> : <Menu size={24} strokeWidth={2.2} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-stone-200 bg-[#fbfaf7] transition-all duration-300 md:hidden ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4" aria-label="Mobile navigation">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-base font-semibold transition ${
                  isActive
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-stone-700 hover:bg-stone-100 hover:text-stone-950'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/menu"
            className="mt-2 rounded-xl bg-stone-950 px-4 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
