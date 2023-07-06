import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Linking, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const BlogsAndResearch = ({ language, onLanguageChange, navigation }) => {
const { height, width } = Dimensions.get('window');

  const [apiData, setApiData] = useState([]);
  const [showLongDesc, setShowLongDesc] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await fetch('https://www.myjsons.com/v/76cf1318')
      .then((data) => data.json())
      .then((response) => {
        setApiData(response.items);
      });
  };

  const toggleDescription = () => {
    setShowLongDesc(!showLongDesc);
  };

  const saveLanguage = (lang) => {
    onLanguageChange(lang);
  };

  return (
    <View>
      {apiData.map((item, index) => (
        <View key={index}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10, position: 'absolute', top: 20, width: '100%', zIndex: 1 }}>
            <TouchableOpacity onPress={() => saveLanguage('english')}>
              <Text style={{ color: language === 'english' ? '#175ca4' : 'black', marginRight: 10, fontSize: 20 }}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => saveLanguage('french')}>
              <Text style={{ color: language === 'french' ? '#175ca4' : 'black', fontSize: 20 }}>French</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: item.en.blogsAndResearch.backimage }}
            style={{ width: '100%', height: 812 }}
          />

          <View
            style={{
              borderRadius: 31,
              backgroundColor: '#fff',
              borderStyle: 'solid',
              borderColor: '#175ca4',
              borderWidth: 1,
              flex: 1,
              width: 312,
              height: 265,
              position: 'absolute',
              marginLeft: 26,
              marginRight: 20,
              marginTop: 310,
              marginBottom: 134,
            }}
          >
            {language === 'french' ? (
              <Text style={{
                fontSize: 28,
                fontFamily: 'Poppins_bold',
                color: '#175ca4',
                fontWeight: 'bold',
                lineHeight: 50,
                alignSelf: 'center'
              }}>{item.fr.blogsAndResearch.title}</Text>
            ) : (
              <Text style={{
                fontSize: 28,
                fontFamily: 'Poppins_bold',
                color: '#175ca4',
                fontWeight: 'bold',
                lineHeight: 50,
                alignSelf: 'center'
              }}>{item.en.blogsAndResearch.title}</Text>
            )}
            {language === 'french' ? (
              <Text style={{
                fontSize: 18,
                fontFamily: 'Poppins_bold',
                color: '#175ca4',
                fontWeight: 'bold',
                alignSelf: 'center'
              }}>{item.fr.blogsAndResearch.contentTitle}</Text>
            ) : (
              <Text style={{
                fontSize: 18,
                fontFamily: 'Poppins_bold',
                color: '#175ca4',
                fontWeight: 'bold',
                alignSelf: 'center'
              }}>{item.en.blogsAndResearch.contentTitle}</Text>
            )}
            {!showLongDesc ? (
              language === 'english' ? (
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 15,
                    marginTop: 10,
                    fontFamily: 'Poppins_regular',
                    color: 'black',
                    lineHeight: 25,
                  }}
                >
                  {item.en.blogsAndResearch.shortdesc}
                </Text>
              ) : (
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 15,
                    marginTop: 10,
                    fontFamily: 'Poppins_regular',
                    color: 'black',
                    lineHeight: 22,
                  }}
                >
                  {item.fr.blogsAndResearch.shortdesc}
                </Text>
              )

            ) : (
              language === 'english' ? (
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
                        fontFamily: 'Poppins_regular',
                        color: 'black',
                        lineHeight: 25,
                      }}
                    >
                      {item.en.blogsAndResearch.longdesc}
                    </Text>
                    <Text style={{ fontSize: 20, color: '#175ca4', marginLeft: 100 }} onPress={() => { Linking.openURL(item.en.blogsAndResearch.pdf) }}>Download Pdf</Text>
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
                        fontFamily: 'Poppins_regular',
                        color: 'black',
                        lineHeight: 22,
                      }}
                    >
                      {item.fr.blogsAndResearch.longdesc}
                    </Text>
                    <Text style={{ fontSize: 20, color: '#175ca4', marginLeft: 100 }} onPress={() => { Linking.openURL(item.fr.blogsAndResearch.pdf) }}>Download Pdf</Text>
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
        </View>
      ))}
      <TouchableOpacity
        onPress={() => { navigation.replace('Login') }}
        activeOpacity={1}
        style={{
          borderRadius: 50,
          backgroundColor: '#175ca4',
          height: 50,
          width: '45%',
          position: 'absolute',
          marginTop: height - 80,
          marginLeft: '2.5%',
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Inter_semibold',
            textAlign: 'center',
            color: '#fff',
            lineHeight: 45,
          }}
        >
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={()=>navigation.navigate('Enquiry')}
        style={{
          borderRadius: 50,
          backgroundColor: '#175ca4',
          height: 50,
          width: '45%',
          position: 'absolute',
          marginTop: height-80,
          marginLeft: '50%',
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Inter_semibold',
            textAlign: 'center',
            color: '#fff',
            lineHeight: 45,
          }}
        >
          ENQUIRY
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BlogsAndResearch;
