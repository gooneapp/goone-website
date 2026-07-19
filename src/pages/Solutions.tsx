import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Solutions() {
  return (
    <>
      <Helmet>
        <title>Solutions | GoOne</title>
        <meta name="description" content="Tailored solutions for different business types on GoOne." />
      </Helmet>
      
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Solutions for Every Business</h1>
          <p className="text-xl text-muted-foreground">
            GoOne adapts to your needs, providing specialized modules based on your business type.
          </p>
        </motion.div>

        <div className="space-y-24">
          {[
            { title: "Retail & Grocery (Kirana)", desc: "Manage massive inventories, track supplier reorders, and handle high-volume billing efficiently." },
            { title: "Medical Shops", desc: "Batch/expiry tracking, prescription linking, and strict inventory validation." },
            { title: "Farmers", desc: "List seasonal produce with voice notes and photos, connect directly with nearby buyers." },
            { title: "Hotels & Restaurants", desc: "Table management, menu builder, and Kitchen Order Ticket (KOT) support." }
          ].map((solution, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={i % 2 !== 0 ? 'md:order-2' : ''}>
                <h2 className="text-3xl font-bold mb-4">{solution.title}</h2>
                <p className="text-lg text-muted-foreground">{solution.desc}</p>
              </div>
              <div className={`bg-muted rounded-3xl aspect-video flex items-center justify-center border ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                <span className="text-muted-foreground/50">{solution.title} Illustration</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
