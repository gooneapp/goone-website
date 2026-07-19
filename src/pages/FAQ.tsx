import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    {
      q: "What is GoOne?",
      a: "GoOne is a Business Operating System (BOS) designed specifically for rural and semi-urban India. It connects businesses, customers, and delivery partners through dedicated mobile apps."
    },
    {
      q: "Do I need an internet connection to use GoOne?",
      a: "GoOne is built with an offline-first architecture. Core functionalities like adding inventory, recording credit, and billing will work offline and sync automatically once you are connected to the internet."
    },
    {
      q: "Is it difficult to learn?",
      a: "Not at space! We've designed the app to be icon-first with voice-guidance in local languages (Tamil, Hindi, English). If you can use a smartphone, you can use GoOne."
    },
    {
      q: "How does the Digital Credit Book work?",
      a: "It replaces your paper 'udhar khata'. You can record credit given to a customer with their phone number, and both you and the customer can track the balance directly in your respective apps."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ | GoOne</title>
        <meta name="description" content="Frequently Asked Questions about GoOne." />
      </Helmet>
      
      <div className="container py-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-2xl border shadow-sm"
            >
              <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
