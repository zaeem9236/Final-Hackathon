import React, { useState } from 'react';
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


const RegisterStudent = () => {
    let [data, setData] = useState({
        fullName: '',
        fathersName: '',
        contact: '',
        email: '',
        city: '',
        degreeTitle: '',
        briefDescription: ''
    });

    return (
        <>
            <View>
                <Text>This is Register student page </Text>
            </View>

            <Container>
                <Content>
                    <Item>
                        <Input placeholder="Enter Full name"
                            onChangeText={(e) => { setData({ ...data, fullName: e }) }}
                            value={data.fullName}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="Enter Father name"
                            onChangeText={(e) => { setData({ ...data, fathersName: e }) }}
                            value={data.fathersName}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="Contact number"
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
                        <Input placeholder="Degree title"
                            onChangeText={(e) => { setData({ ...data, degreeTitle: e }) }}
                            value={data.degreeTitle}
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
                title="show data"
                onPress={() => { console.log(data) }}
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

export default RegisterStudent;