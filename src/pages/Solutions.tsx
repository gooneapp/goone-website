import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Store, ShoppingCart, Car, LayoutDashboard, CheckCircle2, 
  ArrowRight, Truck, Utensils, Sprout, Stethoscope, 
  ShoppingBag, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/LanguageContext';

export default function Solutions() {
  const { language } = useLanguage();
  const isTa = language === 'ta';

  const productSolutions = [
    {
      title: "GoOne Customer",
      subtitle: isTa ? "வாடிக்கையாளர் செயலி (Marketplace)" : "Customer App & Marketplace",
      icon: ShoppingCart,
      color: "border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/20 dark:from-blue-950/30 dark:to-slate-900",
      badge: "Marketplace & Taxi",
      badgeStyle: "bg-blue-100 text-blue-800 dark:bg-blue-900/80 dark:text-blue-200",
      description: isTa 
        ? "உள்ளூர் கடைகளைத் தேட, பொருட்களை வாங்க, டாக்ஸி/ஆட்டோ முன்பதிவு செய்ய மற்றும் பில்களைச் செலுத்த ஒரே செயலி." 
        : "Discover local shops, order products, book taxi/auto rides, and make payments seamlessly.",
      features: [
        isTa ? "உள்ளூர் கடைகள் & பொருட்களின் பட்டியல்" : "Discover local shops & browse product catalogs",
        isTa ? "ஆன்லைன் ஆர்டர் & நேரடி கண்காணிப்பு" : "Place orders, live tracking & digital payments",
        isTa ? "டாக்ஸி / ஆட்டோ முன்பதிவு (Ride OTP & SOS Safety)" : "Book Taxi & Auto rides with OTP verification & SOS",
        isTa ? "பிடித்த கடைகள் & டிஜிட்டல் வாலட்" : "Favourites, profile management & GoOne Wallet"
      ]
    },
    {
      title: "GoOne Business",
      subtitle: isTa ? "வணிக மேலாண்மை (Core BOS)" : "Core Business Operating System",
      icon: Store,
      color: "border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-teal-50/20 dark:from-emerald-950/30 dark:to-slate-900",
      badge: "Core BOS",
      badgeStyle: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200",
      description: isTa 
        ? "விற்பனை, பில்லிங், கடன் கணக்குகள் (Udhar), சரக்கு இருப்பு மற்றும் சப்ளையர் பில்களை எளிதாக நிர்வகிக்கவும்." 
        : "Manage sales, 4-tap quick billing, digital Udhar Khata ledgers, stock inventory, and suppliers.",
      features: [
        isTa ? "4 தட்டுகளில் விரைவு விற்பனை பில்லிங்" : "4-tap quick billing & Bluetooth POS printing",
        isTa ? "டிஜிட்டல் கடன் கணக்கு (Udhar Khata) & நினைவூட்டல்கள்" : "Digital Udhar Khata ledger with automated reminders",
        isTa ? "சரக்கு இருப்பு மேலாண்மை & குறைந்த இருப்பு எச்சரிக்கை" : "Stock inventory management & low stock alerts",
        isTa ? "கொள்முதல், சப்ளையர்கள் & தினசரி செலவுகள்" : "Purchases, supplier ledgers & daily expense tracking"
      ]
    },
    {
      title: "GoOne Partner",
      subtitle: isTa ? "ஓட்டுனர் & விநியோக பார்ட்னர்" : "Driver & Delivery Partner App",
      icon: Car,
      color: "border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50/50 to-emerald-50/20 dark:from-teal-950/30 dark:to-slate-900",
      badge: "Driver & Delivery",
      badgeStyle: "bg-teal-100 text-teal-800 dark:bg-teal-900/80 dark:text-teal-200",
      description: isTa 
        ? "டாக்ஸி/ஆட்டோ ஓட்டுனர்கள் மற்றும் டெலிவரி நபர்களுக்கான வருமானம் மற்றும் வழிசெலுத்தல் செயலி." 
        : "Dedicated driver and delivery partner app for ride acceptance, routing navigation, and instant earnings.",
      features: [
        isTa ? "ஓட்டுனர் & வாகனச் சரிபார்ப்பு பதிவு" : "Driver onboarding & document verification",
        isTa ? "சவாரி & டெலிவரி ஆர்டர்களை ஏற்றுக்கொள்வது" : "Realtime ride and delivery order acceptance",
        isTa ? "நேரடி ஜிபிஎஸ் வழிசெலுத்தல் (GPS Navigation)" : "Live turn-by-turn navigation & route optimization",
        isTa ? "தினசரி வருமான பேரேடு & வாலட் பணம் எடுத்தல்" : "Earnings ledger, ratings, & instant wallet payouts"
      ]
    },
    {
      title: "Admin CMS",
      subtitle: isTa ? "ஒற்றை நிர்வாக மையம் (Single Portal)" : "Single Unified Management Portal",
      icon: LayoutDashboard,
      color: "border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-indigo-50/20 dark:from-purple-950/30 dark:to-slate-900",
      badge: "Platform Control",
      badgeStyle: "bg-purple-100 text-purple-800 dark:bg-purple-900/80 dark:text-purple-200",
      description: isTa 
        ? "தளத்தின் அனைத்து வாடிக்கையாளர்கள், கடைகள், ஓட்டுனர்கள், ஆர்டர்கள் மற்றும் பணப்பரிவர்த்தனைகளை நிர்வகிக்க." 
        : "Complete platform control over users, businesses, partners, orders, rides, payments, and system roles.",
      features: [
        isTa ? "வாடிக்கையாளர், கடை & ஓட்டுனர் கணக்குகள்" : "User, merchant, and partner lifecycle management",
        isTa ? "ஆர்டர்கள், சவாரிகள் & டெலிவரி மேற்பார்வை" : "Live trip monitoring, order dispatching & resolution",
        isTa ? "கட்டணங்கள், கமிஷன்கள் & வாலட் கணக்குகள்" : "Commission structures, payment gateway settlements",
        isTa ? "பங்கு அனுமதிகள் (RBAC) & பாதுகாப்பு Audit logs" : "Role-based access control & administrative audit logs"
      ]
    }
  ];

  const industryVerticals = [
    {
      title: isTa ? "மளிகை & சில்லறை கடைகள் (Kirana)" : "Retail & Grocery (Kirana)",
      desc: isTa 
        ? "அதிகப்படியான பொருட்களை எளிதில் தேடவும், சப்ளையர் ஆர்டர்களைக் கண்காணிக்கவும், விரைவாக பில்கள் போடவும் ஏற்றது."
        : "Manage massive inventories, track supplier reorders, and handle high-volume billing efficiently.",
      icon: ShoppingBag,
      tag: "Retail BOS"
    },
    {
      title: isTa ? "மருந்தகங்கள் (Medical Shops)" : "Medical Shops & Pharmacies",
      desc: isTa 
        ? "மருந்துகளின் பேட்ச்/காலாவதி திகதி கண்காணிப்பு, மருந்துச் சீட்டு இணைப்பு மற்றும் துல்லியமான சரக்குக் கட்டுப்பாடு."
        : "Batch & expiry tracking, prescription linking, and strict inventory validation.",
      icon: Stethoscope,
      tag: "Pharmacy"
    },
    {
      title: isTa ? "விவசாயிகள் (Farmers & Agriculture)" : "Farmers & Agri-Sellers",
      desc: isTa 
        ? "விவசாய விளைபொருட்களை குரல் குறிப்புகள் மற்றும் புகைப்படங்களுடன் பதிவேற்றி உள்ளூர் வாங்குபவர்களிடம் நேரடியாக விற்பனை செய்ய."
        : "List seasonal produce with voice notes and photos, connecting directly with nearby buyers without middlemen.",
      icon: Sprout,
      tag: "Agri-Commerce"
    },
    {
      title: isTa ? "உணவகங்கள் (Hotels & Restaurants)" : "Hotels & Restaurants",
      desc: isTa 
        ? "மேஜை மேலாண்மை, மெனு பிளானர் மற்றும் சமையலறை ஆர்டர் டிக்கெட் (KOT) ஆதரவு."
        : "Table management, digital menu builder, and Kitchen Order Ticket (KOT) support.",
      icon: Utensils,
      tag: "Hospitality"
    },
    {
      title: isTa ? "டாக்ஸி & டெலிவரி பார்ட்னர்கள்" : "Taxi, Auto & Fleet Operators",
      desc: isTa 
        ? "சொந்த வாகனம் வைத்திருப்பவர்கள் மற்றும் ஃப்ளீட் உரிமையாளர்கள் எளிதில் இணைந்து சவாரிகளையும் விநியோகத்தையும் பெறலாம்."
        : "Independent vehicle owners and fleet managers connecting to demand and optimizing daily trips.",
      icon: Truck,
      tag: "Fleet & Mobility"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{isTa ? 'தீர்வுகள் | கோஒன்' : 'Product Solutions | GoOne Enterprise BOS'}</title>
        <meta name="description" content={isTa ? 'கோஒன் வணிக மேலாண்மை மென்பொருளின் 4 தயாரிப்புகள் மற்றும் தொழில்முறை தீர்வுகள்.' : 'Discover GoOne Customer, Business, Partner, and Admin solutions tailored for local commerce.'} />
        <link rel="canonical" href="https://www.goone.tech/solutions" />
        
        {/* Open Graph */}
        <meta property="og:title" content={isTa ? 'தீர்வுகள் | கோஒன்' : 'Product Solutions | GoOne'} />
        <meta property="og:description" content={isTa ? 'கோஒன் வணிக மேலாண்மை மென்பொருளின் 4 தயாரிப்புகள் மற்றும் தொழில்முறை தீர்வுகள்.' : 'Discover GoOne Customer, Business, Partner, and Admin solutions.'} />
        <meta property="og:url" content="https://www.goone.tech/solutions" />
        <meta property="og:image" content="https://www.goone.tech/logo.png" />
      </Helmet>
      
      <div className="container py-24">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>{isTa ? 'அனைத்து வணிகத்திற்குமான தீர்வுகள்' : 'Tailored Platform Ecosystem'}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            {isTa ? '4 முக்கிய தயாரிப்புகள் · ஒரு முழுமையான தளம்' : '4 Integrated Products · One Ecosystem'}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {isTa 
              ? 'வாடிக்கையாளர்கள், வணிகங்கள், ஓட்டுனர்கள் மற்றும் நிர்வாகிகளுக்கான பிரத்யேக கருவிகள்.' 
              : 'GoOne adapts to every role in the hyperlocal commerce loop with dedicated apps and management tools.'}
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {productSolutions.map((prod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all ${prod.color} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-xs flex items-center justify-center text-primary">
                      <prod.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{prod.title}</h3>
                      <p className="text-xs text-muted-foreground font-medium">{prod.subtitle}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${prod.badgeStyle}`}>
                    {prod.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {prod.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                  {prod.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link to="/contact" className="inline-flex items-center text-xs font-bold text-primary hover:underline">
                  {isTa ? 'மேலும் விபரங்களுக்கு தொடர்பு கொள்ளவும்' : 'Request VIP Demo'} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Verticals Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 mb-16 shadow-xl">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 block">
              {isTa ? 'தொழில் பிரிவுகள்' : 'Industry Specialized Solutions'}
            </span>
            <h2 className="text-3xl font-extrabold mb-4">
              {isTa ? 'ஒவ்வொரு வணிக வகைக்கும் ஏற்ற சிறப்பு வசதிகள்' : 'Customized Modules for Every Business Sector'}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              {isTa 
                ? 'உங்கள் வணிகத்தின் தன்மைக்கு ஏற்ப கோஒன் மென்பொருள் தானாகவே தேவையான மாடுலர்களை வழங்கும்.'
                : 'Whether you run a Kirana store, pharmacy, farm, or restaurant, GoOne configures the exact workflows you need.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {industryVerticals.map((vert, i) => (
              <div key={i} className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl flex flex-col justify-between hover:border-blue-500/50 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-700 text-blue-400 flex items-center justify-center">
                      <vert.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono bg-blue-950 text-blue-300 border border-blue-800 px-2 py-0.5 rounded-full">
                      {vert.tag}
                    </span>
                  </div>
                  <h4 className="font-bold text-base mb-2">{vert.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{vert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-10 rounded-3xl border">
          <h3 className="text-2xl font-bold mb-3">
            {isTa ? 'உங்கள் வணிகத்திற்கான தீர்வை இன்று தொடங்கவும்' : 'Empower Your Business Ecosystem Today'}
          </h3>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-6">
            {isTa ? 'கோஒன் செயலியைப் பதிவிறக்கி உங்கள் கடையையும் வாடிக்கையாளர்களையும் எளிதில் இணையுங்கள்.' : 'Join hundreds of merchants, farmers, and drivers building the future of local commerce.'}
          </p>
          <Link to="/download" className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-sm font-bold text-primary-foreground shadow transition-transform hover:scale-105">
            {isTa ? 'செயலியைப் பதிவிறக்குக' : 'Download GoOne App'}
          </Link>
        </div>

      </div>
    </>
  );
}
