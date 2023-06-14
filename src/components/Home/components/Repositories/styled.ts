import styled from 'styled-components';

export const ContainerStyled = styled.section`
	padding: 90px;
`;

export const ContainerRepositoriesStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 40px;

	margin-top: 42px;
`;

export const CardStyled = styled.div`
	padding: 8px;
	background-color: #8395a7;
	border-radius: 4px;

	> div {
		padding: 8px;

		border: solid 2px #0d1117;
		border-radius: 4px;
		height: 100%;
	}
`;

export const TitleStyled = styled.h2`
	text-align: center;
	margin-bottom: 16px;
`;

export const SearchField = styled.input`
	display: block;
	margin-left: auto;
	margin-right: auto;

	width: 350px;
	font-size: 14px;
	padding: 6px;
	border-radius: 6px;
	height: 40px;
	font-weight: 400;
	border: 1px solid #d8d8df;

	:focus {
		outline: none;
	}
`;

export const EmptyDataImgStyled = styled.img`
	display: block;
	margin-top: 42px;
	margin-left: auto;
	margin-right: auto;
	max-width: 550px;
`;

export const NameStyled = styled.h3`
	color: #1a1b1d;
	margin-bottom: 8px;
	text-transform: capitalize;
`;
