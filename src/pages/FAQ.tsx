import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useWebsiteConfig } from '@/lib/WebsiteConfigContext';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FAQ() {
  const { config, loading, error } = useWebsiteConfig();
  const { language } = useLanguage();

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center flex-col gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="text-muted-foreground animate-pulse">Loading FAQ...</p>
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

  const getFaqs = () => {
    const list = config.FAQ_LIST || [];
    if (language !== 'ta') return list;

    // Hardcoded Tamil translation map for standard FAQs
    const taFaqMap: Record<string, { q: string, a: string }> = {
      "What is GoOne?": {
        q: "கோஒன் (GoOne) என்றால் என்ன?",
        a: "கோஒன் என்பது சில்லறை வணிகர்கள், வாடிக்கையாளர்கள் மற்றும் டெலிவரி பார்ட்னர்களை இணைக்கும் இந்தியாவின் முதன்மையான கிராமப்புற மற்றும் அரை-நகர்ப்புற வணிக மேலாண்மை மென்பொருளாகும்."
      },
      "Do I need an internet connection to use GoOne?": {
        q: "கோஒன் செயலியைப் பயன்படுத்த இணைய வசதி (Internet) தேவையா?",
        a: "இல்லை! கோஒன் இணையம் இல்லாதபோதும் இயங்கும்படி (Offline-First) வடிவமைக்கப்பட்டுள்ளது. நெட்வொர்க் இல்லாதபோதும் பில்கள் போடவும், கடன் கணக்குகளைப் பதியவும் முடியும். சிக்னல் கிடைத்தவுடன் தரவுகள் தானாகவே ஒத்திசைக்கப்படும்."
      },
      "Is it difficult to learn?": {
        q: "இதைப் பயன்படுத்துவது கடினமா?",
        a: "மிகவும் எளிது! நாங்கள் எளிய குறியீடுகள் மற்றும் தமிழில் குரல் வழி வழிகாட்டுதலுடன் வடிவமைத்துள்ளோம். ஸ்மார்ட்போன் பயன்படுத்தத் தெரிந்த யார் வேண்டுமானாலும் இதை எளிதாகப் பயன்படுத்தலாம்."
      },
      "How does the Digital Credit Book work?": {
        q: "டிஜிட்டல் கடன் கணக்கு (Udhar Khata) எவ்வாறு செயல்படுகிறது?",
        a: "இது உங்களது காகிதக் கணக்கு புத்தகத்தை மாற்றுகிறது. வாடிக்கையாளரின் மொபைல் எண் மூலம் கடன்களைப் பதியலாம். வாடிக்கையாளரும் வணிகரும் தங்கள் கணக்கு நிலவரத்தை நேரலையாகத் தங்கள் செயலியில் சரிபார்க்கலாம்."
      }
    };

    return list.map((item: any) => {
      const match = taFaqMap[item.q];
      return match ? { q: match.q, a: match.a } : item;
    });
  };

  const resolvedFaqs = getFaqs();

  return (
    <>
      <Helmet>
        <title>{language === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள் | கோஒன்' : 'FAQ | GoOne'}</title>
        <meta name="description" content={language === 'ta' ? 'கோஒன் செயலி பற்றிய அடிக்கடி கேட்கப்படும் கேள்விகளுக்கான பதில்கள்.' : 'Frequently Asked Questions about GoOne.'} />
        <link rel="canonical" href="https://www.goone.tech/faq" />
        
        {/* Open Graph */}
        <meta property="og:title" content={language === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள் | கோஒன்' : 'FAQ | GoOne'} />
        <meta property="og:description" content={language === 'ta' ? 'கோஒன் செயலி பற்றிய அடிக்கடி கேட்கப்படும் கேள்விகளுக்கான பதில்கள்.' : 'Frequently Asked Questions about GoOne.'} />
        <meta property="og:url" content="https://www.goone.tech/faq" />
        <meta property="og:image" content="https://www.goone.tech/logo.png" />
      </Helmet>
      
      <div className="container py-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">
            {language === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-xl text-muted-foreground">
            {language === 'ta' ? 'உங்களது சந்தேகங்களுக்கான பதில்கள் இதோ.' : "Got questions? We've got answers."}
          </p>
        </motion.div>

        <div className="space-y-6 animate-fadeIn">
          {resolvedFaqs.map((faq: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
