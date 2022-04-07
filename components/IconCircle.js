import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
// import { Linking } from 'react-native';


const IconCircle = ({ borderColor, bgColor, children }) => {
//   <Text style={{color: 'blue'}}
//       onPress={() => Linking.openURL('http://google.com')}>
//   Google
// </Text>

  return (
    <TouchableOpacity
      style={{...styles.circle, backgroundColor: bgColor || '#512DA8', borderColor: borderColor || '#000'  }}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 0.5 * 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  }
})
export default IconCircle