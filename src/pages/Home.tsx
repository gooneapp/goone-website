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
      <section className="relative overflow-hidden bg-background pt-32 pb-40">
        {/* Dynamic Animated Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium backdrop-blur-sm">
              ✨ The Future of Rural Commerce is Here
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight">
              <span className="text-gradient">
                One App. One Community.
              </span>
              <br />
              Unlimited Opportunities.
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground font-light">
              The first Business Operating System built specifically for rural and semi-urban India. Connect your shop, customers, and delivery in one tap.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/download-app" className="inline-flex h-14 items-center justify-center rounded-xl bg-primary px-10 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40 hover:-translate-y-1">
                Get Started for Free
              </Link>
              <Link to="/contact" className="inline-flex h-14 items-center justify-center rounded-xl border border-input bg-background/50 backdrop-blur-sm px-10 text-base font-medium shadow-sm transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground hover:border-accent hover:-translate-y-1">
                Book a VIP Demo
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
      <section className="py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Built specifically for <br/><span className="text-gradient">local commerce</span></h2>
              <ul className="space-y-6">
                {[
                  "Digital Credit Book (Udhar Khata)",
                  "Voice-guided Interface in Local Languages",
                  "Offline-first Architecture",
                  "Inventory & Order Management",
                  "Built-in Delivery Partner Matching"
                ].map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center text-xl font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                  >
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-12">
                <Link to="/features" className="inline-flex h-12 items-center justify-center rounded-xl bg-secondary px-8 text-base font-bold text-secondary-foreground shadow-lg shadow-secondary/20 transition-all hover:scale-105 hover:-translate-y-1">
                  Explore all features <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              className="relative perspective-1000"
            >
              {/* Premium Floating Mockup */}
              <div className="relative animate-float shimmer-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" 
                  alt="App Dashboard Preview" 
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold">Sales Today</p>
                      <p className="text-emerald-400 font-mono text-xl">₹42,500</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Store className="h-5 w-5 text-emerald-400" />
                    </div>
                  </div>
                </div>
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
