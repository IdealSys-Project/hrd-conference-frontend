import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import Providers from '@/app/provider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer/Footer';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HRD Conference 2025',
  description: 'Second Annual Human Resource Development Conference 2025',
  icons: {
    icon: '/assets/icons/favicon.jpeg',
  },
  openGraph: {
    title: 'HRD Conference 2025',
    description: 'Second Annual Human Resource Development Conference 2025',
    images: [
      {
        url: '/assets/icons/favicon.jpeg',
        width: 300,
        height: 300,
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Providers>
          <Header />
          <Sidebar />
          {children}
          <Footer />
        </Providers>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
