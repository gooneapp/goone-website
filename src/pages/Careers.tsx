import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Careers() {
  const jobs = [
    { title: "Senior React Native Engineer", location: "Bangalore / Remote", type: "Full-time", department: "Engineering" },
    { title: "Product Designer (UI/UX)", location: "Bangalore", type: "Full-time", department: "Design" },
    { title: "Backend Engineer (Node.js/TS)", location: "Remote", type: "Full-time", department: "Engineering" },
    { title: "Regional Field Sales Manager", location: "Tamil Nadu", type: "Full-time", department: "Growth" },
  ];

  return (
    <>
      <Helmet>
        <title>Careers | GoOne</title>
        <meta name="description" content="Join the GoOne team and help us build the digital backbone of rural India." />
      </Helmet>
      
      <div className="container py-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-xl text-muted-foreground">
            Help us build the digital backbone for the next billion users.
          </p>
        </motion.div>

        <div className="bg-card border rounded-3xl overflow-hidden shadow-sm">
          <div className="p-8 border-b bg-muted/30">
            <h2 className="text-2xl font-bold">Open Positions</h2>
          </div>
          <div className="divide-y">
            {jobs.map((job, i) => (
              <div key={i} className="p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-muted/10 transition-colors">
                <div>
                  <h3 className="text-lg font-bold mb-1">{job.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 inline-flex h-10 items-center justify-center rounded-md bg-secondary/10 px-6 text-sm font-medium text-secondary shadow-sm transition-colors hover:bg-secondary/20">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
