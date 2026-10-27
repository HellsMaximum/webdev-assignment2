/*
 * File: layout.tsx
 * Author: Doug Dickens
 * Date: October 27, 2026
 *
 * Description:
 * This is the root layout for the app, which Next.js wraps around every page.
 * Its only prop is children, the content of whichever page is currently being shown.
 * It loads the global stylesheet, sets the page title and description through the
 * metadata export, and applies the shared page background color from the palette.
 * The output is the <html> and <body> structure with the Navbar at the top, the
 * current page in the middle and the Footer at the bottom.
 */

// ---------- Imports ----------
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { palette } from "@/data/colorPalette";

// ---------- Page metadata (browser tab title and description) ----------
export const metadata: Metadata = {
  title: "Web Dev Assignment 2",
  description: "Created by Doug Dickens, Niko Dewit, Daniel Carpintero, Caelan Abugan",
};

// ---------- Root layout component ----------
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Body: shared page background from the palette, fills the full screen height */}
      <body className={`${palette.pageBg} min-h-screen`}>
        {/* Header shown on every page */}
        <Navbar />

        {/* Current page content */}
        {children}

        {/* Footer shown on every page */}
        <Footer />
      </body>
    </html>
  );
}
