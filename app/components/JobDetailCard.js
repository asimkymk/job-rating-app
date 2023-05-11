import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function JobDetailCard({
    title,
    description,
    employee,
    status,
    createDate,
    icon,
}) {

    const statusTypes = [
        "Yapılacak",
        "Yapılıyor",
        "Yapıldı",
        "İptal Edildi"
    ]
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cardIcon}>
                    {icon}
                </View >
                <View style={{ flexDirection: 'column', marginLeft: 15, width: '82%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '100%' }}>
                        <Text style={styles.titleText}>{title}</Text>
                        <Text style={styles.dateText}>{createDate}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '85%' }}>
                        <MaterialIcons
                            name='description'
                            size={15}
                            color="#166ffe"
                        />
                        <Text style={styles.descriptionText}>{description}</Text>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '85%' }}>
                        <MaterialIcons
                            name='timeline'
                            size={15}
                            color="#166ffe"
                        />
                       <Text style={styles.descriptionText}>{statusTypes[status]}</Text>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '85%' }}>
                        <MaterialIcons
                            name='person'
                            size={15}
                            color="#166ffe"
                        />
                       <Text style={styles.descriptionText}>{employee}</Text>

                    </View>
                    
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        marginTop: 10,
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
    descriptionText: {
        color: '#5093fe',
        fontSize: 13,
        fontFamily: 'Roboto-Regular',
        maxWidth: '90%',
        marginLeft: 5
    },
    dateText: {
        textAlign: 'right',
        position: 'absolute',
        right: 0,
        fontSize: 12,
        color: '#3381fe',
        fontFamily: 'Roboto-Medium'
    }
});