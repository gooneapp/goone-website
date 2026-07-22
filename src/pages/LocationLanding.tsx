import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Store, Tractor, ShieldCheck, ArrowRight, Star, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

interface CityData {
  nameEn: string;
  nameTa: string;
  postalCode: string;
  lat: number;
  lng: number;
  phone: string;
  address: string;
  faqs: Array<{ q: string; a: string; qTa: string; aTa: string }>;
}

const cityRegistry: Record<string, CityData> = {
  kallakurichi: {
    nameEn: "Kallakurichi",
    nameTa: "கள்ளக்குறிச்சி",
    postalCode: "606201",
    lat: 11.7384,
    lng: 78.9639,
    phone: "+91 63741 27764",
    address: "Kachirapalayam Road, Kallakurichi, Tamil Nadu 606201",
    faqs: [
      {
        q: "Can I list agricultural produce on GoOne in Kallakurichi?",
        qTa: "கள்ளக்குறிச்சியில் விவசாய விளைபொருட்களை கோஒன் செயலியில் பட்டியலிட முடியுமா?",
        a: "Yes! Farmers in Kallakurichi can list their harvest with voice notes in Tamil and photos, connecting directly with wholesalers and retail buyers without any commission.",
        aTa: "ஆம்! கள்ளக்குறிச்சி விவசாயிகள் தங்கள் அறுவடைகளை தமிழ் குரல் குறிப்புகள் மற்றும் புகைப்படங்களுடன் எளிதாகப் பட்டியலிட்டு, இடைத்தரகர்கள் இன்றி வியாபாரிகளை நேரடியாகத் தொடர்பு கொள்ளலாம்."
      },
      {
        q: "How does the offline mode help farmers?",
        qTa: "இணைய வசதி இல்லாதபோது விவசாயிகளுக்கு இது எவ்வாறு உதவுகிறது?",
        a: "You can register listings and track buyers offline in the fields. The app automatically syncs when network coverage becomes available.",
        aTa: "விவசாய நிலங்களில் நெட்வொர்க் இல்லாதபோது கூட நீங்கள் தயாரிப்புகளைப் பதிவுசெய்யலாம். சிக்னல் கிடைத்தவுடன் செயலி தானாகவே தகவல்களைப் பதிவேற்றிவிடும்."
      }
    ]
  },
  tiruvannamalai: {
    nameEn: "Tiruvannamalai",
    nameTa: "திருவண்ணாமலை",
    postalCode: "606601",
    lat: 12.2274,
    lng: 79.0747,
    phone: "+91 63741 27764",
    address: "Car Street, Near Annamalaiyar Temple, Tiruvannamalai, Tamil Nadu 606601",
    faqs: [
      {
        q: "Will the billing system work during power cuts or offline in Tiruvannamalai?",
        qTa: "திருவண்ணாமலையில் மின்தடை அல்லது இணையம் இல்லாத நேரத்தில் பில்லிங் வேலை செய்யுமா?",
        a: "Absolutely! GoOne is designed with offline-first architecture. Retail shops in Tiruvannamalai can issue bills and manage digital ledgers (Udhar Khata) offline. Data syncs automatically once online.",
        aTa: "நிச்சயமாக! கோஒன் இணையம் இல்லாதபோதும் இயங்கும்படி வடிவமைக்கப்பட்டுள்ளது. திருவண்ணாமலையில் உள்ள கடைகள் நெட்வொர்க் இல்லாதபோதும் பில்களைப் போட்டு, கடன் கணக்குகளைப் பராமரிக்கலாம்."
      },
      {
        q: "Is the interface easy for local shop assistants to learn?",
        qTa: "உள்ளூர் கடை ஊழியர்கள் இதை எளிதாகக் கற்றுக்கொள்ள முடியுமா?",
        a: "Yes, it is designed with an icon-driven, voice-guided interface in Tamil so that anyone can use it without prior technical knowledge.",
        aTa: "ஆம், இது எளிய குறியீடுகள் மற்றும் தமிழில் குரல் வழி வழிகாட்டுதலுடன் உருவாக்கப்பட்டுள்ளதால், தொழில்நுட்ப அறிவு இல்லாதவர்களும் எளிதாகப் பயன்படுத்தலாம்."
      }
    ]
  },
  villupuram: {
    nameEn: "Villupuram",
    nameTa: "விழுப்புரம்",
    postalCode: "605602",
    lat: 11.9401,
    lng: 79.4861,
    phone: "+91 63741 27764",
    address: "Trunk Road, Near Villupuram Junction, Villupuram, Tamil Nadu 605602",
    faqs: [
      {
        q: "How does the delivery network function in Villupuram?",
        qTa: "விழுப்புரத்தில் டெலிவரி நெட்வொர்க் எவ்வாறு செயல்படுகிறது?",
        a: "Retailers can trigger automated delivery requests. Nearby registered delivery partners in Villupuram accept the gig, navigate, and drop off products securely with OTP verification.",
        aTa: "வணிகர்கள் ஆர்டர் கிடைத்ததும் டெலிவரி கோரிக்கையை அனுப்பலாம். விழுப்புரத்தில் உள்ள டெலிவரி பார்ட்னர்கள் அதை ஏற்றுக்கொண்டு, வாடிக்கையாளர்களுக்கு OTP சரிபார்ப்புடன் பாதுகாப்பாக விநியோகிப்பார்கள்."
      },
      {
        q: "Are payouts instant for delivery drivers?",
        qTa: "டெலிவரி பார்ட்னர்களுக்குப் பணம் உடனடியாகக் கிடைக்குமா?",
        a: "Yes, delivery fees are credited instantly to the delivery partner's profile balance upon successful OTP verification and can be withdrawn directly.",
        aTa: "ஆம், டெலிவரி முடிந்தவுடன் அதற்கான கட்டணம் உடனடியாக அவரது கணக்கில் வரவு வைக்கப்படும், அதை அவர்கள் நேரடியாக வங்கிக் கணக்கிற்கு மாற்றிக்கொள்ளலாம்."
      }
    ]
  },
  chennai: {
    nameEn: "Chennai",
    nameTa: "சென்னை",
    postalCode: "600001",
    lat: 13.0827,
    lng: 80.2707,
    phone: "+91 63741 27764",
    address: "Poonamallee High Road, Chennai, Tamil Nadu 600003",
    faqs: [
      {
        q: "Is GoOne suitable for multi-staff stores in suburban Chennai?",
        qTa: "சென்னை புறநகர்ப் பகுதிகளில் பல ஊழியர்களைக் கொண்ட கடைகளுக்கு கோஒன் பொருந்துமா?",
        a: "Yes, GoOne supports custom employee roles (Owner, Manager, Cashier) with strict permission gates to protect cash registers and credit ledgers.",
        aTa: "ஆம், கோஒன் செயலியில் ஊழியர்களுக்கு ஏற்ப தனித்தனி அனுமதிகளை (உரிமையாளர், மேலாளர், காசாளர்) வழங்கி கடைப் பற்று வரவுகளைப் பாதுகாப்பாக நிர்வகிக்கலாம்."
      },
      {
        q: "Does the system support GST invoicing?",
        qTa: "இதில் ஜிஎஸ்டி (GST) பில்கள் போடும் வசதி உள்ளதா?",
        a: "Yes, merchants can configure tax rates and automatically generate GST-compliant digital invoices for customers in Chennai.",
        aTa: "ஆம், வணிகர்கள் தங்களுக்குத் தேவையான வரி விகிதங்களை அமைத்து, ஜிஎஸ்டி விதிமுறைகளுக்கு உட்பட்ட டிஜிட்டல் பில்களை எளிதாக உருவாக்கலாம்."
      }
    ]
  }
};

