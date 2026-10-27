/*
 * File: Navbar.tsx
 * Author: Doug Dickens
 * Date: October 27, 2026
 *
 * Description:
 * This component renders the header bar shown at the top of every page in the app.
 * It takes no props; all of its colors come from the shared palette in data/colorPalette.ts.
 * When it renders, it combines the palette's class names with Tailwind layout classes
 * to build a centered, full-width bar with a bottom border.
 * The output is a <header> element containing the site title on the left and a
 * course badge on the right, styled for both light and dark mode.
 */

// ---------- Imports ----------
import { palette } from "@/data/colorPalette";

// ---------- Component ----------
const Navbar = () => {
  return (
    // Header bar: background color and bottom divider from the palette
    <header className={`${palette.headerBg} border-b ${palette.divider}`}>
      {/* Inner container: centers content and spaces title and badge apart */}
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Site title */}
        <h1 className={`text-lg font-bold ${palette.heading}`}>Student Portal</h1>

        {/* Course badge */}
        <span
          className={`text-xs font-semibold ${palette.badgeText} ${palette.badgeBg} px-3 py-1 rounded-full`}
        >
          CPRG 306 &middot; Assignment 2
        </span>
      </div>
    </header>
  );
};

// ---------- Export ----------
export default Navbar;
