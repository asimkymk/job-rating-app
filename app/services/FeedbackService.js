import axios from "axios";

export default class FeedbackService{
    async addFeedback(job_id,employer_id,rate,comment,createDate){
        try {
            const response = await axios.post('http://127.0.0.1:5000/feedback/add', {
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