import React, { useState, useEffect, useRef } from 'react'
import { Text, View, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import What_Doctor_says from './slides/What_Doctor_says';
import Dummy from './slides/Dummy';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = {
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    height: '90%'
  },

  buttonText: {
    color: '#175CA4',
    fontSize: 50
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default App = () => {

  const swiper = useRef(null)
  const [enable, setEnable] = useState(true);
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    retrieveLanguage();
  }, []);

  const retrieveLanguage = async () => {
    try {
      const value = await AsyncStorage.getItem('language');
      if (value !== null) {
        setLanguage(value);
      }
    } catch (error) {
      console.log('Error retrieving language:', error);
    }
  };

  const saveLanguage = async (lang) => {
    try {
      await AsyncStorage.setItem('language', lang);
      setLanguage(lang);
    } catch (error) {
      console.log('Error saving language:', error);
    }
  };

  return (
    <View style={{flex:1}}>
      <Swiper
        ref={swiper}
        containerStyle={styles.wrapper}
        scrollEnabled={enable}
        pagingEnabled={true}
        index={0}
        touchReleaseOnEdges={true}
        // touchMoveStopPropogation
        loop={false}
        dotColor='#175CA480'
        activeDotColor='#175CA4'
        activeDotStyle={{ width: 30, bottom:70 }}
        dotStyle={{bottom:70}}
      >
        <View style={styles.slide3}>
          <Text style={styles.text}>Slider 1</Text>
        </View>
        <View>
          <What_Doctor_says language={language} onLanguageChange={saveLanguage} />
        </View>
        <View>
          <Dummy language={language} onLanguageChange={saveLanguage} />
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Slider 4</Text>
        </View>
      </Swiper>
    </View>
  )
}