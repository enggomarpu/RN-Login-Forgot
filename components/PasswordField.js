import React from 'react'
import { TextInput, View, StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useTogglePasswordVisibility } from './useTogglePassword';


const PasswordField = ({
  name,
  placeholder,
  
}) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        name={name}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="newPassword"
        secureTextEntry={passwordVisibility}
        //value={password}
        enablesReturnKeyAutomatically
      //onChangeText={text => setPassword(text)}
      />
        <Pressable onPress={handlePasswordVisibility}>
          <Icon name={rightIcon} size={22} color="#232323" />
        </Pressable>
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
export default PasswordField