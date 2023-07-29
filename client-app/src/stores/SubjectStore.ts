import { makeAutoObservable } from "mobx";
import SubjectService from "../services/SubjectService";
import { ArticleItem, ParagraphItem, SubjectItem } from "../models/SubjectItem";
import { SubjectItemGet } from "../models/SubjectItemGet";

export default class SubjectStore {

    subjects = [] as Array<SubjectItemGet>;
    articles = [] as Array<ArticleItem>;
    paragraphs = [] as Array<ParagraphItem>;
    chapter = {} as SubjectItem;
    isLoading = true;
    isChangeArticle = false;
    isChangeParagraph = false;

    constructor() {
        makeAutoObservable(this);
    }

    setSubjects(subcjects: Array<SubjectItemGet>) {
        this.subjects = subcjects
    }

    setLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }

    setArticles(articles: Array<ArticleItem>) {
        this.articles = articles;
    }

    setParagraphs(paragraphs: Array<ParagraphItem>) {
        this.paragraphs = paragraphs;
    }

    setChapter(chapter: SubjectItem) {
        this.chapter = chapter;
    }

    setIsChangeArticle() {
        this.isChangeArticle = !this.isChangeArticle;
    }
    setIsChangeParagraph() {
        this.isChangeParagraph = !this.isChangeParagraph;
    }

    async getAll() {
        try {
            const response = await SubjectService.getAll();   
            this.setSubjects(response.data);
            this.setLoading(false);
        } catch (error) {
            this.setLoading(false);
            console.log(error);           
        }
    }

    async getOne(path: string) {
        try {
            const response = await SubjectService.getOne(path);
            this.setLoading(false);
            return response;
        } catch (error) {
            this.setLoading(false);
            console.log(error);           
        }
    }

    async create(chapter: SubjectItem) {
        try {
            await SubjectService.create(chapter)
            .then(() => {
                this.getAll();
            });
        } catch (error) {
            console.log(error);           
        }
    }

    async edit(path: string, title: string, paragraphs: Array<SubjectItem>) {
        try {
            await SubjectService.edit(path, title, paragraphs);
        } catch (error) {
            console.log(error);           
        }
    }

    async delete(path: string) {
        try {
            await SubjectService.remove(path)
            .then(() => {
                this.getAll();
            });
        } catch (error) {
            console.log(error);           
        }
    }
}