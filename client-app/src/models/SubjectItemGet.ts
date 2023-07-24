export interface ArticleItem {
    title: string;
    text: string;
    id: string;
    _id: string;
}

export interface ParagraphItem {
    title: string;
    articles: ArticleItem[];
    id: string;
    _id: string;
}

export interface SubjectItemGet {
    path: string;
    grade: string;
    title: string;
    progress: string;
    paragraphs: ParagraphItem[];
}