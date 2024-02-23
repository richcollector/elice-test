import styled from 'styled-components';

export default function SearchIcon() {
	return (
		<SearchIconWrapper>
			<Icon src="icon/search.svg" />
		</SearchIconWrapper>
	);
}

const SearchIconWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 0 1rem;
`;

const Icon = styled.img`
	width: 1rem;
`;
