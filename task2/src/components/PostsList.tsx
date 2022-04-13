import { useEffect } from 'react';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

import Post from './Post';
import Pages from './Pages';

import { Grid, Typography } from '@mui/material';

const PostsList: React.FC = () => {
	const { page, limit, posts, error, loading } = useTypedSelector(
		(state) => state.post
	);
	const { fetchPosts, setPostsPage } = useActions();

	const pages = [...Array(10).keys()];

	useEffect(() => {
		fetchPosts(page, limit);
	}, [page]);

	if (error) {
		return <div>{error}</div>;
	}

	if (loading) {
		return <div>Загрузка списка постов...</div>;
	}

	return (
		<Grid
			container
			direction='column'
			alignItems='center'
			width='80%'
			margin='auto'>
			<Typography variant='h3'>Список постов</Typography>
			{posts.map((post) => (
				<Grid item width='100%'>
					<Post {...post} key={post.id} />
				</Grid>
			))}
			<Pages pages={pages} selectedPage={page} setPostsPage={setPostsPage} />
		</Grid>
	);
};

export default PostsList;
