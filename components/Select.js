import React from 'react'
import RNPickerSelect from "react-native-picker-select";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native'


const Select = ({
  placeholder
}) => {
  return (
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      placeholder={{ label: placeholder , value: null }}
      useNativeAndroidPickerStyle={false}
      items={[
        { label: "JavaScript", value: "JavaScript" },
        { label: "TypeScript", value: "TypeScript" },
        { label: "Python", value: "Python" },
        { label: "Java", value: "Java" },
        { label: "C++", value: "C++" },
        { label: "C", value: "C" },
      ]}
      style={{
        ...pickerSelectStyles, iconContainer: {
          top: 12,
          right: 10,
        },
      }}
      Icon={() => <Icon name='chevron-down' size={12} color="gray" />}
    />
  )
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    // paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    // paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#979797',
    // borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export default Select