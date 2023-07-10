import { TouchableOpacity, View, Text, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions'
// import { Calendar } from 'react-native-calendars'
import Calendar from './Calendar'
const Book_Appointment = () => {
  const [APIData, setAPIData] = useState([]);
  const [selectedTime, onSelectTime] = useState('')
  // https://retoolapi.dev/rJlECu/appointment
  useEffect(() => {
    APIgetData();
  })

  // '#175CA4'
  //console.log('data');
  const APIgetData = async () => {
    const response = await fetch('https://www.myjsons.com/v/e56b1373');
    const jsonData = await response.json();
    setAPIData(jsonData.timeslots);
    // console.log(APIData)
  };

  const handleSubmission = () =>{
    if(!onSelectDate || !selectedTime){
      Alert.alert('Error', 'Fill all fields');
    }
    else{
      console.log('submitted');
      Alert.alert('Submitted', 'Your Appointment is booked')
      const storeEndpoint = 'https://retoolapi.dev/rJlECu/appointment';
      const credentials = {
        date: onSelectDate,
        time: selectedTime,
      };
  
      return fetch(storeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
  
    }
  }

  const [onSelectDate, setOnselectDate] = useState('')
  return (
  <ScrollView>
    <View>
      <Calendar onSelectDate={setOnselectDate} selected={onSelectDate} />
      <View
      // style={{flexDirection:'row'}}
      >
      <Text>{onSelectDate}</Text>

        <TouchableOpacity
          style={{
            color: 'black',
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: (selectedTime == "10:00 AM - 10:45 AM" ? "#175CA4" : "white"),
            width: responsiveWidth(37),
            marginLeft: responsiveWidth(5),
            marginBottom: responsiveHeight(2)
          }}
          onPress={() => onSelectTime("10:00 AM - 10:45 AM")}
        >
          <Text
            style={{
              color: (selectedTime == "10:00 AM - 10:45 AM" ? "white" : "black"),
              fontSize: responsiveFontSize(1.9)

            }}
          >10:00 AM - 10:45 AM</Text></TouchableOpacity>


        <TouchableOpacity style={{
          color: 'black',
          borderWidth: 1,
          borderColor: 'black',
          backgroundColor: (selectedTime == "10:45 AM - 11:30 AM" ? "#175CA4" : "white"),

          width: responsiveWidth(37),
          marginLeft: responsiveWidth(5),
          marginBottom: responsiveHeight(2)
        }}
          onPress={() => onSelectTime("10:45 AM - 11:30 AM")}
        ><Text style={{
          color: (selectedTime == "10:45 AM - 11:30 AM" ? "white" : "black"),
          fontSize: responsiveFontSize(1.9)
        }}>10:45 AM - 11:30 AM</Text></TouchableOpacity>

        <TouchableOpacity style={{
          color: 'black',
          borderWidth: 1,
          borderColor: 'black',
          backgroundColor: (selectedTime == "12:15 PM - 01:00 PM" ? "#175CA4" : "white"),

          width: responsiveWidth(37),
          marginLeft: responsiveWidth(5),
          marginBottom: responsiveHeight(2)
        }}
          onPress={() => onSelectTime("12:15 PM - 01:00 PM")}
        ><Text style={{
          color: (selectedTime == "12:15 PM - 01:00 PM" ? "white" : "black"),
          fontSize: responsiveFontSize(1.9)
        }}>12:15 PM - 01:00 PM</Text></TouchableOpacity>


        <TouchableOpacity style={{
          color: 'black',
          borderWidth: 1,
          borderColor: 'black',
          backgroundColor: (selectedTime == "01:00 PM - 01:45 PM" ? "#175CA4" : "white"),

          width: responsiveWidth(37),
          marginLeft: responsiveWidth(5),
          marginBottom: responsiveHeight(2)
        }} onPress={() => onSelectTime("01:00 PM - 01:45 PM")}
        ><Text style={{
          color: (selectedTime == "01:00 PM - 01:45 PM" ? "white" : "black"),
          fontSize: responsiveFontSize(1.9)
        }}>01:00 PM - 01:45 PM</Text></TouchableOpacity>


        <TouchableOpacity style={{
          color: 'black',
          borderWidth: 1,
          borderColor: 'black',
          backgroundColor: (selectedTime == "01:45 PM - 02:30 PM" ? "#175CA4" : "white"),

          width: responsiveWidth(37),
          marginLeft: responsiveWidth(5),
          marginBottom: responsiveHeight(2)
        }}
          onPress={() => onSelectTime("01:45 PM - 02:30 PM")}
        ><Text style={{
          color: (selectedTime == "01:45 PM - 02:30 PM" ? "white" : "black"),
          fontSize: responsiveFontSize(1.9)

        }}>01:45 PM - 02:30 PM</Text></TouchableOpacity>


        <TouchableOpacity style={{
          color: 'black',
          borderWidth: 1,
          borderColor: 'black',
          backgroundColor: (selectedTime == "02:30 PM - 03:15 PM" ? "#175CA4" : "white"),

          width: responsiveWidth(37),
          marginLeft: responsiveWidth(5),
          marginBottom: responsiveHeight(2)
        }}
          onPress={() => onSelectTime("02:30 PM - 03:15 PM")}
        ><Text style={{
          color: (selectedTime == "02:30 PM - 03:15 PM" ? "white" : "black"),

          fontSize: responsiveFontSize(1.9)

        }}>02:30 PM - 03:15 PM</Text></TouchableOpacity>


        <TouchableOpacity style={{
          color: 'black',
          borderWidth: 1,
          borderColor: 'black',
          backgroundColor: (selectedTime == "03:15 PM - 04:00 PM" ? "#175CA4" : "white"),

          width: responsiveWidth(37),
          marginLeft: responsiveWidth(5),
          marginBottom: responsiveHeight(2)
        }}
          onPress={() => onSelectTime("03:15 PM - 04:00 PM")}
        ><Text style={{
          color: (selectedTime == "03:15 PM - 04:00 PM" ? "white" : "black"),
          fontSize: responsiveFontSize(1.9)

        }}>03:15 PM - 04:00 PM</Text></TouchableOpacity>

      
        <TouchableOpacity style={{
          color: 'black',
          borderWidth: 1,
          borderColor: 'black',
          backgroundColor: (selectedTime == "04:00 PM - 04:45 PM" ? "#175CA4" : "white"),

          width: responsiveWidth(37),
          marginLeft: responsiveWidth(5),
          marginBottom: responsiveHeight(2)
        }}
          onPress={() => onSelectTime("04:00 PM - 04:45 PM")}
        ><Text style={{
          color: (selectedTime == "04:00 PM - 04:45 PM" ? "white" : "black"),
          fontSize: responsiveFontSize(1.9)

        }}>04:00 PM - 04:45 PM</Text></TouchableOpacity>


        <TouchableOpacity style={{
          color: 'black',
          borderWidth: 1,
          borderColor: 'black',
          backgroundColor: (selectedTime == "05:30 PM - 06:15 PM" ? "#175CA4" : "white"),

          width: responsiveWidth(37),
          marginLeft: responsiveWidth(5),
          marginBottom: responsiveHeight(2)
        }}
          onPress={() => onSelectTime("05:30 PM - 06:15 PM")}
        ><Text style={{
          color: (selectedTime == "05:30 PM - 06:15 PM" ? "white" : "black"),
          fontSize: responsiveFontSize(1.9)

        }}>05:30 PM - 06:15 PM</Text></TouchableOpacity>


        <TouchableOpacity style={{
          color: 'black',
          borderWidth: 1,
          borderColor: 'black',
          backgroundColor: (selectedTime == "06:15 PM - 07:00 PM" ? "#175CA4" : "white"),

          width: responsiveWidth(37),
          marginLeft: responsiveWidth(5),
          marginBottom: responsiveHeight(2)
        }}
          onPress={() => onSelectTime("06:15 PM - 07:00 PM")}

        ><Text style={{
          color: (selectedTime == "06:15 PM - 07:00 PM" ? "white" : "black"),
          fontSize: responsiveFontSize(1.9)

        }}>06:15 PM - 07:00 PM</Text></TouchableOpacity>


        <TouchableOpacity
          style={{
            color: 'black',
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: (selectedTime == "07:00 PM - 07:45 PM" ? "#175CA4" : "white"),

            width: responsiveWidth(37),
            marginLeft: responsiveWidth(5),
            marginBottom: responsiveHeight(2)
          }}
          onPress={() => onSelectTime("07:00 PM - 07:45 PM")}

        ><Text style={{
          color: (selectedTime == "07:00 PM - 07:45 PM" ? "white" : "black"),
          fontSize: responsiveFontSize(1.9)

        }}>07:00 PM - 07:45 PM</Text></TouchableOpacity>


        <TouchableOpacity
          style={{
            color: 'black',
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: (selectedTime == "07:45 PM - 08:30 PM" ? "#175CA4" : "white"),

            width: responsiveWidth(37),
            marginLeft: responsiveWidth(5),
            marginBottom: responsiveHeight(2)
          }}
          onPress={() => onSelectTime("07:45 PM - 08:30 PM")}

        >
          <Text
            style={{
              color: (selectedTime == "07:45 PM - 08:30 PM" ? "white" : "black"),
              fontSize: responsiveFontSize(1.9)
            }}
          >07:45 PM - 08:30 PM</Text></TouchableOpacity>

      </View>
      <View style={{ flex: 1,
  justifyContent: 'flex-end',
  }}>
      <TouchableOpacity style={{}} 
      onPress={handleSubmission}>
      <View style={{color:'white',width:'90%',backgroundColor:'#175CA4',height:40 ,alignSelf:'center',alignItems:'center',justifyContent:'center',borderRadius:10}}>
            <Text style={{color:'white',fontWeight:"600"}}>
              Set Date & Time
            </Text>
      </View>
      </TouchableOpacity></View>
    </View>
  </ScrollView>
  )
}

export default Book_Appointment