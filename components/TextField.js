import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


const TextField = ({
  name,
  placeholder,
  error
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        name={name}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="newPassword"
        secureTextEntry={false}
        //value={password}
        enablesReturnKeyAutomatically
      //onChangeText={text => setPassword(text)}
      />
      {(error && typeof error === 'string') &&
        <Icon name="error" size={22} color="red" />}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#979797',

  },
  inputField: {
    padding: 5,
    fontSize: 14,
    width: '90%'
  },
})
export default TextField