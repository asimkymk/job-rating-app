import AsyncStorage from '@react-native-async-storage/async-storage';

const FEEDBACK_STORAGE_KEY = 'feedback';

export const saveFeedback = async (feedback) => {
  try {
    const feedbackList = await getFeedbackList();
    const updatedList = [...feedbackList, feedback];
    const jsonValue = JSON.stringify(updatedList);
    await AsyncStorage.setItem(FEEDBACK_STORAGE_KEY, jsonValue);
  } catch (error) {
    console.error(error);
  }
};

export const getFeedbackList = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(FEEDBACK_STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
