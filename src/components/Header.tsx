import React from 'react';
import { 
    StyleSheet, 
    View,
    Text,
    StatusBar,
    Platform
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

let marginWithPlatform = Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight

export function Header(){
  return (
      <View style={styles.container}>
          <View>
              <Text>Olá,</Text>
              <Text>Yuri</Text>
          </View>
          <View>

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
        marginTop: marginWithPlatform
    }
});
