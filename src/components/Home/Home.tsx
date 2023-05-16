import { useQuery } from 'react-query';

import { User } from '@src/types/User';

import { Repository } from '@src/types/Repository';
import MyProfile from './components/MyProfile';
import Repositories from './components/Repositories';

export const Home = () => {
	const getUser = async (): Promise<User> => {
		const response = await fetch('https://api.github.com/users/Joaobru');
		const user = await response.json();

		return user;
	};

	const getRepositories = async (): Promise<Repository[]> => {
		const response = await fetch('https://api.github.com/users/Joaobru/repos');
		const repositories = await response.json();

		return repositories;
	};

	const user = useQuery('userData', () => getUser());
	const repositories = useQuery('repositoriesData', () => getRepositories());

	return (
		<>
			{user.isLoading && <h2>Loading...</h2>}

			{user.error && <h2>An error has occurred:</h2>}

			{!user.isLoading && !user.error && user.data && (
				<MyProfile user={user.data} />
			)}

			<Repositories repositories={repositories.data} />
		</>
	);
};
