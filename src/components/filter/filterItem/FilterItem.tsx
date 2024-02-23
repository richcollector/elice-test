import { useState } from 'react';
import styled from 'styled-components';

interface IPropsItem {
	item: string;
	setFilter: React.Dispatch<React.SetStateAction<Array<any>>>;
}

export default function Item({ item, setFilter }: IPropsItem): JSX.Element {
	const [activedFilter, setActivedFilter] = useState(false);

	const onClickFilter =
		(item: string) =>
		(event: React.MouseEvent<HTMLSpanElement>): void => {
			const newValue = { [item]: activedFilter };
			setActivedFilter(prev => !prev);
			setFilter(prev => [...prev, newValue]);
		};

	return (
		<FilterItem>
			<ItemButton onClick={onClickFilter(item)} $isActive={activedFilter}>
				{item}
			</ItemButton>
		</FilterItem>
	);
}

const FilterItem = styled.div`
	background-color: rgb(255, 255, 255);
	padding: 0 0.5rem;
`;

const ItemButton = styled.button<{ $isActive: boolean }>`
	background-color: ${props => (props.$isActive ? '#524fa1' : `rgb(240, 241, 243)`)};
	color: ${props => (props.$isActive ? `#fff` : `rgb(94, 95, 97)`)};
	border: 1px solid rgb(240, 241, 243);
	border-radius: 1.875rem;

	padding: 0.5rem 1rem;
	font-size: 1rem;

	cursor: pointer;
`;
