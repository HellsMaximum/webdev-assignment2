// GradeFilter.tsx
// Author: Daniel Carpintero
// Date: October 27, 2026
// Displays buttons for filtering students by grade.
// Receives the selected grade and callback through props.
// Highlights the selected grade and notifies the parent when a button is clicked.
// The parent component handles filtering the student list.

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
      {grades.map((grade) => (
        <button
          key={grade}
          type="button"
          onClick={() => onGradeChange(grade)}
          className={`rounded-lg px-4 py-2 font-medium transition-colors ${
            grade === gradeFilter
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {grade === "all" ? "All" : grade}
        </button>
      ))}
    </div>
  );
}