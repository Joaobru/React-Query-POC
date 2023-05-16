import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './components/Home';

import './assets/global/styles.css';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Home />
		</QueryClientProvider>
	);
}

export default App;
