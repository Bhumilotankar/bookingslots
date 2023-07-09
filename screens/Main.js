import React, { useState, useEffect, useRef } from 'react'
import { View, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'
import What_Doctor_says from './slides/What_Doctor_says';
import AsyncStorage from '@react-native-async-storage/async-storage';
import What_Patients_Say from './slides/What_Patients_Say';
import BlogsAndResearch from './slides/blogsAndResearch';
import Works from './slides/work';
export default Main = ({navigation}) => {
  const swiper = useRef(null)
  const [enable, setEnable] = useState(true);
  const [language, setLanguage] = useState('english');

  const { height, width } = Dimensions.get('window');

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
        scrollEnabled={enable}
        pagingEnabled={true}
        index={0}
        touchReleaseOnEdges={true}
        loop={false}
        dotColor='#175CA480'
        activeDotColor='#175CA4'
        activeDotStyle={{ width: responsiveWidth(9), bottom: responsiveHeight(8.5) }}
        dotStyle={{bottom:responsiveHeight(8.5)}}
      >
        <View>
          <Works language={language} onLanguageChange={saveLanguage} navigation={navigation}/>
        </View>
        <View>
          <What_Doctor_says language={language} onLanguageChange={saveLanguage} navigation={navigation} />
        </View>
        <View>
          <What_Patients_Say language={language} onLanguageChange={saveLanguage} navigation={navigation} />
        </View>
        <View>
          <BlogsAndResearch language={language} onLanguageChange={saveLanguage} navigation={navigation}/>
        </View>
      </Swiper>
    </View>
  )
}
