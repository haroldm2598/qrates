import type { Metadata } from 'next';
import '@/app/assets/styles/main.scss';
import { inria_sans } from '@/app/ui/font';
import Navbar from '@/app/components/Navbar';
import Footer from './components/Footer';
import { ReduxProvider } from './StoreProvider';

export const metadata: Metadata = {
	title: 'Qrates',
	description: 'A frontendpractice.com challenge to clone a real website'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inria_sans.className}>
				<ReduxProvider>
					<Navbar />
					{children}
					<Footer />
				</ReduxProvider>
			</body>
		</html>
	);
}
