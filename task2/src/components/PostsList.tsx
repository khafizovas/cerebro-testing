import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../hooks/useTypedSelector';
import Post from './Post';
import { useActions } from '../hooks/useActions';

const PostsList: React.FC = () => {
	const { posts, error, loading } = useTypedSelector((state) => state.post);
	const { fetchPosts } = useActions();

	useEffect(() => {
		fetchPosts();
	}, []);

	if (error) {
		return <div>{error}</div>;
	}

	if (loading) {
		return <div>Загрузка списка постов...</div>;
	}

	return (
		<ul>
			{posts.map((post) => (
				<Post {...post} key={post.id} />
			))}
		</ul>
	);
};

export default PostsList;
