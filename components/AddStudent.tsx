// AddStudent.tsx
// Author: Caelan Abugan
// Date: October 27, 2026
// This component is the panel for adding a new student to the list.
// It takes one prop from StudentPortal, onAdd, which it calls with the new student's details.
// It keeps the first name, last name, grade and average in its own state, with grade starting at 9 and average at 70.
// When you click Add student it checks that both names are filled in, sends the student up, and then resets everything back to the start.
// What you see is four inputs and an Add student button styled to match the rest of the site.

"use client";

import { useState } from "react";
import { Student } from "@/data/students";
import { palette } from "@/data/colorPalette";

// the props this component needs
interface AddStudentProps {
  onAdd: (newStudent: Omit<Student, "id">) => void;
}

const AddStudent = ({ onAdd }: AddStudentProps) => {
  // state for each input, grade starts at 9 and average at 70
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState<Student["grade"]>(9);
  const [average, setAverage] = useState(70);

  // shared classes for every input
  const inputClasses = `w-full rounded-lg border px-4 py-2 outline-none ${palette.inputBg} ${palette.inputText} ${palette.border} ${palette.inputFocusBorder}`;

  // add the student if both names are filled in, then reset the inputs
  const handleAdd = () => {
    if (firstName.trim() === "" || lastName.trim() === "") {
      return;
    }

    onAdd({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      grade,
      average,
    });

    setFirstName("");
    setLastName("");
    setGrade(9);
    setAverage(70);
  };

  return (
    <div className={`rounded-lg border p-6 space-y-4 ${palette.card} ${palette.border}`}>
      {/* the four inputs, two columns on wider screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="firstName" className={`text-sm font-semibold ${palette.label}`}>
            First name
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClasses}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="lastName" className={`text-sm font-semibold ${palette.label}`}>
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputClasses}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="grade" className={`text-sm font-semibold ${palette.label}`}>
            Grade
          </label>
          <select
            id="grade"
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value) as Student["grade"])}
            className={inputClasses}
          >
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor="average" className={`text-sm font-semibold ${palette.label}`}>
            Average
          </label>
          <input
            id="average"
            type="number"
            min={0}
            max={100}
            value={average}
            onChange={(e) => setAverage(Number(e.target.value))}
            className={inputClasses}
          />
        </div>
      </div>

      {/* add button */}
      <button
        onClick={handleAdd}
        className={`px-4 py-2 rounded-lg font-semibold ${palette.primaryBg} ${palette.primaryText} ${palette.primaryHover}`}
      >
        Add student
      </button>
    </div>
  );
};

export default AddStudent;