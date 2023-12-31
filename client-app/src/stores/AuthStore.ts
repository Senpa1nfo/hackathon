import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import axios from 'axios';
import { AuthResponse } from "../models/AuthResponse";
import { API_URL } from "../http";

export default class AuthStore {
    user = {} as IUser;
    isAuth = false;
    isLoading = true;
    logError = '';
    regError = '';
    resError = '';
    theme = 'light';

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLogError(error: any) {
        this.logError = error;
    }

    setRegError(error: any) {
        this.regError = error;
    }

    setResError(error: any) {
        this.resError = error;
    }

    toggleTheme() {
        if (this.theme === 'light') {
            this.theme = 'dark';         
        } else {
            this.theme = 'light';  
        }
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);  
            localStorage.setItem('token', response.data.accessToken);  
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error: any) {
            this.setLogError(error.response.data.message); 
            console.log(error); 
        }
    }

    async registration(name: string, email: string, password: string) {
        try {
            const response = await AuthService.registration(name, email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error: any) {
            this.setRegError(error.response.data.message);
            console.log(error);
        }
    }

    async logout() {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (error) {
            console.log(error); 
        }
    }

    async sendLink() {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const response = await AuthService.sendLink();
        } catch (error) {
            console.log(error);           
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});         
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            this.setLoading(false);
        } catch (error) {
            this.setLoading(false);
            console.log(error);
        }
    }

    async updateProgress(_id: string, chapterPath: string, chapterProgress: string) {
        try {
            await AuthService.updateProgress(_id, chapterPath, chapterProgress);
        } catch (error) {
            console.log(error);
        }
    }

    async updatePartProgress(_id: string, chapterPath: string, partPath: string, partProgress: string) {
        try {
            await AuthService.updatePartProgress(_id, chapterPath, partPath, partProgress);
        } catch (error) {
            console.log(error);
        }
    }
}