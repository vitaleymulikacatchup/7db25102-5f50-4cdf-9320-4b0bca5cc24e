import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'NovaToken Landing',
  description: 'Create a concise, conversion-focused single-page site featuring hero, about, how-to-buy, tokenomics, and footer with in-page navigation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}