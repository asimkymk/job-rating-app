import React from 'react';
import { Text,  StyleSheet,  TouchableOpacity } from 'react-native'
export default function CustomButton({
    text,
    onPress
}) {
    return (
        <TouchableOpacity style={styles.btnBackground}
            onPress={onPress
            }
        >
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnBackground: {
        width: "75%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        backgroundColor: "#a0bff5",
    },
    btnText: {
        color: '#0644a3',
        fontSize: 16,
        fontFamily: 'Roboto-Bold'
    },
});