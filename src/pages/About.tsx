import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useWebsiteConfig } from '@/lib/WebsiteConfigContext';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function About() {
  const { config, loading, error } = useWebsiteConfig();
  const { language, t } = useLanguage();

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

  const getVal = (configKey: string, transKey: string) => {
    if (language === 'ta') {
      return t(transKey);
    }
    return config[configKey] || t(transKey);
  };

  return (
    <>
      <Helmet>
        <title>{language === 'ta' ? 'எங்களைப் பற்றி | கோஒன்' : 'About Us | GoOne'}</title>
        <meta name="description" content={language === 'ta' ? 'கோஒன் மற்றும் கிராமப்புற இந்தியாவில் டிஜிட்டல் பில்லிங்கை எளிதாக்கும் எங்கள் நோக்கம் பற்றி அறியுங்கள்.' : 'Learn more about GoOne and our mission to digitize rural and semi-urban India.'} />
        <link rel="canonical" href="https://www.goone.tech/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content={language === 'ta' ? 'எங்களைப் பற்றி | கோஒன்' : 'About Us | GoOne'} />
        <meta property="og:description" content={language === 'ta' ? 'கோஒன் மற்றும் கிராமப்புற இந்தியாவில் டிஜிட்டல் பில்லிங்கை எளிதாக்கும் எங்கள் நோக்கம் பற்றி அறியுங்கள்.' : 'Learn more about GoOne and our mission to digitize rural and semi-urban India.'} />
        <meta property="og:url" content="https://www.goone.tech/about" />
        <meta property="og:image" content="https://www.goone.tech/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={language === 'ta' ? 'எங்களைப் பற்றி | கோஒன்' : 'About Us | GoOne'} />
        <meta name="twitter:description" content={language === 'ta' ? 'கோஒன் மற்றும் கிராமப்புற இந்தியாவில் டிஜிட்டல் பில்லிங்கை எளிதாக்கும் எங்கள் நோக்கம் பற்றி அறியுங்கள்.' : 'Learn more about GoOne and our mission to digitize rural and semi-urban India.'} />
        <meta name="twitter:image" content="https://www.goone.tech/logo.png" />
      </Helmet>
      
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {getVal('ABOUT_DESCRIPTION', 'about.desc')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 animate-fadeIn">
          <div>
            <h2 className="text-3xl font-bold mb-4">{t('about.mission_title')}</h2>
            <p className="text-lg text-muted-foreground mb-4 whitespace-pre-wrap leading-relaxed">
              {getVal('ABOUT_MISSION', 'about.mission_desc')}
            </p>
          </div>
          <div className="bg-muted rounded-3xl aspect-video md:aspect-square flex items-center justify-center border shadow-sm hover:shadow-md transition-shadow">
            <span className="text-muted-foreground/50">{t('about.team_photo')}</span>
          </div>
        </div>
      </div>
    </>
  );
}
