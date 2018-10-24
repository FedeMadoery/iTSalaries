import React from "react";
import { Platform, StatusBar } from "react-native";
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


import SignUp from "./Login/SingOut";
import SignIn from "./Login/SingIn";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";

const headerStyle = {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: "Sign Up",
            headerStyle
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: "Sign In",
            headerStyle
        }
    }
});

export const SignedIn = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions : {
                tabBarLabel: "Home",
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="home" size={30} color={tintColor} />
                )
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions : {
                tabBarLabel: "Profile",
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="user" size={30} color={tintColor} />
                )
            }
        }
    },
    {
        tabBarOptions: {
            style: {
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
            }
        }
    }
);

export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};