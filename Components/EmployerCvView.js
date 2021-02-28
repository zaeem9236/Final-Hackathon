import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TextInput,
    Alert,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const EmployerCvView = ({navigation}) => {
    let [posted, setPosted] = useState('false');

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                database().ref('/' + user.uid + '/userDetail/alreadyPosted')
                    .once('value')
                    .then((data) => {
                        setPosted(data.val());
                    });


                // console.log(user.uid);
            } else {
                // console.log('no user found')
            }
        });

    }, []);

    return (
        <>
            <View>
                <Text>Employer Cv view page</Text>
            </View>
        </>
    );


};




const styles = StyleSheet.create({
    container1: {
        // backgroundColor: 'purple',
        paddingTop: 20,
        paddingBottom: 20,
        borderWidth: 2,
        borderColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default EmployerCvView;