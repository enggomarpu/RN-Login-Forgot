import React from 'react'
import { Text, ImageBackground, View, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import RoundButton from '../components/RoundButton';
import { data } from '../helpers/constants';

const Home = () => {
  return (
    <View>

      <ImageBackground style={styles.bgHeader} resizeMode="stretch" source={require('../assets/images/curvebackground.jpg')}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.welcomeText}>Welcome,</Text>
            <Text style={styles.welcomeText}>Mark</Text>
          </View>
          <Icon name='bell' size={35} color='yellow' />
          <View style={styles.profileSec}>
            <TouchableOpacity>
              <Image source={require('../assets/images/profile-img.png')} />
            </TouchableOpacity>
            <Icon name='ellipsis-v' size={30} color='white' style={{ marginLeft: 20 }} />
          </View>
        </View>
      </ImageBackground>

      <ScrollView style={styles.subContainer}>

        <View style={styles.scanSection}>
          <View style={styles.textCon}>
            <Text style={styles.percentageText}>{`${79.69}%`}</Text>
            <Text>Last Scan, 1hr 23min ago</Text>
          </View>
          <Image source={require('../assets/images/scan.png')} resizeMode="contain" />
        </View>

        <RoundButton
          buttonColor="#536DFE"
          title="Connect your doctor"
          buttonStyle={{ width: '60%', alignSelf: 'flex-start' }}
          textStyle={{ fontSize: 16 }}
          //onPress={() => props.navigation.navigate('ProfileScreen')}
        />

        <FlatList
          data={data}
          style={{marginBottom: 20}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => 
          <ImageBackground style={styles.sliderHori} resizeMode="cover" source={item.image}> 
            <Image style={styles.sliderLogo} resizeMode="cover" source={item.logo}/>
            <Text style={styles.sliderTitle}>{item.title}</Text>
            
           
            
            
          </ImageBackground>} 
          
          />
          

        <View style={styles.card}>
          <Text style={{ paddingBottom: 10 }}>21 Caregivers bid on your post</Text>
          <View style={styles.cardHeader}>
            <View style={styles.userDetails}>
              <Image source={require('../assets/images/profile-img.png')} />
              <View style={{ marginLeft: 16 }}>
                <Text style={styles.username}>John Honry</Text>
                <Text style={styles.designation}>Physiotherapist</Text>
              </View>
            </View>
            <Text>20 min ago</Text>
          </View>

          <View style={styles.cardBody}>
            <Text>Required Physiotherapist</Text>
            <Text>From 4:00 PM to 7:00 PM</Text>
            <Text>For 3 days</Text>
            <Text>Charges: 3000 PKR</Text>
          </View>

          <View style={styles.cardFooter}>
            <Text>Bid 21</Text>
          </View>

        </View>




      </ScrollView>

    </View>
  )
}
const styles = StyleSheet.create({
  bgHeader: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    // alignItems: 'center'
  },
  welcomeText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 20
  },
  subContainer: {
    paddingHorizontal: 20
  },
  scanSection: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  },
  textCon: {
    marginLeft: 20
  },
  percentageText: {
    color: 'red', fontSize: 25,
    fontWeight: 'bold'
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10
  },
  userDetails: {
    flexDirection: 'row'
  },
  username: {
    color: '#0033B7',
    fontSize: 16,
    fontWeight: 'bold'
  },
  designation:{
    color: '#5E5A5A',
    fontSize: 14
  },
  cardBody: {
    marginLeft: 20,
    paddingVertical: 10
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  sliderHori:{
    width: 140,
    height: 200,
    marginHorizontal: 8,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red",
    borderRadius: 20,
    position:'relative'
  },
  sliderTitle:{
    position: 'absolute',
    bottom: 10,
    color: 'white',
    marginLeft: 10
  },
  sliderLogo:{
    position: 'absolute',
    top: 10,
    borderWidth: 2,
    borderColor: '#304FFE',
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 40
  }
  



})
export default Home