import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Store, ShoppingCart, Truck } from 'lucide-react';

/**
 * Resolves a stored APK config value to a fetchable URL.
 *
 * The value is a site-relative path when the backend stores files on local disk,
 * but an absolute Cloudinary URL in production. Blindly prefixing the API origin
 * produced `https://api.goone.techhttps://res.cloudinary.com/...` and broke every
 * download link the moment STORAGE_PROVIDER was switched.
 */
function resolveApkUrl(value: string): string {
  if (/^https?:\/\//i.test(value)) return value;

  const apiUrl = import.meta.env.VITE_API_URL;
  if (!apiUrl) return value; // .replace() on undefined would throw

  const origin = apiUrl.replace(/\/api\/v\d+\/?$/, '');
  return `${origin}${value.startsWith('/') ? '' : '/'}${value}`;
}

export default function DownloadApp() {
  const [apkUrls, setApkUrls] = useState<{ business?: string, customer?: string, partner?: string }>({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/config/website`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setApkUrls({
            business: data.data.BUSINESS_APP_APK,
            customer: data.data.CUSTOMER_APP_APK,
            partner: data.data.PARTNER_APP_APK
          });
        }
      })
      .catch(err => console.error('Failed to fetch apk configs', err));
  }, []);

  return (
    <>
      <Helmet>
        <title>Download App | GoOne</title>
        <meta name="description" content="Download the GoOne apps: Customer, Business, or Delivery Partner." />
      </Helmet>
      
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Choose Your App</h1>
          <p className="text-xl text-muted-foreground">
            GoOne is modular. Download the app that fits your role.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { id: "business", title: "Business App", desc: "For shop owners, farmers, and service providers.", icon: Store, color: "bg-primary" },
            { id: "customer", title: "Customer App", desc: "For ordering from local shops and managing credit.", icon: ShoppingCart, color: "bg-secondary" },
            { id: "partner", title: "Delivery App", desc: "For partners fulfilling local delivery orders.", icon: Truck, color: "bg-accent" }
          ].map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 rounded-3xl border shadow-sm text-center flex flex-col"
            >
              <div className={`${app.color} h-20 w-20 rounded-2xl mx-auto flex items-center justify-center text-white mb-6`}>
                <app.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{app.title}</h3>
              <p className="text-muted-foreground mb-8 flex-1">{app.desc}</p>
              
              {apkUrls[app.id as keyof typeof apkUrls] ? (
                <a
                  href={resolveApkUrl(apkUrls[app.id as keyof typeof apkUrls]!)}
                  download
                  className="w-full block py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors btn-glow"
                >
                  Download APK
                </a>
              ) : (
                <button disabled className="w-full py-3 rounded-xl bg-muted font-medium cursor-not-allowed">
                  Coming Soon
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
