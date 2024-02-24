import { ICourse } from '@/common/type/Type';

export default function ListCard({ list }: { list: ICourse }) {
	return (
		<CardWrapper>
			{list.logo_file_url && <CardImg src={list.logo_file_url} alt="logo" />}
			<CardBody>
				<CardTitle>
					<h1>{list.title}</h1>
					<p>{list.short_description}</p>
				</CardTitle>
				<CardPrice>
					<p>{list.is_free ? 'Free' : 'Payment'}</p>
				</CardPrice>
			</CardBody>
		</CardWrapper>
	);
}

import styled from 'styled-components';
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
	height: 40%;
	object-fit: contain;

	background-color: rgb(248, 248, 248);
	padding: 0.5rem 0;
`;

const CardBody = styled.div`
	width: 100%;
	height: calc(100% - 40%);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	border-top: 1px solid rgb(225, 226, 228);
	padding: 0 1rem;
`;

const CardTitle = styled.div`
	width: 100%;
	height: 80%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 0.5rem;

	padding-top: 1rem;

	p {
		color: #5e5f61;
	}
`;

const CardPrice = styled.div`
	width: 100%;
	height: calc(100% - 80%);

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	border-top: 1px solid rgb(225, 226, 228);
	padding: 1rem 0;

	p {
		color: #524fa1;
		font-weight: 600;
	}
`;
