import { useQuery } from 'react-query';

import { User } from '@src/types/User';

import MyProfile from './MyProfile';

export const Home = () => {
	const getUser = async (): Promise<User> => {
		const response = await fetch('https://api.github.com/users/Joaobru');
		const user = await response.json();

		return user;
	};

	const { isLoading, error, data } = useQuery('userData', () => getUser());

	return (
		<>
			{isLoading && <h2>Loading...</h2>}
			{error && <h2>An error has occurred:</h2>}
			{!isLoading && !error && data && <MyProfile user={data} />}
		</>
	);
};
