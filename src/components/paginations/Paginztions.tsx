import styled from 'styled-components';

export default function Pagination() {
	return (
		<PaginationWrapper>
			<Page $isActive={false}>
				<Arrow src="icon/arrowLeft.svg" />
			</Page>
			{new Array(5).fill(1).map((e, index) => (
				<Page key={index} $isActive={true}>
					{e}
				</Page>
			))}
			<Page $isActive={false}>
				<Arrow src="icon/arrowRight.svg" />
			</Page>
		</PaginationWrapper>
	);
}

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
	/* cursor: ${props => (props.$isActive ? 'none' : 'pointer')}; */

	border: 0;
`;

const Arrow = styled.img`
	width: 0.8rem;
`;
