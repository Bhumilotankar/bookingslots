import {
  Icon,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Alert,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// import { Calendar } from 'react-native-calendars'

import AntDesign from 'react-native-vector-icons/AntDesign';
import Calendar from './Calendar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Book_Appointment = () => {
  const [selectedTime, onSelectTime] = useState('');
  const [morning, setMorning] = useState(false);
  const [day, setDay] = useState(false);
  const [night, setNight] = useState(false);

  const [morningData, setMorningData] = useState([]);
  const [dayData, setDayData] = useState([]);
  const [nightData, setNightData] = useState([]);
   
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, onSelectCategory] = useState([]);
  const [selectedDate, setDate] = useState('');
  let username = '';
  let email = '';

  function formatDate(dateString) {
    const parts = dateString.split('-');
    const year = parts[0];
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
  
    return `${month}/${day}/${year}`;
  }
  
  const handleSubmission = async () => {
    username = await AsyncStorage.getItem('UserName');
    email = await AsyncStorage.getItem('Email');
    // await AsyncStorage.setItem("Email","harshmaghnani@gmail.com");
    console.log('HANDLE SUBMISSION');
    console.log('DATE : ', selectedDate)
    console.log('CATEGORY : ', selectedCategory);
    console.log('TIME : ', selectedTime);
    console.log('USERNAME : ', username);
    console.log('EMAIL : ', email);
    const currentDate = new Date();
    const currentTime = new Date();

    const date = currentDate.toLocaleDateString();
    const time = currentTime.toLocaleTimeString();


    
    console.log(`Date: ${date}`);
    console.log(`Time: ${time}`);

    if (!selectedDate || !selectedTime) {
      Alert.alert('Error', 'Fill all fields');
    } else {
      if (username == '' || email == '') {
        Alert.alert('Error', 'Fields not found!');
      } else {
        try {
          // let formattedDate = formatDate(selectedDate);
          console.log('DATE :',selectedDate)
          const response = await fetch('https://retoolapi.dev/SQjura/saving', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              email,
              category:selectedCategory,
              time: selectedTime,
              appointmentDate: selectedDate,
              bookingTime:time,
              bookingDate:date
            }),
          });
          if (response.ok) {
            
            Alert.alert('Appointment booked successfully');
          } else {
            
            console.error('Failed to book appointment');
          }
        } catch (error) {
          console.error('Error booking appointment:', error);
}

      }
    }
  };

  const fetchAPIData = async () => {
    // CATEGORY
    const categoryResponse = await fetch('https://www.myjsons.com/v/d8211381');
    const categoryJsonData = await categoryResponse.json();
    setCategoryData(categoryJsonData.details);

    // TIMESLOTS
    // const response = await fetch(`YOUR_TIMESLOTS_API_ENDPOINT_URL?category=${category.title}`);
    // const data = await response.json();
    // setTimeSlots(data);
    
    const timeSlotResponse = await fetch('https://www.myjsons.com/v/e56b1373');
    const timeSlotjsonData = await timeSlotResponse.json();
    //   setAPIData1(jsonData.timeslots);
    setMorningData(timeSlotjsonData.timeslots[0].morning);
    setDayData(timeSlotjsonData.timeslots[0].afternoon);
    setNightData(timeSlotjsonData.timeslots[0].evening);

    //TIMESLOT FOR CATEGORY 1 "INTRO TO BYNOCS"
    // const timecategory1= await fetch('https://www.myjsons.com/v/602d1399');
    // const timecategoryjsonData1= await timecategory1.json();
    // setMorningData1(timecategoryjsonData1.timeslots[0].morning);
    // setMorningData1(timecategoryjsonData1.timeslots[0].afternoon);
    // setMorningData1(timecategoryjsonData1.timeslots[0].evening);

  };

