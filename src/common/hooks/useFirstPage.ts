import { useEffect, useState } from 'react';
import { ICourse, IFilterType } from '../type/Type';
import { Apis } from '../apis/Apis';

export default function FirstPage() {
	const [courses, setCourses] = useState<ICourse[]>();
	const [courseCount, setCourseCount] = useState<number>(0);
	const [page, setPage] = useState(1);
	const [filter, setFilter] = useState<IFilterType>({ Free: false, Payment: false });

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

		Apis.get(page, filterList)
			.then(res => {
				setCourses(res.data.courses);
				setCourseCount(res.data.course_count);
			})
			.catch(() => {});
	}, [page, filter]);

	return { courses, courseCount, setPage, setFilter };
}
