import React from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import RoundButton from '../components/RoundButton'

const GetStarted = () => {
  const { width, height } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 50 }}>
        <Text style={styles.heading}>Choose The Doctor You Want</Text>
        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
        <RoundButton
          buttonColor="#EF716B"
          title="Get Started"
          buttonStyle={{ width: '40%', alignSelf: 'flex-start' }}
          textStyle={{ fontSize: 20 }}
        />
      </View>
      <View style={{alignSelf: 'flex-end', alignItems: 'flex-end'}}>
      <Image source={require('../assets/images/illustration.png')} 
      style={{...styles.imageStyle, width: width}} />
      
      </View>
      
    </View>

  )
}
const styles = StyleSheet.create({
  container:{
    //flex: 1,
  justifyContent: 'space-between',
  
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E1C61'
  },
  text: {
    marginTop: 20
  },
  sectionImage:{
    height:  220
  },
  imageStyle:{
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    alignItems: 'flex-end'
  }
})
export default GetStarted
