import { PAGE } from '@/common/constant/Constant';

const getRenderPageArray = (pageCount: number, currentPage: number) => {
	const pageEnd =
		currentPage + PAGE.SHOW_LIMIT > pageCount ? pageCount : currentPage + PAGE.SHOW_LIMIT;
	const pageStart = currentPage - PAGE.SHOW_LIMIT > 0 ? currentPage - PAGE.SHOW_LIMIT : 1;

	return Array.from({ length: pageEnd - pageStart + 1 }).map((_, i) => i + pageStart);
};

export default function Pagination({
	pageCount,
	currentPage,
	getPage,
}: {
	pageCount: number;
	currentPage: number;
	getPage: (page: number) => void;
}) {
	const renderPageArray = getRenderPageArray(pageCount, currentPage);

	const onClickPrevPage = () => currentPage !== 1 && getPage(currentPage - 1);
	const onClickNextPage = () => currentPage !== pageCount && getPage(currentPage + 1);

	return (
		<PaginationWrapper>
			<Arrow
				src="icon/arrowLeft.svg"
				alt="arrowLeft"
				$isCheckArrow={currentPage === 1}
				onClick={onClickPrevPage}
			/>

			{renderPageArray.map(number => (
				<Page key={number} onClick={() => getPage(number)} $isActive={number === currentPage}>
					{number}
				</Page>
			))}

			<Arrow
				src="icon/arrowRight.svg"
				alt="arrowRight"
				$isCheckArrow={currentPage === pageCount}
				onClick={onClickNextPage}
			/>
		</PaginationWrapper>
	);
}

import styled from 'styled-components';
const PaginationWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	gap: 1.5rem;
`;

const Page = styled.button<{ $isActive: boolean }>`
	color: ${props => (props.$isActive ? '#fff' : '#999')};
	background-color: ${props => (props.$isActive ? '#524fa1' : '')};
	font-weight: ${props => (props.$isActive ? 'bold' : 'normal')};
	cursor: ${props => (props.$isActive ? 'none' : 'pointer')};
	border: 0;
`;

const Arrow = styled.img<{ $isCheckArrow: boolean }>`
	width: 0.8rem;
	color: ${props => (props.$isCheckArrow ? '#fff' : '#999')};
	cursor: ${props => (props.$isCheckArrow ? 'none' : 'pointer')};
`;
