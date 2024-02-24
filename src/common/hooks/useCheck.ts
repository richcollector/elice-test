import { useRouter } from 'next/router';

export default function useCheck() {
	const router = useRouter();

	const addPriceCheck = (key: string, value: string) => {
		const before = router.query[key];

		if (before && Array.isArray(before)) {
			router.push({
				query: {
					...router.query,
					[key]: [...before, value],
				},
			});
		} else if (before && !Array.isArray(before)) {
			router.push({
				query: {
					...router.query,
					[key]: [before, value],
				},
			});
		} else {
			router.push({
				query: {
					...router.query,
					[key]: value,
				},
			});
		}
	};

	const clearPrice = (key: string, value?: string) => {
		const before = router.query[key];

		if (Array.isArray(before)) {
			const priceArr = before.filter(price => price !== value);

			router.push({
				query: {
					...router.query,
					[key]: priceArr,
				},
			});
		} else {
			delete router.query[key];
			router.push(router);
		}
	};

	const clearKeyword = (key: string) => {
		delete router.query[key];
		router.push(router);
	};

	const addKeywordCheck = (key: string, value: string) => {
		router.push({
			query: {
				...router.query,
				[key]: value,
			},
		});
	};

	return { addPriceCheck, addKeywordCheck, clearPrice, clearKeyword };
}
