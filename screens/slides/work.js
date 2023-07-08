import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, ImageBackground, Dimensions, ScrollView, Alert } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from '../../styles/styles';

const How_Bynocs_Work = ({ language, onLanguageChange, navigation }) => {
  const [enable, setEnable] = useState(true);
  const [APIData, setAPIData] = useState([]);
  const [showLongDesc, setShowLongDesc] = useState(false);

  const { height, width } = Dimensions.get('window');

  useEffect(() => {
    APIgetData();
  }, []);
  const APIgetData = async () => {
    const response = await fetch('https://www.myjsons.com/v/f29b1312');
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
        const bynocsData = item;

        console.log(bynocsData.en.howBynocsWork.longdesc);

        return (
          <View key={key}>
            <ImageBackground source={{ uri: bynocsData.en.howBynocsWork.image }} style={{ width: width, height: height, flex: 1 }} />
            <View style={{ flexDirection: 'row', marginLeft: responsiveWidth(74), position: 'absolute', top: responsiveHeight(3), width: width, zIndex: 1 }}>
              <TouchableOpacity onPress={() => saveLanguage('english')}>
                <Text style={{ color: language === 'english' ? '#175ca4' : 'black', marginRight: responsiveWidth(0.6), fontSize: responsiveFontSize(3), fontFamily: 'Poppins-Regular' }}>EN</Text>
              </TouchableOpacity>
              <Text style={{ color: 'black', marginRight: responsiveWidth(0.6), fontSize: responsiveFontSize(3), fontFamily: 'Poppins-Regular' }}> | </Text>
              <TouchableOpacity onPress={() => saveLanguage('french')}>
                <Text style={{ color: language === 'french' ? '#175ca4' : 'black', fontSize: responsiveFontSize(3), fontFamily: 'Poppins-Regular' }}>FR</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.work_Content_View}>
              {language == 'french' ? (
                <Text style={styles.work_fr_title}>{item.fr.howBynocsWork.title}</Text>
              ) : (
                <Text style={styles.work_en_title}>{bynocsData.en.howBynocsWork.title}</Text>
              )}

              {!showLongDesc ? (
                language == 'english' ? (
                  <Text
                    style={styles.work_en_desc}
                  >
                    {item.en.howBynocsWork.shortdesc}
                  </Text>
                ) : (
                  <Text
                    style={styles.work_fr_desc}
                  >
                    {item.fr.howBynocsWork.shortdesc}
                  </Text>
                )

              ) : (
                language == 'english' ? (
                  <View style={{ flex: 1 }}>
                    <ScrollView>
                      <Text
                        style={styles.work_en_desc}
                      >
                        {item.en.howBynocsWork.longdesc}
                      </Text>
                    </ScrollView>
                  </View>
                ) : (
                  <View style={{ flex: 1 }}>
                    <ScrollView>
                      <Text
                        style={styles.work_fr_desc}
                      >
                        {item.fr.howBynocsWork.longdesc}
                      </Text>
                    </ScrollView>
                  </View>
                )

              )}
              <View style={{ alignItems: 'center' }}>
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

export default How_Bynocs_Work;