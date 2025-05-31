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
  metadataBase: new URL('https://hrdconference.com'),
  alternates: {
    canonical: 'https://hrdconference.com',
  },
  title: {
    default: 'HRD Conference 2025 | Premier HR Conference',
    template: '%s | HRD Conference 2025'
  },
  description: 'Join the leading HR professionals at HRD Conference 2025. Discover the latest trends, network with experts, and transform your HR strategy.',
  keywords: ['HRD Conference', 'HR Conference 2025', 'Human Resources Development', 'HR Professionals', 'HR Summit'],
  authors: [{ name: 'HRD Conference Team' }],
  creator: 'HRD Conference',
  publisher: 'HRD Conference',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/assets/icons/favicon.jpeg',
    apple: '/assets/icons/favicon.jpeg',
  },
  openGraph: {
    title: 'HRD Conference 2025 | Premier HR Conference',
    description: 'Join the leading HR professionals at HRD Conference 2025. Discover the latest trends, network with experts, and transform your HR strategy.',
    url: 'https://hrdconference.com',
    siteName: 'HRD Conference',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/icons/favicon.jpeg',
        width: 300,
        height: 300,
        alt: 'HRD Conference 2025 Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'HRD Conference 2025',
    description: 'Join the leading HR professionals at HRD Conference 2025',
    creator: '@hrdconference',
    images: ['/assets/icons/favicon.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
