import Filter from '@/components/filter/Filter';
import List from '@/components/list/List';
import Pagination from '@/components/paginations/Paginztions';
import SearchBar from '@/components/search/SearchBar';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Elice Test</title>
				<link rel="icon" href="logo/logo.png" />
			</Head>
			<SearchBar />
			<Filter />
			<List />
			<Pagination />
		</>
	);
}
