import { useEffect } from 'react';

import { useTypedSelector } from '../hooks/useTypedSelector';
import Post from './Post';
import { useActions } from '../hooks/useActions';

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
		<>
			<ul>
				{posts.map((post) => (
					<Post {...post} key={post.id} />
				))}
			</ul>

			<div style={{ display: 'flex' }}>
				{pages.map((p) => (
					<button
						key={p}
						onClick={() => setPostsPage(p + 1)}
						style={{
							padding: '0.5%',
							border: `solid ${p + 1 === page ? '2px green' : '1px grey'}`,
							cursor: 'pointer',
						}}>
						{p + 1}
					</button>
				))}
			</div>
		</>
	);
};

export default PostsList;
