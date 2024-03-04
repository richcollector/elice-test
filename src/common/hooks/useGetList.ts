import { useEffect, useState } from 'react';
import { ChipsParams, IList } from '../type/Type';
import { Apis } from '../apis/Apis';
import { useRouter } from 'next/router';
import useQuery from './useQuery';

export interface GetCourseParams {
	title: string;
	chips: ChipsParams[];
	offset?: number;
}

export default function useGetList() {
	const [courses, setCourses] = useState<IList>();
	const [page, setPage] = useState(1);
	const { getValue, getAllParams } = useQuery();

	const router = useRouter();

	useEffect(() => {
		setPage(1);
	}, [router.query]);

	useEffect(() => {
		const params: GetCourseParams = {
			title: String(getValue('keyword')),
			chips: getAllParams(),
			offset: (page - 1) * 20,
		};

		Apis.get(params)
			.then(res => {
				setCourses(res.data.courses);
			})
			.catch(error => {
				if (error instanceof Error) console.error('error::', error.message);
			});
	}, [page, router.query]);

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
