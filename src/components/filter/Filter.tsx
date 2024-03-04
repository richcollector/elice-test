import Item from './filterItem/FilterItem';
import { CHIPS } from '@/common/constant/Constant';

export default function Filter() {
	const PRICE_CHIPS_ARRAY = Object.values(CHIPS.price);
	return (
		<FilterWrapper>
			<FilterTitle>Price</FilterTitle>
			{PRICE_CHIPS_ARRAY.map(chip => (
				<Item key={chip.value} type="price" value={chip.value} />
			))}
		</FilterWrapper>
	);
}

import styled from 'styled-components';
const FilterWrapper = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	background-color: rgb(255, 255, 255);
	border: 1px solid rgb(225, 226, 228);
	margin-bottom: 2rem;
`;

const FilterTitle = styled.div`
	width: 5rem;
	height: 3rem;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	padding-left: 1rem;

	font-size: 1rem;
	background-color: rgb(249, 250, 252);
	border-right: 1px solid rgb(225, 226, 228);

	color: #5e5f61;
`;
