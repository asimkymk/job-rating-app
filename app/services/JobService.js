import axios from "axios";

export default class JobService{
    getAll(){
        return axios.get("http://10.0.2.2:5000/job")
    }
}