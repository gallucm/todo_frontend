
import { ICreateNote, IUpdateNote } from "../interfaces/Note";

const axios = require('axios');
axios.defaults.baseURL = process.env.REACT_APP_SERVER_BACKEND;

export const addNote = async (token: string, note: ICreateNote, user: string): Promise<any> => {
    const { title, content } = note;
    try{
        const response = await axios.post(`api/note`, {title, content, user}, {headers: {'x-token': token}});
        return response.data;
    } catch (err: any){
        throw err.response.data;
    }
}

export const markAsDone = async (token: string, note: string): Promise<any> => {
    try{
        const response = await axios.put(`api/note/done/${note}`, {}, {headers: {'x-token': token}});
        return response.data;
    } catch (err: any){
        throw err.response.data;
    }
}

export const updateNote = async (token: string, note: IUpdateNote): Promise<any> => {
    const { _id, title, content } = note;
    try{
        const response = await axios.put(`api/note/${_id}`, {title, content}, {headers: {'x-token': token}});
        return response.data;
    } catch (err: any){
        throw err.response.data;
    }
}

export const deleteNote = async (token: string, id: string): Promise<any> => {
    try{ 
        const response = await axios.delete(`api/note/${id}`, {headers: {'x-token': token}});
        return response.data;
    } catch (err: any){
        throw err.response.data;
    }
}

export const getNote = async (token: string, id: string): Promise<any> => {
    try{
        const response = await axios.get(`api/note/${id}`, {headers: {'x-token': token}});
        return response.data.note;
    } catch (err: any){
        throw err.response.data;
    }
}

export const getAllNotes = async (token: string, userId: string): Promise<any> => {
    try{
        const response = await axios.get(`api/note/all/${userId}`, {headers: {'x-token': token}});
        return response.data.notes;
    } catch (err: any){
        throw err.response.data;
    }
}