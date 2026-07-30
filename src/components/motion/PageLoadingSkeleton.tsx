import SkeletonBlock from '@/components/motion/SkeletonBlock';

/**
 * Hero-shaped loading skeleton (heading / subheading / CTA row) used as a
 * loading fallback in place of a bare spinner, e.g. on Home.tsx while
 * WebsiteConfigContext is still fetching.
 */
export default function PageLoadingSkeleton() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-2xl flex flex-col items-center gap-6">
        <SkeletonBlock className="h-6 w-40 rounded-full" />
        <SkeletonBlock className="h-12 w-full max-w-xl" />
        <SkeletonBlock className="h-6 w-2/3 max-w-md" />
        <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
          <SkeletonBlock className="h-14 w-48 rounded-xl" />
          <SkeletonBlock className="h-14 w-48 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
