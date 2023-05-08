import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../components/InputField';
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={{ flex:1,justifyContent: 'center', alignItems: 'center', marginTop: 0 }}>
            <Image
                style={styles.loginImage}
                //blurRadius={3}
                //overlayColor={'rgba(0, 0, 255, .9)'}
                source={require('./../../assets/images/login.jpg')}
            />
            <View style={styles.overlay} />
            <Text style={styles.headerText}>İşli Yorum</Text>

            <View style={styles.container}>

                <Text style={styles.welcomeText}>Giriş Yap</Text>

                <InputField
                    label={'Kullanıcı adın'}
                    //onChangeText={(username) => setUsername(username)}

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

                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>GİRİŞ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerBtn}>
                    <Text style={styles.registerText}>Hesabın mı yok? Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    loginImage: {
        height: 400,
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
        paddingBottom: 450
    },
    container: {
        flex:1,
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
        fontFamily:'Roboto-Bold'
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
        fontFamily:'Roboto-Bold'
    },
    registerBtn:{
        marginTop:10,
        marginRight:50,
        alignSelf:'flex-end',
        
    },
    registerText:{
        color: 'black',
        fontSize: 14,
        color: '#0644a3',
        fontFamily:'Roboto-Medium'
    }
});