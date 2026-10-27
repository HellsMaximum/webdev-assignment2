
# New Generation High School – Student Portal

A single-page student portal built with Next.js 16, React, TypeScript and Tailwind CSS for **Assignment: Exploring Front-End Development Components**. The school administrator can view students, search by name, filter and sort the student list, view student details, add or remove students, and see statistics about the school.

**Deployed website:** https://webdev-assignment2.vercel.app

**GitHub repository:** https://github.com/HellsMaximum/webdev-assignment2

## Group members and what each one built

| Member | Role | Built |
|---|---|---|
| Doug Dickens | Member A | `app/layout.tsx`, `app/page.tsx`, `Navbar`, `Footer`, `StatsPanel`, `data/colorPalette.ts`, and the overall look of the page |
| Niko Dewit | Member B | `data/students.ts` (Student interface and starting data), `StudentList`, and `StudentCard` |
| Caelan Abugan | Member C | `StudentPortal` (state management, Remove, Clear all, and search filtering), `SearchBox`, and `AddStudent` |
| Daniel Carpintero | Member D | `GradeFilter`, `SortControls`, school average statistic, and Undo functionality for supported removal and Clear all actions |

## How the app is put together

- `app/layout.tsx` places the `Navbar` above and the `Footer` below every page.
- `app/page.tsx` renders the `StudentPortal`.
- `StudentPortal` manages the student list, search text, selected grade filter, sorting option, and Undo functionality using React state.
- `StudentPortal` passes data and callback functions to its child components. Children request changes through callbacks such as `onRemove`, `onAdd`, and `onSearchChange`.
- `StudentList` displays the students, while `StudentCard` shows each student's information and allows the user to view additional details or remove a student.
- `SearchBox` lets users search by student name, and `GradeFilter` filters students by grade. The search and grade filter work together.
- `SortControls` lets users sort students by last name, average ascending, or average descending.
- `AddStudent` provides the form for adding students. New students receive unique IDs, and the list updates when a student is added or removed.
- `StatsPanel` displays four statistics: total students, graduating students, honour roll students, and school average.
- The school average is calculated from the individual averages of all students and updates when the student list changes.
- The Undo functionality allows users to reverse the most recent supported removal or Clear all action.
- The displayed student list, search results, grade filtering, sorting, and statistics update when the underlying student data changes.
- Shared Tailwind colour classes live in `data/colorPalette.ts` to maintain a consistent appearance across components in light and dark mode.

## Test checklist

| # | Test | Expected result | Result |
|---|---|---|---|
| 1 | Open the app | All students from the data file appear, and the three original statistics display the correct values. | Pass |
| 2 | Click Show details on one student twice | The student's average and Honour Roll status appear, the button changes to Hide details, no other student's details open, and the second click closes the details. | Pass |
| 3 | Remove a Grade 12 student | The student disappears, and the Students and Graduating statistics each decrease by one. | Pass |
| 4 | Search for a last name in capitals, such as `AHMED`, then clear the search | Search is case-insensitive, only matching students appear, and clearing the search restores the list. | Pass |
| 5 | Search for `zzz` | A no-students message appears, and the statistics remain unchanged. | Pass |
| 6 | Leave the first name empty, fill in the last name, and click Add student | The student is not added. | Pass |
| 7 | Fill in all four inputs and click Add student | The student appears, the statistics update, the name inputs clear, and the new student has grade 9 and an average of 70. | Pass |
| 8 | Click Clear all | The no-students message appears, and all three original statistics show zero. | Pass |
| 9 | Narrow the browser to phone width using DevTools | Student cards display in one column without horizontal scrolling. | Pass |
| 10 | Click each navbar link | The page jumps to the corresponding section. | Pass |

## Additional features

The portal also includes the following features beyond the original test checklist:

- A fourth statistic displaying the school average.
- Grade filtering that works together with the search field.
- Sorting by last name, average ascending, and average descending.
- Undo functionality for the most recent supported student removal or Clear all action.
- Consistent styling across light and dark modes.

## AI Usage Disclaimer

We used AI as a helper in the following parts:

- **Planning:** Suggesting extra features to make the assignment about 25% more work for our fourth member, which became the grade filter and sort controls.
- **Design:** Refining the colour palette used across the app so it looks more polished in light and dark mode.
- **Layout and debugging:** Fixing layout and formatting problems on the page, and explaining runtime errors with possible fixes.
- **Documentation:** Writing comments in the code and drafting this README.
- **Populating lists:** Populating the `students.ts` list with random student information to fill out the list.
