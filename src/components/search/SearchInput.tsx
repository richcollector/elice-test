import useInput from '@/common/hooks/useInput';

export default function SearchInput() {
	const { searchWord, handleInputChange } = useInput();

	return (
		<Input
			type="text"
			value={searchWord}
			onChange={handleInputChange}
			placeholder="Search for a language or skill you want to learn."
		/>
	);
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
