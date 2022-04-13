import React from 'react';
import { useEffect } from 'react';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

import Post from './Post';
import Pages from './Pages';

import { Grid } from '@mui/material';

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
		return (
			<Grid item width='100%'>
				{error}
			</Grid>
		);
	}

	if (loading) {
		return (
			<Grid item width='100%'>
				Загрузка списка постов...
			</Grid>
		);
	}

	return (
		<React.Fragment>
			{posts.map((post) => (
				<Grid item width='100%' key={post.id}>
					<Post {...post} />
				</Grid>
			))}
			<Pages pages={pages} selectedPage={page} setPostsPage={setPostsPage} />
		</React.Fragment>
	);
};

export default PostsList;
