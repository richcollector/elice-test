import { useEffect, useState } from 'react';
import { Apis } from '../apis/Apis';
import ICourse from '../type/Type';

export default function FirstPage() {
	const [courses, setCourses] = useState<ICourse[]>();
	const [courseCount, setCourseCount] = useState<number>(0);
	const [page, setPage] = useState(1);

	useEffect(() => {
		Apis.Get(page)
			.then(res => {
				setCourses(res.data.courses);
				setCourseCount(res.data.course_count);
			})
			.catch(err => {
				console.error(err);
			});
	}, [page]);

	return { courses, courseCount, setPage };
}
