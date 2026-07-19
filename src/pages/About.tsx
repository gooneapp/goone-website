import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | GoOne</title>
        <meta name="description" content="Learn more about GoOne and our mission to digitize rural and semi-urban India." />
      </Helmet>
      
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">About GoOne</h1>
          <p className="text-xl text-muted-foreground">
            We are building the digital backbone for the next billion users, connecting local businesses with their communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              At GoOne, we believe that technology should be accessible to everyone, regardless of their location or digital literacy. 
              Our mission is to empower rural and semi-urban businesses with world-class tools that are as easy to use as a phone call.
            </p>
            <p className="text-lg text-muted-foreground">
              By replacing paper ledgers with digital credit books and providing an offline-tolerant architecture, we are removing the friction of digital adoption and enabling hyperlocal commerce to thrive.
            </p>
          </div>
          <div className="bg-muted rounded-3xl aspect-video md:aspect-square flex items-center justify-center border">
            <span className="text-muted-foreground/50">Team Photo Placeholder</span>
          </div>
        </div>
      </div>
    </>
  );
}
