import React from 'react';
import { Countdown } from './counter'
import { Robot } from './input'


export const App = () => {
  return (
    <>
      <Countdown timer={3}>
        <Robot/>
      </Countdown>
    </>
  )
}