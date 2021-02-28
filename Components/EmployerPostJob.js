import React, { useState, useEffect } from 'react';
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


const EmployerPostJob = ({ naviagation }) => {
    let [posted, setPosted] = useState('false');

    let [data, setData] = useState({
        companyName: '',
        companyLocation: '',
        jobTitle: '',
        contact: '',
        email: '',
        website: '',
        briefDescription: ''
    });

    useEffect(() => {



    }, []);

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
                        <Input placeholder="Company Location"
                            onChangeText={(e) => { setData({ ...data, companyLocation: e }) }}
                            value={data.companyLocation}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="job Title"
                            onChangeText={(e) => { setData({ ...data, jobTitle: e }) }}
                            value={data.jobTitle}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="Contact"
                            onChangeText={(e) => { setData({ ...data, contact: e }) }}
                            value={data.contact}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="Email"
                            onChangeText={(e) => { setData({ ...data, email: e }) }}
                            value={data.email}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="Website"
                            onChangeText={(e) => { setData({ ...data, website: e }) }}
                            value={data.website}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="Brief Description"
                            onChangeText={(e) => { setData({ ...data, briefDescription: e }) }}
                            value={data.briefDescription}
                        />
                    </Item>


                </Content>

                {/* <Button
                title="Post"
                onPress={() => {
                    
                    const key = database().ref('/students').push().key
                    database().ref('/jobs/' + key).set(data)
                        .then((data) => {
                            Alert.alert('job posted successfully')
                        })

                }}
                
            /> */}

                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        const key = database().ref('/students').push().key
                        database().ref('/jobs/' + key).set(data)
                            .then((data) => {
                                Alert.alert('job posted successfully')
                            })
                    }}>
                        <Text style={styles.postJob}

                        >Post</Text>
                    </TouchableOpacity>
                </View>
            </Container>
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
        color: 'rgb(46, 184, 46)',
        borderWidth: 2,
        borderColor: 'rgb(46, 184, 46)',
        borderRadius: 10,
        paddingRight: 90,
        paddingLeft: 90,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10
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

export default EmployerPostJob;