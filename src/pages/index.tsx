import Head from 'next/head';
import FirstPage from '@/common/hooks/useFirstPage';
import SearchBar from '@/components/search/SearchBar';
import List from '@/components/list/List';
import Filter from '@/components/filter/Filter';
import Pagination from '@/components/paginations/Paginations';

export default function Home() {
	const { courses, courseCount, setPage, setFilter } = FirstPage();

	return (
		<>
			<Head>
				<title>Elice Test</title>
				<link rel="icon" href="logo/logo.png" />
			</Head>
			<SearchBar />
			<Filter setFilter={setFilter} />
			{courses && <List courses={courses} courseCount={courseCount} />}
			<Pagination courseCount={courseCount} setPage={setPage} />
		</>
	);
}
