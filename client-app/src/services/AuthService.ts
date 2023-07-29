import $api from "../http";
import {AxiosResponse} from 'axios';
import { AuthResponse } from "../models/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password});
    }
    static async registration(name: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {name, email, password});
    }
    static async logout(): Promise<void> {
        return $api.post('/logout');
    }
    static async sendLink(): Promise<void> {       
        return $api.post('/link');
    }
    static async updateProgress(_id: string, chapterPath: string, chapterProgress: string): Promise<void> {
        return $api.patch(`/subject/update-progress/${chapterPath}`, {_id, chapterProgress});
    }
    static async updatePartProgress(_id: string, chapterPath: string, partPath: string, partProgress: string): Promise<void> {
        return $api.patch(`/subject/update-progress/${chapterPath}/${partPath}`, {_id, partProgress});
    }
}