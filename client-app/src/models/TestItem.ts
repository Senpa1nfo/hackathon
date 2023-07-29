interface questions {
    title: string,
    correct: string,
    answers: string[]
    _id: string
}

export interface TestItem {
    subject: string;
    part: string;
    questions: questions[]
}