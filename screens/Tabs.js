import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';

function FirstScreen() {
    return (
        <View>
            <Text>First Screen</Text>
        </View>
    );
}

function SecondScreen() {
    return (
        <View>
            {/* Content for the second screen */}
        </View>
    );
}

function ThirdScreen() {
    return (
        <View>
            {/* Content for the third screen */}
        </View>
    );
}

function FourthScreen() {
    return (
        <View>
            {/* Content for the fourth screen */}
        </View>
    );
}

function FifthScreen() {
    return (
        <View>
            {/* Content for the fifth screen */}
        </View>
    );
}

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ iconName, onPress, isFocused }) => (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5, // Move the container slightly down
    }}
  >
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isFocused ? '#175CA4' : 'transparent',
        borderRadius: 8,
        borderWidth: 5,
        borderColor: 'transparent',
        elevation: isFocused ? 15 : 0,
        shadowColor: '#f83287',
        shadowOpacity: isFocused ? 1 : 0,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 1,
        marginTop: 5, // Move the button slightly down
      }}
      onPress={onPress}
    >
      <Icon name={iconName} size={25} color={isFocused ? 'white' : '#D3D3D3'} />
    </TouchableOpacity>
  </View>
  

);

export default function Tabb() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false, // Hide the label of the active tab
                    style: {
                        borderTopWidth: 0,
                        elevation: 10,
                        
                    },
                    tabStyle: {
                        justifyContent: 'center', // Center the tab contents vertically
                    }
                }}
                tabBar={(props) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            height:60,
                          

                        }}
                    >
                        <CustomTabBarButton
                            onPress={() => props.navigation.navigate('First')}
                            iconName="home"
                            isFocused={props.state.index === 0}
                        />
                        <CustomTabBarButton
                            onPress={() => props.navigation.navigate('Second')}
                            iconName="chat"
                            isFocused={props.state.index === 1}
                        />
                        <CustomTabBarButton
                            onPress={() => props.navigation.navigate('Third')}
                            iconName="event"
                            isFocused={props.state.index === 2}
                        />
                        <CustomTabBarButton
                            onPress={() => props.navigation.navigate('Fourth')}
                            iconName="shield"
                            isFocused={props.state.index === 3}
                        />
                        <CustomTabBarButton
                            onPress={() => props.navigation.navigate('Fifth')}
                            iconName="more-horiz"
                            isFocused={props.state.index === 4}
                        />
                    </View>
                )}
            >
                <Tab.Screen name="First" component={FirstScreen} />
                <Tab.Screen name="Second" component={SecondScreen} />
                <Tab.Screen name="Third" component={ThirdScreen} />
                <Tab.Screen name="Fourth" component={FourthScreen} />
                <Tab.Screen name="Fifth" component={FifthScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}