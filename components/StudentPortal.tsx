// StudentPortal.tsx
// Authors: Caelan Abugan, Daniel Carpintero
// Date: October 27, 2026
// This is the main component of the portal and it's where all the student data lives.
// It loads the starting students from data/students.ts and keeps the list, search text,
// grade filter and sort option in state.
// When a student is removed, everyone is cleared, or a new student is added, it builds
// a new array instead of changing the old one, and new students receive unique IDs.
// Every time it renders, it filters the list by name and grade, then sorts a copy of it.
// It displays the Overview, Students and Add a student sections and passes data and
// callback functions down to the other components.
// Daniel updated the sorting options to remove grade sorting.

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
  // State: the student list, search text, grade filter and sort option.
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [searchText, setSearchText] = useState("");
  const [gradeFilter, setGradeFilter] = useState<GradeFilterValue>("all");
  const [sortOption, setSortOption] = useState<SortOption>("lastName");
  const [previousStudents, setPreviousStudents] = useState<Student[] | null>(
    null,
  );

  // Filter students by name and grade on every render.
  const filteredStudents = students.filter((student) => {
    const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
    const matchesSearch = fullName.includes(searchText.trim().toLowerCase());
    const matchesGrade = gradeFilter === "all" || student.grade === gradeFilter;

    return matchesSearch && matchesGrade;
  });

  // Sort a copy of the filtered list without changing the state array.
  const visibleStudents = [...filteredStudents].sort((a, b) => {
    switch (sortOption) {
      // Sort alphabetically by last name.
      case "lastName":
        return a.lastName.localeCompare(b.lastName);

      // Sort from the lowest average to the highest.
      case "average":
        return a.average - b.average;

      // Sort from the highest average to the lowest.
      case "averageDesc":
        return b.average - a.average;
    }
  });

  // Remove one student and save the previous list for Undo.
  const handleRemove = (id: number) => {
    setPreviousStudents([...students]);
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  // Remove every student and save the previous list for Undo.
  const handleClearAll = () => {
    if (students.length === 0) return;

    setPreviousStudents([...students]);
    setStudents([]);
  };

  // Restore the previous student list.
  const handleUndo = () => {
    if (previousStudents === null) return;

    setStudents([...previousStudents]);
    setPreviousStudents(null);
  };

  // Add a student with a unique ID.
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
      {/* Overview section: statistics use the full student list. */}
      <section id="overview" className="scroll-mt-28 space-y-4">
        <h2 className={`text-2xl font-bold ${palette.heading}`}>Overview</h2>
        <StatsPanel students={students} />
      </section>

      {/* Students section. */}
      <section id="students" className="scroll-mt-28 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className={`text-2xl font-bold ${palette.heading}`}>Students</h2>

          <div className="flex flex-wrap gap-2">
            {/* Show Undo when a previous list is available. */}
            {previousStudents !== null && (
              <button
                type="button"
                onClick={handleUndo}
                className={`rounded-lg px-4 py-2 font-semibold ${palette.badgeBg} ${palette.badgeText}`}
              >
                Undo
              </button>
            )}

            {/* Clear the complete student list. */}
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

        {/* Search students by name. */}
        <SearchBox searchText={searchText} onSearchChange={setSearchText} />

        {/* Grade filter and sort dropdown stay side by side. */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <GradeFilter
            gradeFilter={gradeFilter}
            onGradeChange={setGradeFilter}
          />

          <SortControls sortOption={sortOption} onSortChange={setSortOption} />
        </div>

        {/* Display the filtered and sorted students. */}
        <StudentList students={visibleStudents} onRemove={handleRemove} />
      </section>

      {/* Add a student section remains below the student list. */}
      <section id="add-student" className="scroll-mt-28 space-y-4">
        <h2 className={`text-2xl font-bold ${palette.heading}`}>
          Add a student
        </h2>
        <AddStudent onAdd={handleAdd} />
      </section>
    </main>
  );
};

export default StudentPortal;
