import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import JobService from '../services/JobService';
import JobDetailCard from '../components/JobDetailCard';
import FeedbackCard from '../components/FeedbackCard';

export default function JobDetail({ route }) {
  const { data } = route.params; // kullanıcı bilgileri

  const [job, setJob] = useState({});
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState(true);
  useEffect(() => {
    const jobService = new JobService();
    jobService.getOne(data).then(result => {
      if (result == false) {
        setError(false)
      }
      else {
        setError(true)
        setJob(result);
        setFeedbacks(result.feedbacks)
      }
    });
  }, []);
  const iconType = [
    "hammer-outline",
    "timer-outline",
    "checkmark-done-outline",
    "close-outline"
  ]
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 0, backgroundColor: '#fff', }}>
      <View
        style={styles.appBarBackground}
      //blurRadius={3}
      //overlayColor={'rgba(0, 0, 255, .9)'}
      //source={require('./../../assets/images/login.jpg')}

      >

        <Text style={styles.appBarTitle}>İş Detay</Text>

      </View>
      <View style={styles.container}>

        <JobDetailCard title={job.title}
          createDate={job.createDate}
          description={job.description}
          employee={job.name + ' ' + job.surname}
          status={job.status}
          key={job.id}
          icon={
            <Ionicons
              name={iconType[job.status]}
              size={25}
              color="#166ffe"
            />
          }
        >

        </JobDetailCard>


        <Text style={styles.sectionTitle}>Geri Dönüşler</Text>

        <ScrollView style={{ marginLeft: 15, marginTop: 0, marginHorizontal: 20, alignSelf: 'baseline', width: '100%' }}>
          {feedbacks.length == 0 ? <View style={styles.errorBackground}>
                        <Text style={styles.errorText}>Bu işe henüz geri dönüş eklenmemiş.</Text>
                    </View> 
          
          : null}
          {feedbacks.map(item => (
            <FeedbackCard
              key={item.feeedback_id}
              id={item.feeedback_id}
              comment={item.comment}
              createDate={item.createDate}
              author={item.name + ' ' + item.surname}
              rate={item.rate}
              icon={<Ionicons
                name='star-outline'
                size={16}
                color="#166ffe"
              />}
            ></FeedbackCard>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={styles.addButton}
        >
          <Ionicons
            name="add-outline"
            size={30}
            color="#d8d8d8"
          />
        </TouchableOpacity>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
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
    paddingLeft: 30
  },
  container: {
    flex: 1,
    paddingTop: 10,
    marginTop: -30,
    width: '100%',
    alignSelf: 'flex-start',

    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'flex-start',
    alignItems: 'center'

  },
  addButton:
  {
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  sectionTitle:{
    color: '#3381fe',
    fontSize:16,
    marginBottom:5,
    fontFamily: 'Roboto-Medium',
    alignSelf:'flex-start',
    marginLeft:20,

  },
  
  errorBackground: {
    width: "90%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: "lightgreen",
},
errorText: {
    color: 'green',
    fontSize: 12,
    fontFamily: 'Roboto-Bold'
},

});