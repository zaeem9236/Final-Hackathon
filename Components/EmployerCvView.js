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


const EmployerCvView = ({ navigation }) => {
    let [jobs, setJobs] = useState({});

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                database()
                    .ref('/students/')
                    .on('value', data => {
                        // console.log('User data: ', snapshot.val());
                        setJobs(data.val())
                    });


                // console.log(user.uid);
            } else {
                console.log('no user found')
            }
        });

    }, []);

    let ObjKeys = Object.keys(jobs);
    return (
        <>
            {/* <Button title="jobs print" onPress={() => {
                console.log('== == == == == ==')
                console.log(ObjKeys)
            }} /> */}

            <ScrollView>
            {ObjKeys.reverse().map(function (ObjKey, index) {
                return (
                    <Text key={index}>
                        <Text>{`Full Name: ${jobs[ObjKey].fullName}\r\n`}</Text>
                        <Text>{`Fathers Name: ${jobs[ObjKey].FathersName}\r\n`}</Text>
                        <Text>{`Degree title: ${jobs[ObjKey].degreeTitle}\r\n`}</Text>
                        <Text>{`Contact: ${jobs[ObjKey].contact}\r\n`}</Text>
                        <Text>{`Email: ${jobs[ObjKey].email}\r\n`}</Text>
                        <Text>{`City: ${jobs[ObjKey].city}\r\n`}</Text>
                        <Text>{`Description: ${jobs[ObjKey].briefDescription}\r\n`}</Text>
                        <Text>{`--------------------------------------------------\r\n`}</Text>
                    </Text>

            )})
                }
            </ScrollView>

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