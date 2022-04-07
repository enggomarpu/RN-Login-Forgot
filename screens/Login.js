import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

import { Button } from 'react-native-paper';
import RoundButton from "../components/RoundButton";
import LabelText from "../components/LabelText";
import TextField from "../components/TextField";
import PasswordField from "../components/PasswordField";
import { useTogglePasswordVisibility } from "../components/useTogglePassword";
import IconCircle from "../components/IconCircle";
import { Link } from "@react-navigation/native";

const image = { uri: "" };

const Login = () => {

  return (
    <View style={styles.container}>

      {/* <ImageBackground source={require('./assets/images/bg.jpeg')} resizeMode="cover" style={styles.image}>
      <View>
        <Image source={require('./assets/images/logo.jpeg')} style={styles.logo} />
        <Text>Pulsecare</Text>
      </View>
    </ImageBackground> */}
      <View style={styles.bg}>
        <Text style={styles.title}>Pulsecare</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.screenTitle}>Login To Your Account</Text>
        <View style={styles.formGroup}>
          <LabelText labelText={`Email`} />
          <TextField placeholder="johndoe@gmail.com" name="email" error="email required" />
        </View>
        <View style={styles.formGroup}>
          <LabelText labelText={`Password`} />
          <PasswordField name={`password`} placeholder="Enter password" />
          <Link style={styles.forgot} to="/home">Forgot Password?</Link>
        </View>

        <RoundButton
          buttonColor="#536DFE"
          title="Send"
          buttonStyle={{ width: '40%', alignSelf: 'center' }}
          textStyle={{ fontSize: 20 }}
          onPress={() => console.log('I am the first button')}
        />
        {/* --- OR --- */}
        <View style={styles.textBwLinesContainer}>
          <View style={{ flex: 0.4, height: 1, backgroundColor: 'black' }} />
          <Text style={{ width: 50, textAlign: 'center' }}>OR</Text>
          <View style={{ flex: 0.4, height: 1, backgroundColor: 'black' }} />
        </View>

        <View style={styles.iconContainer}>
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

        <Text style={styles.signupText}>Don't have any account <Link style={styles.forgot} to="/home">Signup</Link></Text>

      </View>
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
  formGroup:{
    marginVertical: 20
  },
  screenTitleContainer: {
    alignItems: 'center'
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E1C61',
    paddingTop: 20,
    paddingBottom: 40,
    alignSelf: 'center'
  },

  forgot: {
    textDecorationLine: "underline",
    color: "blue",
    paddingTop: 5,
  },
  signupText:{
    alignSelf: 'center',
    marginVertical: 10
  },
  textBwLinesContainer:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    marginVertical: 20,
  },
  inputTextStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#979797',
    // borderColor: '#979797',
    // borderWidth: 1,
    color: '#979797',
    padding: 5
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#979797',

  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: "space-evenly"
  },
  inputField: {
    padding: 5,
    fontSize: 14,
    width: '90%'
  },
  actionButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#386CF2',
    borderRadius: 20,

  },
  buttonOuterLayout: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLayout: {

    marginBottom: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  image: {
    width: '100%',
    height: 227,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default Login;






