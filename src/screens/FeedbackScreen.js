import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const FeedbackScreen = () => {
  const [feedbackList, setFeedbackList] = useState([
    { id: '1', name: 'John Doe', feedback: 'This app is great!' },
    { id: '2', name: 'Jane Smith', feedback: 'I found a bug in the app.' },
  ]);

  const renderFeedbackItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemFeedback}>{item.feedback}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback List</Text>
      <FlatList
        data={feedbackList}
        renderItem={renderFeedbackItem}
        keyExtractor={(item) => item.id}
        style={styles.listContainer}
      />
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
  listContainer: {
    width: '80%',
  },
  itemContainer: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  itemName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemFeedback: {},
});

export default FeedbackScreen;
