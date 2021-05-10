import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Platform,
    Image
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import AsyncStorage from '@react-native-async-storage/async-storage';

import YuriProfile from '../assets/yuriPerro.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import Avatar from './Avatar';


let marginWithPlatform = Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight

export function Header() {

    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadUserNameStorage(){
            const name = await AsyncStorage.getItem('@plantmanager:userName');
            setUserName(name || '');
        }

        loadUserNameStorage();
    }, [userName])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View> 

            <View style={styles.avatar}>
                <Avatar width={25} height={25} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: marginWithPlatform,
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    },
    avatar: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: colors.green,
        padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
