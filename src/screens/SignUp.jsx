import React from "react";
import {
    View, Text, TextInput, StyleSheet,Alert,TouchableOpacity,
} from 'react-native';
import Button from "../components/Button";

export default function SignUpScreen() {
    return (
        <View style={styles.container}>

            <View style={styles.inner}>
                <Text style={styles.title}>Sign up</Text>
                <TextInput style={styles.input} value='Email Adress' />
                <TextInput style={styles.input} value='Password' />
                <Button label="Submit" onPress={()=>{Alert.alert('baka')}}/>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already Registered?</Text>
                    <TouchableOpacity>
                    <Text style={styles.footerLink}>Log In.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8'
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        fontSize: 16,
        height: 48,
        paddingHorizontal: 8,
        backgroundColor: '#ffffff',
        borderColor: '#dddddd',
        borderWidth: 1,
        marginBottom: 16,

    },

    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467fd3',
    },
    footer: {
        flexDirection: 'row',
    }

});