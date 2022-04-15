import { Provider } from 'react-redux';

import { store } from './store';

import { Grid, Typography } from '@mui/material';

import PostsList from './components/PostsList';
import Cartoon from './components/cartoon/Cartoon';

function App() {
	return (
		<Provider store={store}>
			<Cartoon />
			<Grid
				container
				direction='column'
				alignItems='center'
				width='80%'
				margin='auto'>
				<Typography variant='h3'>Список постов</Typography>
				<PostsList />
			</Grid>
		</Provider>
	);
}

export default App;
