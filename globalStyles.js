import { StyleSheet } from 'react-native'

export const gStyles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 20
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E1C61',
        paddingVertical: 30,
        alignSelf: 'center'
    },
    formGroup: {
        marginVertical: 20
    },
    textBwLinesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginVertical: 10
    },
    signupText: {
        alignSelf: 'center',
        marginVertical: 10
    },
    linkStyle: {
        textDecorationLine: "underline",
        color: "blue",
        paddingTop: 5,
    },
    savaAction:{
      backgroundColor: 'white',
      paddingVertical: 20,
      flexDirection: 'row',
      width: '100%'
    }

})