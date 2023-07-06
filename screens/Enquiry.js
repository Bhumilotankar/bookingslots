import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, Modal, Alert, Dimensions } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import enquiry_style from '../styles/enquiry_style';

const Enquiry = () => {
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [comments, setComments] = useState('');
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);

    const { height, width } = Dimensions.get('window');

    const genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
    ];

    const handleDateSelect = (date) => {
        const selectedDate = date.dateString;
        const [year, month, day] = selectedDate.split('-');
        const formattedDate = `${day}-${month}-${year}`;
        setBirthDate(formattedDate);
        setIsCalendarVisible(false);
    };

    const handleSubmission = () => {
        if (!name || !birthDate || !gender || !contactNumber || !email || !country || !city || !comments) {
            Alert.alert('Error', 'Please fill in all required fields');
            return;
        }

        const formData = {
            name,
            birthDate,
            gender,
            contactNumber,
            email,
            country,
            city,
            comments,
        };

        // Make API call or perform form submission here
        fetch('https://retoolapi.dev/996BrF/enquiry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    Alert.alert('Success', 'Form submitted successfully');
                    // Reset form after successful submission
                    setName('');
                    setBirthDate('');
                    setGender('')
                    setContactNumber('');
                    setEmail('');
                    setCountry('');
                    setCity('');
                    setComments('');
                } else {
                    Alert.alert('Error', 'An error occurred while submitting the form');
                }
            })
            .catch((error) => {
                console.error(error);
                Alert.alert('Error', 'An error occurred while submitting the form');
            });
    };

    return (
        <ScrollView contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: '#fff',
            // paddingVertical: 20,
            // paddingHorizontal: 16,
        }}>
            <Text style={enquiry_style.maintext}>Enquiry Page</Text>

            <View style={{}}>
                <Text style={enquiry_style.text}>Full Name</Text>
                <TextInput
                    style={enquiry_style.input}
                    //   placeholder="Enter your name"
                    value={name}
                    onChangeText={setName}
                />
            </View>

            {/* <View> */}
            <TouchableOpacity style={{}} onPress={() => setIsCalendarVisible(true)}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text style={enquiry_style.text}>Birth Date</Text>
                        <TextInput
                            style={enquiry_style.inputBirth}
                            //   placeholder="Birth Date"
                            value={birthDate}
                            editable={false}
                        />
                    </View>
                    <View style={{ top: 9 }}>
                        <Icon name="calendar" size={24} color="#175CA4" style={{ marginRight: 10 }} />
                    </View>
                </View>
            </TouchableOpacity>

            <Text style={enquiry_style.text}>Gender</Text>

            <RadioForm formHorizontal style={{}}>
                {genderOptions.map((option, index) => (
                    <View key={index} style={{ marginTop: 5 }}>
                        <RadioButton labelHorizontal>
                            <RadioButtonInput
                                obj={option}
                                index={index}
                                isSelected={gender === option.value}
                                onPress={() => setGender(option.value)}
                                borderWidth={1}
                                buttonInnerColor="#175CA4"
                                buttonOuterColor="#175CA4"
                                buttonSize={8}
                                buttonOuterSize={15}
                                buttonStyle={{}}
                                buttonWrapStyle={{ marginLeft: 20, marginRight: 5, top: 2 }}
                            />

                            <RadioButtonLabel
                                obj={option}
                                index={index}
                                labelHorizontal
                                onPress={() => setGender(option.value)}
                                labelStyle={{color:'black'}}
                                labelWrapStyle={{ marginRight: 20}}
                            />
                        </RadioButton>
                    </View>
                ))}
            </RadioForm>

            <Text style={enquiry_style.textcontact}>Contact</Text>

            <View style={{ top: 15 }}>
                <Text style={enquiry_style.textaftercontact}>Phone Number</Text>
                <TextInput
                    style={enquiry_style.inputaftercontact}
                    maxLength={10}
                    //   placeholder="Enter your contact number"
                    value={contactNumber}
                    onChangeText={setContactNumber}
                    keyboardType="numeric"
                />
            </View>

            <View style={{ top: 15 }}>
                <Text style={enquiry_style.textaftercontact}>Email</Text>
                <TextInput
                    style={enquiry_style.inputaftercontact}
                    //   placeholder="Enter your contact number"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
            </View>

            <View style={{ top: 15 }}>
                <Text style={enquiry_style.textaftercontact}>Country</Text>
                <TextInput
                    style={enquiry_style.inputaftercontact}
                    //   placeholder="Enter your contact number"
                    value={country}
                    onChangeText={setCountry}
                />
            </View>

            <View style={{ top: 15 }}>
                <Text style={enquiry_style.textaftercontact}>City</Text>
                <TextInput
                    style={enquiry_style.inputaftercontact}
                    //   placeholder="Enter your contact number"
                    value={city}
                    onChangeText={setCity}
                />
            </View>

            <View style={{ top: 15 }}>
                <Text style={enquiry_style.textaftercontact}>Comments</Text>
                <TextInput
                    style={enquiry_style.inputaftercontact}
                    //   placeholder="Enter your contact number"
                    value={comments}
                    onChangeText={setComments}
                />
            </View>


            {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your country"
          value={country}
          onChangeText={setCountry}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your city"
          value={city}
          onChangeText={setCity}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter your comments"
        value={comments}
        onChangeText={setComments}
        multiline
        numberOfLines={4}
      /> */}
            <View style={{paddingLeft:20, paddingRight:20}}>
                <TouchableOpacity style={enquiry_style.touchableOpacity} onPress={handleSubmission}>
                    <Text style={enquiry_style.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={isCalendarVisible} animationType="slide">
                <View style={enquiry_style.calendarContainer}>
                    <View style={enquiry_style.calendarHeader}>
                        <Text style={enquiry_style.calendarHeaderText}>Select Date</Text>
                        <TouchableOpacity onPress={() => setIsCalendarVisible(false)}>
                            <Icon name="close" size={24} color="white" style={enquiry_style.closeIcon} />
                        </TouchableOpacity>
                    </View>
                    <Calendar onDayPress={handleDateSelect}/>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default Enquiry;