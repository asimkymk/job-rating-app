const API_BASE_URL = 'https://api.example.com';

export const getFeedbackList = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/feedback`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postFeedback = async (feedbackData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
