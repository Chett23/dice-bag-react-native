import React, { useState } from 'react'
import { Text, TouchableOpacity, Button, View } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import styles from '../styles'

const svgInfo = {
  4: {
    img: require('../assets/4-sided.svg'),
    color: '#A874A4',
  },
  6: {
    img: require('../assets/6-sided.svg'),
    color: '#9CDCFE',
  },
  8: {
    img: require('../assets/8-sided.svg'),
    color: '#D7D7A6',
  },
  10: {
    img: require('../assets/10-sided.svg'),
    color: '#CE9178',
  },
  12: {
    img: require('../assets/12-sided.svg'),
    color: '#4f8dc0',
  },
  20: {
    img: require('../assets/20-sided.svg'),
    color: '#689553',
  },
}


export default function Die({ sides, setRoll }) {
  const [history, setHistory] = useState([])


  const getDieNameStyle = () => {
    return {
      color: svgInfo[sides].color,
      fontSize: 18,
    }
  }

  return (
    <View style={styles.dieCont}>
      <Text style={getDieNameStyle()}>{`${sides} sided`}</Text>
      <TouchableOpacity
        onPress={() => {
          let roll = Math.floor(Math.random() * Math.floor(sides) + 1)
          setRoll({ value: roll, color: svgInfo[sides].color })
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
      {/* {history.length > 0 && <Button title='show history' onPress={() => setRoll({ value: history, color: svgInfo[sides].color })} />} */}
    </View>
  )
}
