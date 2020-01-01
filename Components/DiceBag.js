import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity, Image, StatusBar } from 'react-native';
import styles from '../styles'

import Die from './Die'

export default function DiceBag({ startDice }) {
  const [displayDice, setDisplayDice] = useState([])
  const [stnd, setStnd] = useState([4, 6, 8, 10, 12, 20])
  const [roll, setRoll] = useState({ value: null, color: '#000000' })
  const [dice, setDice] = useState(startDice.map(die => die === 'stnd' ? stnd : die).flat())
  // const [selectValue, setSelectValue] = useState(4)

  const renderDice = () => {
    let tempDisplayDice = dice.map((die, i) => (
      <Die key={i} sides={die} setMasterRoll={setRoll} />
    ))
    setDisplayDice(tempDisplayDice)
  }

  useEffect(() => {
    renderDice()
    styles.resultText.color = roll.color
  }, [])

  return (
    <View style={styles.container} >
      <Text style={styles.title}>Dice Bag</Text>
      <View style={styles.resultCont}>
        <Text style={styles.resultText}>
          {
            typeof roll === 'array' &&
            console.log(roll)
          }
          {roll.value}
        </Text>
      </View>
      <View style={styles.diceBag}>
        {displayDice}
      </View>
    </View>
  );
}