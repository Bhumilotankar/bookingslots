import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Main from './screens/Main'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import What_Doctor_says from './screens/slides/What_Doctor_says';
import What_Patients_says from './screens/slides/What_Patients_Say';
import How_Bynocs_Work from './screens/slides/work';
import Login from './screens/slides/Login';
import Enquiry from './screens/Enquiry';
import Home from './screens/homePage';

const stack = createNativeStackNavigator()


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

  const MainEntry = ({navigation})=>{
    return(<View style={{ flex: 1 }}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#175CA4" />
        </View>
      ) : (
        <Main navigation={navigation}/>
      )}
    </View>)
  }

  return (
    <NavigationContainer>
          <stack.Navigator>
            <stack.Group>
            <stack.Screen component={MainEntry} name="MainEntry" options={{
              headerShown:false
            }}/>
            <stack.Screen component={What_Doctor_says} name="What_Doctor_says" options={{
              headerShown:false
            }}/>
            <stack.Screen component={What_Patients_says} name="What_Patients_says" options={{
              headerShown:false
            }}/>
            <stack.Screen component={How_Bynocs_Work} name="How_Bynocs_Work" options={{
              headerShown:false
            }}/>
            <stack.Screen component={Login} name="Login" options={{
              headerShown:true
            }}/>
            <stack.Screen component={Enquiry} name="Enquiry" options={{
              headerShown:true
            }}/>
            <stack.Screen component={Home} name="Home" options={{
              headerShown:false
            }}/>
            </stack.Group>
          </stack.Navigator>
    </NavigationContainer>
  )

};

export default App;