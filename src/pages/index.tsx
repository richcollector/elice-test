import Head from 'next/head';
import useGetList from '@/common/hooks/useGetList';
import SearchBar from '@/components/search/SearchBar';
import List from '@/components/list/List';
import Filter from '@/components/filter/Filter';
import Pagination from '@/components/paginations/Paginations';

export default function Home() {
	const { courses, pageCount, currentPage, getPage } = useGetList();

	return (
		<>
			<Head>
				<title>Elice Test</title>
				<link rel="icon" href="logo/logo.png" />
			</Head>
			<SearchBar />
			<Filter />
			{courses ? (
				<List courses={courses} pageCount={pageCount} />
			) : (
				<LoadingWrapper>...Loading</LoadingWrapper>
			)}
			<Pagination pageCount={pageCount} currentPage={currentPage} getPage={getPage} />
		</>
	);
}

import styled from 'styled-components';
const LoadingWrapper = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-size: 2rem;
`;
