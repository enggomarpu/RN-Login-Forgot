import React from 'react';
import { Text, StyleSheet } from 'react-native'

const LabelText = ({
  labelText
}) => {
  return (
    <Text style={styles.labelText}>{labelText}</Text>
  )
}

const styles = StyleSheet.create({
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E1C61'
  },
})
export default LabelText