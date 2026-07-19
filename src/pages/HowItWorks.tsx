import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <>
      <Helmet>
        <title>How It Works | GoOne</title>
        <meta name="description" content="See how the GoOne ecosystem connects businesses and customers." />
      </Helmet>
      
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">How GoOne Works</h1>
          <p className="text-xl text-muted-foreground">
            A unified ecosystem where every app works together seamlessly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Download & Setup", desc: "Get the Business App, verify with OTP, and set up your shop profile in minutes." },
            { step: "2", title: "Add Inventory & Credit", desc: "Easily add your products and migrate your paper credit book to the digital ledger." },
            { step: "3", title: "Connect with Customers", desc: "Customers find you on the Customer App, place orders, and pay directly." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 rounded-2xl border text-center relative"
            >
              <div className="h-16 w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
