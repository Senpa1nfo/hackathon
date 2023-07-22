import $api from "../http";
import {AxiosResponse} from 'axios';
import { TestItem } from "../models/TestItem";


export default class TestService {
    static async getAll(): Promise<AxiosResponse<Array<TestItem>>> {
        return $api.get('/test');
    }
    static async getOne(path: string): Promise<AxiosResponse<TestItem>> {
        return $api.get(`/test/${path}`);
    }
    static async create(path: string, title: string): Promise<void> {       
        return $api.post(`/test/create/${path}`, {title});
    }
    static async edit(path: string, title: string): Promise<void> {
        return $api.patch(`/test/update/${path}`, {title});
    }
    static async remove(path: string): Promise<void> {       
        return $api.delete(`/test/delete/${path}`);
    }
}