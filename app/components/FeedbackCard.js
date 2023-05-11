import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function FeedbackCard({
    comment,
    createDate,
    id,
    author,
    rate,
    icon
}) {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cardIcon}>
                    <MaterialIcons
                        name='feedback'
                        size={25}
                        color="#166ffe"
                    />
                </View >
                <View style={{ flexDirection: 'column', marginLeft: 15, width: '82%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '100%' }}>
                        <Text style={styles.authorText}>{author}</Text>
                        <Text style={styles.dateText}>{createDate}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '100%' }}>
                       
                        <Text style={styles.commentText}>{comment}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '100%' }}>
                       {icon}
                        <Text style={styles.rateText}>{rate + ' puan'}</Text>
                    </View>
                    
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#e6efff',
        alignSelf: 'flex-start',
        maxWidth: '90%',
        minWidth: '90%',
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
        marginLeft: 0,
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
    authorText: {

        fontSize: 16,
        color: '#3381fe',
        fontFamily: 'Roboto-Bold'
    },
    commentText: {
        color: '#5093fe',
        maxWidth: '85%',
        fontSize: 13,
        fontFamily: 'Roboto-Regular'
    },
    dateText: {
        textAlign: 'right',
        position: 'absolute',
        right: 0,
        fontSize: 12,
        color: '#3381fe',
        fontFamily: 'Roboto-Medium'
    }
    ,
    rateText: {
        color: '#3381fe',
        maxWidth: '85%',
        marginLeft:2,
        fontSize: 13,
        fontFamily: 'Roboto-Medium'
    },
});