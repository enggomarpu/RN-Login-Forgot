import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from "react-native";
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import RoundButton from "../components/RoundButton";
import LabelText from "../components/LabelText";
import TextField from "../components/TextField";
import PasswordField from "../components/PasswordField";
import IconCircle from "../components/IconCircle";
import { Link } from "@react-navigation/native";
import ScreenImage from "../components/ScreenImage";
import { gStyles } from '../globalStyles'

const Login = (props) => {

  return (
    <View style={styles.container}>
    <ScreenImage />
      
      <ScrollView style={styles.contentContainer}>
        <Text style={gStyles.screenTitle}>Login To Your Account</Text>
        <View style={gStyles.formGroup}>
          <LabelText labelText={`Email`} />
          <TextField
            placeholder="johndoe@gmail.com"
            name="email"
            error="email required"
            //onChange={(name, value) => console.log('name, value', name, value)}
          />
        </View>
        <View style={gStyles.formGroup}>
          <LabelText labelText={`Password`} />
          <PasswordField name={`password`} placeholder="Enter password" />
          <Link style={gStyles.linkStyle} to="/verifyemail">Forgot Password?</Link>
        </View>

        <RoundButton
          buttonColor="#536DFE"
          title="Login"
          buttonStyle={{ width: '40%', alignSelf: 'center' }}
          textStyle={{ fontSize: 20 }}
          onPress={() => props.navigation.navigate('ProfileScreen')}
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

        <Text style={gStyles.signupText}>Don't have any account? <Link style={gStyles.linkStyle} to="/signup">Signup</Link></Text>

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
  
  screenTitleContainer: {
    alignItems: 'center'
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






