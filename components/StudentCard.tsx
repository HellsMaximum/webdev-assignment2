"use client";

/*
 * File: StudentCard.tsx
 * Author: Niko Dewit
 * Date: October 27, 2026
 * Description: This component shows one student as a card. It receives
 * the student object and an onRemove callback as props. It keeps one piece
 * of state, whether the details are open, so each card opens and closes
 * on its own. It outputs the student's full name and grade, a Show/Hide
 * details button (with the average and an Honour roll badge when the
 * average is 80 or more) and a Remove button that calls onRemove with
 * the student's id.
 */

import { useState } from "react";
import { Student } from "@/data/students";

// ===== Props =====
interface StudentCardProps {
  student: Student;
  onRemove: (id: number) => void;
}

const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  // ===== State: is this card's details section open? =====
  const [showDetails, setShowDetails] = useState(false);

  // ===== Derived value: honour roll is worked out, not stored =====
  const isHonourRoll = student.average >= 80;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      {/* Name and grade */}
      <h3 className="text-lg font-semibold text-gray-900">
        {student.firstName} {student.lastName}
      </h3>
      <p className="text-sm text-gray-600">Grade {student.grade}</p>

      {/* Details section (only when open) */}
      {showDetails && (
        <div className="mt-3 space-y-2">
          <p className="text-sm text-gray-800">Average: {student.average}%</p>
          {isHonourRoll && (
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
              Honour roll
            </span>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>
        <button
          onClick={() => onRemove(student.id)}
          className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
