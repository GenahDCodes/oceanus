'use client';

import { statusColors } from '@/lib/utils';

export default function StatusBadge({ status }) {
  const classes = statusColors[status] || 'bg-steel-100 text-steel-400';
  return (
    <span className={`${classes} px-2 sm:px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap`}>{status}</span>
  );
}
