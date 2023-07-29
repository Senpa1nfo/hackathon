import { makeAutoObservable } from "mobx";
import TestService from "../services/TestService";

export default class TestStore {

    isLoading = true;
    isAdding = false;

    constructor() {
        makeAutoObservable(this);
    }

    setLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }

    setAdding(isAdding: boolean) {
        if (!isAdding) {
            localStorage.removeItem('addtest');  
        } else {
            localStorage.setItem('addtest', 'true');        
        }
        this.isAdding = isAdding;
    }

    async getAll() {
        try {
            const response = await TestService.getAll()       
            return response.data;
        } catch (error) {
            console.log(error);           
        }
    }

    async getOne(path: string, part:string) {
        try {
            const response = await TestService.getOne(path, part);
            return response.data;
        } catch (error) {
            console.log(error);           
        }
    }

    async edit(path: string, part:string, questions: string) {
        try {
            await TestService.edit(path, part, questions);
        } catch (error) {
            console.log(error);           
        }
    }

    async create(path: string, part:string, questions: string) {
        try {
            await TestService.create(path, part, questions);
        } catch (error) {
            console.log(error);           
        }
    }

    async delete(path: string, part:string) {
        try {
            await TestService.remove(path, part);
        } catch (error) {
            console.log(error);           
        }
    }

}