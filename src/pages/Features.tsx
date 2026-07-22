import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Loader2, Database, Shield, Code, Rocket, 
  Check, FileText, AlertTriangle, Layers, Cpu, Server, Lock
} from 'lucide-react';
import { useWebsiteConfig } from '@/lib/WebsiteConfigContext';
import { useLanguage } from '@/lib/LanguageContext';
import PlatformOverview from '@/components/PlatformOverview';

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
  const isTa = language === 'ta';

  return (
    <>
      <Helmet>
        <title>{isTa ? 'அம்சங்கள் | கோஒன்' : 'Features & Architecture | GoOne Enterprise BOS'}</title>
        <meta name="description" content={isTa ? 'கோஒன் வணிக மேலாண்மை மென்பொருளின் முக்கிய அம்சங்களைக் கண்டறியுங்கள்.' : 'Explore the features, 28+ modules, and enterprise architecture of GoOne Business Operating System.'} />
        <link rel="canonical" href="https://www.goone.tech/features" />
        
        {/* Open Graph */}
        <meta property="og:title" content={isTa ? 'அம்சங்கள் | கோஒன்' : 'Features & Architecture | GoOne'} />
        <meta property="og:description" content={isTa ? 'கோஒன் வணிக மேலாண்மை மென்பொருளின் முக்கிய அம்சங்களைக் கண்டறியுங்கள்.' : 'Explore the features, 28+ modules, and enterprise architecture of GoOne.'} />
        <meta property="og:url" content="https://www.goone.tech/features" />
        <meta property="og:image" content="https://www.goone.tech/logo.png" />
      </Helmet>
      
      <div className="container py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
            {isTa ? 'எண்டர்பிரைஸ் பிசினஸ் ஆப்பரேட்டிங் சிஸ்டம்' : 'Enterprise BOS · Production Ready'}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            {isTa ? 'எளிமையான வடிவமைப்பு, வலிமையான அம்சங்கள்' : 'Powerful Features, Enterprise Architecture'}
          </h1>
          <p className="text-xl text-muted-foreground">
            {isTa ? 'உங்கள் கடை செயல்பாடுகளை எளிதாக்கவும், வளர்ச்சியை துரிதப்படுத்தவும் 28+ மாடுலர் அம்சங்கள்.' : '28+ isolated feature modules, built on a unified Node.js & PostgreSQL architecture.'}
          </p>
        </motion.div>

        {/* Feature List Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn mb-24">
          {resolvedFeatures.map((feature: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Platform Breakdown Component from Reference UI */}
        <PlatformOverview />

        {/* Backend & Security Deep Dive (Reference UI details) */}
        <div className="mt-20 space-y-12">
          
          {/* Architecture & Security Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-3xl border shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">PostgreSQL</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {isTa ? 'மாடுலர் அட்டவணைகள், அந்நிய சாவிகள் (Foreign Keys) மற்றும் வேகமான Indexing வசதியுடன் தரவுத்தளம்.' : 'Modular tables, foreign keys, optimized indexing, and JSONB document support.'}
                </p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-3xl border shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">{isTa ? 'பாதுகாப்பு (Security)' : 'Enterprise Security'}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {isTa ? 'JWT · Refresh tokens · RBAC · Rate limiting · Audit logs மூலம் முழு பாதுகாப்பு.' : 'JWT, refresh tokens, strict RBAC, rate limiting, and comprehensive audit logs.'}
                </p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-3xl border shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">{isTa ? 'Clean Architecture' : 'Clean Architecture'}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {isTa ? 'SOLID கோட்பாடுகள், Repository pattern மற்றும் 100% சோதனைகளுடன் கூடிய வடிவமைப்பு.' : 'SOLID principles, repository pattern, unit testing, and maintainable codebase.'}
                </p>
              </div>
            </div>
          </div>

          {/* Change Log & Documentation */}
          <div className="bg-slate-900 text-slate-100 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
              <FileText className="w-5 h-5 text-blue-400" />
              {isTa ? 'ஆவணங்கள் & புதுப்பிப்புகள் (v3.0 Release Note)' : 'Documentation & Change Log (v3.0 Final)'}
            </h3>
            <div className="flex flex-wrap gap-3 mb-6 text-xs">
              {['BRD · PRD · FRS · NFR', 'User Stories & Acceptance', 'Technical Architecture & ERD', 'Swagger API Documentation', 'CI/CD & Security Checklist'].map((doc, idx) => (
                <span key={idx} className="bg-slate-800 text-blue-300 border border-slate-700 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  {doc}
                </span>
              ))}
            </div>
            <div className="bg-slate-800/90 border border-slate-700/80 p-4 rounded-2xl text-xs text-slate-300 leading-relaxed">
              <strong className="text-blue-400 font-semibold">{isTa ? 'மாற்றங்கள் (v3.0):' : 'Change log (v3.0 · Enterprise):'}</strong>{" "}
              {isTa 
                ? "Ride செயலி 'GoOne Partner' என பெயர் மாற்றம் செய்யப்பட்டது (ஓட்டுனர்கள், டெலிவரி, ஃப்ளீட்). வாடிக்கையாளர்கள் டாக்ஸி/ஆட்டோ முன்பதிவு செய்யும் வசதி 'GoOne Customer App' உடன் ஒருங்கிணைக்கப்பட்டது."
                : "Renamed Ride → Partner (drivers, delivery, fleet). Customer ride booking moved to GoOne Customer App. Unified backend, modular DB, RBAC, audit logs, production checklist, risk assessment."
              }
            </div>
          </div>

          {/* Roadmap & Future Expansion */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-500/5 border border-amber-500/20 p-6 rounded-3xl">
              <div className="flex items-center gap-2 mb-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>{isTa ? 'அபாய மதிப்பீடு (Risk Assessment)' : 'Risk Assessment & Mitigation'}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {isTa 
                  ? 'கிராமப்புறங்களில் டிஜிட்டல் பயன்பாடு, சாதனங்களின் வேறுபாடுகள், நெட்வொர்க் சவால்கள் மற்றும் விதிகளை எதிர்கொள்ளும் வகையில் Offline-first தொழில்நுட்பம்.'
                  : 'Addressed rural adoption, device fragmentation, network reliability, and local regulatory compliance through offline-first design.'
                }
              </p>
            </div>

            <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-3xl">
              <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <Rocket className="w-4 h-4" />
                <span>{isTa ? 'எதிர்கால விரிவாக்கம் (Future Expansion Roadmap)' : 'Future Expansion Roadmap'}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {isTa 
                  ? 'Q3 2026: உணவு டெலிவரி (Food Delivery), மருந்தகம் (Pharmacy), விவசாய சந்தை (Agri-Marketplace), பேருந்து முன்பதிவு, சுகாதாரம் மற்றும் நிதிச் சேவைகள்.'
                  : 'Q3 2026: Food delivery, Pharmacy, Agriculture marketplace, Bus booking, Healthcare, Education, and Micro-insurance.'
                }
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
