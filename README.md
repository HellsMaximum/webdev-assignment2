# New Generation High School – Student Portal

A single-page student portal built with Next.js 16, React, TypeScript and Tailwind CSS for **Assignment: Exploring Front-End Development Components**. The school administrator can see every student, search by name, see a few numbers about the school at a glance, and add or remove students.

**Deployed website:** _add Vercel link here_
**GitHub repository:** https://github.com/HellsMaximum/webdev-assignment2

## Group members and what each one built

| Member | Role | Built |
| --- | --- | --- |
| Doug Dickens | Member A | `app/layout.tsx`, `app/page.tsx`, `Navbar`, `Footer`, `StatsPanel`, `data/colorPalette.ts` and the overall look of the page |
| Niko Dewit | Member B | `data/students.ts` (Student interface and starting data), `StudentList` and `StudentCard` |
| Caelan Abugan | Member C | `StudentPortal` (state, Remove, Clear all and the search filter), `SearchBox` and `AddStudent` |
| Daniel Carpintero | Member D | `GradeFilter` and `SortControls` (filter by grade and sort the list) |

## How the app is put together

- `app/layout.tsx` places the `Navbar` above and the `Footer` below every page.
- `app/page.tsx` draws `StudentPortal`.
- `StudentPortal` holds the list of students and the search text in state, and passes data down to its children. Children ask for changes through callback props (`onRemove`, `onAdd`, `onSearchChange`).
- Every add or remove creates a new array, and every new student gets an id no other student has.
- The stats and the search results are worked out from the list on every render, not stored as state.
- Shared Tailwind colour classes live in `data/colorPalette.ts`, so every component has the same look in light and dark mode.

## AI Usage Disclaimer

We used AI as a helper in the following parts of this project:

- **Planning:** suggesting extra features to make the assignment about 25% more work for our fourth member, which became the grade filter and sort controls.
- **Design:** refining the colour palette used across the app so it looks more polished in light and dark mode.
- **Layout and debugging:** fixing layout and formatting problems on the page, and explaining runtime errors with possible fixes.
- **Documentation:** writing comments in the code and drafting this README.
- **Populating Lists:** populated the students.ts list with random student information to fill out the list