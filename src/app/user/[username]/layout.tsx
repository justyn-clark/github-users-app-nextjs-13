import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params }: { params: { username: string } }) {
  return {
    title: `Users Page | ${params.username}`,
    description: 'An user page and display information about their account',
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
