/*
 * File: StudentList.tsx
 * Author: Niko Dewit
 * Date: October 27, 2026
 * Description: This component draws the list of students. It receives
 * the students to show and an onRemove callback as props. It checks
 * whether the array is empty; if so it outputs a message, otherwise it
 * uses map() to draw one StudentCard per student, keyed by id. The output
 * is either the no-students message or a responsive grid of cards that
 * is one column on phones and more columns on wider screens.
 */

import { Student } from "@/data/students";
import StudentCard from "@/components/StudentCard";

// ===== Props =====
interface StudentListProps {
  students: Student[];
  onRemove: (id: number) => void;
}

const StudentList = ({ students, onRemove }: StudentListProps) => {
  // ===== Empty case: show a message instead of cards =====
  if (students.length === 0) {
    return (
      <p className="rounded-lg bg-gray-100 p-6 text-center text-gray-600">
        No students to show.
      </p>
    );
  }

  // ===== Grid of cards: 1 column on phones, more on wider screens =====
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default StudentList;
