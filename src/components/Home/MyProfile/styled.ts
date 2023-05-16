import styled, { css } from 'styled-components';

export const ContainerStyled = styled.section`
	display: flex;
	justify-content: center;
	margin-top: 90px;
`;

export const CardStyled = styled.div`
	max-width: 520px;
	padding: 12px;
	background: linear-gradient(
		90deg,
		#ff0000 0%,
		#ff9a00 10%,
		#d0de21 20%,
		#4fdc4a 30%,
		#3fdad8 40%,
		#2fc9e2 50%,
		#1c7fee 60%,
		#5f15f2 70%,
		#ba0cf8 80%,
		#fb07d9 90%,
		#ff0000 100%
	);
	border-radius: 10px;
	background-size: 200% 200%;
	animation: anim 2s linear infinite;

	@keyframes anim {
		100% {
			background-position-x: -200%;
		}
	}
`;

export const CardBodyStyled = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;

	border-radius: 10px;
	background: #0d1117;
	padding: 12px;

	> img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 350px;
		border-radius: 300px;
	}
`;

export const TitleStyled = styled.h1`
	margin-top: 32px;
	font-size: 28px;
`;

type PropsInformation = {
	hasTopBorder?: boolean;
};

export const InformationStyled = styled.p<PropsInformation>`
	margin-top: ${({ hasTopBorder }) => (hasTopBorder ? '12px' : '8px')};
	${({ hasTopBorder }) =>
		hasTopBorder &&
		css`
			padding-top: 12px;
			border-top: 1px solid #e6edf3;
		`};
`;

export const DescriptionStyled = styled.p`
	font-size: 18px;
	margin-top: 8px;
`;

type PropsIconLink = {
	hasTopBorder?: boolean;
};

export const IconLinkStyled = styled.a<PropsIconLink>`
	font-size: bold;
	color: #e6edf3;
	margin-top: ${({ hasTopBorder }) => (hasTopBorder ? '12px' : '8px')};

	${({ hasTopBorder }) =>
		hasTopBorder &&
		css`
			padding-top: 12px;
			border-top: 1px solid #e6edf3;
		`};
`;
