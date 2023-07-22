import $api from "../http";
import {AxiosResponse} from 'axios';
import { SubjectItem } from "../models/SubjectItem";


export default class SubjectService {
    static async getAll(): Promise<AxiosResponse<Array<SubjectItem>>> {
        return $api.get('/subject');
    }
    static async getOne(path: string): Promise<AxiosResponse<SubjectItem>> {
        return $api.get(`/subject/${path}`);
    }
    static async create(path: string, title: string, lessons: object): Promise<void> {       
        return $api.post(`/subject/create/${path}`, {title, lessons});
    }
    static async edit(path: string, title: string, lessons: object): Promise<void> {
        return $api.patch(`/subject/update/${path}`, {title, lessons});
    }
    static async updateProgress(path: string, progress: string): Promise<void> {
        return $api.patch(`/subject/update-progress/${path}`, {progress});
    }
    static async remove(path: string): Promise<void> {       
        return $api.delete(`/subject/delete/${path}`);
    }
}