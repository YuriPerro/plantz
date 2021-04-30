import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Platform,
    Image
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import YuriProfile from '../assets/yuriPerro.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

let marginWithPlatform = Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight

export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Yuri</Text>
            </View>

            <Image source={YuriProfile} style={styles.img} />

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
        padding: 20
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
    }
});
