import Item from './filterItem/FilterItem';
import { FILTER_BUTTON_NAME } from '@/common/constant/Constant';

export default function Filter() {
	return (
		<FilterWrapper>
			<FilterTitle>Price</FilterTitle>
			{FILTER_BUTTON_NAME.map((item: string, idx: number) => (
				<Item key={idx} item={item} />
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
