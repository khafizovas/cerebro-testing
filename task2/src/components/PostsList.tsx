import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchPosts } from '../store/action-creators/post';

const PostsList: React.FC = () => {
	const { posts, error, loading } = useTypedSelector((state) => state.post);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	return (
		<ul>
			{posts.map((post) => (
				<li key={post.id}>
					<strong>User</strong>: {post.userId};<br />
					<strong>Title</strong>:{post.title};<br />
					<strong>Body</strong>: {post.body}
				</li>
			))}
		</ul>
	);
};

export default PostsList;
