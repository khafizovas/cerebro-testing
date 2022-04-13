import { Provider } from 'react-redux';

import { store } from './store';

import PostsList from './components/PostsList';

function App() {
	return (
		<Provider store={store}>
			<PostsList></PostsList>
		</Provider>
	);
}

export default App;
