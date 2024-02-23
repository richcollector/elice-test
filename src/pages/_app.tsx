import GlobalStyle from '@/common/styles/GlobalStyle';
import Layout from '@/components/layout/Layout';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
