import { Helmet } from 'react-helmet-async';
import { useWebsiteConfig } from '@/lib/WebsiteConfigContext';
import { useLanguage } from '@/lib/LanguageContext';
import { Loader2 } from 'lucide-react';

export default function TermsConditions() {
  const { config, loading, error } = useWebsiteConfig();
  const { language } = useLanguage();

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

  // Tamil legal text fallback for Terms & Conditions
  const termsConditionsTa = `
    <h1>விதிமுறைகள் மற்றும் நிபந்தனைகள் (Terms & Conditions)</h1>
    <p class="text-muted-foreground">கடைசியாக புதுப்பிக்கப்பட்டது: ஜூலை 2026</p>
    
    <h2>1. விதிமுறைகளை ஏற்றுக்கொள்வது</h2>
    <p>
      வாடிக்கையாளர் செயலி, வணிகச் செயலி, டெலிவரி செயலி மற்றும் நிர்வாக சிஎம்எஸ் உள்ளிட்ட கோஒன் (GoOne) தளத்தை அணுகுவதன் மூலமும் பயன்படுத்துவதன் மூலமும், இந்த ஒப்பந்தத்தின் விதிமுறைகள் மற்றும் நிபந்தனைகளுக்குக் கட்டுப்பட ஒப்புக்கொள்கிறீர்கள்.
    </p>

    <h2>2. சேவையின் விவரம்</h2>
    <p>
      கோஒன் என்பது உள்ளூர் வணிகர்கள், வாடிக்கையாளர்கள் மற்றும் டெலிவரி பார்ட்னர்களை இணைக்கும் ஒரு வணிக இயக்க முறைமையாகும் (Business OS). எந்தவொரு அறிவிப்பும் இன்றி சேவையை மாற்றியமைக்க அல்லது தற்காலிகமாக நிறுத்த எங்களுக்கு உரிமை உண்டு.
    </p>

    <h2>3. பயனர் நடத்தை</h2>
    <p>
      சட்டபூர்வமான நோக்கங்களுக்காக மட்டுமே இச்சேவையைப் பயன்படுத்த ஒப்புக்கொள்கிறீர்கள். தளத்தின் பாதுகாப்பை அச்சுறுத்தும் அல்லது மற்ற பயனர்களின் அணுகலைத் தடுக்கும் எந்தவொரு செயலிலும் ஈடுபடக்கூடாது.
    </p>

    <h2>4. டிஜிட்டல் கடன் கணக்கு (Udhar Khata)</h2>
    <p>
      டிஜிட்டல் கடன் கணக்கு என்பது கணக்கு வைப்பதற்கான ஒரு டிஜிட்டல் பதிவேடு மட்டுமே. கோஒன் ஒரு நிதி நிறுவனம் அல்ல, மேலும் இந்த மேடையில் பதிவுசெய்யப்பட்ட கடன்களை வசூலிப்பதற்கோ அல்லது தீர்ப்பதற்கோ கோஒன் பொறுப்பல்ல.
    </p>

    <h2>5. பொறுப்பு வரம்பு</h2>
    <p>
      எங்கள் சேவையைப் பயன்படுத்துவதால் அல்லது பயன்படுத்த முடியாமல் போவதால் ஏற்படும் நேரடி, மறைமுக அல்லது தற்செயலான இழப்புகளுக்கு கோஒன் நிறுவனம் எந்த வகையிலும் பொறுப்பாகாது.
    </p>

    <h2>6. தொடர்பு</h2>
    <p>
      விதிமுறைகள் குறித்த சட்டபூர்வமான விசாரணைகளுக்கு, தயவுசெய்து legal@goone.in என்ற மின்னஞ்சலில் எங்களைத் தொடர்பு கொள்ளவும்.
    </p>
  `;

  const htmlContent = language === 'ta'
    ? termsConditionsTa
    : (config.WEBSITE_TERMS_CONDITIONS_HTML || config.TERMS_CONDITIONS_HTML || '');

  return (
    <>
      <Helmet>
        <title>{language === 'ta' ? 'விதிமுறைகள் & நிபந்தனைகள் | கோஒன்' : 'Terms & Conditions | GoOne'}</title>
        <meta name="description" content={language === 'ta' ? 'கோஒன் தளத்தின் விதிமுறைகள் மற்றும் நிபந்தனைகள் விபரங்கள்.' : 'GoOne Terms & Conditions.'} />
        <link rel="canonical" href="https://www.goone.tech/terms-conditions" />
        
        {/* Open Graph */}
        <meta property="og:title" content={language === 'ta' ? 'விதிமுறைகள் & நிபந்தனைகள் | கோஒன்' : 'Terms & Conditions | GoOne'} />
        <meta property="og:description" content={language === 'ta' ? 'கோஒன் தளத்தின் விதிமுறைகள் மற்றும் நிபந்தனைகள் விபரங்கள்.' : 'GoOne Terms & Conditions.'} />
        <meta property="og:url" content="https://www.goone.tech/terms-conditions" />
        <meta property="og:image" content="https://www.goone.tech/logo.png" />
      </Helmet>
      
      <div 
        className="container py-24 max-w-3xl prose dark:prose-invert animate-fadeIn"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </>
  );
}
