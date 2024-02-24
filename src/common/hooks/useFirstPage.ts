import { useEffect, useState } from 'react';
import { ICourse, IFilter } from '../type/Type';
import { Apis } from '../apis/Apis';
import useInput from './useInput';
import { useRouter } from 'next/router';

export default function FirstPage() {
	const [courses, setCourses] = useState<ICourse[]>();
	const [courseCount, setCourseCount] = useState<number>(0);
	const [page, setPage] = useState(1);
	const [filter, setFilter] = useState<IFilter>({ Free: false, Payment: false });
	const router = useRouter();
	const searchWord = '';

	useEffect(() => {
		const filterList: Array<Object> = [];
		if (filter.Free) {
			const free = { enroll_type: 0, is_free: true };
			filterList.push(free);
		}

		if (filter.Payment) {
			const payment = { enroll_type: 0, is_free: false };
			filterList.push(payment);
		}

		Apis.get(searchWord, filterList, page)
			.then(res => {
				setCourses(res.data.courses);
				setCourseCount(res.data.course_count);
			})
			.catch(() => {});
	}, [searchWord, filter, page]);

	return { courses, courseCount, setPage, setFilter };
}
