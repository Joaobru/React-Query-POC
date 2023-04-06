import { render } from '@testing-library/react';

import App from './App';

describe('App Component', () => {
	it('should be able to render the Loading text', () => {
		const { getByText } = render(<App />);

		const container = getByText('Loading...');
		expect(container).toBeTruthy();
	});
});
