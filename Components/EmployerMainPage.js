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
    TouchableOpacity
} from 'react-native';

import {
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Header} from 'native-base';



const EmployerMainPage = ({navigation}) => {
    let [posted, setPosted] = useState('false');

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                database().ref('/' + user.uid + '/userDetail/alreadyPosted')
                    .once('value')
                    .then((data) => {
                        setPosted(data.val());
                    }).catch((error)=>{
                        console.log(error.code)
                    });


                // console.log(user.uid);
            } else {
                // console.log('no user found')
            }
        });

    }, []);

    return (
        <>
        <Text  style={{
            color: 'black',
            fontSize: 15,
            marginLeft: 'auto',
            marginRight: 10,
            marginTop: 5
         }}
         onPress={()=>{
            auth()
            .signOut()
            .then(() => {navigation.navigate(' ');console.log('User signed out!')}).catch((error) => {
                console.log(error.code)
            })
         }}>  Logout</Text>
            
            <View style={{ display: 'flex', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('EmployerPostJob')}>
                    <Text style={styles.postJob}

                    >Post Job</Text>
                </TouchableOpacity>
            </View>
            
            
            <View style={{ display: 'flex', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('EmployerCvView')}>
                    <Text style={styles.postJob}

                    >View Cvs'</Text>
                </TouchableOpacity>
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
    },
    loginButton: {
        fontSize: 19,
        backgroundColor: 'transparent',
        color: 'green',
        borderWidth: 2,
        borderColor: 'rgb(30, 30, 47)',
        borderRadius: 100,
        paddingRight: 96,
        paddingLeft: 96,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 100
    },
    postJob: {
        fontSize: 19,
        backgroundColor: 'transparent',
        color: 'rgb(0, 153, 153)',
        borderWidth: 2,
        borderColor: 'rgb(0, 153, 153)',
        borderRadius: 100,
        paddingRight: 90,
        paddingLeft: 90,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 70
    },
    inputField: {
        height: 40,
        width: 200,
        borderBottomColor: 'rgb(30, 30, 47)',
        borderColor: 'transparent',
        borderWidth: 1.2,
        marginTop: 50
    }
});

export default EmployerMainPage;