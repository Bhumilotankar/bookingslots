import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Main from './screens/Main'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data here
      // Set isLoading to false once data is fetched
      // For demonstration purposes, using setTimeout to simulate data fetching delay
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#175CA4" />
        </View>
      ) : (
        <Main/>
      )}
    </View>
  );
};

export default App;