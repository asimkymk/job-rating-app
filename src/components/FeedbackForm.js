import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleFeedbackChange = (text) => {
    setFeedback(text);
  };

  const handleSubmit = () => {
    if (!name || !feedback) {
      Alert.alert('Error', 'Please fill out all fields.');
    } else {
      // Send feedback to backend or display success message
      Alert.alert('Success', 'Thanks for your feedback!');
      setName('');
      setFeedback('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        value={name}
        onChangeText={handleNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Your feedback"
        multiline={true}
        numberOfLines={4}
        value={feedback}
        onChangeText={handleFeedbackChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default FeedbackForm;