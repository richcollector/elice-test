import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { QUERY_STRING } from '../constant/Constant';
import useQuery from './useQuery';
import useDebouce from './useDebounce';
import { useRouter } from 'next/router';

export default function useInput() {
	const { addQuery, clearQuery, getValue } = useQuery();
	const router = useRouter();
	const searchParams = useSearchParams();

	const debounce = useDebouce<string>(value => {
		if (value) addQuery(QUERY_STRING.keyword, value);
		else clearQuery(QUERY_STRING.keyword);
	}, 300);

	const [searchWord, setSearchWord] = useState(searchParams.get(QUERY_STRING.keyword) || '');

	useEffect(() => {
		const before = getValue(QUERY_STRING.keyword) ?? '';
		if (before && !Array.isArray(before)) {
			setSearchWord(before);
		}
	}, [router.query]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		debounce(inputValue);
		setSearchWord(inputValue);
	};

	return { searchWord, handleInputChange };
}
