import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Home from './Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native'


const Tab = createBottomTabNavigator();

const ProfileScreen = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({ tabBarIcon: ({color, size}) => {
      if(route.name === 'Home'){
        return <Icon name='home' size={size} color={color} />
      }
      if(route.name === 'Call'){
        return <Icon name='phone' size={size} color={color} />
      }
      if(route.name === 'History'){
        return <Icon name='heartbeat' size={size} color={color} />
      }
      if(route.name === 'Profile'){
        return <Icon name='user' size={size} color={color} />
      }

     
      return null
    }})}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Call" component={Home} options={{title: 'Call History'}} />
      <Tab.Screen name="History" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default ProfileScreen
