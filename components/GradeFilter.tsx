"use client";

// GradeFilter.tsx
// Author: Daniel Carpintero
// Date: October 27, 2026
// This component displays buttons for filtering students by grade.
// It receives the selected grade and a callback through props.
// It uses the shared color palette for light and dark mode styling.
// When a button is clicked, it notifies the parent of the selected grade.

// Imports
import { palette } from "@/data/colorPalette";

// Grade filter type
export type GradeFilterValue = "all" | 9 | 10 | 11 | 12;

// Component props
interface GradeFilterProps {
  gradeFilter: GradeFilterValue;
  onGradeChange: (grade: GradeFilterValue) => void;
}

// Available grade options
const grades: GradeFilterValue[] = ["all", 9, 10, 11, 12];

// Grade filter component
export default function GradeFilter({
  gradeFilter,
  onGradeChange,
}: GradeFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {grades.map((grade) => {
        const isSelected = grade === gradeFilter;

        return (
          <button
            key={grade}
            type="button"
            onClick={() => onGradeChange(grade)}
            aria-pressed={isSelected}
            className={`rounded-lg border px-4 py-2 font-medium transition-colors ${
              isSelected
                ? `${palette.primaryBg} ${palette.primaryText} ${palette.primaryHover}`
                : `${palette.card} ${palette.heading} ${palette.border} hover:opacity-80`
            }`}
          >
            {grade === "all" ? "All" : grade}
          </button>
        );
      })}
    </div>
  );
}