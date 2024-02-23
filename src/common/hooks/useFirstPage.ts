import { useEffect, useState } from 'react';
import { Apis } from '../apis/Apis';
import ICourse from '../type/Type';

export default function FirstPage() {
	const [courses, setCourses] = useState<ICourse[]>();
	const [courseCount, setCourseCount] = useState<number>(0);

	useEffect(() => {
		Apis.Get()
			.then(res => {
				setCourses(res.data.courses);
				setCourseCount(res.data.course_count);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

	return { courses, courseCount };
}
