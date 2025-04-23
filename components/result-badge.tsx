"use client";
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface Props {
  url: string;
  count: number;
}

export const ResultBadge = ({ url, count }: Props) => (
  <Link href={url} prefetch={false}>
    <Badge
      className="cursor-pointer bg-primary text-primary-foreground hover:opacity-80 transition"
      title="Ver resultados"
    >
      {count} resultados
    </Badge>
  </Link>
);
