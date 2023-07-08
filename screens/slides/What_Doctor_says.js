import React, { useState, useEffect } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Text, TouchableOpacity, View, ImageBackground, Dimensions, ScrollView, Alert } from 'react-native';
import Swiper from 'react-native-swiper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import styles from '../../styles/styles';

const What_Doctor_says = ({ language, onLanguageChange, navigation }) => {
  const [APIData, setAPIData] = useState([]);
  const [showLongDesc, setShowLongDesc] = useState(false);

  const { height, width } = Dimensions.get('window');

  useEffect(() => {
    APIgetData();
  }, []);
  const APIgetData = async () => {
    const response = await fetch('https://www.myjsons.com/v/50901314');
    const jsonData = await response.json();
    setAPIData(jsonData.items);
  };
  const toggleDescription = () => {
    setShowLongDesc(!showLongDesc);
  };

  const saveLanguage = (lang) => {
    onLanguageChange(lang);
  };

  return (
    <View style={{ height: height }}>
      {APIData.map((item, key) => {
        const doctorsData = item.en.whatDoctorsSay.doctors;

        return (
          <View key={key}>
            <ImageBackground source={{ uri: item.en.whatDoctorsSay.backimage }} style={{ width: width, height: height, flex: 1 }} />
            <View style={{ flexDirection: 'row', marginLeft: responsiveWidth(74), position: 'absolute', top: responsiveHeight(3), width: width, zIndex: 1 }}>
              <TouchableOpacity onPress={() => saveLanguage('english')}>
                <Text style={{ color: language === 'english' ? '#175ca4' : 'black', marginRight: responsiveWidth(0.6), fontSize: responsiveFontSize(3), fontFamily: 'Poppins-Regular' }}>EN</Text>
              </TouchableOpacity>
              <Text style={{ color: 'black', marginRight: responsiveWidth(0.6), fontSize: responsiveFontSize(3), fontFamily: 'Poppins-Regular' }}> | </Text>
              <TouchableOpacity onPress={() => saveLanguage('french')}>
                <Text style={{ color: language === 'french' ? '#175ca4' : 'black', fontSize: responsiveFontSize(3), fontFamily: 'Poppins-Regular' }}>FR</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Youtube_View}>
              <Swiper
                loop={false}
                showsButtons
                nextButton={<Text style={styles.Player_Button}>›</Text>}
                prevButton={<Text style={styles.Player_Button}>‹</Text>}
                activeDotStyle={styles.ActiveDotStyle}
                buttonWrapperStyle={{
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                  position: 'absolute',
                  top: responsiveHeight(-5),
                  left: 0,
                  flex: 1,
                  // paddingHorizontal: 10,
                  // paddingVertical: 10,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                key={doctorsData.length}
                pagingEnabled={false}
                dotColor="#175CA480"
                activeDotColor="#175CA4"
                nested={true}
                index={0}
              >
                {doctorsData.map((doctor, index) => {
                  return (
                    <View key={index} style={styles.YoutubePlayer_View}>
                      <YoutubePlayer
                        height={responsiveHeight(19.5)}
                        width={responsiveWidth(70)}
                        videoId={doctor.link}
                        play={false}
                        volume={50}
                        playbackRate={1}
                      />
                    </View>
                  );
                })}
              </Swiper>
            </View>
            <View style={styles.Doctor_Content_View}>
              {language == 'french' ? (
                <Text style={styles.Doctor_fr_title}>{item.fr.whatDoctorsSay.title}</Text>
              ) : (
                <Text style={styles.Doctor_en_title}>{item.en.whatDoctorsSay.title}</Text>
              )}

              {!showLongDesc ? (
                language == 'english' ? (
                  <Text
                    style={styles.Doctor_en_desc}
                  >
                    {item.en.whatDoctorsSay.shortdesc}
                  </Text>
                ) : (
                  <Text
                    style={styles.Doctor_fr_desc}
                  >
                    {item.fr.whatDoctorsSay.shortdesc}
                  </Text>
                )

              ) : (
                language == 'english' ? (
                  <View style={{ flex: 1 }}>
                    <ScrollView>
                      <Text
                        style={styles.Doctor_en_desc}
                      >
                        {item.en.whatDoctorsSay.longdesc}
                      </Text>
                    </ScrollView>
                  </View>
                ) : (
                  <View style={{ flex: 1 }}>
                    <ScrollView>
                      <Text
                        style={styles.Doctor_fr_desc}
                      >
                        {item.fr.whatDoctorsSay.longdesc}
                      </Text>
                    </ScrollView>
                  </View>
                )

              )}
              <View style={{ alignItems: 'center', marginBottom:responsiveHeight(1.5)}}>
                <MaterialIcons
                  name={showLongDesc ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  size={responsiveHeight(5)}
                  onPress={toggleDescription}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => { navigation.replace('Login') }}
              activeOpacity={1}
              style={styles.Login_Button}
            >
              <Text
                style={styles.Login_Button_Text}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('Enquiry')}
              style={styles.Enquiry_Button}
            >
              <Text
                style={styles.Enquiry_Button_Text}
              >
                ENQUIRY
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default What_Doctor_says;