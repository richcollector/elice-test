import { useRouter } from 'next/router';

export default function useQuery() {
	const router = useRouter();

	const addQuery = (key: string, value: string) => {
		const before = router.query[key];
		console.log('before', before);

		if (key === 'price' && before && Array.isArray(before)) {
			router.push({
				query: {
					...router.query,
					[key]: [...before, value],
				},
			});
		} else if (key === 'price' && before && !Array.isArray(before)) {
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

		if (key === 'keyword') {
			router.push({
				query: {
					...router.query,
					[key]: value,
				},
			});
		}
	};

	const clearQuery = (key: string, value?: string) => {
		if (key === 'keyword') {
			delete router.query[key];
			router.push(router);
		}

		if (key === 'price') {
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
		}
	};

	const getValue = (key: string) => {
		return router.query[key];
	};

	return { addQuery, clearQuery, getValue };
}
