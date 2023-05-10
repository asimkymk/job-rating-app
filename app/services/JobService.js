import axios from "axios";

export default class JobService{
    getAll(){
        return axios.get("https://localhost/job")
    }
}