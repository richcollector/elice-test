import React, { useState } from 'react';
import useDebounce from './useDebounce';

export default function useInput() {
	const [searchWord, setSearchWord] = useState('');
	useDebounce(searchWord, 300);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setSearchWord(inputValue);
	};

	return { searchWord, handleInputChange };
}
