import Filter from '@/components/filter/Filter';
import List from '@/components/list/List';
import Pagination from '@/components/paginations/Paginations';
import SearchBar from '@/components/search/SearchBar';
import Head from 'next/head';
import FirstPage from '@/common/hooks/useFirstPage';

export default function Home() {
	const { courses, courseCount, setPage } = FirstPage();

	return (
		<>
			<Head>
				<title>Elice Test</title>
				<link rel="icon" href="logo/logo.png" />
			</Head>
			<SearchBar />
			<Filter />
			{courses && <List courses={courses} courseCount={courseCount} />}
			<Pagination courseCount={courseCount} setPage={setPage} />
		</>
	);
}
