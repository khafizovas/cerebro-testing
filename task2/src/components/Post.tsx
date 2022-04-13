interface postProps {
	userId: number;
	title: string;
	body: string;
}

const Post: React.FC<postProps> = (props) => {
	return (
		<li>
			<strong>User</strong>: {props.userId};<br />
			<strong>Title</strong>: {props.title};<br />
			<strong>Body</strong>: {props.body}
		</li>
	);
};

export default Post;
