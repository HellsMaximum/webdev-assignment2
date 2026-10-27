export type GradeFilterValue = "all" | 9 | 10 | 11 | 12;

interface GradeFilterProps {
  gradeFilter: GradeFilterValue;
  onGradeChange: (grade: GradeFilterValue) => void;
}

const grades: GradeFilterValue[] = ["all", 9, 10, 11, 12];

export default function GradeFilter({
  gradeFilter,
  onGradeChange,
}: GradeFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {grades.map((grade) => (
        <button
          key={grade}
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

export type GradeFilterValue = "all" | 9 | 10 | 11 | 12;

interface GradeFilterProps {
  gradeFilter: GradeFilterValue;
  onGradeChange: (grade: GradeFilterValue) => void;
}

const grades: GradeFilterValue[] = ["all", 9, 10, 11, 12];

export default function GradeFilter({
  gradeFilter,
  onGradeChange,
}: GradeFilterProps) {
  // Display one button for each available grade.
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