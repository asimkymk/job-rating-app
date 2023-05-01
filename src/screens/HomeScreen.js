import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import FeedbackForm from '../components/FeedbackForm';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Feedback App!</Text>
      <Text style={styles.subtitle}>Leave your feedback below:</Text>
      <FeedbackForm />
      <Button title="View Performance Report" onPress={() => console.log("Navigate to Performance Report Screen")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HomeScreen;