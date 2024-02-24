import React, { useState } from 'react';

export default function useInput() {
	const [searchWord, setSearchWord] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setSearchWord(inputValue);
	};

	return { searchWord, handleInputChange };
}
