import React, { useState, useEffect } from 'react'
import JobService from '../services/JobService';
import { ScrollView } from 'react-native';
import JobCard from '../components/JobCard';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const iconType = [
  "hammer-outline",
  "timer-outline",
  "checkmark-done-outline",
  "close-outline"
]
export default function JobList({ status }) {
  const navigation = useNavigation();
  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    let jobService = new JobService();
    jobService.getAll().then
      (result => setjobs(result.data.data))
  }, [])
  if (status == true) {
    return (
      <ScrollView style={{ marginLeft: 15, marginTop: -10, marginHorizontal: 20, alignSelf: 'baseline', width: '100%' }}>
        {jobs.map(job => (
          <JobCard
            key={job.id}
            
            icon={
              <Ionicons
                name={iconType[job.status]}
                size={25}
                color="#166ffe"
              />
            }
            title={job.title}
            employee={job.name + ' ' + job.surname}
            average_rate = {job.average_rate}
          ></JobCard>
        ))}
      </ScrollView>
    )
  }
  else {
    return (
      <ScrollView style={{ marginLeft: 15, marginTop: -10, marginHorizontal: 20, alignSelf: 'baseline', width: '100%' }}>
        {jobs.map(job => (
          <JobCard
            key={job.id}
            onPress={() => {
              navigation.navigate('JobDetail', { data: job.id });
            }}
            icon={
              <Ionicons
                name={iconType[job.status]}
                size={25}
                color="#166ffe"
              />
            }
            title={job.title}
            employee={job.name + ' ' + job.surname}
          ></JobCard>
        ))}
      </ScrollView>
    )
  }

}