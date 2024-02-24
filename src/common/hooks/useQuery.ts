import { useRouter } from 'next/router';
import useCheck from './useCheck';

export default function useQuery() {
	const router = useRouter();
	const { addPriceCheck, addKeywordCheck, clearPrice, clearKeyword } = useCheck();

	const addQuery = (key: string, value: string) => {
		addPriceCheck(key, value);
		addKeywordCheck(key, value);
	};

	const clearQuery = (key: string, value?: string) => {
		clearPrice(key, value);
		clearKeyword(key);
	};

	const getValue = (key: string) => {
		return router.query[key];
	};

	return { addQuery, clearQuery, getValue };
}
