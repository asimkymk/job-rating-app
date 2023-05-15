import axios from "axios";
import BaseService from "./BaseService";

export default class UserService{
    async login(username,password){
        try {
            const response = await axios.post(BaseService.getHomePath()+ '/user/login', {
                "username": username,
                "password": password
            });
            return response.data.data;
        } catch (error) {
            return false
        }
    }

    async register(firstName, lastName, username, email,password ,birthYear){    
        try {
            const response = await axios.post(BaseService.getHomePath()+ '/user/signup', {
                "username": username,
                "email": email,
                "name": firstName,
                "surname": lastName,
                "password": password,
                "birthYear": birthYear
            })
            return response.data.data;
        } catch(error){
            return false
        }
    }   
}