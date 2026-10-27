// StudentPortal.tsx
// Author: Caelan Abugan
// Date: October 27, 2026
// This is the main component of the portal and it's where all the student data lives.
// It doesn't take any props, it just loads the starting students from data/students.ts and keeps the list and the search text in state.
// When you remove a student, clear everyone, or add someone new, it builds a new array instead of changing the old one, and new students get an id nobody else has.
// Every time it renders it filters the list by the search text, checking full names without caring about capital letters.
// It shows the Overview, Students and Add a student sections and passes the data and the callback functions down to the other components.

"use client";

import { useState } from "react";
import { Student, students as initialStudents } from "@/data/students";
import { palette } from "@/data/colorPalette";
import StatsPanel from "@/components/StatsPanel";
import SearchBox from "@/components/SearchBox";
import StudentList from "@/components/StudentList";
import AddStudent from "@/components/AddStudent";

const StudentPortal = () => {
  // state: the student list and the search text
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [searchText, setSearchText] = useState("");

  // derived search results, worked out on every render
  const visibleStudents = students.filter((student) =>
    `${student.firstName} ${student.lastName}`
      .toLowerCase()
      .includes(searchText.trim().toLowerCase()),
  );

  // remove one student by id (new array)
  const handleRemove = (id: number) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  // remove every student (new empty array)
  const handleClearAll = () => {
    setStudents([]);
  };

  // add a student with an id one higher than the highest current id (new array)
  const handleAdd = (newStudent: Omit<Student, "id">) => {
    setStudents((prev) => {
      const nextId =
        prev.length === 0
          ? 1
          : Math.max(...prev.map((student) => student.id)) + 1;
      return [...prev, { id: nextId, ...newStudent }];
    });
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-8 space-y-12">
      {/* overview section */}
      <section id="overview" className="scroll-mt-20 space-y-4">
        <h2 className={`text-2xl font-bold ${palette.heading}`}>Overview</h2>
        <StatsPanel students={students} />
      </section>

      {/*students section */}
      <section id="students" className="scroll-mt-20 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className={`text-2xl font-bold ${palette.heading}`}>Students</h2>
          <button
            onClick={handleClearAll}
            className={`px-4 py-2 rounded-lg font-semibold ${palette.primaryBg} ${palette.primaryText} ${palette.primaryHover}`}
          >
            Clear all
          </button>
        </div>
        <SearchBox searchText={searchText} onSearchChange={setSearchText} />
        <StudentList students={visibleStudents} onRemove={handleRemove} />
      </section>

      {/* add a student section */}
      <section id="add-student" className="scroll-mt-20 space-y-4">
        <h2 className={`text-2xl font-bold ${palette.heading}`}>
          Add a student
        </h2>
        <AddStudent onAdd={handleAdd} />
      </section>
    </main>
  );
};

export default StudentPortal;
