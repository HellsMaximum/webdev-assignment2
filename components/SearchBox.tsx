// SearchBox.tsx
// Author: Caelan Abugan
// Date: October 27, 2026
// This component is the search bar for finding students by their name.
// It takes in the search text and an onSearchChange function as props from StudentPortal.
// Whenever you type, it sends the new text back up to StudentPortal instead of saving it here.
// StudentPortal is the one that actually filters the list, so this file just handles the typing.
// What you see is a labelled text box that matches the look of the rest of the site.

"use client";

import { palette } from "@/data/colorPalette";

// the props this component needs
interface SearchBoxProps {
  searchText: string;
  onSearchChange: (text: string) => void;
}

const SearchBox = ({ searchText, onSearchChange }: SearchBoxProps) => {
  // search input that always shows what's in StudentPortal's state
  return (
    <div className="space-y-1">
      <label htmlFor="search" className={`text-sm font-semibold ${palette.label}`}>
        Search by name
      </label>
      <input
        id="search"
        type="text"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="e.g. Ahmed"
        className={`w-full rounded-lg border px-4 py-2 outline-none ${palette.inputBg} ${palette.inputText} ${palette.border} ${palette.inputFocusBorder}`}
      />
    </div>
  );
};

export default SearchBox;