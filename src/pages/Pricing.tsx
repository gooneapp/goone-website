import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWebsiteConfig } from '@/lib/WebsiteConfigContext';

export default function Pricing() {
  const { config, loading } = useWebsiteConfig();

  if (loading || !config) {
    return (
      <div className="flex h-[80vh] items-center justify-center flex-col gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="text-muted-foreground animate-pulse">Loading pricing plans...</p>
      </div>
    );
  }

  const plans = config.PRICING_PLANS || [];

  return (
    <>
      <Helmet>
        <title>Pricing | GoOne</title>
        <meta name="description" content="Affordable and transparent pricing for businesses on GoOne." />
      </Helmet>
      
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">
            No hidden fees. Choose the plan that best fits your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-card p-8 rounded-3xl border flex flex-col ${plan.popular ? 'border-primary shadow-lg relative' : 'shadow-sm'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/contact" 
                className={`w-full py-3 rounded-xl font-medium text-center transition-colors ${
                  plan.popular 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'bg-secondary/10 text-secondary hover:bg-secondary/20'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
