import useDebouce from '@/common/hooks/useDebounce';
import useInput from '@/common/hooks/useInput';
import useQuery from '@/common/hooks/useQuery';
import { useSearchParams } from 'next/navigation';

export default function SearchInput() {
	const { addQuery, clearQuery } = useQuery();
	const searchParams = useSearchParams();

	const debounce = useDebouce<string>(keyword => {
		if (keyword) addQuery('keyword', keyword);
		else clearQuery('keyword');
	}, 300);

	const { value, handleChange } = useInput(searchParams.get('keyword') || '', debounce);

	return (
		<Input
			type="text"
			value={value}
			onChange={handleChange}
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
