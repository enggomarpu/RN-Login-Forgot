import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity } from "react-native";
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import RoundButton from "../components/RoundButton";
import LabelText from "../components/LabelText";
import TextField from "../components/TextField";

const image = { uri: "" };

const Login = () => (
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
      <LabelText labelText={`Email`} />
      <TextField  placeholder="johndoe@gmail.com" name="email" error="email required"/>
       <LabelText labelText={`Password`} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          name="password"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry={true}
          //value={password}
          enablesReturnKeyAutomatically
        //onChangeText={text => setPassword(text)}
        />
        <Pressable>
          <Icon name="eye" size={22} color="#232323" />
        </Pressable>
      </View>

     <TextField  placeholder="johndoe@gmail.com" name="email" error="email required"/>

      <RoundButton
        buttonColor="#536DFE"
        title="SEND"
        buttonStyle={{width: '40%', alignSelf: 'center'}}
        textStyle={{fontSize: 20}}
        onPress={() => console.log('I am the first button')}
      />
      
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E1C61',
    paddingTop: 20,
    paddingBottom: 40,
    alignSelf: 'center'
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






