import SearchInput from './SearchInput';
import SearchIcon from './SearchIcon';

export default function SearchBar() {
	return (
		<SearchBarWrapper>
			<SearchIcon />
			<SearchInput />
		</SearchBarWrapper>
	);
}

import styled from 'styled-components';
const SearchBarWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;

	background-color: rgb(255, 255, 255);
	border: 0.1rem solid rgb(201, 202, 204);
	border-radius: 0.25rem;
	margin-bottom: 1rem;

	&:focus-within {
		border: 0.1rem solid #524fa1;
	}
`;
