"use client";

// SortControls.tsx
// Author: Daniel Carpintero
// Date: October 27, 2026
// This component displays the available student sorting options.
// It receives the selected sorting option and a callback through props.
// It uses the shared color palette for light and dark mode styling.
// When an option is selected, it notifies the parent component.

import { useState } from "react";
import { palette } from "@/data/colorPalette";

// Sorting option type
export type SortOption =
  | "lastName"
  | "average"
  | "averageDesc";

// Component props
interface SortControlsProps {
  sortOption: SortOption;
  onSortChange: (sort: SortOption) => void;
}

// Available sorting options
const sortOptions: { value: SortOption; label: string }[] = [
  { value: "lastName", label: "Last Name (A–Z)" },
  { value: "average", label: "Average (Low to High)" },
  { value: "averageDesc", label: "Average (High to Low)" },
];

// Sorting controls component
export default function SortControls({
  sortOption,
  onSortChange,
}: SortControlsProps) {
  // Track whether the sorting dropdown is open.
  const [isOpen, setIsOpen] = useState(false);

  // Find the selected option, defaulting to the first option.
  const selectedOption =
    sortOptions.find((option) => option.value === sortOption) ??
    sortOptions[0];

  return (
    <div className="relative flex w-full max-w-sm flex-col gap-2">
      {/* Label the sorting dropdown. */}
      <label
        id="student-sort-label"
        className={`text-sm font-medium ${palette.label}`}
      >
        Sort students by
      </label>

      {/* Button that opens and closes the sorting options. */}
      <button
        type="button"
        aria-labelledby="student-sort-label"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={(event) => {
          // Close the dropdown when the Escape key is pressed.
          if (event.key === "Escape") {
            setIsOpen(false);
          }
        }}
        className={`flex w-full items-center justify-between rounded-lg border px-3 py-3 text-left ${palette.inputBg} ${palette.inputText} ${palette.border} ${palette.inputFocusBorder}`}
      >
        <span>{selectedOption.label}</span>
        <span aria-hidden="true">{isOpen ? "⌃" : "⌄"}</span>
      </button>

      {/* Display the available sorting options when the dropdown is open. */}
      {isOpen && (
        <ul
          role="listbox"
          aria-labelledby="student-sort-label"
          className={`absolute left-0 right-0 top-full z-20 mt-1 overflow-hidden rounded-lg border shadow-lg ${palette.inputBg} ${palette.inputText} ${palette.border}`}
        >
          {sortOptions.map((option) => {
            // Check whether this option is currently selected.
            const isSelected = option.value === sortOption;

            return (
              <li
                key={option.value}
                role="option"
                aria-selected={isSelected}
              >
                {/* Select the sorting option and close the dropdown. */}
                <button
                  type="button"
                  onClick={() => {
                    onSortChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-left transition-colors ${
                    isSelected
                      ? `${palette.primaryBg} ${palette.primaryText}`
                      : "hover:bg-[#e8efe9] dark:hover:bg-[#1a2b26]"
                  }`}
                >
                  {option.label}

                  {/* Show a checkmark beside the selected option. */}
                  {isSelected && (
                    <span className="float-right" aria-hidden="true">
                      ✓
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}