import { makeAutoObservable } from "mobx";
import SubjectService from "../services/SubjectService";
import { SubjectItem } from "../models/SubjectItem";

export default class SubjectStore {

    subjects = [] as Array<SubjectItem>

    constructor() {
        makeAutoObservable(this);
    }

    setSubjects(subcjects: Array<SubjectItem>) {
        this.subjects = subcjects
    }

    async getAll() {
        try {
            const response = await SubjectService.getAll()       
            this.setSubjects(response.data);
        } catch (error) {
            console.log(error);           
        }
    }

    async getOne(path: string) {
        try {
            const response = await SubjectService.getOne(path);
            return response.data;
        } catch (error) {
            console.log(error);           
        }
    }

    async create(path: string, title: string, lessons: object) {
        try {
            await SubjectService.create(path, title, lessons);
        } catch (error) {
            console.log(error);           
        }
    }

    async edit(path: string, title: string, lessons: object) {
        try {
            await SubjectService.edit(path, title, lessons);
        } catch (error) {
            console.log(error);           
        }
    }

    async updateProgress(path: string, progress: string) {
        try {
            await SubjectService.updateProgress(path, progress);
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