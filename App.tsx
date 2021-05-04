import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import Routes from './src/routes';
import { PlantProps } from './src/libs/storage';

export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_400Regular, Jost_600SemiBold
  })

  useEffect(() => {
    const subscriptions = Notifications.addNotificationReceivedListener(
      async notifications => {
        const data = notifications.request.content.data.plant as PlantProps
        console.log(data)
      })
    return subscriptions.remove();
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
