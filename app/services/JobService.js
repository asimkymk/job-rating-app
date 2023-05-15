import axios from "axios";

export default class JobService{
    getAll(){
        return axios.get("http://127.0.0.1:5000/job")
    }
    async getOne(id){
        try {
            const response = await axios.get('http://127.0.0.1:5000/job/'+ id,);
            return response.data.data;
        } catch (error) {
            return false
        }
    }
}