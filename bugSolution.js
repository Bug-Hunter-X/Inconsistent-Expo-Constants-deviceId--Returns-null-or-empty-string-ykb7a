// bugSolution.js
import * as React from 'react';
import { Text, View } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [deviceId, setDeviceId] = React.useState(null);

  React.useEffect(() => {
    const getDeviceId = async () => {
      try {
        let id = await AsyncStorage.getItem('deviceId');
        if (id !== null) {
          setDeviceId(id);
        } else {
          let id = Constants.deviceId;
          if (id) {
            await AsyncStorage.setItem('deviceId', id);
            setDeviceId(id);
          } else {
            console.error('Failed to get device ID.');
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    getDeviceId();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Device ID: {deviceId || 'Not available'}</Text>
    </View>
  );
}
