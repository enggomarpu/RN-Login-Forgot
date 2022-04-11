import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { gStyles } from '../globalStyles';
import ClearableTextField from './ClearableTextField';
import Icon from 'react-native-vector-icons/FontAwesome';



const MedicalDetails = () => {
  return (
    <View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Medical History</Text>
        <ClearableTextField name="historyOne"  placeholder="Enter detail" />
        <ClearableTextField name="historyTwo"  placeholder="Enter detail" />
        <ClearableTextField name="historyThree"  placeholder="Enter detail" />
      </View>

      <View  style={styles.section}>
        <Text style={styles.sectionTitle}>Medicines</Text>
        <ClearableTextField name="medicineOne"  placeholder="Enter medicine" />
        <ClearableTextField name="medicineTwo"  placeholder="Enter medicine" />
        
      </View>

      <View style={gStyles.savaAction}>
        <Icon name='edit' size={20} color="gray" style={{ paddingHorizontal: 20}}/>
        <Pressable style={{marginHorizontal: 20}}><Text>Save Changes</Text></Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  section:{
    marginVertical: 10
  },
  sectionTitle:{
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
    marginBottom: 10
  }
})

export default MedicalDetails