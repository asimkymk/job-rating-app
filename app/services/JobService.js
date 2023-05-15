import axios from "axios";
import BaseService from "./BaseService";

export default class JobService{
    getAll(){
        return axios.get(BaseService.getHomePath()+ '/job')
    }
    async getOne(id){
        try {
            const response = await axios.get(BaseService.getHomePath()+ '/job/'+ id,);
            return response.data.data;
        } catch (error) {
            return false
        }
    }
}