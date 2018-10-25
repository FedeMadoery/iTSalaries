import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";

export default ({ navigation }) => (
    <View style={{ paddingVertical: 20 }}>
        <Card>
            <FormLabel>Email</FormLabel>
            <FormInput underlineColorAndroid="grey"
                       inputStyle={{width: '100%', marginHorizontal: 10}}
                       placeholder="Email address..." />
            <FormLabel>Password</FormLabel>
            <FormInput underlineColorAndroid="grey"
                       inputStyle={{width: '100%', marginHorizontal: 10}}
                       secureTextEntry placeholder="Password..." />
            <FormLabel>Confirm Password</FormLabel>
            <FormInput underlineColorAndroid="grey"
                       inputStyle={{width: '100%', marginHorizontal: 10}}
                       secureTextEntry placeholder="Confirm Password..." />

            <Button
                buttonStyle={{ marginTop: 20 }}
                backgroundColor="#03A9F4"
                title="SIGN UP"
                onPress={() => {
                    onSignIn().then(() => navigation.navigate("SignedIn"));
                }}
            />
        </Card>
    </View>
);