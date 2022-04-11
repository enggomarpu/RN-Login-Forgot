import React from 'react'
import { Image, StyleSheet } from 'react-native'

const ScreenImage = () => {
    return (
        <Image source={require('../assets/images/bg.jpeg')}  style={styles.image}></Image>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 227,
        resizeMode: "stretch",
        margin: 0
      },
})
export default ScreenImage