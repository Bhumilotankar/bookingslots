import React, { useState, useEffect } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Text, TouchableOpacity, View, ImageBackground, Dimensions, ScrollView, Alert, Image } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import styles from '../../styles/styles';


const What_Patients_says = ({ language, onLanguageChange, navigation }) => {


  let [currentLink, setLink] = useState("");
  let [selectedIndex, setSelectedIndex] = useState(0)
  const [PatientsAPIData, setPatientsAPIData] = useState([]);
  async function displayVideo(index, link) {
    // setIndex(index)
    // setLink(data[index].link)
    // console.log(data[selectedIndex].link);
    console.log(index);
    console.log(link)
    setLink(link);
    setSelectedIndex(index);
  }
  const { height, width } = Dimensions.get('window');
  const saveLanguage = (lang) => {
    onLanguageChange(lang);
  };
  const APIgetData = async () => {
    const response = await fetch('https://www.myjsons.com/v/f0961313');
    const jsonData = await response.json();
    setPatientsAPIData(jsonData.items);
    console.log(jsonData.items[0].en.whatPatientsSay.patients[0].Link);
    setLink(jsonData.items[0].en.whatPatientsSay.patients[0].Link);
    setSelectedIndex(0);
  }

  useEffect(() => {
    APIgetData();
  }, []);

  return (
    <View style={{ height: height }}>
      {PatientsAPIData.map((item, key) => {

        const patientsData = item.en.whatPatientsSay.patients;
        return (

          <View key={key}>
            <ImageBackground
              source={{ uri: item.en.whatPatientsSay.backimage }}
              style={{ width: width, height: height, flex: 1 }}
            />
            <View style={{ flexDirection: 'row', marginLeft: responsiveWidth(74), position: 'absolute', top: responsiveHeight(3), width: width, zIndex: 1 }}>
              <TouchableOpacity onPress={() => saveLanguage('english')}>
                <Text style={{ color: language === 'english' ? '#175ca4' : 'black', marginRight: responsiveWidth(0.6), fontSize: responsiveFontSize(3), fontFamily: 'Poppins-Regular' }}>EN</Text>
              </TouchableOpacity>
              <Text style={{ color: 'black', marginRight: responsiveWidth(0.6), fontSize: responsiveFontSize(3), fontFamily: 'Poppins-Regular' }}> | </Text>
              <TouchableOpacity onPress={() => saveLanguage('french')}>
                <Text style={{ color: language === 'french' ? '#175ca4' : 'black', fontSize: responsiveFontSize(3), fontFamily: 'Poppins-Regular' }}>FR</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              // height: 200,
              top: responsiveHeight(12)
            }}>
              <View style={styles.YoutubePlayer_View}>
                <YoutubePlayer
                  height={responsiveHeight(19.2)}
                  width={responsiveWidth(70)}
                  videoId={currentLink}
                  play={false}
                  volume={50}
                  playbackRate={1}
                />
              </View>
            </View>
            <View style={styles.Patient_View}>
              <Text
                style={styles.Patient_title}>
                {language == 'french' ? item.fr.whatPatientsSay.title : item.en.whatPatientsSay.title}
              </Text>
              <Text
                style={styles.Patient_desc}>
                {language == 'french' ? item.fr.whatPatientsSay.desc : item.en.whatPatientsSay.desc}
              </Text>
              <ScrollView
                horizontal
                overScrollMode="never"
                contentContainerStyle={{
                  justifyContent: 'space-around',
                  marginHorizontal: responsiveWidth(5),
                  flexDirection: 'row',
                  marginTop: responsiveHeight(3),
                }} 
                // scrollEnabled={false}
              >
                <View style={{ flexDirection: 'row' }}>
                  {patientsData.map((e, id) => {
                    return (
                      <TouchableOpacity onPress={() => displayVideo(id, e.Link)} key={id}>
                        <View
                          style={{
                            flexDirection: 'column',
                            marginHorizontal: responsiveWidth(1.5),
                          }}>
                          <Image
                            source={{
                              uri: e.image,
                            }}
                            style={[{ height: responsiveHeight(7.8), width: responsiveHeight(7.8) }, selectedIndex == id ? { borderWidth: responsiveWidth(1), borderColor: '#175ca4', borderRadius: responsiveWidth(10) } : null]}
                          />
                          <Text style={{ color: 'black', textAlign: 'center', marginTop: responsiveHeight(1.5), fontWeight: '600', fontFamily: 'Poppins-Regular' }}>{e.Name}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
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
  )
}

export default What_Patients_says;