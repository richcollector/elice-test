import Layout from '@/components/layout/Layout';
import type { AppProps } from 'next/app';
import GlobalStyle from '@/common/styles/GlobalStyle';

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
