export interface ArticleItem {
    title: string;
    text: string;
    id: string;
}

export interface ParagraphItem {
    title: string;
    articles: ArticleItem[];
    id: string;
}

export interface SubjectItem {
    path: string;
    grade: string;
    title: string;
    progress: string;
    paragraphs: ParagraphItem[];
}