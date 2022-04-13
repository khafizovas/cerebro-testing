import { ButtonGroup, Button } from '@mui/material';

interface pagesProps {
	pages: number[];
	selectedPage: number;
	setPostsPage: Function;
}

const Pages: React.FC<pagesProps> = (props) => {
	return (
		<ButtonGroup>
			{props.pages.map((p) => (
				<Button
					key={p}
					onClick={() => props.setPostsPage(p + 1)}
					variant={p + 1 === props.selectedPage ? 'contained' : 'outlined'}>
					{p + 1}
				</Button>
			))}
		</ButtonGroup>
	);
};

export default Pages;
