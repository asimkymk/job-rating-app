import axios from "axios";

export default class FeedbackService {
    async addFeedback(job_id, employer_id, rate, comment) {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();

        const formattedDate = `${day}.${month}.${year}`;
        try {
<<<<<<< Updated upstream
            const response = await axios.post('http://127.0.0.1:5000/feedback/add', {
=======
            const response = await axios.post(BaseService.getHomePath() + '/feedback/add', {
>>>>>>> Stashed changes
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