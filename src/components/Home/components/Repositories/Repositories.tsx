import React from 'react';

import { Repository } from '@src/types/Repository';

type Props = {
	repositories: Repository[];
};

export const Repositories = ({ repositories }: Props) => (
	<section>
		<h2>Repositórios</h2>

		<div>
			<input type="text" placeholder="Busque um repositório" />

			{repositories.map((repo) => (
				<div key={repo.id}>
					<p>{repo.name}</p>
				</div>
			))}
		</div>
	</section>
);
