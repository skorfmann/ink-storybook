import React, {useState, useEffect} from 'react';
import { Text, Box } from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

interface CountownProps {
  children: React.ReactElement
  timer: number;
}

export const Countdown = ({children, timer = 3}: CountownProps) => {
	const [counter, setCounter] = useState(timer);

	useEffect(() => {
		setTimeout(() => {
			setCounter(previousCounter => {
        if (previousCounter === 0) return previousCounter;

        return previousCounter - 1
      })
		}, 1000);
	}, [counter]);

  if (counter === 0) {
    return <>{children}</>
  }

	return (
    <>
      <Box justifyContent="center" >
        <Gradient name="rainbow">
          <BigText text="Ink v3"/>
        </Gradient>
      </Box>
      <Box justifyContent="center" >
        <Gradient name="rainbow">
          <BigText text="Xterm.js"/>
        </Gradient>
      </Box>
      <Box justifyContent="center" >
        <Text color="red">{counter}...</Text>
      </Box>
    </>
  )
};