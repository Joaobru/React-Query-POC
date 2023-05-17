import React from 'react';

import { Repository } from '@src/types/Repository';

import {
	ContainerStyled,
	ContainerRepositoriesStyled,
	CardStyled,
} from './styled';

type Props = {
	repositories: Repository[];
};

export const Repositories = ({ repositories }: Props) => {
	console.log(repositories);

	return (
		<ContainerStyled>
			<h2>Repositórios</h2>

			<div>
				<input type="text" placeholder="Busque um repositório" />

				<ContainerRepositoriesStyled>
					{repositories.map((repo) => (
						<CardStyled key={repo.id}>
							<h3>{repo.name}</h3>
							<p>{repo.description}</p>
							<p>{repo.language}</p>
							<p>Criado em: {new Date(repo.created_at).toLocaleDateString()}</p>
							<p>
								Atualizado em: {new Date(repo.updated_at).toLocaleDateString()}
							</p>
							<div>
								<a href={repo.clone_url} target="_blank" rel="noreferrer">
									Ver no github
								</a>
								<p>Estrelas: {repo.stargazers_count}</p>
							</div>
						</CardStyled>
					))}
				</ContainerRepositoriesStyled>
			</div>
		</ContainerStyled>
	);
};
