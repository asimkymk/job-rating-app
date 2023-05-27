import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../components/InputField';
import JobCard from '../components/JobCard';
import JobList from '../modules/JobList';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Stat({ navigation, route }) {
    const [jobsData, setjobsData] = useState([]);

    const userId = useSelector((state) => state.userId);
    console.log(userId);

    return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 0, backgroundColor: '#fff', }}>
                <View
                    style={styles.appBarBackground}
                //blurRadius={3}
                //overlayColor={'rgba(0, 0, 255, .9)'}
                //source={require('./../../assets/images/login.jpg')}
                //<TouchableOpacity style={{alignSelf:"flex-end",right:25, bottom:24}}>
                //<Ionicons
                //name="stats-chart-outline"
                //size={20}
                //color="white"
        ///>
        
        //</TouchableOpacity>

                >

                    <Text style={styles.appBarTitle}>İstatistikler </Text>
                    
                    
                    </View>
                    


                <View style={styles.container}>
                    <JobList status={true}></JobList>

                </View>

            </View>

    )
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
        paddingTop: 40,
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
    }

});