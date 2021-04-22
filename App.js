/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {
  View, StyleSheet,
} from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <SafeAreaView /> */}

      <View style={[styles.boxContainer, styles.boxTop]}>
        <View style={styles.boxItemTop} />
        <View style={styles.boxItemTop} />
      </View>

      <View style={styles.boxMid} />

      <View style={[styles.boxContainer, styles.boxBottom]}>
        <View style={styles.boxFlex}>
          <View style={styles.boxItemBottom} />
          <View style={styles.boxItemBottom} />
        </View>
        <View style={styles.boxFlex}>
          <View style={styles.boxItemBottom} />
          <View style={styles.boxItemBottom} />
        </View>

        {/* <SafeAreaView /> */}
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    flex: 40,
    borderRadius: 14,
  },
  boxTop: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#A1c99A',
  },
  boxBottom: {
    justifyContent: 'space-evenly',
    backgroundColor: '#c8c8fA',
  },
  boxMid: { flex: 3 },
  colorBox1: {
    backgroundColor: '#3D85C6',
  },
  boxItemTop: {
    backgroundColor: '#ffffc2',
    width: 360,
    height: 120,
    borderRadius: 14,
  },
  boxItemBottom: {
    backgroundColor: '#4f82c0',
    width: 155,
    height: 155,
    borderRadius: 14,
  },
  boxFlex: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },

})
export default App
