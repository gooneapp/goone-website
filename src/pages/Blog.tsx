import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Blog() {
  const posts = [
    {
      title: "Digitizing Rural India: The Next Frontier",
      category: "Vision",
      date: "August 12, 2026",
      excerpt: "How GoOne is replacing paper ledgers with a unified digital ecosystem across semi-urban and rural markets."
    },
    {
      title: "Why We Built Three Separate Apps Instead of One",
      category: "Engineering",
      date: "July 28, 2026",
      excerpt: "A deep dive into our architecture decisions and why separating the Business, Customer, and Delivery apps was crucial for adoption."
    },
    {
      title: "The Power of Voice Guidance in UI Design",
      category: "Design",
      date: "July 15, 2026",
      excerpt: "Designing for first-time smartphone users requires rethinking basic assumptions. Here's how we did it."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog | GoOne</title>
        <meta name="description" content="Read the latest news, engineering deep-dives, and stories from the GoOne team." />
      </Helmet>
      
      <div className="container py-24 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">GoOne Blog</h1>
          <p className="text-xl text-muted-foreground">
            News, stories, and engineering insights from our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="aspect-video bg-muted w-full" />
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <span className="text-primary font-medium">{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
