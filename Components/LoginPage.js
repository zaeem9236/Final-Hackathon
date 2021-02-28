
import React, { useState } from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

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
    AppRegistry,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('zaeem123@live.com');
    const [password, setPassword] = useState('Qwertyu');

    return (
        <>
            <View style={{ display: 'flex', alignItems: 'center' }}>


                <TextInput style={styles.inputField}
                    onChangeText={(email) => { setEmail(email) }}
                    value={email}
                    placeholder="Email"
                />

                <TextInput style={styles.inputField}
                    onChangeText={(password) => { setPassword(password) }}
                    value={password}
                    placeholder="Password"
                />

            </View>

            <View style={{ display: 'flex', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => {
                    if (email !== '' && password !== '') {
                        LoginUser(email, password, navigation);
                    }
                }}>
                    <Text style={styles.loginButton}
                    > Login</Text>
                </TouchableOpacity>
            </View>

            <View style={{ display: 'flex', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')}>
                    <Text style={styles.registerButton}

                    >Register</Text>
                </TouchableOpacity>

            </View>

            {/* <View>
                <TouchableOpacity  onPress={()=>{console.log('f')}} >
                    <Text 
style={styles.registerButton}
                    >Register</Text>
                </TouchableOpacity>
                </View> */}

            {/* <OutlineButton /> */}

            {/* <Button
                title="Click to sign up"
                onPress={() => navigation.navigate('SignUpPage')}
            /> */}
        </>
    );
};

function LoginUser(email, password, navigation) {
    console.log(email);
    console.log(password);
    auth().signInWithEmailAndPassword(email, password).then((data) => {
        console.log(data)
        navigation.navigate('MainPage')

    })
        .catch((error) => { Alert.alert(error.code) })

    // console.log('-------------------------------------as')
    // console.log(auth().currentUser)
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
    registerButton: {
        fontSize: 19,
        backgroundColor: 'transparent',
        color: 'rgb(30, 30, 47)',
        borderWidth: 2,
        borderColor: 'rgb(30, 30, 47)',
        borderRadius: 100,
        paddingRight: 90,
        paddingLeft: 90,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 30
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

export default LoginPage;