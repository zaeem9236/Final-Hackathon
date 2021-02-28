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


const StudentPostCv = ({ naviagation }) => {
    let [posted, setPosted] = useState('false');

    let [data, setData] = useState({
        fullName: '',
        fathersName: '',
        contact: '',
        email: '',
        city: '',
        degreeTitle: '',
        briefDescription: ''
    });

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                database().ref('/' + user.uid + '/userDetail/alreadyPosted')
                    .once('value')
                    .then((data) => {
                        setPosted(data.val());
                    });
                // {changePage(navigation)}

            } else {

            }

        })


    }, [posted]);

    return (
        <>

            <Container>
                <Content>

                    <Item>
                        <Input placeholder="Name"
                            onChangeText={(e) => { setData({ ...data, fullName: e }) }}
                            value={data.fullName}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="Fathers Name"
                            onChangeText={(e) => { setData({ ...data, fathersName: e }) }}
                            value={data.fathersName}
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
                        <Input placeholder="City"
                            onChangeText={(e) => { setData({ ...data, city: e }) }}
                            value={data.city}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="DegreeTitle"
                            onChangeText={(e) => { setData({ ...data, degreeTitle: e }) }}
                            value={data.degreeTitle}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="Brief Desction"
                            onChangeText={(e) => { setData({ ...data, briefDescription: e }) }}
                            value={data.briefDescription}
                        />
                    </Item>


                </Content>
            </Container>

            <Button
                title="Apply"
                onPress={() => {
                    auth().onAuthStateChanged((user) => {
                        if (posted === 'false') {
                            const key = database().ref('/students').push().key
                            database().ref('/students/' + key).set(data)
                                .then((data) => {
                                    console.log('=======');
                                    console.log(user.uid);
                                    database().ref('/' + user.uid + '/userDetail/alreadyPosted').set('true');
                                    setPosted('true');
                                });
                        } else {
                            Alert.alert('you have already posted your CV')
                        }

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

export default StudentPostCv;