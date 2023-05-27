import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function JobCard({
    label,
    icon,
    title,
    employee,
    onPress,
    average_rate
}) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cardIcon}>
                    {icon}
                </View >
                <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.employeeText}>{employee}</Text>
                </View>
                <View style={{ flexDirection: 'column', position:'absolute',right:0 }}>
                <Text style={styles.titleText}>Ort. Puan</Text>
                    <Text style={styles.rateText}>{average_rate}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#e6efff',
        width: '90%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    cardIcon: {
        backgroundColor: '#a0bff5',
        borderRadius: 5,
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 16,
        color: '#3381fe',
        fontFamily: 'Roboto-Bold'
    },
    employeeText: {
        color: '#5093fe',
        fontSize: 13,
        fontFamily: 'Roboto-Regular'
    },
    rateText: {
        color: '#5093fe',
        fontSize: 15,
        fontFamily: 'Roboto-Medium',
        position:"absolute",
        right:25,
        top:25
        
    }
});