import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { useWebsiteConfig } from '@/lib/WebsiteConfigContext';
import { useLanguage } from '@/lib/LanguageContext';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { config, loading, error: configError } = useWebsiteConfig();
  const { language, t } = useLanguage();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema)
  });

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center flex-col gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="text-muted-foreground animate-pulse">Loading contact information...</p>
      </div>
    );
  }

  if (configError || !config) {
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

  const onSubmit = async (data: any) => {
    try {
      setIsSubmitting(true);
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1';
      const response = await fetch(`${apiUrl}/contact/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit inquiry');
      }

      alert(language === 'ta' ? "செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!" : "Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert(language === 'ta' ? "செய்தி அனுப்ப முடியவில்லை. பின்னர் மீண்டும் முயற்சிக்கவும்." : "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{language === 'ta' ? 'தொடர்புகொள்ள | கோஒன்' : 'Contact Us | GoOne'}</title>
        <meta name="description" content={language === 'ta' ? 'கோஒன் குழுவைத் தொடர்புகொண்டு உங்கள் வணிக மேம்பாட்டுத் தேவைகளைப் பகிர்ந்துகொள்ளுங்கள்.' : 'Get in touch with the GoOne team.'} />
        <link rel="canonical" href="https://www.goone.tech/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content={language === 'ta' ? 'தொடர்புகொள்ள | கோஒன்' : 'Contact Us | GoOne'} />
        <meta property="og:description" content={language === 'ta' ? 'கோஒன் குழுவைத் தொடர்புகொண்டு உங்கள் வணிக மேம்பாட்டுத் தேவைகளைப் பகிர்ந்துகொள்ளுங்கள்.' : 'Get in touch with the GoOne team.'} />
        <meta property="og:url" content="https://www.goone.tech/contact" />
        <meta property="og:image" content="https://www.goone.tech/logo.png" />
      </Helmet>
      
      <div className="container py-24">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto animate-fadeIn">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-bold mb-6">{t('contact.title')}</h1>
            <p className="text-xl text-muted-foreground mb-12">
              {t('contact.subtitle')}
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-1">{t('contact.email')}</h3>
                <p className="text-muted-foreground">{getVal('CONTACT_EMAIL', 'contact.email')}</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{t('contact.phone')}</h3>
                <p className="text-muted-foreground">{getVal('CONTACT_PHONE', 'contact.phone')}</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{t('contact.instagram')}</h3>
                <p className="text-muted-foreground">
                  <a href={config.CONTACT_INSTAGRAM || "https://instagram.com/_go_one_"} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                    {config.CONTACT_INSTAGRAM?.replace('https://instagram.com/', '@') || "@_go_one_"}
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{t('contact.office')}</h3>
                <p className="text-muted-foreground">{getVal('CONTACT_ADDRESS', 'contact.office')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card p-8 rounded-3xl border shadow-sm"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.name')}</label>
                <input 
                  {...register("name")}
                  className="w-full flex h-12 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message as string}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.email_label')}</label>
                <input 
                  {...register("email")}
                  className="w-full flex h-12 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message as string}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.message')}</label>
                <textarea 
                  {...register("message")}
                  className="w-full flex min-h-[120px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message as string}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:opacity-50"
              >
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}
