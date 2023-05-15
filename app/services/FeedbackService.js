import axios from "axios";
import BaseService from "./BaseService";

export default class FeedbackService {
    async addFeedback(job_id, employer_id, rate, comment, createDate) {
        try {
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const year = today.getFullYear();

            const formattedDate = `${day}.${month}.${year}`;
            console.log(formattedDate);
            const response = await axios.post(BaseService.getHomePath() + '/feedback/add', {
                "job_id": job_id,
                "employer_id": employer_id,
                "rate": rate,
                "comment": comment,
                "createDate": formattedDate
            });
            return response.data.data;
        } catch (error) {
            return false
        }
    }
}