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
            </Container>

            <Button
                title="Post"
                onPress={() => {
                        
                            const key = database().ref('/students').push().key
                            database().ref('/jobs/' + key).set(data)
                                .then((data) => {
                                    Alert.alert('job posted successfully')
                                })
                                
                }}

            />
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

export default EmployerPostJob;