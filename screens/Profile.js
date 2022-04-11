import React, { useState } from 'react'
import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native'
import MedicalDetails from '../components/MedicalDetails'
import PersonalDetails from '../components/PersonalDetails'
import { gStyles } from '../globalStyles'


const tabArray = [{ value: 'PERSONAL', label: 'Personal info' }, { value: 'PROFESSIONAL', label: 'Professional info' },
{ value: 'PAYMENT', label: 'Payment info' }]

const content = {
  PERSONAL: <PersonalDetails />,
  PROFESSIONAL: <MedicalDetails />,
  PAYMENT: <Text>Payment</Text>
}
const Profile = () => {
  const [activeTab, setActiveTab] = useState('PERSONAL')


  return (
    <View style={styles.container}>
      <Text style={{ ...gStyles.screenTitle, color: 'black' }}>Profile details</Text>
      <View style={styles.buttonContainer}>
        {tabArray.map((item) => {
          return (
            <Pressable style={{ ...styles.tabBtn, backgroundColor: activeTab === item.value ? '#3b72ff' : 'white' }}
              onPress={() => setActiveTab(item.value)} key={item.value}>
              <Text style={{ color: activeTab === item.value ? '#fff' : '#000' }}>{item.label}</Text>
            </Pressable>
          )
        })}
      </View>

      <ScrollView style={styles.contentContainer}>
        {content[activeTab]}
      </ScrollView>
        {/* <BottomTabs /> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  tabBtn: {
    paddingHorizontal: 12,
    borderRadius: 20,
    paddingVertical: 10
  },
  contentContainer: {
    marginVertical: 20,
    paddingHorizontal: 20
  }
})
export default Profile