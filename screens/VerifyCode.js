import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from "react-native";
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import RoundButton from "../components/RoundButton";
import IconCircle from "../components/IconCircle";
import LabelText from "../components/LabelText";
import TextField from "../components/TextField";
import PasswordField from "../components/PasswordField";
import ScreenImage from "../components/ScreenImage";
import { gStyles } from '../globalStyles'
import { Link } from "@react-navigation/native";


const VerifyCode = () => {

  return (
    <View style={styles.container}>
      <ScreenImage />
      <ScrollView style={gStyles.contentContainer}>
        <Text style={gStyles.screenTitle}>Enter Verification Code</Text>
        <View style={gStyles.formGroup}>
          <LabelText labelText={`Verification Code`} />
          <TextField placeholder="xxxxxxxxxxx" name="codeverify" />
        </View>

         <RoundButton
          buttonColor="#536DFE"
          title="Send"
          buttonStyle={{ width: '40%', alignSelf: 'center' }}
          textStyle={{ fontSize: 20 }}
          onPress={() => console.log('I am the first button')}
        />   

      </ScrollView>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  
  
});

export default VerifyCode;






