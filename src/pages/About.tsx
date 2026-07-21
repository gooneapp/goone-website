import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useWebsiteConfig } from '@/lib/WebsiteConfigContext';
import { Loader2 } from 'lucide-react';

export default function About() {
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
        <p className="text-muted-foreground">Please make sure the backend is running and the database is up to date.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>About Us | GoOne</title>
        <meta name="description" content="Learn more about GoOne and our mission to digitize rural and semi-urban India." />
      </Helmet>
      
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">About GoOne</h1>
          <p className="text-xl text-muted-foreground">
            {config.ABOUT_DESCRIPTION}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4 whitespace-pre-wrap">
              {config.ABOUT_MISSION}
            </p>
          </div>
          <div className="bg-muted rounded-3xl aspect-video md:aspect-square flex items-center justify-center border">
            <span className="text-muted-foreground/50">Team Photo Placeholder</span>
          </div>
        </div>
      </div>
    </>
  );
}
