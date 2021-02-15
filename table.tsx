import React from 'react'
import Chance  from 'chance';
import { Box, Text} from 'ink';

const chance = new Chance();

const users = new Array(10).fill(true).map((_, index) => ({
	id: index,
	name: chance.name(),
	email: chance.email()
}));

export const Table = () => (
	<Box flexDirection="column" width={80}>
		<Box>
			<Box width="10%">
				<Text>ID</Text>
			</Box>

			<Box width="50%">
				<Text>Name</Text>
			</Box>

			<Box width="40%">
				<Text>Email</Text>
			</Box>
		</Box>

		{users.map(user => (
			<Box key={user.id}>
				<Box width="10%">
					<Text>{user.id}</Text>
				</Box>

				<Box width="50%">
					<Text>{user.name}</Text>
				</Box>

				<Box width="40%">
					<Text>{user.email}</Text>
				</Box>
			</Box>
		))}
	</Box>
);

