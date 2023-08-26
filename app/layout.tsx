import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const inder = Poppins({
	variable: '--font-family',
	subsets: ['latin'],
	weight: ['400', '700']
});

export const metadata: Metadata = {
  title: 'ToDo App',
  description: 'Планировать задачи с нами легко и просто',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
	<html lang="ru">
		<body className={inder.className}>
			{children}
		</body>
    </html>
  );
}
