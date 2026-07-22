import { motion } from 'framer-motion';
import { 
  Store, ShoppingCart, Truck, LayoutDashboard, Car, 
  Layers, Database, Users, Boxes, Receipt, 
  ShoppingBag, Wallet, BookOpen, TrendingUp, Tag, 
  Bell, UserCheck, Bike, CreditCard, ShieldAlert, 
  ClipboardList, CheckCircle2, ArrowRight, Clock, 
  Server, Sparkles, Check, ShieldCheck, Zap,
  Compass, RefreshCw
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function PlatformOverview() {
  const { language } = useLanguage();

  const isTa = language === 'ta';

  const stats = [
    {
      title: isTa ? "தயாரிப்புகள் (Products)" : "Products",
      val: "4",
      sub: isTa ? "Customer · Business · Partner · Admin" : "Customer · Business · Partner · Admin",
      icon: Store,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/40"
    },
    {
      title: isTa ? "தொகுதிகள் (Modules)" : "Modules",
      val: "28+",
      sub: isTa ? "பிரத்யேக அம்சங்கள் · தனித்தனி தொகுதிகள்" : "feature-based · isolated",
      icon: Database,
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-50 dark:bg-indigo-950/40"
    },
    {
      title: isTa ? "கட்டமைப்பு (Architecture)" : "Architecture",
      val: isTa ? "மாடுலர்" : "Modular",
      sub: "Node.js · PostgreSQL · Redis",
      icon: Layers,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-950/40"
    },
    {
      title: isTa ? "பயனர் பங்குகள் (User Roles)" : "User Roles",
      val: "6+",
      sub: isTa ? "Customer · Business · Partner · Admin" : "Customer · Business · Partner · Admin",
      icon: Users,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-950/40"
    }
  ];

  const products = [
    {
      title: "GoOne Customer",
      subtitle: isTa ? "வாடிக்கையாளர் செயலி" : "Customer App",
      badge: "marketplace",
      icon: ShoppingCart,
      color: "from-blue-500/10 via-indigo-500/5 to-transparent border-blue-200 dark:border-blue-800",
      items: [
        isTa ? "கடைகளைக் கண்டறிதல் & பொருட்களைப் பார்வையிடுதல்" : "Discover shops · browse products",
        isTa ? "ஆர்டர் செய்தல் · கண்காணித்தல் · செலுத்துதல்" : "Place orders · track · pay",
        isTa ? "விருப்பப்பட்டியல் · சுயவிவரம் · அறிவிப்புகள்" : "Favourites · profile · notifications",
        { text: isTa ? "டாக்ஸி / ஆட்டோ முன்பதிவு · Ride OTP · SOS" : "Book taxi / auto · ride OTP · SOS", highlight: true },
        isTa ? "வாலட் · ரொக்கம் · UPI செலுத்துதல்" : "Wallet · cash · UPI"
      ]
    },
    {
      title: "GoOne Business",
      subtitle: isTa ? "வணிக மேலாண்மை" : "Core BOS",
      badge: "core BOS",
      icon: Store,
      color: "from-emerald-500/10 via-teal-500/5 to-transparent border-emerald-200 dark:border-emerald-800",
      items: [
        isTa ? "டாஷ்போர்டு · விரைவு விற்பனை பில்லிங்" : "Dashboard · Sales (quick bill)",
        isTa ? "சரக்கு இருப்பு · பொருட்கள் · Stock" : "Inventory · Products · Stock",
        isTa ? "கொள்முதல் · சப்ளையர்கள் · செலவுகள்" : "Purchase · Suppliers · Expenses",
        isTa ? "வாடிக்கையாளர் கடன் பேரேடு · அறிக்கைகள்" : "Customer ledger · Reports",
        isTa ? "சலுகைகள் · ஊழியர்கள் · பிக்கப்/டெலிவரி" : "Offers · employees · pickup/delivery"
      ]
    },
    {
      title: "GoOne Partner",
      subtitle: isTa ? "ஓட்டுனர் & விநியோகம்" : "Driver · Delivery",
      badge: "driver · delivery",
      badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300",
      icon: Car,
      color: "from-teal-500/10 via-emerald-500/5 to-transparent border-teal-200 dark:border-teal-800",
      items: [
        isTa ? "ஓட்டுனர் பதிவு · வாகனம் சேர்த்தல்" : "Driver registration · vehicle",
        isTa ? "ஆவணச் சரிபார்ப்பு · ஆன்லைன்/ஆஃப்லைன்" : "Document verification · online/offline",
        isTa ? "சவாரி / டெலிவரி ஏற்றுக்கொள்வது" : "Ride / delivery acceptance",
        isTa ? "வழிசெலுத்தல் · வாலட் · வருமானம்" : "Navigation · wallet · earnings",
        isTa ? "சவாரி வரலாறு · மதிப்பீடுகள் · சுயவிவரம்" : "Trip history · ratings · profile"
      ]
    },
    {
      title: "Admin CMS",
      subtitle: isTa ? "நிர்வாக மையம்" : "Single Portal",
      badge: "single portal",
      icon: LayoutDashboard,
      color: "from-purple-500/10 via-indigo-500/5 to-transparent border-purple-200 dark:border-purple-800",
      items: [
        isTa ? "வாடிக்கையாளர்கள், வணிகங்கள் & பார்ட்னர்களை நிர்வகித்தல்" : "Manage customers · businesses · partners",
        isTa ? "பொருட்கள் · இருப்பு · விற்பனை · ஆர்டர்கள்" : "Products · inventory · sales · orders",
        isTa ? "டாக்ஸி · டெலிவரி · கட்டணங்கள் · வாலட்" : "Taxi · delivery · payments · wallet",
        isTa ? "பங்குகள் · அனுமதிகள் · தணிக்கைப் பதிவுகள் (Audit)" : "Roles · permissions · audit logs"
      ]
    }
  ];

  const modules = [
    { title: isTa ? "அடையாள அங்கீகாரம்" : "Authentication", icon: ShieldCheck, category: "Core" },
    { title: isTa ? "பயனர்கள் & பங்குகள்" : "Users · Roles", icon: Users, category: "Core" },
    { title: isTa ? "வணிகங்கள்" : "Businesses", icon: Store, category: "Core" },
    { title: isTa ? "பொருட்கள்" : "Products", icon: Boxes, category: "Inventory" },
    { title: isTa ? "சரக்கு இருப்பு" : "Inventory", icon: Layers, category: "Inventory" },
    { title: isTa ? "விற்பனை (Quick bill)" : "Sales · Quick bill", icon: Receipt, category: "Sales" },
    { title: isTa ? "கொள்முதல்" : "Purchases", icon: ShoppingBag, category: "Sales" },
    { title: isTa ? "சப்ளையர்கள்" : "Suppliers", icon: Truck, category: "Sales" },
    { title: isTa ? "செலவுகள்" : "Expenses", icon: Wallet, category: "Finance" },
    { title: isTa ? "கடன் பேரேடு" : "Customer ledger", icon: BookOpen, category: "Finance" },
    { title: isTa ? "அறிக்கைகள் & பகுப்பாய்வு" : "Reports · Analytics", icon: TrendingUp, category: "Analytics" },
    { title: isTa ? "சலுகைகள்" : "Offers", icon: Tag, category: "Marketing" },
    { title: isTa ? "அறிவிப்புகள்" : "Notifications", icon: Bell, category: "System" },
    { title: isTa ? "ஊழியர் மேலாண்மை" : "Employee", icon: UserCheck, category: "Core" },
    { title: isTa ? "டெலிவரி மேலாண்மை" : "Delivery", icon: Bike, category: "Logistics" },
    { title: isTa ? "டாக்ஸி & பயணங்கள்" : "Taxi · Trips", icon: Car, category: "Logistics" },
    { title: isTa ? "பார்ட்னர்கள் & ஓட்டுனர்கள்" : "Partners · Drivers", icon: Compass, category: "Logistics" },
    { title: isTa ? "கட்டணங்கள் & வாலட்" : "Payments · Wallet", icon: CreditCard, category: "Finance" },
    { title: isTa ? "நிர்வாகம் & அமைப்புகள்" : "Admin · Settings", icon: ShieldAlert, category: "Admin" },
    { title: isTa ? "தணிக்கைப் பதிவுகள்" : "Audit logs", icon: ClipboardList, category: "Admin" }
  ];

  const flows = [
    { title: isTa ? "விற்பனை பதிவு" : "Sales entry", desc: isTa ? "4 தட்டுகள் (4 taps)" : "4 taps quick bill", time: "Instant" },
    { title: isTa ? "டெலிவரி" : "Delivery", desc: isTa ? "பிக்கப் · டெலிவரி சுற்றளவு" : "Pickup · delivery radius", time: "Realtime" },
    { title: isTa ? "சவாரி பார்ட்னர்" : "Ride (partner)", desc: isTa ? "ஏற்றுக்கொள்ளல் · வழிசெலுத்தல்" : "Accept · navigate · earnings", time: "Live" },
    { title: isTa ? "வாடிக்கையாளர் சவாரி" : "Customer ride", desc: isTa ? "GoOne செயலி மூலம் முன்பதிவு" : "Book via GoOne app", time: "1-Tap" },
    { title: isTa ? "நிர்வாகக் கட்டுப்பாடு" : "Admin control", desc: isTa ? "பங்குகள் & அனுமதிகள்" : "Roles & permissions", time: "Secure" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-900/40 relative overflow-hidden">
      <div className="container relative z-10">

        {/* Section Header with Version Pill */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-14 border-b pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>GoOne · Enterprise BOS</span>
              <span className="bg-blue-900 text-white dark:bg-blue-400 dark:text-slate-950 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider">v3.0 Production</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {isTa ? "தளத்தின் கட்டமைப்பு & 4 முக்கிய செயலிகள்" : "Platform Architecture · 4 Unified Products"}
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/80 px-4 py-2 rounded-2xl border border-blue-100 dark:border-slate-700 text-sm font-medium text-blue-950 dark:text-blue-200">
            <Zap className="w-4 h-4 text-amber-500 animate-pulse" />
            <span>{isTa ? "ஒரே தளம். உங்கள் வணிகத்தை வளருங்கள்." : "One Platform. Grow Your Business."}</span>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((st, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-5 md:p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl ${st.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <st.icon className={`w-6 h-6 ${st.color}`} />
              </div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{st.title}</p>
              <h3 className="text-2xl md:text-3xl font-extrabold my-1">{st.val}</h3>
              <p className="text-xs text-muted-foreground">{st.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* 4 Products Cards */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            {isTa ? "4 முக்கிய தயாரிப்புகள் (4 Ecosystem Products)" : "Platform Structure · 4 Core Products"}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-b ${p.color} bg-card p-6 rounded-2xl border shadow-sm hover:shadow-lg transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <p.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base">{p.title}</h4>
                        <span className="text-xs text-muted-foreground">{p.subtitle}</span>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${p.badgeClass || 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200'}`}>
                      {p.badge}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    {p.items.map((item, idx) => {
                      const isObj = typeof item === 'object';
                      const text = isObj ? item.text : item;
                      const isHighlight = isObj && item.highlight;
                      return (
                        <li key={idx} className={`flex items-start gap-2 ${isHighlight ? 'font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/40 p-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800' : ''}`}>
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isHighlight ? 'text-emerald-600' : 'text-primary/70'}`} />
                          <span>{text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Highlight Banner Note for Customer Ride Booking */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-blue-50/90 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 rounded-2xl p-4 md:p-5 mb-16 flex items-center gap-4 text-blue-950 dark:text-blue-100 shadow-sm"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
            <Car className="w-5 h-5" />
          </div>
          <div className="text-xs md:text-sm leading-relaxed">
            <strong className="font-bold text-blue-700 dark:text-blue-300">
              {isTa ? "வாடிக்கையாளர் சவாரி முன்பதிவு (Taxi/Auto):" : "Customer Ride Booking (Taxi / Auto):"}
            </strong>{" "}
            {isTa 
              ? "வாடிக்கையாளர் செயலி (GoOne Customer App) மூலமாக நேரடியாக டாக்ஸி & ஆட்டோ சவாரிகளை முன்பதிவு செய்யலாம். GoOne Partner செயலியானது ஓட்டுனர்கள், விநியோகஸ்தர்கள் மற்றும் வாகன உரிமையாளர்களுக்காகப் பிரத்யேகமாக உருவாக்கப்பட்டது."
              : "Integrated seamlessly into the GoOne Customer App. GoOne Partner is dedicated to drivers, delivery partners, and fleet operators."
            }
          </div>
        </motion.div>

        {/* Unified Backend & Architecture Tech Banner */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Server className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold">{isTa ? "ஒரே ஒருங்கிணைந்த பின்முனை API (Backend API)" : "Backend · One Unified Enterprise API"}</h3>
          </div>
          <div className="bg-slate-900 text-slate-100 p-6 rounded-3xl shadow-lg border border-slate-800">
            <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
              {[
                "Node.js + Express",
                "PostgreSQL",
                "Redis",
                "Socket.IO",
                "FCM Notifications",
                "JWT · RBAC Security",
                "Swagger / OpenAPI Docs"
              ].map((tech, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-slate-800 text-blue-300 border border-slate-700 text-xs px-3 py-1.5 rounded-full font-medium">
                  <Check className="w-3 h-3 text-emerald-400" />
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-xs text-slate-300 bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 inline-flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-400" />
              <span>
                {isTa ? "அம்சங்களின் அடிப்படையில் பிரிக்கப்பட்ட மாடுலர் தொகுதிகள் (Feature-based modules) · Routes, Controllers, Services, Repositories, DTOs, Validation & Unit Tests" : "Feature-based modules · each with routes, controllers, services, repositories, DTOs, validation, and tests"}
              </span>
            </div>
          </div>
        </div>

        {/* 28+ Core Modules Overview Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Boxes className="w-5 h-5 text-primary" />
              {isTa ? "முக்கிய தொகுதிகள் (28+ Isolated Modules)" : "Core Platform Modules (28+ Isolated Features)"}
            </h3>
            <span className="text-xs font-semibold px-3 py-1 bg-muted rounded-full">
              {isTa ? "பிரத்யேக மாடுலர்கள்" : "Enterprise Ready"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {modules.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="bg-card hover:bg-accent/40 p-3.5 rounded-xl border shadow-2xs hover:shadow-sm transition-all flex items-center gap-2.5 group"
              >
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <m.icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-medium truncate">{m.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Flows Pipeline */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-primary" />
            {isTa ? "முக்கிய பணிப்பாய்வுகள் (Key Operational Flows)" : "Key Platform Workflows"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {flows.map((fl, i) => (
              <div key={i} className="bg-slate-100 dark:bg-slate-900/80 border p-4 rounded-2xl flex flex-col justify-between">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] uppercase font-bold text-primary tracking-wider">{fl.title}</span>
                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{fl.time}</span>
                </div>
                <p className="text-xs font-medium text-slate-800 dark:text-slate-200">{fl.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
