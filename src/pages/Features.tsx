import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Features() {
  const features = [
    { title: "Digital Credit Book (Udhar Khata)", desc: "Replace paper ledgers with an immutable digital record." },
    { title: "Voice-guided Interface", desc: "Available in local languages to support first-time smartphone users." },
    { title: "Offline-first Architecture", desc: "Continue operating even when internet connectivity drops." },
    { title: "Inventory Management", desc: "Track stock, get low-stock alerts, and manage products easily." },
    { title: "Order Management", desc: "Accept online orders from local customers instantly." },
    { title: "Employee Roles", desc: "Safely give access to staff with restricted permissions." },
  ];

  return (
    <>
      <Helmet>
        <title>Features | GoOne</title>
        <meta name="description" content="Explore the features of the GoOne Business Operating System." />
      </Helmet>
      
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Powerful Features, Simple Interface</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to run your business, designed to be understood in minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-6 rounded-2xl border shadow-sm"
            >
              <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
