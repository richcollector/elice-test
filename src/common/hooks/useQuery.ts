import { useRouter } from 'next/router';
import useCheck from './useCheck';
import { QUERY_STRING } from '../constant/Constant';

export default function useQuery() {
	const router = useRouter();
	const { addPriceCheck, addKeywordCheck, clearPrice, clearKeyword } = useCheck();

	const addQuery = (key: string, value: string) => {
		key === QUERY_STRING.price && addPriceCheck(key, value);
		key === QUERY_STRING.keyword && addKeywordCheck(key, value);
	};

	const clearQuery = (key: string, value?: string) => {
		key === QUERY_STRING.price && clearPrice(key, value);
		key === QUERY_STRING.keyword && clearKeyword(key);
	};

	const getValue = (key: string) => {
		const before = router.query[key];
		return before;
	};

	return { addQuery, clearQuery, getValue };
}
