type Grade = 9 | 10 | 11 | 12;

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: Grade;
  average: number;
}

// starting data
export const students: Student[] = [
  {
    id: 1,
    firstName: "Hells",
    lastName: "Maximum",
    grade: 12,
    average: 91,
  },
  { id: 2, firstName: "Doug", lastName: "Dickens", grade: 12, average: 76 },
  { id: 3, firstName: "Caelan", lastName: "Abugan", grade: 11, average: 84 },
  { id: 4, firstName: "Niko", lastName: "Dewit", grade: 11, average: 68 },
  {
    id: 5,
    firstName: "Daniel",
    lastName: "Carpintero",
    grade: 10,
    average: 79,
  },
  { id: 6, firstName: "Jacob", lastName: "Okafor", grade: 10, average: 88 },
  { id: 7, firstName: "Mia", lastName: "Kowalski", grade: 9, average: 72 },
  { id: 8, firstName: "Ethan", lastName: "Nguyen", grade: 9, average: 65 },
  { id: 9, firstName: "Ava", lastName: "Campbell", grade: 12, average: 82 },
];
