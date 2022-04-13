import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchPosts } from '../store/action-creators/post';
import Post from './Post';

const PostsList: React.FC = () => {
	const { posts, error, loading } = useTypedSelector((state) => state.post);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	return (
		<ul>
			{posts.map((post) => (
				<Post {...post} />
			))}
		</ul>
	);
};

export default PostsList;
