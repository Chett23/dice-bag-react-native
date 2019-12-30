import React, { useState } from 'react'
import { Text, TouchableOpacity, Button, View } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import styles from '../styles'

const imageRoutes = {
  4: require('../assets/4-sided.svg'),
  6: require('../assets/6-sided.svg'),
  8: require('../assets/8-sided.svg'),
  10: require('../assets/10-sided.svg'),
  12: require('../assets/12-sided.svg'),
  20: require('../assets/20-sided.svg'),
}


export default function Die({ sides, setMasterRoll }) {
  const [roll, setRoll] = useState(null)
  const [history, setHistory] = useState([])
  return (
    <View style={styles.dieCont}>
      <TouchableOpacity
        onPress={() => {
          let roll = Math.floor(Math.random() * Math.floor(sides) + 1)
          setRoll(roll)
          setMasterRoll(roll)
          setHistory([...history, roll])
        }}
        style={styles.die}
      >
        <SvgUri
          width="100"
          height="100"
          source={imageRoutes[sides]}
        />
      </TouchableOpacity>
      {history.length > 0 && <Button title='see history' onPress={() => setMasterRoll(history)} />}
      <Button title="reset" onPress={() => setRoll(null)} />
    </View>
  )
}
