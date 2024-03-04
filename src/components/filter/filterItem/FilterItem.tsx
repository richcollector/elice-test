import { useState } from 'react';
import { ChipType, ChipValue } from '@/common/type/Type';
import useQuery from '@/common/hooks/useQuery';

interface ChipProps {
	type: ChipType;
	value: ChipValue;
}

export default function Item({ type, value }: ChipProps) {
	const { add, remove, search } = useQuery();
	const [activedFilter, setActivedFilter] = useState(search(type, value));

	const handleClick = () => () => {
		if (!activedFilter) add(type, value);
		else remove(type, value);

		setActivedFilter(prev => !prev);
	};

	return (
		<FilterItem>
			<ItemButton onClick={handleClick} $isActive={activedFilter}>
				{CHIPS[type][value].title}
			</ItemButton>
		</FilterItem>
	);
}

import styled from 'styled-components';
import { CHIPS } from '@/common/constant/Constant';
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

	&:hover {
		filter: brightness(80%);
	}
`;
