import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import HomeScreen from './screens/Home';
import Login from './screens/Login';
import { Text } from "react-native";


const queryClient = new QueryClient()

const Stack = createStackNavigator();
const linking = {
  prefixes: [
    /* your linking prefixes */
  ],
  config: {
    /* configuration for matching screens with paths */
    screens: {
      Home: 'home',
      Login: 'login',
    },
  },
};
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <Stack.Navigator>
         
          <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
export default App