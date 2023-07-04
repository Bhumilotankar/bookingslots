import React, { useState, useEffect } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Text, TouchableOpacity, View, ImageBackground, Dimensions, ScrollView, Alert } from 'react-native';
import Swiper from 'react-native-swiper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import slide2_style from '../../styles/slide2';
import AsyncStorage from "@react-native-async-storage/async-storage";

const What_Doctor_says = ({ language, onLanguageChange }) => {
  const [enable, setEnable] = useState(true);
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
            <View style={slide2_style.language_view}>
              <TouchableOpacity onPress={() => saveLanguage('english')}>
                <Text style={slide2_style.language_text}>EN</Text>
              </TouchableOpacity>
              <Text style={slide2_style.language_bar}> | </Text>
              <TouchableOpacity onPress={() => saveLanguage('french')}>
                <Text style={slide2_style.language_text}>FR</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 200, top: 50 }}>
              <Swiper
                loop={false}
                showsButtons
                nextButton={<Text style={slide2_style.buttonText}>›</Text>}
                prevButton={<Text style={slide2_style.buttonText}>‹</Text>}
                activeDotStyle={{ width: 30 }}
                buttonWrapperStyle={{
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                  position: 'absolute',
                  top: -30,
                  left: 0,
                  flex: 1,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
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
                    <View key={index} style={slide2_style.Youtube}>
                      <YoutubePlayer
                        height={140}
                        width={250}
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
            <View style={slide2_style.Content_view}>
              {language=='french' ? (
                <Text style={{
                  fontSize: 22,
                  fontFamily: 'Poppins_bold',
                  color: '#175ca4',
                  fontWeight: 'bold',
                  lineHeight: 50,
                  alignSelf: 'center'
                }}>{item.fr.whatDoctorsSay.title}</Text>
              ) : (
                <Text style={slide2_style.Content_title}>{item.en.whatDoctorsSay.title}</Text>
              )}

              {!showLongDesc ? (
                language=='english' ? (
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 15,
                      marginTop: 10,
                      fontFamily: 'times new roman',
                      color: 'black',
                      lineHeight: 25,
                    }}
                  >
                    {item.en.whatDoctorsSay.shortdesc}
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 15,
                      marginTop: 10,
                      fontFamily: 'times new roman',
                      color: 'black',
                      lineHeight: 22,
                    }}
                  >
                    {item.fr.whatDoctorsSay.shortdesc}
                  </Text>
                )

              ) : (
                language=='english' ? (
                  <View style={{ flex: 1 }}>
                    <ScrollView
                      style={{
                        marginLeft: 15,
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: 'times new roman',
                          color: 'black',
                          lineHeight: 25,
                        }}
                      >
                        {item.en.whatDoctorsSay.longdesc}
                      </Text>
                    </ScrollView>
                  </View>
                ) : (
                  <View style={{ flex: 1 }}>
                    <ScrollView
                      style={{
                        marginLeft: 15,
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: 'times new roman',
                          color: 'black',
                          lineHeight: 22,
                        }}
                      >
                        {item.fr.whatDoctorsSay.longdesc}
                      </Text>
                    </ScrollView>
                  </View>
                )

              )}
              <View style={{ alignItems: 'center' }}>
                <MaterialIcons
                  name={showLongDesc ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  size={34}
                  onPress={toggleDescription}
                />
              </View>
            </View>
            <TouchableOpacity activeOpacity={1} style={slide2_style.Touchable_Opacity}>
              <Text style={slide2_style.Touchable_Text}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={slide2_style.Enquiry_button}>
              <Text style={slide2_style.Touchable_Text}>ENQUIRY</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default What_Doctor_says;