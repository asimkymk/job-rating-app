const initialState = {
    userId: null,
  };
  
  export const setUserId = (userId) => ({
    type: 'SET_USER_ID',
    payload: userId,
  });
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_ID':
        return {
          ...state,
          userId: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;