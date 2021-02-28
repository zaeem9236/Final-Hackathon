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
            <View style={{ display:'flex', alignItems:'center'}}>
                <Button
                    title="Register as student"
                    onPress={() => navigation.navigate('RegisterStudent')}
                />
                
                <Button
                    title="Register as employer"
                    onPress={() => navigation.navigate('RegisterEmployer')}
                />
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

export default RegisterPage;