// SortControls.tsx
// Author: Daniel Carpintero
// Date: October 27, 2026
// Displays a dropdown containing the available sorting options.
// Receives the selected sorting option and callback through props.
// Shows the current selection and notifies the parent when the option changes.
// The parent component handles sorting the student list.

// Sorting option type
export type SortOption =
  | "lastName"
  | "grade"
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
  { value: "grade", label: "Grade (Low to High)" },
  { value: "average", label: "Average (Low to High)" },
  { value: "averageDesc", label: "Average (High to Low)" },
];

// Sorting controls component
export default function SortControls({
  sortOption,
  onSortChange,
}: SortControlsProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="student-sort"
        className="text-sm font-medium text-gray-700"
      >
        Sort students by
      </label>

      <select
        id="student-sort"
        value={sortOption}
        onChange={(event) =>
          onSortChange(event.target.value as SortOption)
        }
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-800"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}