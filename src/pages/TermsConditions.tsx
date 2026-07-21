import { Helmet } from 'react-helmet-async';
import { useWebsiteConfig } from '@/lib/WebsiteConfigContext';
import { Loader2 } from 'lucide-react';

export default function TermsConditions() {
  const { config, loading, error } = useWebsiteConfig();

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center flex-col gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="text-muted-foreground animate-pulse">Loading...</p>
      </div>
    );
  }

  if (error || !config) {
    return (
      <div className="flex h-[80vh] items-center justify-center flex-col gap-4 text-center px-4">
        <p className="text-destructive font-bold text-xl">Failed to load configuration</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | GoOne</title>
        <meta name="description" content="GoOne Terms & Conditions." />
      </Helmet>
      
      <div 
        className="container py-24 max-w-3xl prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: config.TERMS_CONDITIONS_HTML || '' }}
      />
    </>
  );
}
