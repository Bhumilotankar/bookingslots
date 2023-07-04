import React from 'react';
import { View, Text, Button } from 'react-native';

const Dummy = ({ language, onLanguageChange }) => {
  const saveLanguage = (lang) => {
    onLanguageChange(lang);
  };

  return (
    <View>
      <Text>Slide 3</Text>
      <Text>Selected Language: {language}</Text>
      <Button title="English" onPress={() => saveLanguage('english')} />
      <Button title="French" onPress={() => saveLanguage('french')} />
    </View>
  );
};

export default Dummy;
