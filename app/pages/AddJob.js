import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import JobService from '../services/JobService';
import JobDetailCard from '../components/JobDetailCard';
import FeedbackCard from '../components/FeedbackCard';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function AddJob({ route }) {

   
    const [error, setError] = useState(true);
    const [title, setTitle] = useState('2');
    const [description, setDescription] = useState('İş ekle');
    const [status, setStatus] = useState('');
    const userId = useSelector((state) => state.userId);
    const navigation = useNavigation();

    useEffect(() => {

    }, []);

    function Title_handler(text) {
        setTitle(text)
    }
    function Description_handler(text) {
        setDescription(text)
    }
    function Status_handler(text) {
        setStatus(text)
    }

    const iconType = [
        "hammer-outline",
        "timer-outline",
        "checkmark-done-outline",
        "close-outline"
    ]

    const handleButtonPress = async () => {
        try {
            let jobService = new JobService();
            await jobService.addJob(userId,title,description,status).then
                (result => {
                    if (result == false) {
                        setError(false)
                    }
                    else {
                        setError(true);
                        navigation.navigate('Home', { data: data });
                    }
                })

        } catch (error) {
            console.log(error)
            setError(false)
        }
    };
    
    return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 0, backgroundColor: '#fff', }}>
                <View
                    style={styles.appBarBackground}

                >

                    <Text style={styles.appBarTitle}>İş Ekle</Text>

                </View>
                <View style={styles.container} >

                    <InputField
                        onChangeText={text => Title_handler(text)}
                        label={'Başlık'}
                        //onChangeText={(Rate) => setRate(Rate)}
                        value={title}
                        icon={
                            <Ionicons
                                name="star-outline"
                                size={20}
                                color="#666"
                                style={{ marginRight: 5, }}
                            />
                        }
                       
                    />

                    <InputField
                        onChangeText={text => Description_handler(text)}
                        value={description}
                        label={'Açıklama'}
                        icon={
                            <Ionicons
                                name="pencil-outline"
                                size={20}
                                color="#666"
                                style={{ marginRight: 5 }}
                            />
                        }
                        
                    />
                    <InputField
                        onChangeText={text => Status_handler(text)}
                        value={status}
                        label={'durum'}
                        icon={
                            <Ionicons
                                name="pencil-outline"
                                size={20}
                                color="#666"
                                style={{ marginRight: 5 }}
                            />
                        }
                        
                    />

                    <CustomButton text={"İş ekle"} onPress={handleButtonPress}></CustomButton>
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
    },
    sectionTitle: {
        color: '#3381fe',
        fontSize: 16,
        marginBottom: 5,
        fontFamily: 'Roboto-Medium',
        alignSelf: 'flex-start',
        marginLeft: 20,

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