import { useEffect, useState } from 'react';
import { IList } from '../type/Type';
import { Apis } from '../apis/Apis';
import { useRouter } from 'next/router';
import useQuery from './useQuery';
import { QUERY_STRING, QUERY_STRING_value } from '../constant/Constant';

export default function useGetList() {
	const [courses, setCourses] = useState<IList>();
	const [page, setPage] = useState(1);
	const { getValue } = useQuery();

	const router = useRouter();

	useEffect(() => {
		setPage(1);
	}, [router.query]);

	useEffect(() => {
		if (!router.isReady) return;

		const title = getValue(QUERY_STRING.keyword) ?? '';
		const filter = getValue(QUERY_STRING.price) ?? [];
		const filterList: Array<Object> = [];

		if (Array.isArray(filter)) {
			filter.forEach(fil => {
				if (fil === QUERY_STRING_value.price.free)
					filterList.push({ enroll_type: 0, is_free: true });
				else if (fil === QUERY_STRING_value.price.paid)
					filterList.push({ enroll_type: 0, is_free: false });
			});
		} else {
			if (filter === QUERY_STRING_value.price.free)
				filterList.push({ enroll_type: 0, is_free: true });
			else if (filter === QUERY_STRING_value.price.paid)
				filterList.push({ enroll_type: 0, is_free: false });
		}

		Apis.get(title, filterList, page)
			.then(res => {
				setCourses(res.data.courses);
			})
			.catch(error => {
				if (error instanceof Error) console.error('error::', error.message);
			});
	}, [page, router.query, router.isReady]);

	const getPage = (page: number) => {
		window.scrollTo({ top: 0 });
		setPage(page);
	};

	return {
		courses,
		pageCount: courses ? Math.ceil(courses.courseCount / 20) : 0,
		currentPage: page,
		setPage,
		getPage,
	};
}
