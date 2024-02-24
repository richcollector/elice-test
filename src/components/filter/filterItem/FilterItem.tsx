import { useState } from 'react';
import useQuery from '@/common/hooks/useQuery';

export default function Item({ item }: { item: string }): JSX.Element {
	const { addQuery, clearQuery } = useQuery();
	const searchParams = useSearchParams();
	const [activedFilter, setActivedFilter] = useState(false);

	const onClickFilter = (item: string) => () => {
		if (!activedFilter) {
			if (item === `Free`) addQuery('price', 'free');
			if (item === `Payment`) addQuery('price', 'paid');
		} else {
			if (item === `Free`) clearQuery('price', 'free');
			if (item === `Payment`) clearQuery('price', 'paid');
		}
		setActivedFilter(prev => !prev);
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
import { useSearchParams } from 'next/navigation';
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
