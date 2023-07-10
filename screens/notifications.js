import {Text, View, ScrollView} from 'react-native';
import {useEffect, useState} from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Notifications = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await fetch('https://www.myjsons.com/v/d1ee1370')
      .then((data) => data.json())
      .then((response) => {
        setApiData(response.notifications);
      });
  };

  return (
    <ScrollView>
      {apiData.map((item, index) => (
        <View key={index}>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: "#fff",
              width: responsiveWidth(90),
              marginLeft: responsiveWidth(5),
              marginTop: responsiveHeight(2),
              paddingHorizontal: responsiveWidth(3),
              paddingVertical: responsiveHeight(2),
            }}
          >
            <Text style={{fontSize:responsiveFontSize(2.5),fontWeight:'bold',color:'black'}}>{item.title}</Text>
            <Text style={{fontSize:responsiveFontSize(1.8),color:'black'}}>{item.blogs}</Text>
            <Text style={{fontSize:responsiveFontSize(1.7),color:'black',textAlign:'right'}}>{item.date}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

export default Notifications;
