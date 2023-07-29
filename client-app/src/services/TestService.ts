import $api from "../http";
import {AxiosResponse} from 'axios';
import { TestItem } from "../models/TestItem";


export default class TestService {
    static async getAll(): Promise<AxiosResponse<Array<TestItem>>> {
        return $api.get('/test');
    }
    static async getOne(path: string, part: string): Promise<AxiosResponse<TestItem>> {
        return $api.get(`/test/${path}/${part}`);
    }
    static async create(path: string, part: string, questions: string): Promise<void> {       
        return $api.post(`/test/create/${path}/${part}`, {questions});
    }
    static async edit(path: string, part: string, questions: string): Promise<void> {
        return $api.patch(`/test/update/${path}/${part}`, {questions});
    }
    static async remove(path: string, part: string): Promise<void> {       
        return $api.delete(`/test/delete/${path}/${part}`);
    }
}