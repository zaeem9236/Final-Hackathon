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
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Container, Content, Item, Input } from 'native-base';


const RegisterStudent = ({navigation}) => {
    let [data, setData] = useState({
        email: '',
        password: '',
        Cpassword: '',
        userType: 'student'
    });

    return (
        <>
            <View>
                <Text>This is Register student page </Text>
            </View>

            <Container>
                <Content>

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
            </Container>

            <Button
                title="Register as student"
                onPress={() => { console.log(data);
                    RegisterUser(data.email, data.password, data, navigation);
                }}
            />

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

function createDatabaseForUser(uid, userDetail){
    database().ref('/'+uid).child('userDetail/userType').set(userDetail.userType)
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
    }
});

export default RegisterStudent;