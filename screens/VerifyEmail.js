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


const VerifyEmail = (props) => {

  return (
    <View style={styles.container}>
      <ScreenImage />
      <ScrollView style={gStyles.contentContainer}>
        <Text style={gStyles.screenTitle}>Verify Your Email</Text>

         <Text style={{alignSelf: 'center', marginVertical: 20}}>We will send you the link to reset your password.</Text>   

        <View style={gStyles.formGroup}>
          <LabelText labelText='Email' />
          <TextField  placeholder="johndoe@gmail.com" name="email" />
        </View>

         <RoundButton
          buttonColor="#536DFE"
          title="Confirm"
          buttonStyle={{ width: '40%', alignSelf: 'center' }}
          textStyle={{ fontSize: 20 }}
          onPress={() => props.navigation.navigate('ResetPassword')}
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

export default VerifyEmail;






