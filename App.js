import React from 'react'
import Login from './screens/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';

const Stack = createStackNavigator();
import { Text } from 'react-native'
import Signup from './screens/Signup';
import VerifyCode from './screens/VerifyCode';
import VerifyEmail from './screens/VerifyEmail';
import ResetPassword from './screens/ResetPassword';
import Profile from './screens/Profile';
import ProfileScreen from './screens/ProfileScreen';
import GetStarted from './screens/GetStarted';

const linking = {
  prefixes: [
    /* your linking prefixes */
  ],
  config: {
    /* configuration for matching screens with paths */
    screens: {
      Home: 'home',
      Login: 'login',
      Signup: 'signup',
      Verify: 'verify',
      VerifyEmail: 'verifyemail',
      ResetPassword: 'resetpassword'
    },
  },
};
const App = () => {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        {/* <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Verify" component={VerifyCode} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App