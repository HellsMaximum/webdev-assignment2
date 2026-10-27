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
 * the student's id. Colours come from the shared palette file.
 */

import { useState } from "react";
import { Student } from "@/data/students";
import { palette } from "@/data/colorPalette";

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
    <div
      className={`rounded-lg border p-4 shadow-sm ${palette.card} ${palette.border}`}
    >
      {/* Name and grade */}
      <h3 className={`text-lg font-semibold ${palette.title}`}>
        {student.firstName} {student.lastName}
      </h3>
      <p className={`text-sm ${palette.subtitle}`}>Grade {student.grade}</p>

      {/* Details section (only when open) */}
      {showDetails && (
        <div className="mt-3 space-y-2">
          <p className={`text-sm ${palette.body}`}>
            Average: {student.average}%
          </p>
          {isHonourRoll && (
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${palette.badgeBg} ${palette.badgeText}`}
            >
              Honour roll
            </span>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className={`rounded px-3 py-1 text-sm ${palette.primaryBg} ${palette.primaryText} ${palette.primaryHover}`}
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>
        <button
          onClick={() => onRemove(student.id)}
          className={`rounded border px-3 py-1 text-sm ${palette.border} ${palette.secondaryText} ${palette.secondaryHover}`}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
