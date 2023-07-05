import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

const Works = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [longDesc, setLongDesc] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [showLongDesc, setShowLongDesc] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.myjsons.com/v/f29b1312');
      const data = await response.json();
      const imageUrl = data.items[0].en.howBynocsWork.image;
      const longDescription = data.items[0].en.howBynocsWork.longdesc;
      const shortDescription = data.items[0].en.howBynocsWork.shortdesc;
      setBackgroundImage(imageUrl);
      setLongDesc(longDescription);
      setShortDesc(shortDescription);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const toggleLongDesc = () => {
    setShowLongDesc(!showLongDesc);
  };

  const handleSkip = () => {
    // Handle skip button action here
    console.log('Skip button pressed');
  };

  return (
    <View style={styles.container}>
      {backgroundImage && (
        <ImageBackground source={{ uri: backgroundImage }} style={styles.imageBackground}>
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
          <View style={styles.overlay}>
            <Text style={styles.title}>How Bynocs Works</Text>
            <ScrollView contentContainerStyle={styles.scrollView}>
            {showLongDesc ? (
              <Text style={styles.description}>{longDesc}</Text>
            ) : (
              <Text style={styles.shortDescription}>{shortDesc}</Text>
            )}
            </ScrollView>
            <TouchableOpacity onPress={toggleLongDesc} style={styles.arrowContainer}>
              <Image
                source={showLongDesc ? require('./assets/up.jpeg') : require('./assets/down.jpeg')}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ENQUIRY</Text>
            </TouchableOpacity>
          </View>
          <Swiper
            style={styles.carouselContainer}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            paginationStyle={styles.pagination}
          >
            {/* Add your carousel slides here */}
            <View style={styles.slide}>
              <Text>Slide 1</Text>
            </View>
            <View style={styles.slide}>
              <Text>Slide 2</Text>
            </View>
            <View style={styles.slide}>
              <Text>Slide 3</Text>
            </View>
          </Swiper>
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: '#ffff',
    padding: 5,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 360,
    marginBottom:120,
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#175CA4',
    borderWidth: 1,
  },
  skipButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  skipButtonText: {
    color: 'black',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#175CA4',
    marginBottom: 10,
  },
  shortDescription: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  arrowContainer: {
    marginTop: 10,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: 161,
    height: 50,
    backgroundColor: '#175CA4',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  carouselContainer: {
    position: 'absolute',
    bottom: 70, // Adjust this value to set the position of the carousel
    width: '100%',
    height: 50, // Adjust this value to set the height of the carousel
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: 'rgba(23, 92, 164, 0.48)',
    backgroundColor: '#9DC2E9',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    width: 17,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#175CA4',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  pagination: {
    bottom:90,
  },
});

export default Works;