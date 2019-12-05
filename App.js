import React, { useState } from 'react';
import DiceBag from './Components/DiceBag'

export default function App() {
  return (
    <DiceBag startDice={['stnd']} />
  );
}