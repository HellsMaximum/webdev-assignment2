/*
 * File: StatsPanel.tsx
 * Author: Doug Dickens
 * Date: October 27, 2026
 *
 * Description:
 * This component shows three numbers about the whole student list in the Overview section.
 * Its only prop is students, the full list passed down from StudentPortal.
 * On every render it works out the total number of students, how many are on the honour
 * roll (an average of 80 or more) and how many are in grade 12, so the numbers update as
 * soon as a student is added or removed; none of them are stored in state.
 * The output is a row of three stat cards, one column on a phone and three on wider screens.
 */

// ---------- Imports ----------
import { Student } from "@/data/students";
import { palette } from "@/data/colorPalette";

// ---------- Props ----------
interface StatsPanelProps {
  students: Student[];
}

// ---------- Component ----------
const StatsPanel = ({ students }: StatsPanelProps) => {
  // Processing: work out the three numbers from the list on every render
  const totalStudents = students.length;
  const honourRoll = students.filter((student) => student.average >= 80).length;
  const gradeTwelve = students.filter((student) => student.grade === 12).length;

  // The three stats, so the cards can be drawn with one map
  const stats = [
    { label: "Total students", value: totalStudents },
    { label: "Honour roll", value: honourRoll },
    { label: "Grade 12", value: gradeTwelve },
  ];

  return (
    // Stat cards grid: one column on a phone, three on wider screens
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat) => (
        // One stat card
        <div
          key={stat.label}
          className={`rounded-lg border p-6 ${palette.card} ${palette.border}`}
        >
          <p className={`text-sm font-semibold ${palette.resultLabel}`}>{stat.label}</p>
          <p className={`text-3xl font-bold ${palette.resultValue}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

// ---------- Export ----------
export default StatsPanel;
