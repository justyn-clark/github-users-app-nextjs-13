import { Boundary } from '@/ui-components/Boundary';
import Header from '@/ui-components/Header';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <Boundary>
      <Header title="Whoopsies!" body="You hit a coder portal. Nothing to see here." />
      <Link
        className="rounded-md mx-auto max-w-2xl bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        href="/"
      >
        Return Home
      </Link>
    </Boundary>
  );
}
