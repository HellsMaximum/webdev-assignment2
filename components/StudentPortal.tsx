// StudentPortal.tsx
// Author: Caelan Abugan
// Date: October 27, 2026
// This is the main component of the portal and it's where all the student data lives.
// It doesn't take any props, it just loads the starting students from data/students.ts and keeps the list, search text, grade filter and sort option in state.
// When you remove a student, clear everyone, or add someone new, it builds a new array instead of changing the old one, and new students get an id nobody else has.
// Every time it renders it filters the list by name and grade, then sorts a copy of it, so the shown list is never stored as its own state.
// It shows the Overview, Students and Add a student sections and passes the data and the callback functions down to the other components.

"use client";

import { useState } from "react";
import { Student, students as initialStudents } from "@/data/students";
import { palette } from "@/data/colorPalette";
import StatsPanel from "@/components/StatsPanel";
import SearchBox from "@/components/SearchBox";
import GradeFilter, { GradeFilterValue } from "@/components/GradeFilter";
import SortControls, { SortOption } from "@/components/SortControls";
import StudentList from "@/components/StudentList";
import AddStudent from "@/components/AddStudent";

const StudentPortal = () => {
  // state: the student list, search text, grade filter and sort option
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [searchText, setSearchText] = useState("");
  const [gradeFilter, setGradeFilter] = useState<GradeFilterValue>("all");
  const [sortOption, setSortOption] = useState<SortOption>("lastName");
  const [previousStudents, setPreviousStudents] = useState<Student[] | null>(
    null,
  );

  // filter by name and grade, worked out on every render
  const filteredStudents = students.filter((student) => {
    const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
    const matchesSearch = fullName.includes(searchText.trim().toLowerCase());
    const matchesGrade = gradeFilter === "all" || student.grade === gradeFilter;
    return matchesSearch && matchesGrade;
  });

  // sort a copy of the filtered list, never the state array
  const visibleStudents = [...filteredStudents].sort((a, b) => {
    switch (sortOption) {
      case "lastName":
        return a.lastName.localeCompare(b.lastName);
      case "grade":
        return a.grade - b.grade;
      case "average":
        return a.average - b.average;
      case "averageDesc":
        return b.average - a.average;
    }
  });

  // remove one student and save the previous list for undo
  const handleRemove = (id: number) => {
    setPreviousStudents([...students]);
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  // remove every student and save the previous list for undo
  const handleClearAll = () => {
    if (students.length === 0) return;

    setPreviousStudents([...students]);
    setStudents([]);
  };

  // restore the previous student list
  const handleUndo = () => {
    if (previousStudents === null) return;

    setStudents([...previousStudents]);
    setPreviousStudents(null);
  };

  // add a student with a unique id (new array)
  const handleAdd = (newStudent: Omit<Student, "id">) => {
    setStudents((prev) => {
      const highestId = Math.max(
        0,
        ...initialStudents.map((student) => student.id),
        ...prev.map((student) => student.id),
      );

      return [...prev, { id: highestId + 1, ...newStudent }];
    });
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-8 space-y-12">
      {/* overview section, stats always use the full list */}
      <section id="overview" className="scroll-mt-20 space-y-4">
        <h2 className={`text-2xl font-bold ${palette.heading}`}>Overview</h2>
        <StatsPanel students={students} />
      </section>

      {/* students section */}
      <section id="students" className="scroll-mt-20 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className={`text-2xl font-bold ${palette.heading}`}>Students</h2>

          <div className="flex flex-wrap gap-2">
            {previousStudents !== null && (
              <button
                type="button"
                onClick={handleUndo}
                className={`rounded-lg px-4 py-2 font-semibold ${palette.badgeBg} ${palette.badgeText}`}
              >
                Undo
              </button>
            )}

            <button
              type="button"
              onClick={handleClearAll}
              disabled={students.length === 0}
              className={`rounded-lg px-4 py-2 font-semibold ${palette.primaryBg} ${palette.primaryText} ${palette.primaryHover} disabled:cursor-not-allowed disabled:opacity-50`}
            >
              Clear all
            </button>
          </div>
        </div>

        <SearchBox searchText={searchText} onSearchChange={setSearchText} />

        {/* grade buttons and sort dropdown side by side, stacking on a phone */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <GradeFilter
            gradeFilter={gradeFilter}
            onGradeChange={setGradeFilter}
          />
          <SortControls sortOption={sortOption} onSortChange={setSortOption} />
        </div>

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
