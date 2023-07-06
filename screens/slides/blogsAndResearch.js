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
              <Text style={{ color: language === 'english' ? '#175ca4' : 'black', marginRight: 10, fontSize: 20, fontFamily:'Poppins-Regular'}}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => saveLanguage('french')}>
              <Text style={{ color: language === 'french' ? '#175ca4' : 'black', fontSize: 20, fontFamily:'Poppins-Regular'}}>French</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: item.en.blogsAndResearch.backimage }}
            style={{ width: width, height: height }}
          />

          <View
            style={{
              borderRadius: 31,
              backgroundColor: '#fff',
              borderStyle: 'solid',
              borderColor: '#175ca4',
              borderWidth: 1,
              flex: 1,
              // marginHorizontal:40,
              width: width-50,
              height: height-450,
              position: 'absolute',
              alignSelf:'center',
              // marginLeft: width-330,
              // marginRight: 20,
              marginTop: height-411,
              // marginBottom: height-100,
            }}
          >
            {language === 'french' ? (
              <Text style={{
                fontSize: 28,
                fontFamily: 'Poppins-Regular',
                color: '#175ca4',
                fontWeight: 'bold',
                lineHeight: 50,
                alignSelf: 'center',
                marginTop:10
              }}>{item.fr.blogsAndResearch.title}</Text>
            ) : (
              <Text style={{
                fontSize: 28,
                fontFamily: 'Poppins-Regular',
                color: '#175ca4',
                fontWeight: 'bold',
                lineHeight: 50,
                alignSelf: 'center',
                marginTop:10
              }}>{item.en.blogsAndResearch.title}</Text>
            )}
            {language === 'french' ? (
              <Text style={{
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
                color: '#175ca4',
                fontWeight: '600',
                alignSelf: 'center',
                marginHorizontal:15
              }}>{item.fr.blogsAndResearch.contentTitle}</Text>
            ) : (
              <Text style={{
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
                color: '#175ca4',
                fontWeight: '600',
                // alignSelf: 'center',
                marginHorizontal:15
              }}>{item.en.blogsAndResearch.contentTitle}</Text>
            )}
            {!showLongDesc ? (
              language === 'english' ? (
                <Text
                  style={{
                    fontSize: 15,
                    // marginLeft: 15,
                    marginHorizontal:15,
                    // marginTop: 10,
                    // textAlign:'center',
                    fontFamily: 'Poppins-Regular',
                    color: 'black',
                    lineHeight: 23,
                  }}
                >
                  {item.en.blogsAndResearch.shortdesc}
                </Text>
              ) : (
                <Text
                  style={{
                    fontSize: 15,
                    // marginLeft: 15,
                    // marginTop: 10,
                    marginHorizontal:15,

                    fontFamily: 'Poppins-Regular',
                    color: 'black',
                    lineHeight: 23,
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
                      // marginLeft: 15,
                      // marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        marginHorizontal:15,
                        fontFamily: 'Poppins-Regular',
                        color: 'black',
                        lineHeight: 23,
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
                      // marginLeft: 15,
                      // marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        marginHorizontal:15,
                        fontFamily: 'Poppins-Regular',
                        color: 'black',
                        lineHeight: 23,
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
        onPress={() => { navigation.navigate('Login') }}
        activeOpacity={1}
        style={{
          borderRadius: 50,
          backgroundColor: '#175ca4',
          height: 50,
          width: '45%',
          justifyContent:'center',
          alignItems:'center',
          position: 'absolute',
          marginTop: height - 100,
          marginLeft: '2.5%',
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
            color: '#fff',
            lineHeight: 45,
            fontWeight:'600'
          }}
        >
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => { navigation.navigate('Enquiry') }}
        activeOpacity={1}
        style={{
          borderRadius: 50,
          backgroundColor: '#175ca4',
          height: 50,
          justifyContent:'center',
          alignItems:'center',
          width: '45%',
          position: 'absolute',
          marginTop: height-100,
          marginLeft: '50%',
          fontWeight:'600'
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Poppins-Regular',
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
