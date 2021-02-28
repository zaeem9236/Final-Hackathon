import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import StudentMainPage from './StudentMainPage'
import EmployerMainPage from './EmployerMainPage'

import Spinner from './NativeBase/Spinner';

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


const MainPage = ({navigation}) => {
    let [userType, setUserType] = useState('');

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                database().ref('/' + user.uid + '/userDetail/userType')
                    .once('value')
                    .then((data) => {
                        setUserType(data.val());
                    });
                    // {changePage(navigation)}


                console.log(user.uid);
            } else {
                console.log('no user found')
            }
        });

    }, []);

    if (userType === 'student') {
        return (
            <>
                <View>
                    <StudentMainPage navigation={navigation}/>
                </View>
            </>
        );
    }
    else if (userType === 'employer') {
        return (
            <>
                <View>
                    <Text>employer Detected </Text>
                    <EmployerMainPage navigation={navigation}/>
                </View>
            </>
        );
    }else {
        return (
            <>
                    <Spinner />        
            </>
        );
    }
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

export default MainPage;