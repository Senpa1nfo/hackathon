import { makeAutoObservable } from "mobx";
import TestService from "../services/TestService";

export default class TestStore {



    constructor() {
        makeAutoObservable(this);
    }

    async getAll() {
        try {
            const response = await TestService.getAll()       
            return response.data;
        } catch (error) {
            console.log(error);           
        }
    }

    async getOne(path: string) {
        try {
            const response = await TestService.getOne(path);
            return response.data;
        } catch (error) {
            console.log(error);           
        }
    }

    async edit(path: string, title: string) {
        try {
            await TestService.edit(path, title);
        } catch (error) {
            console.log(error);           
        }
    }

    async create(path: string, title: string) {
        try {
            await TestService.create(path, title);
        } catch (error) {
            console.log(error);           
        }
    }

    async delete(path: string) {
        try {
            await TestService.remove(path);
        } catch (error) {
            console.log(error);           
        }
    }

}