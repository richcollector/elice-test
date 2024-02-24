import { useEffect } from 'react';

export default function useDebounce(value: string, delay: number) {
	useEffect(() => {
		const timeout = setTimeout(() => {
			console.log('?');
		}, delay);

		return () => {
			clearTimeout(timeout);
		};
	}, [value, delay]);
}
