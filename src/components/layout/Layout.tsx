import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<Container>
			<Wrapper>{children}</Wrapper>
		</Container>
	);
}

import styled from 'styled-components';
const Container = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: baseline;
	align-items: center;

	background-color: #f0f1f3;
`;

const Wrapper = styled.div`
	width: 1300px;

	display: flex;
	flex-direction: column;
	justify-content: baseline;
	align-items: center;

	padding: 2rem 0;

	@media (max-width: 1300px) {
		padding: 2rem 1rem;
		width: 100%;
	}
`;
