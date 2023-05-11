import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../components/InputField';
import JobCard from '../components/JobCard';
import JobList from '../modules/JobList';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import JobList from '../modules/JobList';
import FeedbackService from '../services/FeedbackService';

export default function JobDetail({ route }) {
  const { data } = route.params; // kullanıcı bilgileri

  const [jobs, setJobs] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const jobService = new JobService();
    jobService.getAll().then(result => {
      setJobs(result.data);
    });

    const feedbackService = new FeedbackService();
    feedbackService.getByJobId(data.jobId).then(result => {
      setFeedbacks(result.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.appBarBackground}>
        <Text style={styles.appBarTitle}>Ana Sayfa - {data.name} {data.surname}</Text>
      </View>

      <Text style={styles.sectionTitle}>İş Detayları:</Text>
      <View style={styles.jobDetails}>
        <Text style={styles.detailItem}>İş Başlığı: {data.title}</Text>
        <Text style={styles.detailItem}>Çalışan: {data.employee}</Text>
      </View>

      <Text style={styles.sectionTitle}>Feedbackler:</Text>
      <FlatList
        data={feedbacks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.feedbackItem}>
            <Text style={styles.feedbackRate}>{item.rate}</Text>
            <Text style={styles.feedbackComment}>{item.comment}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add-outline" size={30} color="#d8d8d8" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#fff',
  },
  appBarBackground: {
    backgroundColor: '#1a71fe',
    height: 115,
    width: '100%',
    alignSelf: 'baseline',
  },
  appBarTitle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    marginTop: 50,
    paddingLeft: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  jobDetails: {
    backgroundColor: '#f3f3f3',
    padding: 10,
    marginBottom: 20,
  },
  detailItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  feedbackItem: {
    backgroundColor: '#f3f3f3',
    padding: 10,
    marginBottom: 10,
    feedbackRate: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      feedbackComment: {
        fontSize: 14,
        marginBottom: 5,
      },
      addButton: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        position: 'absolute',
        bottom: 15,
        right: 20,
        height: 60,
        backgroundColor: '#196ffc',
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      },
    },});