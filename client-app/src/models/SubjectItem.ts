export interface SubjectItem {
    path: string;
    grade: string
    title: string;
    progress: string;
    lessons: {
        [lesson: string]: string;
    };
}