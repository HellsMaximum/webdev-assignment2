type Grade = 9 | 10 | 11 | 12;

export interface Student {
    id: number;
    name: string;
    age: number;
    grade: Grade;
    average: number;
}