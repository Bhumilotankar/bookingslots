import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
// import { Calendar } from 'react-native-calendars'
import Calendar from './Calendar'
const Book_Appointment = () => {
  const [APIData, setAPIData] = useState([]);

  useEffect(()=>{
    APIgetData();
  })

  console.log('data');
  const APIgetData = async () => {
    const response = await fetch('https://www.myjsons.com/v/e56b1373');
    const jsonData = await response.json();
    setAPIData(jsonData.items);
    if(APIData){
      console.log("printed");
    }
  };

const [onSelectDate, setOnselectDate]=useState('')
  return (
    <View>
      <Calendar onSelectDate={setOnselectDate} selected={onSelectDate}/>
      <Text>{onSelectDate}</Text>
    </View>
  )
}

export default Book_Appointment