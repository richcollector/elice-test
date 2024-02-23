import styled from 'styled-components';

export default function ListCard() {
	return (
		<CardWrapper>
			<CardImg src="img/cardImg.png" alt="" />
			<CardBody>
				<CardTitle>
					<p style={{ color: '#524fa1', fontWeight: '600' }}>No categories</p>
					<h1>PM/PO를 위한 서비스 기획</h1>
					<p style={{ color: '#5e5f61' }}>결제한 수강료 지금도 받고, 나중에도 받자!</p>
				</CardTitle>
				<CardPrice>
					<p style={{ color: '#524fa1', fontWeight: '600' }}>Register by Admin</p>
				</CardPrice>
			</CardBody>
		</CardWrapper>
	);
}

const CardWrapper = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: #ffffff;
	border-radius: 0.5rem;
	border: 1px solid rgb(225, 226, 228);

	cursor: pointer;

	&:hover {
		background-color: rgb(243, 244, 245);
	}
`;

const CardImg = styled.img`
	width: 100%;
	height: 30%;
	object-fit: cover;
`;

const CardBody = styled.div`
	width: 100%;
	height: calc(100% - 30%);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 0 1rem;
`;

const CardTitle = styled.div`
	width: 100%;
	height: 80%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 1rem;

	border-bottom: 1px solid rgb(225, 226, 228);
	padding-top: 1rem;
`;

const CardPrice = styled.div`
	width: 100%;
	height: calc(100% - 80%);

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	padding: 1rem 0;
`;
