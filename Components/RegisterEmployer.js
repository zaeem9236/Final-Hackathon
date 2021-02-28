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


const RegisterEmployer = () => {
    let [data, setData] = useState({
        companyName: '',
        companyLocation: '',
        jobTitle: '',
        contact: '',
        email: '',
        companyWeb: '',
        briefDescription: ''
    });

    return (
        <>
            <View>
                <Text>This is Register RegisterEmployer page </Text>
            </View>

            <Container>
                <Content>
                    <Item>
                        <Input placeholder="Enter company name"
                            onChangeText={(e) => { setData({ ...data, companyName: e }) }}
                            value={data.companyName}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="Enter company location"
                            onChangeText={(e) => { setData({ ...data, companyLocation: e }) }}
                            value={data.companyLocation}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="job title"
                            onChangeText={(e) => { setData({ ...data, jobTitle: e }) }}
                            value={data.jobTitle}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="contact"
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
                            onChangeText={(e) => { setData({ ...data, companyWeb: e }) }}
                            value={data.companyWeb}
                        />
                    </Item>

                    <Item>
                        <Input placeholder="Description"
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

export default RegisterEmployer;