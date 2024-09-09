import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from "react-native";
import { register } from "../../api/API";
import CommonStyles from "../../../assets/styles/CommonStyles";

const Register = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            const data = await register(name, email, password);

            if (data.success) {
                Alert.alert("Success", data.message);
                navigation.navigate("Login");
            } else {
                Alert.alert("Register failed", data.message);
            }
        } catch (error) {
            Alert.alert("Register failed", "An error occurred. Please try again.");
        }
    };

    return (
        <View style={CommonStyles.container}>
            <Text style={CommonStyles.title}>Register Page</Text>

            <TextInput style={CommonStyles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput style={CommonStyles.input} placeholder="Name" value={name} onChangeText={setName} />
            <TextInput
                style={CommonStyles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={CommonStyles.button} onPress={handleRegister}>
                <Text style={CommonStyles.buttonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={CommonStyles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={CommonStyles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Register;
