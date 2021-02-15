import React, { useState } from 'react';
import { useInput, Box, Text } from 'ink';

export const Robot = () => {
	const [x, setX] = useState(1);
	const [y, setY] = useState(1);

	useInput((_input: any, key: any) => {
		if (key.leftArrow) {
			setX(Math.max(1, x - 1));
		}

		if (key.rightArrow) {
			setX(Math.min(20, x + 1));
		}

		if (key.upArrow) {
			setY(Math.max(1, y - 1));
		}

		if (key.downArrow) {
			setY(Math.min(10, y + 1));
		}
	});

	return (
		<Box flexDirection="column">
			<Text>Use arrow keys to move the face. Press “q” to exit.</Text>
			<Box height={12} paddingLeft={x} paddingTop={y}>
				<Text color="green">^_^</Text>
			</Box>
		</Box>
	);
};
