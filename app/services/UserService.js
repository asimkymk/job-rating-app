import axios from "axios";

export default class UserService{
    async login(username,password){
        try {
            const response = await axios.post('http://127.0.0.1:5000/user/login', {
                "username": username,
                "password": password
            });
            return response.data.data;
        } catch (error) {
            return false
        }
    }
}