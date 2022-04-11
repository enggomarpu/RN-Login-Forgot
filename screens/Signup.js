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


const Signup = (props) => {

  return (
    <View style={styles.container}>
      <ScreenImage />
      <ScrollView style={gStyles.contentContainer}>
        <Text style={gStyles.screenTitle}>Signup</Text>
        <View style={gStyles.formGroup}>
          <LabelText labelText={`Full name`} />
          <TextField placeholder="John Doe" name="fullname" />
        </View>
        <View style={gStyles.formGroup}>
          <LabelText labelText={`Email`} />
          <TextField placeholder="johndoe@gmail.com" name="email"  />
        </View>
        <View style={gStyles.formGroup}>
          <LabelText labelText={`Password`} />
          <PasswordField name={`password`} placeholder="Enter password" />
        </View>
        <View style={gStyles.formGroup}>
          <LabelText labelText={`Confirm Password`} />
          <PasswordField name={`confirmpassword`} placeholder="Enter confirm password" />
        </View>

         <RoundButton
          buttonColor="#536DFE"
          title="Signup"
          buttonStyle={{ width: '40%', alignSelf: 'center' }}
          textStyle={{ fontSize: 20 }}
          onPress={() => props.navigation.navigate('Verify')}
        />   

         {/* --- OR --- */}
         <View style={gStyles.textBwLinesContainer}>
          <View style={{ flex: 0.4, height: 1, backgroundColor: 'black' }} />
          <Text style={{ width: 50, textAlign: 'center' }}>OR</Text>
          <View style={{ flex: 0.4, height: 1, backgroundColor: 'black' }} />
        </View>

        <View style={gStyles.iconContainer}>
          <IconCircle bgColor="blue" borderColor="blue">
            <FaIcon name="facebook" color={`white`} size={30} />
          </IconCircle>
          <IconCircle bgColor="white" borderColor="blue">
            <FaIcon name="apple" color={`black`} size={30} />
          </IconCircle>
          <IconCircle bgColor="white" borderColor="blue">
            <FaIcon name="google" color={`black`} size={30} />
          </IconCircle>
        </View>

        <Text style={gStyles.signupText}>Don't have any account? <Link style={gStyles.linkStyle} to="/login">Login</Link></Text>

      </ScrollView>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  bg: {
    backgroundColor: '#3B72FF',
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    paddingHorizontal: 20
  },
  
});

export default Signup;






