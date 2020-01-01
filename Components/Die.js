import React, { useState } from 'react'
import { Text, TouchableOpacity, Button, View } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import styles from '../styles'

const svgInfo = {
  4: {
    img: require('../assets/4-sided.svg'),
    color: '#D5A021',
  },
  6: {
    img: require('../assets/6-sided.svg'),
    color: '#335C67',
  },
  8: {
    img: require('../assets/8-sided.svg'),
    color: '#A0191F',
  },
  10: {
    img: require('../assets/10-sided.svg'),
    color: '#96A495',
  },
  12: {
    img: require('../assets/12-sided.svg'),
    color: '#785589',
  },
  20: {
    img: require('../assets/20-sided.svg'),
    color: '#708209',
  },
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
          source={svgInfo[sides].img}
        />
      </TouchableOpacity>
      {history.length > 0 && <Button title='see history' onPress={() => setMasterRoll(history)} />}
    </View>
  )
}
