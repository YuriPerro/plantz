import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { EnviromentButton } from '../components/EnviromentButton';
import api from '../services/api';

import { Header } from '../components/Header';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import { Load } from '../components/Load';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentProps {
    key: string,
    title: string
}

interface PlantsProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number;
        repeat_every: string;
    }
}

export function PlantSelect() {

    const [enviroments, setEnviroments] = useState<EnviromentProps[]>();
    const [plants, setPlants] = useState<PlantsProps[]>();
    const [loading, setLoading] = useState(true);
    const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>();
    const [enviromentSelected, setEnviromentSelected] = useState('all');

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loadedAll, setLoadedAll] = useState(false);

    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api
                .get('plants_environments?_sort=title&_order=asc');
            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos',
                },
                ...data
            ]);
        }

        fetchEnviroment();
    }, []);

    useEffect(() => {
        fetchPlants();
    }, []);

    async function fetchPlants() {
        const { data } = await api
            .get(`plants?_sort=name&_order=asc&_page${page}&_limit=8`);

        if (!data)
            return setLoading(false);

        if (page > 1) {
            setPlants(oldValue => [...oldValue, ...data]);
            setFilteredPlants(oldValue => [...oldValue, ...data]);
        } else {
            setPlants(data);
            setFilteredPlants(data);
        }

        setLoading(false);
        setLoadingMore(false);
    }

    function handleEnviromentSelected(enviroment: string) {
        setEnviromentSelected(enviroment);

        if (enviroment === 'all')
            return setFilteredPlants(plants);

        const filtered = plants?.filter(plant =>
            plant.environments.includes(enviroment)
        )

        setFilteredPlants(filtered);
    }

    function handleFetchMore(distance: number) {
        if (distance < 1)
            return;

        console.log(distance)

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fetchPlants();
    }

    if (loading)
        return <Load />
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
                <Text style={styles.title}>
                    Em qual ambiente
                </Text>
                <Text style={styles.subtitle}>
                    você quer colocar sua planta?
                </Text>
            </View>

            <View>
                <FlatList
                    data={enviroments}
                    renderItem={({ item }) => (
                        <EnviromentButton
                            active={item.key === enviromentSelected ? true : false}
                            onPress={() => handleEnviromentSelected(item.key)}
                            title={item.title} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}
                />
            </View>

            <View style={styles.plants}>
                <FlatList
                    data={filteredPlants}
                    renderItem={({ item }) => (
                        <PlantCardPrimary data={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    contentContainerStyle={styles.contentContainerStyle}
                    onEndReachedThreshold={0.3}
                    onEndReached={({ distanceFromEnd }) =>
                        handleFetchMore(distanceFromEnd)
                    }
                    ListFooterComponent={
                        loadingMore ?
                            <ActivityIndicator color={colors.green} />
                            :
                            <></>
                    }
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 30
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15,
    },
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading
    },
    enviromentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 25,
        marginVertical: 32
    },
    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    },
    contentContainerStyle: {

    }
});