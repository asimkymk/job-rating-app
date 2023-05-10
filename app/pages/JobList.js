import React, { useState, useEffect } from 'react'
import JobService from '../services/JobService';
import { ScrollView } from 'react-native/types';
import JobCard from '../components/JobCard';


const [jobs, setjobs] = useState([]);
    useEffect(() => {
        let jobService = new JobService();
        jobService.getAll().then
            (result => setjobs(result.data))
    }, [])

export default function JobList() {
    return (
        <ScrollView style={{ marginLeft: 15, marginTop: -10, marginHorizontal: 20, alignSelf: 'baseline', width: '100%' }}>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          icon={
            <Ionicons
              name="checkmark-done-outline"
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