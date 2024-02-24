import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import useQuery from './useQuery';
import useDebouce from './useDebounce';

export default function useInput() {
	const { addQuery, clearQuery } = useQuery();
	const searchParams = useSearchParams();

	const debounce = useDebouce<string>(value => {
		if (value) addQuery('keyword', value);
		else clearQuery('keyword');
	}, 300);

	const [searchWord, setSearchWord] = useState(searchParams.get('keyword') || '');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		debounce(inputValue);
		setSearchWord(inputValue);
	};

	return { searchWord, handleInputChange };
}
