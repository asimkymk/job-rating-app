import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../components/InputField';
import JobCard from '../components/JobCard';
export default function Home() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 0, backgroundColor: '#fff', }}>
            <View
                style={styles.appBarBackground}
            //blurRadius={3}
            //overlayColor={'rgba(0, 0, 255, .9)'}
            //source={require('./../../assets/images/login.jpg')}

            >

                <Text style={styles.appBarTitle}>Ana Sayfa</Text></View>


            <View style={styles.container}>

                <ScrollView style={{ marginLeft: 15, marginTop: -10, marginHorizontal: 20, alignSelf: 'baseline', width: '100%' }}>
                    <JobCard
                        icon={
                            <Ionicons
                                name="checkmark-done-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 1'
                        employee='Asım Kaymak'
                    ></JobCard>


                    <JobCard
                        icon={
                            <Ionicons
                                name="close-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 2'
                        employee='Mustafa Emre Taşkın'
                    ></JobCard>

                    <JobCard
                        icon={
                            <Ionicons
                                name="timer-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 3'
                        employee='Yahya Boyalı'
                    ></JobCard>

                    <JobCard
                        icon={
                            <Ionicons
                                name="checkmark-done-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 4'
                        employee='Bünyamin Bilgehan Kılıçer'
                    ></JobCard>


                    <JobCard
                        icon={
                            <Ionicons
                                name="close-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 5'
                        employee='Furkan Alperen Kılınç'
                    ></JobCard>

                    <JobCard
                        icon={
                            <Ionicons
                                name="timer-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 6'
                        employee='Görkem Çanakçılı'
                    ></JobCard>
                    <JobCard
                        icon={
                            <Ionicons
                                name="checkmark-done-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 1'
                        employee='Asım Kaymak'
                    ></JobCard>


                    <JobCard
                        icon={
                            <Ionicons
                                name="close-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 2'
                        employee='Mustafa Emre Taşkın'
                    ></JobCard>

                    <JobCard
                        icon={
                            <Ionicons
                                name="timer-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 3'
                        employee='Yahya Boyalı'
                    ></JobCard>

                    <JobCard
                        icon={
                            <Ionicons
                                name="checkmark-done-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 4'
                        employee='Bünyamin Bilgehan Kılıçer'
                    ></JobCard>


                    <JobCard
                        icon={
                            <Ionicons
                                name="close-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 5'
                        employee='Furkan Alperen Kılınç'
                    ></JobCard>

                    <JobCard
                        icon={
                            <Ionicons
                                name="timer-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 6'
                        employee='Görkem Çanakçılı'
                    ></JobCard>
                    <JobCard
                        icon={
                            <Ionicons
                                name="checkmark-done-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 1'
                        employee='Asım Kaymak'
                    ></JobCard>


                    <JobCard
                        icon={
                            <Ionicons
                                name="close-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 2'
                        employee='Mustafa Emre Taşkın'
                    ></JobCard>

                    <JobCard
                        icon={
                            <Ionicons
                                name="timer-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 3'
                        employee='Yahya Boyalı'
                    ></JobCard>

                    <JobCard
                        icon={
                            <Ionicons
                                name="checkmark-done-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 4'
                        employee='Bünyamin Bilgehan Kılıçer'
                    ></JobCard>


                    <JobCard
                        icon={
                            <Ionicons
                                name="close-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 5'
                        employee='Furkan Alperen Kılınç'
                    ></JobCard>

                    <JobCard
                        icon={
                            <Ionicons
                                name="timer-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 6'
                        employee='Görkem Çanakçılı'
                    ></JobCard>
                    <JobCard
                        icon={
                            <Ionicons
                                name="checkmark-done-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 1'
                        employee='Asım Kaymak'
                    ></JobCard>


                    <JobCard
                        icon={
                            <Ionicons
                                name="close-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 2'
                        employee='Mustafa Emre Taşkın'
                    ></JobCard>

                    <JobCard
                        icon={
                            <Ionicons
                                name="timer-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 3'
                        employee='Yahya Boyalı'
                    ></JobCard>

                    <JobCard
                        icon={
                            <Ionicons
                                name="checkmark-done-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 4'
                        employee='Bünyamin Bilgehan Kılıçer'
                    ></JobCard>


                    <JobCard
                        icon={
                            <Ionicons
                                name="close-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 5'
                        employee='Furkan Alperen Kılınç'
                    ></JobCard>

                    <JobCard
                        icon={
                            <Ionicons
                                name="timer-outline"
                                size={25}
                                color="#166ffe"
                            />
                        }
                        title='İş Başlığı 6'
                        employee='Görkem Çanakçılı'
                    ></JobCard>

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