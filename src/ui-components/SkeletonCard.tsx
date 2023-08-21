import React from 'react';
import { cn } from '@/utils/helpers';

export const SkeletonCard = ({ isLoading }: { isLoading?: boolean }) => (
  <div
    data-testid="skeleton-card"
    className={cn(
      'rounded-2xl bg-white p-4',
      isLoading
        ? 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent'
        : '',
    )}
  >
    <div className="space-y-3">
      <div className="h-14 rounded-lg bg-gray-300" />
      <div className="h-3 w-11/12 rounded-lg bg-gray-300" />
      <div className="h-3 w-8/12 rounded-lg bg-gray-300" />
    </div>
  </div>
);
