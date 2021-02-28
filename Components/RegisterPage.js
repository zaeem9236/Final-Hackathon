import React from 'react';
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


const RegisterPage = ({navigation}) => {

    return (
        <>
            

            <View style={{ display: 'flex', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterStudent')}>
                    <Text style={styles.postJob}

                    >Register as Student</Text>
                </TouchableOpacity>
            </View>

            <View style={{ display: 'flex', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterEmployer')}>
                    <Text style={styles.postJob}

                    >Register as Employer</Text>
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
        color: 'rgb(128, 51, 0)',
        borderWidth: 2,
        borderColor: 'rgb(128, 51, 0)',
        borderRadius: 100,
        paddingRight: 40,
        paddingLeft: 40,
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

export default RegisterPage;