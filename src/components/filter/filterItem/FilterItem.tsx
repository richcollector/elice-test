import styled from 'styled-components';

interface IProps {
	item: string;
}

export default function Item({ item }: IProps): JSX.Element {
	return (
		<FilterItem>
			<ItemButton>{item}</ItemButton>
		</FilterItem>
	);
}

const FilterItem = styled.div`
	background-color: rgb(255, 255, 255);
	padding: 0 0.5rem;
`;

const ItemButton = styled.button`
	background: rgb(240, 241, 243);
	border: 1px solid rgb(240, 241, 243);
	color: rgb(94, 95, 97);
	border-radius: 1.875rem;

	padding: 0.5rem 1rem;
	font-size: 1rem;

	cursor: pointer;

	&:hover {
		background: rgb(220, 221, 221);
		border: 1px solid rgb(220, 221, 221);
	}
`;
