/*
 * File: Footer.tsx
 * Author: Doug Dickens
 * Date: October 27, 2026
 *
 * Description:
 * This component renders the footer shown at the bottom of every page in the app.
 * It takes no props; its colors come from the shared palette in data/colorPalette.ts.
 * When it renders, it works out the current year with JavaScript's Date object so the
 * copyright line never needs to be updated by hand.
 * The output is a <footer> element with a top divider, a copyright line and a short
 * muted note about the course, styled for both light and dark mode.
 */

// ---------- Imports ----------
import { palette } from "@/data/colorPalette";

// ---------- Component ----------
const Footer = () => {
  return (
    // Footer bar: top divider from the palette
    <footer className={`border-t ${palette.divider} mt-auto`}>
      {/* Inner container: centers the text */}
      <div className="max-w-5xl mx-auto px-6 py-4 text-center">
        {/* Project name*/}
        <p className={`text-sm ${palette.footerText}`}>
            Student Portal &middot; CPRG 306 Assignment 2
        </p>

        {/* Course note */}
        <p className={`text-xs ${palette.footerMuted}`}>
          Built by Doug Dickens, Niko Dewit, Daniel Carpintero, Caelan Abugan
        </p>
      </div>
    </footer>
  );
};

// ---------- Export ----------
export default Footer;
