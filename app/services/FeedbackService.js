import axios from "axios";
import BaseService from "./BaseService";

export default class FeedbackService{
    async addFeedback(job_id,employer_id,rate,comment,createDate){
        try {
            const response = await axios.post(BaseService.getHomePath()+ '/feedback/add', {
                "job_id": job_id,
                "employer_id": employer_id,
                "rate": rate,
                "comment": comment,
                "createDate":createDate
            });
            return response.data.data;
        } catch (error) {
            return false
        }
    }
}