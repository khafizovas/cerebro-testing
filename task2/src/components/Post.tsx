interface postProps {
	id: number;
	userId: number;
	title: string;
	body: string;
}

const Post: React.FC<postProps> = (props) => {
	return (
		<li key={props.id}>
			<strong>User</strong>: {props.userId};<br />
			<strong>Title</strong>:{props.title};<br />
			<strong>Body</strong>: {props.body}
		</li>
	);
};

export default Post;