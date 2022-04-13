import { Stack, Card, CardContent, Typography } from '@mui/material';
import Person from '@mui/icons-material/Person';

interface postProps {
	userId: number;
	title: string;
	body: string;
}

const Post: React.FC<postProps> = (props) => {
	return (
		<Card>
			<CardContent>
				<Typography variant='h5'>{props.title}</Typography>
				<Typography variant='body2'>{props.body}</Typography>
				<Stack direction='row' alignItems='center' gap={1}>
					<Person></Person>
					<Typography sx={{ fontSize: 14 }} color='text.secondary'>
						{props.userId}
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default Post;
