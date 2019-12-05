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


export default function Die({ sides }) {
  const [roll, setRoll] = useState(null)
  return (
    <>
      <TouchableOpacity onPress={() => setRoll(Math.floor(Math.random() * Math.floor(sides) + 1))} >
        <SvgUri
          width="50"
          height="50"
          source={imageRoutes[sides]}
        />
      </TouchableOpacity>
      <View>
        {roll && <Text style={styles.text}>{roll}</Text>}
      </View>
      <Button title="reset" onPress={() => setRoll(null)} />
    </>
  )
}
