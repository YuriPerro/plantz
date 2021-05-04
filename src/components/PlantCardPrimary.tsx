import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps {
    data: {
        name: string,
        photo: string
    }
}

export const PlantCardPrimary = ({ data, ...rest }: PlantProps) => {
    return (
        <RectButton
            {...rest}
            style={styles.container}
        >
            <SvgFromUri uri={data.photo} width={70} height={70} />
            <Text style={styles.text}>
                {data.name}
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.green_light,
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10
    },
    text: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 16
    }
})