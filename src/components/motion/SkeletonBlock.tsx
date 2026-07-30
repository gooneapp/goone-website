import { cn } from '@/lib/utils';

interface SkeletonBlockProps {
  className?: string;
}

/**
 * Generic shimmering placeholder block. Reuses the existing `.shimmer-card`
 * CSS effect (see src/index.css) on a `bg-muted` div — composes on any
 * sized/shaped block since the shimmer sweep is a relatively-positioned
 * pseudo-element sized to 100% of its parent.
 */
export default function SkeletonBlock({ className }: SkeletonBlockProps) {
  return (
    <div
      className={cn('shimmer-card rounded-lg bg-muted', className)}
      aria-hidden="true"
    />
  );
}
