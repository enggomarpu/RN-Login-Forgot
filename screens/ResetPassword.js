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


const ResetPassword = () => {

  return (
    <View style={styles.container}>
      <ScreenImage />
      <ScrollView style={gStyles.contentContainer}>
        <Text style={gStyles.screenTitle}>Reset Password</Text>

        <View style={gStyles.formGroup}>
          <LabelText labelText={`New Password`} />
          <PasswordField name={`newpassword`} placeholder="Enter new password" />
        </View>

        <View style={gStyles.formGroup}>
          <LabelText labelText={`Confirm Password`} />
          <PasswordField name={`confirmpassword`} placeholder="Enter confirm password" />
        </View>

         <RoundButton
          buttonColor="#536DFE"
          title="Save"
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

export default ResetPassword;






