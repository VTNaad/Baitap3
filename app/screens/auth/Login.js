import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from "react-native";
import { login } from "../../api/API";
import CommonStyles from "../../../assets/styles/CommonStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        //try {
            const data = await login(email, password);
            if (data.success) {
                setEmail("");
                setPassword("");
                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('user', JSON.stringify(data.user));
                console.log("Token stored:", localStorage.getItem('access_token'));
                navigation.navigate("Home", { name: data.user.name });
            } else {
                Alert.alert("Login failed", data.message);
            }
        // } catch (error) {
            // Alert.alert("Login failed", "An error occurred. Please try again.");
        // }
    };

    return (
        <View style={CommonStyles.container}>
            <Text style={CommonStyles.title}>Login Page</Text>

            <TextInput style={CommonStyles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput
                style={CommonStyles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity
                onPress={() => {
                    setEmail("");
                    setPassword("");
                    navigation.navigate("ForgotPassword");
                }}
            >
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={CommonStyles.button} onPress={handleLogin}>
                <Text style={CommonStyles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={CommonStyles.button}
                onPress={() => {
                    setEmail("");
                    setPassword("");
                    navigation.navigate("Register");
                }}
            >
                <Text style={CommonStyles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    forgotPasswordText: {
        color: "#007bff",
        marginBottom: 15,
    },
});

export default Login;
