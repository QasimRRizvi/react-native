import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    buttonContainer: {
        backgroundColor: "#2980b6",
        paddingVertical: 15,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "700"
    },
    input: {
        backgroundColor: "rgba(225,225,225,0.2)",
        color: "#fff",
        height: 40,
        marginBottom: 10,
        padding: 10,
    }
});

class SingInForm extends Component {
    
    onButtonPress = () => {
        console.log('Button has been clicked successfully');
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType="email-address"
                    returnKeyType="next"
                    placeholder="Email or Mobile Number"
                    placeholderTextColor="rgba(225,225,225,0.7)"
                />
                <TextInput 
                    style={styles.input}
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    placeholder="Password"
                    placeholderTextColor="rgba(225,225,225,0.7)"
                    secureTextEntry
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.onButtonPress}
                >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SingInForm;