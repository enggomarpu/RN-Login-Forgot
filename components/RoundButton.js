import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const RoundButton = ({
  title,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={{...styles.button, ...buttonStyle, backgroundColor: buttonColor || '#512DA8' }}
      onPress={onPress}>
     <Text style={{...styles.text, ...textStyle, color: titleColor || "#fff"}}> {title} </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    backgroundColor: '#512DA8',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  },
  text: {
    color: "#fff",
    fontSize: 16,
    textTransform: 'capitalize'
  }
});
export default RoundButton