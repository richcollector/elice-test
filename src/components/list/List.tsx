import ListCard from './listCard/ListCard';
import { ICourse } from '@/common/type/Type';

export default function List({
	courses,
	courseCount,
}: {
	courses: ICourse[];
	courseCount: number;
}) {
	return (
		<>
			<TotalCard>
				<span>{courseCount}</span>
			</TotalCard>
			<ListWrapper>
				{courses && courses.map(list => <ListCard key={list.id} list={list} />)}
			</ListWrapper>
		</>
	);
}

import styled from 'styled-components';
const ListWrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(5, 25rem);
	grid-gap: 0.5rem;

	padding-top: 1rem;
	padding-bottom: 2rem;

	@media (min-width: 811px) and (max-width: 1300px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 501px) and (max-width: 810px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 500px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const TotalCard = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	border-bottom: 1px solid rgb(225, 226, 228);
	text-align: left;
	padding-bottom: 0.75rem;

	color: #222;
	font-weight: 600;
`;
