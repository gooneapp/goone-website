import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Store, ShoppingCart, Truck, LayoutDashboard, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>GoOne - One App. One Community. Unlimited Opportunities.</title>
        <meta name="description" content="GoOne is the all-in-one Business Operating System connecting businesses, customers, and delivery partners in one platform." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-32">
        <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-900/[0.04]" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                One App. One Community.
              </span>
              <br />
              Unlimited Opportunities.
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              The first Business Operating System built specifically for rural and semi-urban India. Connect your shop, customers, and delivery in one tap.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/download-app" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-transform hover:scale-105">
                Get Started for Free
              </Link>
              <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground">
                Book a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything you need in one platform</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">No need for multiple tools. GoOne connects every aspect of local commerce into a single seamless ecosystem.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Business App", desc: "Run your shop, manage credit, and take orders.", icon: Store, color: "text-primary" },
              { title: "Customer App", desc: "Discover local shops and order with ease.", icon: ShoppingCart, color: "text-secondary" },
              { title: "Delivery App", desc: "Accept jobs and navigate to customers.", icon: Truck, color: "text-accent" },
              { title: "Admin CMS", desc: "Full control over your platform operations.", icon: LayoutDashboard, color: "text-blue-500" }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-sm border hover:shadow-md transition-shadow"
              >
                <product.icon className={`h-10 w-10 mb-4 ${product.color}`} />
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-muted-foreground">{product.desc}</p>
                <Link to={`/solutions`} className="inline-flex items-center mt-4 text-sm font-medium text-primary hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Built for local commerce</h2>
              <ul className="space-y-4">
                {[
                  "Digital Credit Book (Udhar Khata)",
                  "Voice-guided Interface in Local Languages",
                  "Offline-first Architecture",
                  "Inventory & Order Management",
                  "Built-in Delivery Partner Matching"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center text-lg">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/features" className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-6 text-sm font-medium text-secondary-foreground shadow transition-transform hover:scale-105">
                  See all features
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-muted rounded-3xl p-8 aspect-square md:aspect-video lg:aspect-square flex items-center justify-center border shadow-inner"
            >
              {/* Placeholder for App Screenshot / Mockup */}
              <div className="text-center">
                <Store className="h-24 w-24 mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground/50 font-medium">Interactive App Demo</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
            Join thousands of businesses across India that are growing with GoOne.
          </p>
          <Link to="/download-app" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-bold text-primary shadow transition-transform hover:scale-105 hover:bg-white/90">
            Download the App Now
          </Link>
        </div>
      </section>
    </>
  );
}
