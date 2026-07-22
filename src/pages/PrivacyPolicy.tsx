import { Helmet } from 'react-helmet-async';
import { useWebsiteConfig } from '@/lib/WebsiteConfigContext';
import { useLanguage } from '@/lib/LanguageContext';
import { Loader2 } from 'lucide-react';

export default function PrivacyPolicy() {
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

  // Tamil legal text fallback for Privacy Policy
  const privacyPolicyTa = `
    <h1>தனியுரிமைக் கொள்கை (Privacy Policy)</h1>
    <p class="text-muted-foreground">கடைசியாக புதுப்பிக்கப்பட்டது: ஜூலை 2026</p>
    
    <h2>1. அறிமுகம்</h2>
    <p>
      கோஒன் (GoOne) தளத்திற்கு உங்களை வரவேற்கிறோம். உங்களது தனியுரிமையை நாங்கள் மதிக்கிறோம் மற்றும் உங்களது தனிப்பட்ட தரவைப் பாதுகாக்க நாங்கள் கடமைப்பட்டுள்ளோம். எங்கள் வலைத்தளத்தைப் பார்வையிடும்போது அல்லது எங்கள் பயன்பாடுகளைப் பயன்படுத்தும்போது (வாடிக்கையாளர் செயலி, வணிகச் செயலி, டெலிவரி செயலி, நிர்வாக சிஎம்எஸ்) உங்களது தனிப்பட்ட தரவை நாங்கள் எவ்வாறு பாதுகாக்கிறோம் என்பதை இந்தக் கொள்கை விளக்குகிறது.
    </p>

    <h2>2. நாங்கள் சேகரிக்கும் தகவல்கள்</h2>
    <p>
      உங்களைப் பற்றிய பல்வேறு வகையான தனிப்பட்ட தகவல்களை நாங்கள் சேகரிக்கலாம், பயன்படுத்தலாம் மற்றும் சேமிக்கலாம்:
    </p>
    <ul>
      <li><strong>அடையாளத் தரவு (Identity Data)</strong>: முதல் பெயர், கடைசி பெயர், பயனர்பெயர் போன்றவை.</li>
      <li><strong>தொடர்புத் தரவு (Contact Data)</strong>: பில்லிங் முகவரி, விநியோக முகவரி, மின்னஞ்சல் மற்றும் தொலைபேசி எண்கள்.</li>
      <li><strong>நிதித் தரவு (Financial Data)</strong>: வங்கி கணக்கு மற்றும் கட்டண அட்டை விவரங்கள் (பாதுகாப்பான மூன்றாம் தரப்பு வாயில்கள் மூலம் மட்டுமே).</li>
      <li><strong>பரிவர்த்தனைத் தரவு (Transaction Data)</strong>: நீங்கள் வாங்கிய தயாரிப்புகள் மற்றும் சேவைகளின் விவரங்கள்.</li>
    </ul>

    <h2>3. தகவல்களைப் பயன்படுத்தும் முறை</h2>
    <p>
      சட்டம் அனுமதிக்கும் போது மட்டுமே உங்களது தனிப்பட்ட தரவை நாங்கள் பயன்படுத்துவோம்:
    </p>
    <ul>
      <li>உங்களுடன் நாங்கள் செய்துகொண்ட ஒப்பந்தத்தை நிறைவேற்றத் தேவைப்படும்போது.</li>
      <li>எங்களது நியாயமான வணிகத் தேவைகளுக்காகவும் உங்களது தனியுரிமை உரிமைகளை மீறாத வகையிலும்.</li>
      <li>சட்டப்பூர்வ கடமைகளுக்கு இணங்க வேண்டியிருக்கும் போது.</li>
    </ul>

    <h2>4. தரவு பாதுகாப்பு</h2>
    <p>
      உங்களது தனிப்பட்ட தரவு தற்செயலாக இழக்கப்படுவதையோ, அங்கீகரிக்கப்படாத வகையில் பயன்படுத்தப்படுவதையோ அல்லது அணுகப்படுவதையோ தடுக்க தகுந்த பாதுகாப்பு நடவடிக்கைகளை நாங்கள் மேற்கொண்டுள்ளோம்.
    </p>

    <h2>5. தொடர்பு கொள்ள</h2>
    <p>
      இந்தத் தனியுரிமைக் கொள்கை குறித்து ஏதேனும் கேள்விகள் இருந்தால், எங்களை privacy@goone.in என்ற மின்னஞ்சலில் தொடர்பு கொள்ளவும்.
    </p>
  `;

  const htmlContent = language === 'ta'
    ? privacyPolicyTa
    : (config.WEBSITE_PRIVACY_POLICY_HTML || config.PRIVACY_POLICY_HTML || '');

  return (
    <>
      <Helmet>
        <title>{language === 'ta' ? 'தனியுரிமைக் கொள்கை | கோஒன்' : 'Privacy Policy | GoOne'}</title>
        <meta name="description" content={language === 'ta' ? 'கோஒன் தனியுரிமைக் கொள்கை விபரங்கள்.' : 'GoOne Privacy Policy.'} />
        <link rel="canonical" href="https://www.goone.tech/privacy-policy" />
        
        {/* Open Graph */}
        <meta property="og:title" content={language === 'ta' ? 'தனியுரிமைக் கொள்கை | கோஒன்' : 'Privacy Policy | GoOne'} />
        <meta property="og:description" content={language === 'ta' ? 'கோஒன் தனியுரிமைக் கொள்கை விபரங்கள்.' : 'GoOne Privacy Policy.'} />
        <meta property="og:url" content="https://www.goone.tech/privacy-policy" />
        <meta property="og:image" content="https://www.goone.tech/logo.png" />
      </Helmet>
      
      <div 
        className="container py-24 max-w-3xl prose dark:prose-invert animate-fadeIn"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </>
  );
}
