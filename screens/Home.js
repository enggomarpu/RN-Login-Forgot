import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import Icon from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const URI = 'https://rn-complete-guide-c94f3-default-rtdb.firebaseio.com/users.json'
const HomeScreen = () => {
  const { isLoading, error, data } = useQuery('firebaseUsers', () =>
    fetch(URI).then(res =>
      res.json()
    )
  )
  if(isLoading) return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ActivityIndicator size='large'></ActivityIndicator>
  </View>
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Icon name="search" size={30} color="#4F8EF7" />
      {/* <MaterialCommunityIcons name="home" size={30} color="#4F8EF7" /> */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.email}</Text>}
      />
    </View>
  );
}

export default HomeScreen