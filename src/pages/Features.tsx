import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { useWebsiteConfig } from '@/lib/WebsiteConfigContext';
import { useLanguage } from '@/lib/LanguageContext';

export default function Features() {
  const { config, loading, error } = useWebsiteConfig();
  const { language } = useLanguage();

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center flex-col gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="text-muted-foreground animate-pulse">Loading features...</p>
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

  const getFeatures = () => {
    const list = config.FEATURES_PAGE_LIST || [];
    if (language !== 'ta') return list;

    // Tamil translation mapping for standard page features
    const taFeatureMap: Record<string, { title: string, desc: string }> = {
      "Digital Credit Book (Udhar Khata)": {
        title: "டிஜிட்டல் கடன் கணக்கு (Udhar Khata)",
        desc: "காகிதக் கணக்கு ஏடுகளைத் தவிர்த்து, பாதுகாப்பான டிஜிட்டல் பதிவுகளாக மாற்றிக்கொள்ளுங்கள்."
      },
      "Voice-guided Interface": {
        title: "குரல் வழி வழிகாட்டுதல் (Voice-Guided)",
        desc: "புதிய ஸ்மார்ட்போன் பயனர்களுக்கு உதவும் வகையில் தமிழ் குரல் வழி பில்லிங் உதவி."
      },
      "Offline-first Architecture": {
        title: "இணையமில்லாமலும் இயங்கும் கட்டமைப்பு (Offline-First)",
        desc: "இணைய இணைப்பு துண்டிக்கப்பட்டாலும் தொடர்ந்து பில்கள் போடவும் கடன்களைப் பதியவும் முடியும்."
      },
      "Inventory Management": {
        title: "பொருட்கள் மேலாண்மை (Inventory)",
        desc: "இருப்பைக் கண்காணிக்கவும், குறைந்த இருப்பு எச்சரிக்கைகளைப் பெற்று எளிதாக ஆர்டர் செய்யவும்."
      },
      "Order Management": {
        title: "ஆர்டர்கள் மேலாண்மை (Orders)",
        desc: "உள்ளூர் வாடிக்கையாளர்களிடம் இருந்து ஆன்லைன் ஆர்டர்களை உடனுக்குடன் பெறலாம்."
      },
      "Employee Roles": {
        title: "ஊழியர் அனுமதிகள் (Employee Roles)",
        desc: "ஊழியர்களுக்குக் குறிப்பிட்ட கடை அனுமதிகளை வழங்கிப் பற்று வரவுகளைப் பாதுகாப்பாக நிர்வகிக்கலாம்."
      }
    };

    return list.map((item: any) => {
      const match = taFeatureMap[item.title];
      return match ? { title: match.title, desc: match.desc } : item;
    });
  };

  const resolvedFeatures = getFeatures();

  return (
    <>
      <Helmet>
        <title>{language === 'ta' ? 'அம்சங்கள் | கோஒன்' : 'Features | GoOne'}</title>
        <meta name="description" content={language === 'ta' ? 'கோஒன் வணிக மேலாண்மை மென்பொருளின் முக்கிய அம்சங்களைக் கண்டறியுங்கள்.' : 'Explore the features of the GoOne Business Operating System.'} />
        <link rel="canonical" href="https://www.goone.tech/features" />
        
        {/* Open Graph */}
        <meta property="og:title" content={language === 'ta' ? 'அம்சங்கள் | கோஒன்' : 'Features | GoOne'} />
        <meta property="og:description" content={language === 'ta' ? 'கோஒன் வணிக மேலாண்மை மென்பொருளின் முக்கிய அம்சங்களைக் கண்டறியுங்கள்.' : 'Explore the features of the GoOne Business Operating System.'} />
        <meta property="og:url" content="https://www.goone.tech/features" />
        <meta property="og:image" content="https://www.goone.tech/logo.png" />
      </Helmet>
      
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">
            {language === 'ta' ? 'எளிமையான வடிவமைப்பு, வலிமையான அம்சங்கள்' : 'Powerful Features, Simple Interface'}
          </h1>
          <p className="text-xl text-muted-foreground">
            {language === 'ta' ? 'உங்கள் கடை செயல்பாடுகளை எளிதாக்க தேவையான அனைத்தும் ஒரே இடத்தில்.' : 'Everything you need to run your business, designed to be understood in minutes.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
          {resolvedFeatures.map((feature: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all"
            >
              <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