export default function LocationLanding() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const { language, t } = useLanguage();

  const slug = citySlug?.toLowerCase() || '';
  const city = cityRegistry[slug];

  if (!city) {
    return (
      <div className="flex h-[80vh] items-center justify-center flex-col gap-4 text-center px-4">
        <h2 className="text-3xl font-bold text-destructive">Location Not Found</h2>
        <p className="text-muted-foreground">We currently do not have a dedicated service hub in this region yet.</p>
        <Link to="/" className="text-primary hover:underline font-semibold mt-4">Go Back Home</Link>
      </div>
    );
  }

  const cityName = language === 'ta' ? city.nameTa : city.nameEn;
  const canonicalUrl = `https://www.goone.tech/tamilnadu/${slug}`;

  // Structured Data (JSON-LD) for LocalBusiness SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `GoOne Business OS - ${city.nameEn}`,
    "image": "https://www.goone.tech/logo.png",
    "@id": canonicalUrl,
    "url": canonicalUrl,
    "telephone": city.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": city.address,
      "addressLocality": city.nameEn,
      "addressRegion": "TN",
      "postalCode": city.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.lat,
      "longitude": city.lng
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://instagram.com/_go_one_"
    ]
  };

  return (
    <>
      <Helmet>
        <title>{t('location.meta_title', { city: cityName })}</title>
        <meta name="description" content={t('location.meta_desc', { city: cityName })} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('location.meta_title', { city: cityName })} />
        <meta property="og:description" content={t('location.meta_desc', { city: cityName })} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.goone.tech/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('location.meta_title', { city: cityName })} />
        <meta name="twitter:description" content={t('location.meta_desc', { city: cityName })} />
        <meta name="twitter:image" content="https://www.goone.tech/logo.png" />

        {/* Schema.org script */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-32 pb-40 border-b">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium backdrop-blur-sm">
              📍 GoOne in {cityName} (தமிழ்நாடு)
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
              <span className="text-gradient">
                {t('location.title', { city: cityName })}
              </span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              {t('location.subtitle', { city: cityName })}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/download-app" className="inline-flex h-14 items-center justify-center rounded-xl bg-primary px-10 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:-translate-y-1">
                {t('home.cta_btn')}
              </Link>
              <Link to="/contact" className="inline-flex h-14 items-center justify-center rounded-xl border border-input bg-background/50 backdrop-blur-sm px-10 text-base font-medium transition-all hover:scale-105 hover:bg-accent hover:-translate-y-1">
                {t('home.demo_btn')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/20 border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: t('location.stats.merchants'), value: "450+" },
              { label: t('location.stats.farmers'), value: "1,200+" },
              { label: t('location.stats.deliveries'), value: "25,000+" },
              { label: t('location.stats.support'), value: "100%" }
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-card rounded-2xl border shadow-sm">
                <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ta' ? 'அனைத்து தரப்பினருக்கும் ஏற்ற தீர்வுகள்' : 'Custom Built for Local Ecosystems'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ta' 
                ? `${cityName} பகுதியின் தேவைகளுக்கு ஏற்ப தனிப்பயனாக்கப்பட்ட சேவைகள்.`
                : `Perfect operations tailored specifically for the ${cityName} community.`}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Store className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('location.use_cases.retailers.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('location.use_cases.retailers.desc', { city: cityName })}</p>
            </div>

            <div className="bg-card p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <Tractor className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('location.use_cases.farmers.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('location.use_cases.farmers.desc', { city: cityName })}</p>
            </div>

            <div className="bg-card p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('location.use_cases.delivery.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('location.use_cases.delivery.desc', { city: cityName })}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
                {t('location.why_local.title', { city: cityName })}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-500 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      {language === 'ta' ? 'தமிழ் இடைமுகம்' : 'Fully Local Language Support'}
                    </h4>
                    <p className="text-muted-foreground">{t('location.why_local.desc1', { city: cityName })}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-500 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      {language === 'ta' ? 'வெளிப்படையான கொள்கை' : 'Zero commission policy'}
                    </h4>
                    <p className="text-muted-foreground">{t('location.why_local.desc2', { city: cityName })}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                {language === 'ta' ? `${cityName} வணிகர்களின் கருத்து` : `Merchant Reviews in ${cityName}`}
              </h3>
              <div className="space-y-6">
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-sm">
                  {language === 'ta'
                    ? `"கடைக்கான பற்று வரவுகளை காகிதத்தில் எழுதி வைக்க தேவையில்லை. இணையம் இல்லையென்றாலும் இந்த செயலி அற்புதமாக வேலை செய்கிறது."`
                    : `"Excellent offline ledger system. I don't have to write everything in paper notebook anymore. Works flawlessly without internet."`}
                  <cite className="block font-bold text-foreground not-italic mt-2 text-xs">— K. Murali, Kirana Shop Owner, {cityName}</cite>
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-sm">
                  {language === 'ta'
                    ? `"விளைச்சலை இடைத்தரகர்கள் இன்றி நேரடியாக வியாபாரிகளுக்கு விற்க முடிகிறது. தமிழில் குரல் வழி பதிவு செய்வது மிகவும் சுலபம்."`
                    : `"Bypassing middlemen to sell harvest directly to buyers has changed my business. Voice notes in Tamil are so easy."`}
                  <cite className="block font-bold text-foreground not-italic mt-2 text-xs">— M. Anbu, Farmer, {cityName}</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-primary" />
              {t('location.faq_title', { city: cityName })}
            </h2>
          </div>

          <div className="space-y-6">
            {city.faqs.map((faq, i) => (
              <div key={i} className="bg-card p-6 rounded-2xl border shadow-sm">
                <h3 className="text-lg font-bold mb-3">{language === 'ta' ? faq.qTa : faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{language === 'ta' ? faq.aTa : faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('location.cta_title', { city: cityName })}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
            {t('location.cta_subtitle', { city: cityName })}
          </p>
          <Link to="/download-app" className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-sm font-bold text-primary shadow transition-transform hover:scale-105 hover:bg-white/90">
            {t('home.cta_btn')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
