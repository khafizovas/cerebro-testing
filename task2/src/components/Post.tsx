import { useEffect } from 'react';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

import { Stack, Card, CardContent, Typography } from '@mui/material';
import Person from '@mui/icons-material/Person';

interface postProps {
	userId: number;
	title: string;
	body: string;
}

const Post: React.FC<postProps> = (props) => {
	const { username, error, loading } = useTypedSelector((state) => state.user);
	const { fetchUser } = useActions();

	useEffect(() => {
		fetchUser(props.userId);
	}, []);

	if (error) {
		return <Card>{error}</Card>;
	}

	if (loading) {
		return <Card>Загрузка поста...</Card>;
	}

	return (
		<Card>
			<CardContent>
				<Typography variant='h5'>{props.title}</Typography>
				<Typography variant='body2'>{props.body}</Typography>
				<Stack direction='row' alignItems='center' gap={1}>
					<Person></Person>
					<Typography sx={{ fontSize: 14 }} color='text.secondary'>
						{username}
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default Post;
