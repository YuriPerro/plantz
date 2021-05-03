import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { getBottomSpace } from 'react-native-iphone-x-helper';

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
        hour: string
    }
}

export const PlantCardSecondary = ({ data, ...rest }: PlantProps) => {
    return (
        <RectButton
            {...rest}
            style={styles.container}
        >
            <SvgFromUri uri={data.photo} width={50} height={50} />
            <Text style={styles.title}>
                {data.name}
            </Text>
            <View style={styles.details}>
                <Text style={styles.timeLable}>
                    Regar ás
                </Text>
                <Text style={styles.time}>
                    {data.hour}
                </Text>
            </View>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.shape,
        marginVertical: 5,
    },
    title: {
        flex: 1,
        marginLeft: 10,
        fontFamily: fonts.heading,
        fontSize: 17,
        color: colors.heading
    },
    details: {
        alignItems: 'flex-end',
        paddingRight: 10
    },
    timeLable: {
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.body_light
    },
    time: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: fonts.heading,
        color: colors.body_dark        
    }
})