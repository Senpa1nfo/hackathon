export interface PartProg {
    partPath: string;
    partProgress: string;
}

export interface ChapterProg {
    chapterPath: string;
    chapterProgress: string;
    parts: PartProg[];
}

export interface IUser {
    str: string;
    name: string;
    email: string;
    id: string;
    isActivated: boolean;
    admin: boolean;
    progress: ChapterProg[];
}