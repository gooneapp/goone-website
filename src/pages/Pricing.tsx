import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWebsiteConfig } from '@/lib/WebsiteConfigContext';
import { useLanguage } from '@/lib/LanguageContext';

export default function Pricing() {
  const { config, loading, error } = useWebsiteConfig();
  const { language, t } = useLanguage();

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center flex-col gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="text-muted-foreground animate-pulse">Loading pricing plans...</p>
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

  const getPlans = () => {
    const list = config.PRICING_PLANS || [];
    if (language !== 'ta') return list;

    // Tamil translation mapping for standard plans
    const taPlanMap: Record<string, { name: string, desc: string, features: string[] }> = {
      "Basic": {
        name: "அடிப்படைத் திட்டம் (Basic)",
        desc: "புதிதாகத் தொடங்கும் கடைகளுக்கு ஏற்றது",
        features: ["டிஜிட்டல் கடன் கணக்கு", "அடிப்படை பொருட்கள் மேலாண்மை", "மாதத்திற்கு 50 ஆர்டர்கள் வரை", "குரல் வழி வழிகாட்டுதல்"]
      },
      "Pro": {
        name: "வளர்ச்சித் திட்டம் (Pro)",
        desc: "வளரும் வணிகங்களுக்குச் சிறந்தது",
        features: ["அடிப்படைத் திட்டத்தின் அனைத்தும்", "வரம்பற்ற ஆர்டர்கள்", "ஊழியர்கள் கணக்குகள் (Staff)", "மேம்பட்ட வணிக பகுப்பாய்வு", "டெலிவரி பார்ட்னர்கள் இணைப்பு"]
      },
      "Enterprise": {
        name: "பெருவணிகத் திட்டம் (Enterprise)",
        desc: "பெரிய அளவிலான வணிக செயல்பாடுகளுக்கு",
        features: ["வளர்ச்சித் திட்டத்தின் அனைத்தும்", "பல கிளைகள் மேலாண்மை (Multi-branch)", "பிரத்யேக வாடிக்கையாளர் மேலாளர்", "சொந்த பிராண்டிங்", "ஏபிஐ (API) அணுகல்"]
      }
    };

    return list.map((item: any) => {
      const match = taPlanMap[item.name];
      return match ? { ...item, name: match.name, desc: match.desc, features: match.features } : item;
    });
  };

  const plans = getPlans();

  return (
    <>
      <Helmet>
        <title>{language === 'ta' ? 'கட்டணத் திட்டங்கள் | கோஒன்' : 'Pricing Plans | GoOne'}</title>
        <meta name="description" content={language === 'ta' ? 'கோஒன் வணிக மேலாண்மை மென்பொருளின் எளிமையான மற்றும் வெளிப்படையான கட்டணத் திட்டங்கள்.' : 'Affordable and transparent pricing for businesses on GoOne.'} />
        <link rel="canonical" href="https://www.goone.tech/pricing" />
        
        {/* Open Graph */}
        <meta property="og:title" content={language === 'ta' ? 'கட்டணத் திட்டங்கள் | கோஒன்' : 'Pricing Plans | GoOne'} />
        <meta property="og:description" content={language === 'ta' ? 'கோஒன் வணிக மேலாண்மை மென்பொருளின் எளிமையான மற்றும் வெளிப்படையான கட்டணத் திட்டங்கள்.' : 'Affordable and transparent pricing for businesses on GoOne.'} />
        <meta property="og:url" content="https://www.goone.tech/pricing" />
        <meta property="og:image" content="https://www.goone.tech/logo.png" />
      </Helmet>
      
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">{t('pricing.title')}</h1>
          <p className="text-xl text-muted-foreground">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fadeIn">
          {plans.map((plan: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-card p-8 rounded-3xl border flex flex-col ${plan.popular ? 'border-primary shadow-lg relative scale-105' : 'shadow-sm'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {t('pricing.most_popular')}
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6 text-sm">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature: string, j: number) => (
                  <li key={j} className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/contact" 
                className={`w-full py-3 rounded-xl font-medium text-center transition-colors ${
                  plan.popular 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'bg-secondary/10 text-secondary hover:bg-secondary/20'
                }`}
              >
                {t('pricing.get_started')}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
