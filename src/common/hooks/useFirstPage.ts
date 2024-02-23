import { useEffect, useState } from 'react';
import { Apis } from '../apis/Apis';
import ICourse from '../type/Type';

export default function FirstPage() {
	const [courses, setCourses] = useState<ICourse[]>();
	const [courseCount, setCourseCount] = useState<number>(0);
	const [page, setPage] = useState(1);
	const [filter, setFilter] = useState<Array<any>>();
	console.log('filter', filter);

	useEffect(() => {
		const free = { enroll_type: 0, is_free: true };
		const payment = { enroll_type: 0, is_free: false };
		// filter.map(e => {
		// 	console.log('????', e);
		// });

		Apis.get(page, filter)
			.then(res => {
				setCourses(res.data.courses);
				setCourseCount(res.data.course_count);
			})
			.catch(() => {});
	}, [page, filter]);

	return { courses, courseCount, setPage, setFilter };
}
