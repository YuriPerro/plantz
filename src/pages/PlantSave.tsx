import React, { useState } from 'react';
import {
    View,
    Text,
    Alert,
    StyleSheet,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { SvgFromUri } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'

import waterDrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { format, isBefore } from 'date-fns';
import { PlantProps, savePlant } from '../libs/storage';

interface Params {
    plant: PlantProps
}

export function PlantSave() {

    const route = useRoute();
    const navigation = useNavigation();
    const { plant } = route.params as Params;

    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

    function handleChangeTime(event: Event, dateTime: Date | undefined) {
        if (Platform.OS === 'android') {
            setShowDatePicker(oldState => !oldState);
        }

        /*if (dateTime && isBefore(dateTime, new Date())) {
            setSelectedDateTime(new Date());
            return Alert.alert(
                'Ops',
                'Escolha um horário no futuro! ⏰'
            )
        }*/

        if (dateTime)
            setSelectedDateTime(dateTime);
    }

    function handleOpenDateTimePickerForAndroid() {
        setShowDatePicker(oldState => !oldState);
    }

    async function handleSave() {
        try {
            const save = await savePlant({
                ...plant,
                dateTimeNotification: selectedDateTime
            });

            if (save) {

                navigation.navigate('Confirmation', {
                    title: 'Tudo certo!',
                    subTitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha' +
                        ' com muito cuidado.',
                    buttonTitle: 'Muito obrigado :)',
                    icon: 'hug',
                    nextScreen: 'MyPlants'
                });
            }
        } catch (error) {
            Alert.alert(
                'Ops',
                'Não foi possível salvar! 😥'
            )
        }
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            <View style={styles.container}>
                <View style={styles.plantInfo}>
                    <SvgFromUri
                        uri={plant.photo}
                        width={150}
                        height={150}
                    />
                    <Text style={styles.plantName}>
                        {plant.name}
                    </Text>
                    <Text style={styles.plantAbout}>
                        {plant.about}
                    </Text>
                </View>

                <View style={styles.controller}>
                    <View style={styles.tipContainer}>
                        <Image
                            source={waterDrop}
                            style={styles.tipImage}
                        />
                        <Text style={styles.tipText}>
                            {plant.water_tips}
                        </Text>
                    </View>
                    <Text style={styles.alertLable}>
                        Escolha o melhor horário para ser lembrado.
                    </Text>

                    {
                        showDatePicker && (
                            <DateTimePicker
                                value={selectedDateTime}
                                mode='time'
                                display='spinner'
                                style={{ position: 'relative', bottom: 20 }}
                                onChange={handleChangeTime}
                            />
                        )
                    }
                    {
                        Platform.OS === 'android' && (
                            <TouchableOpacity
                                style={styles.dateTimePickerButton}
                                onPress={handleOpenDateTimePickerForAndroid}
                            >
                                <Text style={styles.dateTimePickerText}>
                                    {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                                </Text>
                            </TouchableOpacity>
                        )
                    }

                    <View style={{ position: 'relative', bottom: 15 }}>
                    <Button title="Cadastrar planta" onPress={() => handleSave()} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    plantInfo: {
        paddingVertical: 50,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green_light
    },
    plantName: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 15
    },
    plantAbout: {
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
        marginTop: 10,
        marginBottom: 10
    },
    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: getBottomSpace() || 20
    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60
    },
    tipImage: {
        width: 56,
        height: 56
    },
    tipText: {
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        textAlign: 'justify'
    },
    alertLable: {
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 15,
        marginBottom: 5,
        position: 'relative',
        bottom: 20
    },
    dateTimePickerButton: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 40
    },
    dateTimePickerText: {
        color: colors.heading,
        fontSize: 24,
        fontFamily: fonts.text
    }
})