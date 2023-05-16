import { User } from '@src/types/User';

import {
	CardBodyStyled,
	CardStyled,
	ContainerStyled,
	DescriptionStyled,
	IconLinkStyled,
	InformationStyled,
	TitleStyled,
} from './styled';

type Props = {
	user: User;
};
export const MyProfile = ({ user }: Props) => (
	<ContainerStyled>
		<CardStyled>
			<CardBodyStyled>
				<img src={user?.avatar_url} alt="Foto de Perfil" />

				<TitleStyled>{user?.name}</TitleStyled>

				<DescriptionStyled>{user?.bio}</DescriptionStyled>

				<InformationStyled hasTopBorder>
					Repositórios públicos: <strong>{user.public_repos}</strong>
				</InformationStyled>

				<InformationStyled>
					Seguidores: <strong>{user.followers}</strong>
				</InformationStyled>

				<InformationStyled>
					Seguindo: <strong> {user.following}</strong>
				</InformationStyled>

				<InformationStyled>
					Criado em:{' '}
					<strong>
						{new Date(user.created_at || '').toLocaleDateString('pt-br')}
					</strong>
				</InformationStyled>

				<IconLinkStyled
					href={user.blog}
					target="_blank"
					rel="noreferrer"
					hasTopBorder
				>
					Portfolio
				</IconLinkStyled>

				<IconLinkStyled href={user.html_url} target="_blank" rel="noreferrer">
					GitHub
				</IconLinkStyled>
			</CardBodyStyled>
		</CardStyled>
	</ContainerStyled>
);
