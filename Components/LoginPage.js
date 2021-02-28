
import React, { useState } from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

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
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const LoginPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <View style={{ display: 'flex', alignItems: 'center' }}>
                

                <TextInput style={{
                    height: 40, width: 200, borderBottomColor: 'pink', borderColor: "rgba(0,0,0,0)",
                    borderWidth: 1.2, marginTop: 50
                }}
                    onChangeText={(email) => { setEmail(email) }}
                    value={email}
                    placeholder="Email"
                />

                <TextInput style={{
                    height: 40, width: 200, borderBottomColor: 'pink', borderColor: "rgba(0,0,0,0)",
                    borderWidth: 1.2, marginTop: 10
                }}
                    onChangeText={(password) => { setPassword(password) }}
                    value={password}
                    placeholder="Password"
                />

            </View>

            <View style={{ display:'flex', alignItems:'center'}}>
                <Button
                    title="Login"
                    onPress={() => {navigation.navigate('MainPage');
                    LoginUser(email, password, navigation);
                }}
                />
            </View>
            
            <View style={{ display:'flex', alignItems:'center'}}>
                <Button
                    title="Register"
                    onPress={() => navigation.navigate('RegisterPage')}  
                />
            </View>

            {/* <Button
                title="Click to sign up"
                onPress={() => navigation.navigate('SignUpPage')}
            /> */}
        </>
    );
};

function LoginUser(email, password, navigation) {
    auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log('logged in ...');
            console.log(auth().currentUser)
            navigation.navigate('MainPage')

        })
        .catch((error) => { console.log(error) })

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
    }
});

export default LoginPage;