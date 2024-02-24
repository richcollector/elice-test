import Head from 'next/head';
import useGetList from '@/common/hooks/useGetList';
import SearchBar from '@/components/search/SearchBar';
import List from '@/components/list/List';
import Filter from '@/components/filter/Filter';
import Pagination from '@/components/paginations/Paginations';

export default function Home() {
	const { courses, courseCount, setPage } = useGetList();

	return (
		<>
			<Head>
				<title>Elice Test</title>
				<link rel="icon" href="logo/logo.png" />
			</Head>
			<SearchBar />
			<Filter />
			{courses ? <List courses={courses} courseCount={courseCount} /> : <div>...Loading</div>}
			<Pagination courseCount={courseCount} setPage={setPage} />
		</>
	);
}
