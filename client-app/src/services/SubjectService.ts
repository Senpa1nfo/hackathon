import $api from "../http";
import {AxiosResponse} from 'axios';
import { SubjectItem } from "../models/SubjectItem";
import { SubjectItemGet } from "../models/SubjectItemGet";


export default class SubjectService {
    static async getAll(): Promise<AxiosResponse<Array<SubjectItemGet>>> {
        return $api.get('/subject');
    }
    static async getOne(path: string): Promise<AxiosResponse<SubjectItemGet>> {
        return $api.get(`/subject/${path}`);
    }
    static async create(chapter: SubjectItem): Promise<void> {       
        return $api.post(`/subject/create/${chapter.path}`, {chapter});
    }
    static async edit(path: string, title: string, lessons: Array<any>): Promise<void> {
        return $api.patch(`/subject/update/${path}`, {title, lessons});
    }
    static async updateProgress(path: string, progress: string): Promise<void> {
        return $api.patch(`/subject/update-progress/${path}`, {progress});
    }
    static async remove(path: string): Promise<void> {       
        return $api.delete(`/subject/delete/${path}`);
    }
}