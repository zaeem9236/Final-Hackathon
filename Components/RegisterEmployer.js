import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

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
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Container, Content, Item, Input } from 'native-base';


const RegisterEmployer = ({ navigation }) => {
    let [data, setData] = useState({
        companyName: '',
        email: '',
        password: '',
        Cpassword: '',
        alreadyPosted: 'false',
        userType: 'employer'
    });

    return (
        <>
            

            <Container>
                <Content>

                    <Item>
                        <Input placeholder="Company Name"
                            onChangeText={(e) => { setData({ ...data, companyName: e }) }}
                            value={data.companyName}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="Email"
                            onChangeText={(e) => { setData({ ...data, email: e }) }}
                            value={data.email}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="Password"
                            onChangeText={(e) => { setData({ ...data, password: e }) }}
                            value={data.city}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="confirm Password"
                            onChangeText={(e) => { setData({ ...data, Cpassword: e }) }}
                            value={data.degreeTitle}
                        />
                    </Item>

                </Content>

                {/* <Button
                title="Register as Employer"
                onPress={() => {
                    console.log(data);
                    RegisterUser(data.email, data.password, data, navigation);
                }}
            /> */}

                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => RegisterUser(data.email, data.password, data, navigation)}>
                        <Text style={styles.postJob}

                        >Register as Employer</Text>
                    </TouchableOpacity>
                </View>
            </Container>

        </>
    );
};


function RegisterUser(email, password, userDetail, navigation) {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then((data) => {
            console.log('User account created & signed in!');
            if (data.additionalUserInfo.isNewUser === true) {
                createDatabaseForUser(data.user.uid, userDetail);
                Alert.alert('user registered successfully')
                navigation.navigate('MainPage');
            }
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert('Email already exists', 'That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                Alert.alert('invalid email', 'That email address is invalid!');
            }

            console.log(error);
        });
}

function createDatabaseForUser(uid, userDetail) {
    database().ref('/' + uid).child('userDetail/').set({ userType: userDetail.userType, name: userDetail.name, alreadyPosted: userDetail.alreadyPosted })
    // console.log(uid)
}



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
        color: 'rgb(46, 184, 46)',
        borderWidth: 2,
        borderColor: 'rgb(46, 184, 46)',
        borderRadius: 10,
        paddingRight: 40,
        paddingLeft: 40,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 13
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

export default RegisterEmployer;