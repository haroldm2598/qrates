import type { Metadata } from 'next';
import '@/app/assets/styles/main.scss';
import { inter } from '@/app/ui/font';
import Navbar from '@/app/components/Navbar';

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
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
