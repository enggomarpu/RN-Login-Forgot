import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { gStyles } from '../globalStyles'
import LabelText from './LabelText'
import Select from './Select'
import TextField from './TextField'
import Icon from 'react-native-vector-icons/FontAwesome';


let data = [{ value: 'Banana', }, { value: 'Mango', }, { value: 'Pear' }];
const countries = ["Egypt", "Canada", "Australia", "Ireland"]

const PersonalDetails = () => {
  return (
    <View>
      <View style={styles.nameSection}>
        <Text style={styles.username}>Matt Henry</Text>
        <Image source={require('../assets/images/profile.png')} />
      </View>

      <View style={gStyles.formGroup}>
        <LabelText labelText={`Email`} />
        <TextField
          placeholder="johndoe@gmail.com"
          name="email"
          type='email'
        //onChange={(name, value) => console.log('name, value', name, value)}
        />
      </View>

      <View style={{ ...gStyles.formGroup, ...styles.twoColumns }}>
        <View style={{ flexBasis: '45%' }}>
          <LabelText labelText={`DOB`} />
          <Select placeholder='Select country' />
        </View>
        <View style={{ flexBasis: '45%' }}>
          <LabelText labelText={`Contact`} />
          <TextField
            placeholder="+93305978904"
            name="email"
          //onChange={(name, value) => console.log('name, value', name, value)}
          />
        </View>
      </View>

      <View style={gStyles.formGroup}>
        <LabelText labelText={`Address`} />
        <TextField
          placeholder="johndoe@gmail.com"
          name="email"
        //onChange={(name, value) => console.log('name, value', name, value)}
        />
      </View>

      <View style={{ ...gStyles.formGroup, ...styles.twoColumns }}>
        <View style={{ flexBasis: '45%' }}>
          <LabelText labelText={`Country`} />
          <Select placeholder='Select country' />
        </View>
        <View style={{ flexBasis: '45%' }}>
          <LabelText labelText={`State`} />
          <Select placeholder='Select state' />
        </View>
      </View>

      <View style={{ ...gStyles.formGroup, ...styles.twoColumns }}>
        <View style={{ flexBasis: '45%' }}>
          <LabelText labelText={`City`} />
          <Select placeholder='Select City' />
        </View>
        <View style={{ flexBasis: '45%' }}>
          <LabelText labelText={`Zipcode`} />
          <TextField
            placeholder="54000"
            name="zipcode"
          //onChange={(name, value) => console.log('name, value', name, value)}
          />
        </View>
      </View>


      <View style={gStyles.savaAction}>
        <Icon name='edit' size={20} color="gray" style={{ paddingHorizontal: 20}}/>
        <Pressable style={{marginHorizontal: 20}}><Text>Save Changes</Text></Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E1C61',
  },
  nameSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  dropdownStyle: {
    borderBottomColor: 'black',
    borderWidth: 1,
    flexBasis: '100%'
  },
  twoColumns: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
 
})

export default PersonalDetails