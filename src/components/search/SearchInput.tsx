export default function SearchInput() {
	return <Input placeholder="Search for a language or skil you want to learn." />;
}

import styled from 'styled-components';
const Input = styled.input`
	width: 100%;
	padding-top: 1rem;
	padding-bottom: 1rem;
	font-size: 1rem;

	border: 0;
	outline: none;
`;
