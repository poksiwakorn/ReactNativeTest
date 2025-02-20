import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerZone}>
      <Text style={styles.headerText}>To-Do-List</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerZone: {
        backgroundColor: '#141414',
        padding: 20,
        marginTop: 50
    },
    headerText: {
        fontSize: 40,
        color: 'white'
    }
})