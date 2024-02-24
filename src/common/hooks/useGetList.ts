import { useEffect, useState } from 'react';
import { ICourse } from '../type/Type';
import { Apis } from '../apis/Apis';
import { useRouter } from 'next/router';
import useQuery from './useQuery';

export default function FirstPage() {
	const [courses, setCourses] = useState<ICourse[]>();
	const [courseCount, setCourseCount] = useState<number>(0);
	const [page, setPage] = useState(1);
	const { getValue } = useQuery();

	const router = useRouter();

	useEffect(() => {
		setPage(1);
	}, [router.query]);

	useEffect(() => {
		const title = String(getValue('keyword')) ?? '';
		const filter = getValue('price');
		const filterList: Array<Object> = [];

		if (Array.isArray(filter)) {
			filter.forEach(fil => {
				if (fil === 'free') filterList.push({ enroll_type: 0, is_free: true });
				else if (fil === 'paid') filterList.push({ enroll_type: 0, is_free: false });
			});
		} else {
			if (filter === 'free') filterList.push({ enroll_type: 0, is_free: true });
			else if (filter === 'paid') filterList.push({ enroll_type: 0, is_free: false });
		}

		Apis.get(title, filterList, page)
			.then(res => {
				setCourses(res.data.courses);
				setCourseCount(res.data.course_count);
			})
			.catch(() => {});
	}, [page, router.query]);

	return { courses, courseCount, setPage };
}
