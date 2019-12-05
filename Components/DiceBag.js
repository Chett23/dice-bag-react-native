import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity, Image, StatusBar } from 'react-native';
import styles from '../styles'

import Die from './Die'

export default function DiceBag({ startDice }) {
  const [displayDice, setDisplayDice] = useState([])
  const [stnd, setStnd] = useState([4, 6, 8, 10, 12, 20])
  const [roll, setRoll] = useState(null)
  const [dice, setDice] = useState(startDice.map(die => die === 'stnd' ? stnd : die).flat())
  // const [selectValue, setSelectValue] = useState(4)

  const renderDice = () => {
    let tempDisplayDice = dice.map((die, i) => (
      <Die key={i} sides={die} />
    ))
    setDisplayDice(tempDisplayDice)
  }

  useEffect(() => {
    renderDice()
  }, [])

  return (
    <View style={styles.container} >
      <View style={styles.mainCont}>
        <Text style={styles.title}>Dice Bag</Text>
        {displayDice}
      </View>
    </View>
  );
}