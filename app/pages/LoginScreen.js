import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../components/InputField';
import axios from 'axios';
import CustomButton from '../components/CustomButton';
import UserService from '../services/UserService';
import { useDispatch } from 'react-redux';
import { setUserId } from '../modules/UserReducer';

export default function Login({ navigation }) {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('asimkymk');
    const [password, setPassword] = useState('kanarya10.');
    const [error, setError] = useState(true)
    function username_handler(text) {
        setUsername(text)
    }
    function password_handler(text) {
        setPassword(text)
    }
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    const handleButtonPress = async () => {
        try {
            let userService = new UserService();
            await userService.login(username, password).then
                (result => {
                    if (result == false) {
                        setError(false)
                    }
                    else {
                        setError(true);
                        dispatch(setUserId(result.id));
                        navigation.navigate('Home', { data: result });
                    }
                })

        } catch (error) {
            setError(false)
        }
    };
    return (
       
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 0 }}>
                <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
                <Image
                    style={styles.loginImage}
                    //blurRadius={3}
                    //overlayColor={'rgba(0, 0, 255, .9)'}
                    source={require('./../../assets/images/login.jpg')}
                />
                <View style={styles.overlay} />
                <Text style={styles.headerText}>İşli Yorum</Text>
                </KeyboardAvoidingView>
                <View style={styles.container}>

                    <Text style={styles.welcomeText}>Giriş Yap</Text>

                    <InputField
                        onChangeText={text => username_handler(text)}
                        label={'Kullanıcı adın'}
                        //onChangeText={(username) => setUsername(username)}
                        value={username}
                        icon={
                            <Ionicons
                                name="person-outline"
                                size={20}
                                color="#666"
                                style={{ marginRight: 5, }}
                            />
                        }
                    />

                    <InputField
                        onChangeText={text => password_handler(text)}
                        value={password}
                        label={'Şifren'}
                        icon={
                            <Ionicons
                                name="ios-lock-closed-outline"
                                size={20}
                                color="#666"
                                style={{ marginRight: 5 }}
                            />
                        }
                        inputType="password"
                    />
                    {error == false ? <View style={styles.errorBackground}>
                        <Text style={styles.errorText}>Hatalı giriş. Lütfen bilgileri kontrol ederek tekrar deneyiniz</Text>
                    </View> : null}

                    <CustomButton text={"GİRİŞ"} onPress={handleButtonPress}></CustomButton>

                    <TouchableOpacity style={styles.registerBtn} onPress={() => {
                        navigation.navigate('Register');
                    }}>
                        <Text style={styles.registerText}>Hesabın mı yok? Kayıt Ol</Text>
                    </TouchableOpacity>
                </View>
               
            </View>
            
        
    )
}

const styles = StyleSheet.create({
    loginImage: {
        height: 375,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(69,85,117,0.8)',
    },
    headerText: {
        position: 'absolute',
        fontSize: 50,
        color: '#fff',
        fontFamily: 'Roboto-Bold',
        marginTop:150,
        marginLeft:175
    },
    container: {
        flex: 1,
        paddingTop: 40,
        marginTop: -30,
        width: '100%',
        alignSelf: 'flex-start',

        backgroundColor: '#fff',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        justifyContent: 'flex-start',
        alignItems: 'center'

    },
    welcomeText: {
        fontSize: 26,
        textAlign: 'center',
        marginBottom: 25,
        color: '#0644a3',
        fontFamily: 'Roboto-Bold'
    },
    inputView: {
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        width: "70%",
        height: 45,
        marginBottom: 20,
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginBtn: {
        width: "75%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        backgroundColor: "#a0bff5",
    },
    loginText: {
        color: '#0644a3',
        fontSize: 16,
        fontFamily: 'Roboto-Bold'
    },
    registerBtn: {
        marginTop: 10,
        marginRight: 50,
        alignSelf: 'flex-end',

    },
    registerText: {
        color: 'black',
        fontSize: 14,
        color: '#0644a3',
        fontFamily: 'Roboto-Regular'
    },
    errorBackground: {
        width: "75%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
        marginBottom: 10,
        backgroundColor: "#FAA0A0",
    },
    errorText: {
        color: '#4A0404',
        fontSize: 12,
        fontFamily: 'Roboto-Bold'
    },
});