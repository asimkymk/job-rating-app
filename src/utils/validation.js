export const validateName = (name) => {
    if (!name) {
      return 'Name field is required';
    }
    if (name.length < 2) {
      return 'Name should be at least 2 characters long';
    }
    return '';
  };
  
  export const validateEmail = (email) => {
    if (!email) {
      return 'Email field is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };
  
  export const validateMessage = (message) => {
    if (!message) {
      return 'Message field is required';
    }
    if (message.length < 10) {
      return 'Message should be at least 10 characters long';
    }
    return '';
  };
  