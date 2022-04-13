import { useTypedSelector } from '../hooks/useTypedSelector';

const PostsList: React.FC = () => {
	const { posts, error, loading } = useTypedSelector((state) => state.post);

	return <div>Posts List</div>;
};

export default PostsList;
