import { Platform } from 'react-native';

export default class BaseService{
    static getHomePath() {
        if (Platform.OS === 'ios') {
            return "http://127.0.0.1:5000";
        } else {
            return "http://10.0.2.2:5000"
        }
    }
}



