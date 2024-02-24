import { useState } from 'react';
import { IFilter } from '@/common/type/Type';

interface IPropsItem {
	item: string;
	setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
}

export default function Item({ item, setFilter }: IPropsItem): JSX.Element {
	const [activedFilter, setActivedFilter] = useState(false);

	const onClickFilter = (item: string) => () => {
		setActivedFilter(prev => !prev);
		setFilter(prev => ({ ...prev, [item]: !activedFilter }));
	};

	return (
		<FilterItem>
			<ItemButton onClick={onClickFilter(item)} $isActive={activedFilter}>
				{item}
			</ItemButton>
		</FilterItem>
	);
}

import styled from 'styled-components';
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
