export type Lesson = {
    title: string;
    slug: string;
    number: number;
    downloadUrl: string;
    sourceUrl?: string;
    text: string;
    videoId: number;
}

export type LessonWithPath = Lesson & {
    path: string;
}

export type Chapter = {
    title: string;
    slug: string;
    number: number;
    lessons: Lesson[] | LessonWithPath[];
}

export type Course = {
    title: string;
    chapters: Chapter[];
}