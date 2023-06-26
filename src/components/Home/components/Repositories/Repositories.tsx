import React, { useState } from 'react';

import { Repository } from '@src/types/Repository';
import emptySearchImage from '@src/assets/images/empty-search.svg';

import {
	ContainerStyled,
	ContainerRepositoriesStyled,
	CardStyled,
	TitleStyled,
	SearchField,
	EmptyDataImgStyled,
	NameStyled,
	TextStyled,
} from './styled';

type Props = {
	repositories: Repository[];
};

export const Repositories = ({ repositories }: Props) => {
	const [search, setSearch] = useState('');
	const filteredItems = repositories.filter((repo) =>
		repo.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<ContainerStyled>
			<TitleStyled>Repositórios</TitleStyled>
			<div>
				<SearchField
					type="text"
					placeholder="Busque um repositório"
					onChange={(e) => setSearch(e.target.value)}
					defaultValue={search}
				/>

				{filteredItems.length > 0 ? (
					<ContainerRepositoriesStyled>
						{filteredItems.map((repo) => (
							<CardStyled key={repo.id}>
								<div>
									<NameStyled>{repo.name}</NameStyled>
									<TextStyled paddingBottom={4}>{repo.description}</TextStyled>
									<TextStyled paddingBottom={4}>{repo.language}</TextStyled>
									<TextStyled paddingBottom={4}>
										Criado em: {new Date(repo.created_at).toLocaleDateString()}
									</TextStyled>
									<TextStyled paddingBottom={4}>
										Atualizado em:{' '}
										{new Date(repo.updated_at).toLocaleDateString()}
									</TextStyled>
									<div>
										<a href={repo.clone_url} target="_blank" rel="noreferrer">
											Ver no github
										</a>
										<p>Estrelas: {repo.stargazers_count}</p>
									</div>
								</div>
							</CardStyled>
						))}
					</ContainerRepositoriesStyled>
				) : (
					<EmptyDataImgStyled src={emptySearchImage} alt="No data found" />
				)}
			</div>
		</ContainerStyled>
	);
};
