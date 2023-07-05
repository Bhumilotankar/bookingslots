import React, { useState, useEffect } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Text, TouchableOpacity, View, ImageBackground, Dimensions, ScrollView, Alert ,Image} from 'react-native';
import Swiper from 'react-native-swiper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import slide2_style from '../../styles/slide2';
import AsyncStorage from "@react-native-async-storage/async-storage";


const What_Patients_says = ({ language, onLanguageChange }) => {  


    let [currentLink,setLink] = useState("");
    let [selectedIndex,setSelectedIndex] = useState(0)
    const [PatientsAPIData, setPatientsAPIData] = useState([]);
      async function displayVideo(index,link){
          // setIndex(index)
          // setLink(data[index].link)
          // console.log(data[selectedIndex].link);
          console.log(index);
          console.log(link)
          setLink(link);
          setSelectedIndex(index);
        }
        const {height, width} = Dimensions.get('window');
        const saveLanguage = (lang) => {
          onLanguageChange(lang);
        };
      const APIgetData = async () =>{
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
      <View style={{height: height}}>
      {PatientsAPIData.map((item, key) => {
        
        const patientsData = item.en.whatPatientsSay.patients;
        return (

          <View key={key}>
            <ImageBackground
              source={{uri: item.en.whatPatientsSay.backimage}}
              style={{width: width, height: height, flex: 1}}
            />
            <View style={slide2_style.language_view}>
              <TouchableOpacity onPress={() => saveLanguage('english')}>
                <Text style={slide2_style.language_text}>EN</Text>
              </TouchableOpacity>
              <Text style={slide2_style.language_bar}> | </Text>
              <TouchableOpacity onPress={() => saveLanguage('french')}>
                <Text style={slide2_style.language_text}>FR</Text>
              </TouchableOpacity>
            </View>
            <View style={{height: 200, top: 50}}>
              <View style={slide2_style.Youtube}>
                <YoutubePlayer
                  height={140}
                  width={250}
                  videoId={currentLink}
                  play={false}
                  volume={50}
                  playbackRate={1}
                />
              </View>
            </View>
            <View style={slide2_style.Content_view}>
              <Text
                style={{
                  fontSize: 22,
                  fontFamily: 'Poppins_bold',
                  color: '#175ca4',
                  fontWeight: 'bold',
                  lineHeight: 50,
                  alignSelf: 'center',
                }}>
                  {language=='french' ? item.fr.whatPatientsSay.title : item.en.whatPatientsSay.title}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  // marginLeft: 15,
                  marginTop: 10,
                  marginHorizontal: 15,
                  fontFamily: 'times new roman',
                  color: 'black',
                  textAlign: 'center',
                  lineHeight: 25,
                }}>
                  {language=='french' ? item.fr.whatPatientsSay.desc : item.en.whatPatientsSay.desc}
              </Text>
              <ScrollView
                horizontal
                overScrollMode="never"
                contentContainerStyle={{
                  justifyContent: 'space-around',
                  marginHorizontal: 20,
                  flexDirection: 'row',
                  marginTop: 20,
                }} // scrollEnabled={false}
              >
                <View style={{flexDirection: 'row'}}>
                  {patientsData.map((e, id) => {
                    return (
                      <TouchableOpacity onPress={()=>displayVideo(id,e.Link)} key={id}>
                      <View
                        style={{
                          flexDirection: 'column',
                          marginHorizontal: 5,
                        }}>
                        <Image
                          source={{
                            uri: e.image,
                          }}
                          style={[{height: 55, width: 55}, selectedIndex == id ? {borderWidth:3,borderColor:'#175ca4',borderRadius:50} : null]}
                        />
                        <Text style={{color: 'black',textAlign:'center',marginTop:10,fontWeight:'600'}}>{e.Name}</Text>
                      </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </View>          
            <TouchableOpacity
              activeOpacity={1}
              style={slide2_style.Touchable_Opacity}>
              <Text style={slide2_style.Touchable_Text}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={slide2_style.Enquiry_button}>
              <Text style={slide2_style.Touchable_Text}>ENQUIRY</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
    )
  }

export default What_Patients_says;