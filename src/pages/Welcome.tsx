import React, { useEffect, useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

var { width, height } = Dimensions.get("window");
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Entypo } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/core';

export function Welcome() {

    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <Text style={styles.title}>
                    Gerencie suas {`\n`} plantas de forma fácil
                </Text>

                <Image
                    style={styles.img}
                    source={wateringImg}
                    resizeMode="contain"
                />

                <Text style={styles.subTitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
            </Text>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    <Entypo
                        name="chevron-right"
                        style={styles.buttonIcon}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        fontFamily: fonts.heading,
        lineHeight: 34,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    subTitle: {
        textAlign: 'center',
        fontFamily: fonts.text,
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    img: {
        height: width * 0.7,
        width: width * 0.7,
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: colors.green,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 30
    },

})
