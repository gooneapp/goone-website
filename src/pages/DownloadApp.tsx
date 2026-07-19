import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Store, ShoppingCart, Truck } from 'lucide-react';

export default function DownloadApp() {
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
            { title: "Business App", desc: "For shop owners, farmers, and service providers.", icon: Store, color: "bg-primary" },
            { title: "Customer App", desc: "For ordering from local shops and managing credit.", icon: ShoppingCart, color: "bg-secondary" },
            { title: "Delivery App", desc: "For partners fulfilling local delivery orders.", icon: Truck, color: "bg-accent" }
          ].map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 rounded-3xl border shadow-sm text-center"
            >
              <div className={`${app.color} h-20 w-20 rounded-2xl mx-auto flex items-center justify-center text-white mb-6`}>
                <app.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{app.title}</h3>
              <p className="text-muted-foreground mb-8">{app.desc}</p>
              <button className="w-full py-3 rounded-xl bg-muted font-medium hover:bg-muted/80 transition-colors">
                Download for Android
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
