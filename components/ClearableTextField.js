import React, { useState } from 'react'
import { TextInput, View, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import getKeyBoardType from '../helpers/getKeyBoardType';


const ClearableTextField = ({
  name,
  placeholder,
  onChange,
  changeStyle,
  type
}) => {
  const [isEditableInput, setIsEditableInput] = useState(false)
  return (
    <View style={{...styles.inputContainer, ...changeStyle}}>
      <TextInput
        style={{...styles.inputField }}
        name={name}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        editable={isEditableInput}
        textContentType="newPassword"
        secureTextEntry={false}
        keyboardType={getKeyBoardType(type)}
        //value={password}
        blurOnSubmit={false}
      //enablesReturnKeyAutomatically
      //onChangeText={ (value) => onChange(name, value) }
      />
      <Pressable onPress={() => setIsEditableInput(!isEditableInput)} style={{ marginRight: 10 }}>
        <Icon name="pencil" size={20}  color="gray" />
      </Pressable>

      <Pressable>
        <Icon name="close" size={20} color="gray" />
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
    marginVertical: 8

  },
  inputField: {
    padding: 5,
    fontSize: 14,
    width: '85%'
  },
  iconSpacing: {
    marginHorizontal: 5
  }
})
export default ClearableTextField