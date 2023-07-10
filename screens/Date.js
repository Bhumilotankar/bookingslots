import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions'

const Date = ({ date, onSelectDate, selected }) => {
  
  /**
   * use moment to compare the date to today
   * if today, show 'Today'
   * if not today, show day of the week e.g 'Mon', 'Tue', 'Wed'
   */
  const day = moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? 'Today' : moment(date).format('ddd')
  // get the day number e.g 1, 2, 3, 4, 5, 6, 7
  const dayNumber = moment(date).format('D')

  // get the full date e.g 2021-01-01 - we'll use this to compare the date to the selected date
  const fullDate = moment(date).format('YYYY-MM-DD')
  return (
    <TouchableOpacity
      onPress={() => onSelectDate(fullDate)}
      style={[styles.card, selected === fullDate && { backgroundColor: "#175CA4" }]}
    >
      <Text
        style={[styles.big, selected === fullDate && { color: "#fff" }]}
      >
        {day}
      </Text>
      <View style={{ height: 10 }} />
      <Text
        style={[
          styles.medium,
          selected === fullDate && { color: "#fff", fontWeight: 'bold', fontSize: responsiveFontSize(2.8)},
        ]}
      >
        {dayNumber}
      </Text>
    </TouchableOpacity>
  )
}

export default Date

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    // borderRadius: 20,
    borderColor: '#ddd',
    padding: 10,
    // marginVertical: 2,
    alignItems: 'center',
    height: responsiveHeight(15),
    width: responsiveWidth(23),
    marginHorizontal: 5,
  },
  big: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.8),
    color:'black'
  },
  medium: {
    fontSize: responsiveFontSize(2.8),
    color:'black'
  },
})