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
    async addJob( employee_id, title, description, status) {
        try {
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const year = today.getFullYear();

            const formattedDate = `${day}.${month}.${year}`;
            const response = await axios.post(BaseService.getHomePath() + '/job/add', {
                
                "employee_id": employee_id,
                "title": title,
                "description": description,
                "status": status,
                "createDate": formattedDate
            });
            return response.data.data;
        } catch (error) {
            return false
        }
    }
}