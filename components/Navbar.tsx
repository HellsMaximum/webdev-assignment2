/*
 * File: Navbar.tsx
 * Author: Doug Dickens
 * Date: October 27, 2026
 *
 * Description:
 * This component renders the header bar that stays at the top of every page in the app.
 * It takes no props; its colors come from the shared palette in data/colorPalette.ts and
 * its links come from the navLinks array below.
 * It maps over navLinks to build one link per section, and each link points at a section
 * id in StudentPortal (such as href="#students"), so clicking it scrolls the page there.
 * The output is a sticky <header> with the school's name, the course badge and the
 * Overview, Students and Add a student links, styled for both light and dark mode.
 */

// ---------- Imports ----------
import { palette } from "@/data/colorPalette";

// ---------- Navigation links (href must match a section id in StudentPortal) ----------
const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Students", href: "#students" },
  { label: "Add a student", href: "#add-student" },
];

// ---------- Component ----------
const Navbar = () => {
  return (
    // Header bar: sticks to the top while scrolling, with background and divider from the palette
    <header className={`sticky top-0 z-10 ${palette.headerBg} border-b ${palette.divider}`}>
      {/* Inner container: stacks on a phone, one row on wider screens */}
      <div className="max-w-5xl mx-auto px-6 py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        {/* School name and course badge */}
        <div className="flex items-center gap-3">
          <h1 className={`text-lg font-bold ${palette.heading}`}>High School Student Portal</h1>
          <span
            className={`text-xs font-semibold ${palette.badgeText} ${palette.badgeBg} px-3 py-1 rounded-full`}
          >
            CPRG 306 &middot; Assignment 2
          </span>
        </div>

        {/* Section links: each one jumps to its section of the page */}
        <nav className="flex flex-wrap gap-x-5 gap-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold ${palette.secondaryText} hover:underline underline-offset-4`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

// ---------- Export ----------
export default Navbar;
