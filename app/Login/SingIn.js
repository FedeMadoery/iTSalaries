import React from "react";
import {View} from "react-native";
import {Button, Card, FormInput, FormLabel} from "react-native-elements";
import {onSignIn} from "../auth";

export default ({navigation}) => (
    <View style={{paddingVertical: 20}}>
        <Card>
            <FormLabel>Email</FormLabel>
            <FormInput underlineColorAndroid="grey"
                       inputStyle={{width: '100%', marginHorizontal: 10}}
                       placeholder="Email address..."/>

            <FormLabel>Password</FormLabel>
            <FormInput underlineColorAndroid="grey"
                       inputStyle={{width: '100%', marginHorizontal: 10}}
                       secureTextEntry placeholder="Password..."/>

            <Button
                buttonStyle={{marginTop: 20}}
                backgroundColor="#03A9F4"
                title="SIGN IN"
                onPress={() => {
                    onSignIn().then(() => navigation.navigate("SignedIn"));
                }}
            />

            <Button
                buttonStyle={{marginTop: 20}}
                backgroundColor="transparent"
                textStyle={{color: "#bcbec1"}}
                title="Sign Up"
                onPress={() => navigation.navigate("SignUp")}
            />
        </Card>
    </View>
);