//  function categoryfun(e){
//     // onSelectCategory(e); 
//   }
 
  useEffect(() => {

    fetchAPIData();
  }, []);

  return (
    <ScrollView>
      <View style={{marginHorizontal: responsiveWidth(4)}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              borderRadius: responsiveHeight(1),
              padding: responsiveWidth(2),
              marginTop: responsiveHeight(2),
              borderColor: 'black',
            }}></View>
        </View>

        <View style={{borderRadius: 15}}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontFamily: 'Poppins-Regular',
            }}>
            {' '}
            Choose Date{' '}
          </Text>
          <Calendar onSelectDate={setDate} selected={selectedDate} />
        </View>

        <Text
          style={{color: 'black', fontSize: 15, fontFamily: 'Poppins-Regular'}}>
          {' '}
          Choose Category{' '}
        </Text>

        <ScrollView horizontal>
          <View
            style={{
              flexDirection: 'row',
              borderColor: 'black',
              borderRadius: 10,
            }}>
            {categoryData.map((element, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => onSelectCategory(element.category)}>
                  <View
                    style={[
                      {
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 10,
                        marginHorizontal: 10,
                        marginTop: 10,
                      },
                      {
                        backgroundColor:
                          selectedCategory === element.category
                            ? '#175CA4'
                            : 'white',
                      },
                    ]}>
                    <Text
                      numberOfLines={3}
                      style={[
                        {
                          color: 'black',
                          marginHorizontal: 14,
                          fontSize: 12,
                          marginVertical: 7,
                          fontFamily: 'Poppins-Regular',
                        },
                        {
                          color:
                            selectedCategory === element.category
                              ? 'white'
                              : 'black',
                        },
                      ]}>
                      {element.category}
                       {/* {selectedCategory==='Introduction To Bynocs'?( console.log(" chosen")
             ) : console.log("Not chosen")} */}
                    </Text>
                    <Text
                      numberOfLines={3}
                      style={[
                        {
                          color: 'black',
                          marginHorizontal: 14,
                          fontSize: 12,
                          marginBottom: 7,
                          fontFamily: 'Poppins-Regular',
                        },
                        {
                          color:
                            selectedCategory === element.category
                              ? 'white'
                              : 'black',
                        },
                      ]}>
                      {element.duration} mins{' '}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        <View style={{marginTop: 30}}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontFamily: 'Poppins-Regular',
            }}>
            {' '}
            Choose Time{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/halfsun.png')}
                style={{width: 30, height: 18, marginTop: 5}}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontFamily: 'Poppins-Regular',
                }}>
                {' '}
                Morning{' '}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                morning ? setMorning(false) : setMorning(true);
              }}>
              <AntDesign
                name={morning ? 'upcircle' : 'downcircle'}
                style={{color: 'grey'}}
                size={15}
              />
            </TouchableOpacity>
          </View>

          {morning ? (
            <View style={{marginTop: 15}}>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: 'grey',
                  marginBottom: 10,
                }}
              />
              <View style={{flexDirection: 'row', flex: 1, flexWrap: 'wrap'}}>
                {morningData.map(element => {
                  return (
                    <TouchableOpacity
                      onPress={() => onSelectTime(element.time)}>
                      <View
                        style={[
                          {
                            borderWidth: 1,
                            borderColor: 'grey',
                            borderRadius: 40,
                            marginHorizontal: 10,
                            marginTop: 10,
                          },
                          {
                            backgroundColor:
                              selectedTime === element.time
                                ? '#175CA4'
                                : 'white',
                          },
                        ]}>
                        <Text
                          style={[
                            {
                              color: 'black',
                              marginHorizontal: 14,
                              fontSize: 12,
                              marginVertical: 7,
                              fontFamily: 'Poppins-Regular',
                            },
                            {
                              color:
                                selectedTime === element.time
                                  ? 'white'
                                  : 'black',
                            },
                          ]}>
                          {element.time}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          ) : null}

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/sun.png')}
                style={{width: 30, height: 30}}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontFamily: 'Poppins-Regular',
                }}>
                {' '}
                Day{' '}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                day ? setDay(false) : setDay(true);
              }}>
              <AntDesign
                name={day ? 'upcircle' : 'downcircle'}
                style={{color: 'grey'}}
                size={15}
              />
            </TouchableOpacity>
          </View>

          {day ? (
            <View style={{marginTop: 15}}>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: 'grey',
                  marginBottom: 10,
                }}
              />
              <View style={{flexDirection: 'row', flex: 1, flexWrap: 'wrap'}}>
                {dayData.map(element => {
                  console.log('dd');
                  return (
                    <TouchableOpacity
                      onPress={() => onSelectTime(element.time)}>
                      <View
                        style={[
                          {
                            borderWidth: 1,
                            borderColor: 'grey',
                            borderRadius: 40,
                            marginHorizontal: 10,
                            marginTop: 10,
                          },
                          {
                            backgroundColor:
                              selectedTime === element.time
                                ? '#175CA4'
                                : 'white',
                          },
                        ]}>
                        <Text
                          style={[
                            {
                              color: 'black',
                              marginHorizontal: 14,
                              fontSize: 12,
                              marginVertical: 7,
                              fontFamily: 'Poppins-Regular',
                            },
                            {
                              color:
                                selectedTime === element.time
                                  ? 'white'
                                  : 'black',
                            },
                          ]}>
                          {element.time}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          ) : null}

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/moon.png')}
                style={{width: 24, height: 28, marginLeft: 5}}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontFamily: 'Poppins-Regular',
                }}>
                {' '}
                Night{' '}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                night ? setNight(false) : setNight(true);
              }}>
              <AntDesign
                name={night ? 'upcircle' : 'downcircle'}
                style={{color: 'grey'}}
                size={15}
              />
            </TouchableOpacity>
          </View>

          {night ? (
            <View style={{marginTop: 15}}>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: 'grey',
                  marginBottom: 10,
                }}
              />
              <View style={{flexDirection: 'row', flex: 1, flexWrap: 'wrap'}}>
                {nightData.map(element => {
                  return (
                    <TouchableOpacity
                      onPress={() => onSelectTime(element.time)}>
                      <View
                        style={[
                          {
                            borderWidth: 1,
                            borderColor: 'grey',
                            borderRadius: 40,
                            marginHorizontal: 10,
                            marginTop: 10,
                          },
                          {
                            backgroundColor:
                              selectedTime === element.time
                                ? '#175CA4'
                                : 'white',
                          },
                        ]}>
                        <Text
                          style={[
                            {
                              color: 'black',
                              marginHorizontal: 14,
                              fontSize: 12,
                              marginVertical: 7,
                              fontFamily: 'Poppins-Regular',
                            },
                            {
                              color:
                                selectedTime === element.time
                                  ? 'white'
                                  : 'black',
                            },
                          ]}>
                          {element.time}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          ) : null}
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{}}
          onPress={handleSubmission}
          // onPress={handleSubmission}
        >
          <View
            style={{
              color: 'white',
              width: '90%',
              backgroundColor: '#175CA4',
              height: 40,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
                fontFamily: 'Poppins-Regular',
              }}>
              Set Date & Time
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Book_Appointment;