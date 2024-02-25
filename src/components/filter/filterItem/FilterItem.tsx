import { useEffect, useState } from 'react';
import useQuery from '@/common/hooks/useQuery';
import { QUERY_STRING, QUERY_STRING_value } from '@/common/constant/Constant';
import { FILTER_LIST_NAME } from '@/common/constant/Constant';

export default function Item({ item }: { item: string }): JSX.Element {
	const router = useRouter();
	const { addQuery, clearQuery, getValue } = useQuery();
	const [activedFilter, setActivedFilter] = useState(false);

	useEffect(() => {
		const before = getValue(QUERY_STRING.price) ?? [];

		const checkItem =
			item === FILTER_LIST_NAME.Free
				? QUERY_STRING_value.price.free
				: QUERY_STRING_value.price.paid;

		if (before && Array.isArray(before) && before.includes(checkItem)) {
			setActivedFilter(true);
		} else if (before && !Array.isArray(before) && before === checkItem) {
			setActivedFilter(true);
		}
	}, [router.query]);

	const onClickFilter = (item: string) => () => {
		if (!activedFilter) {
			if (item === FILTER_LIST_NAME.Free)
				addQuery(QUERY_STRING.price, QUERY_STRING_value.price.free);
			else if (item === FILTER_LIST_NAME.Payment)
				addQuery(QUERY_STRING.price, QUERY_STRING_value.price.paid);
		} else {
			if (item === FILTER_LIST_NAME.Free)
				clearQuery(QUERY_STRING.price, QUERY_STRING_value.price.free);
			else if (item === FILTER_LIST_NAME.Payment)
				clearQuery(QUERY_STRING.price, QUERY_STRING_value.price.paid);
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
import { useRouter } from 'next/router';
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
