"use client";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Briefcase, 
  Building2, 
  Users, 
  Clock, 
  DollarSign, 
  Award,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Apply from "@/app/assets/testing.png"
import Interview from "@/app/assets/disruption.png"
import Approval from "@/app/assets/licensing.png"
import Image from "next/image";

function AnimatedButton({ children, ...props } : { children: string; className: string; }) {
  return (
    <motion.button
      {...props}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: 'easeInOut',
      }}
      style={{ backgroundSize: '200% 200%' }}
    >
      {children}
    </motion.button>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-col gap-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-blue-900 via-sky-500 to-black text-transparent bg-clip-text">
                Join The Collaborative <span className="text-primary animate-pulse">Spark</span>
              </h1>
              <p className="text-xl text-muted-foreground ">
                Become a part of an amazing team re-defining East African education to empower the next generation of innovators.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Job title, keyword, or company" 
                    className="pl-10 h-12"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button size="lg" className="h-12">
                  Search Jobs
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-sm text-muted-foreground">Popular:</span>
                {["Software Engineer", "Marketing", "Design", "Sales", "Finance"].map((term) => (
                  <Button 
                    key={term} 
                    variant="link" 
                    className="p-0 h-auto text-sm"
                    onClick={() => setSearchQuery(term)}
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] rounded-lg shadow-xl p-6 border ">
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                  Featured
                </div>
                <div className="flex items-start gap-4  ">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center animate-pulse">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div >
                    <h3 className="font-semibold text-lg">Senior Product Designer</h3>
                    <p className="text-muted-foreground">TechCorp Inc.</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center text-xs bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5">
                        <DollarSign className="h-3 w-3 mr-1" />
                        $120K - $150K
                      </span>
                      <span className="inline-flex items-center text-xs bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5">
                        <Clock className="h-3 w-3 mr-1" />
                        Full-time
                      </span>
                      <span className="inline-flex items-center text-xs bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5">
                        <Users className="h-3 w-3 mr-1" />
                        Remote
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-20 -right-8 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] rounded-lg shadow-xl p-6 border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center animate-ping">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Frontend Developer</h3>
                    <p className="text-muted-foreground">InnovateLabs</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center text-xs bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5 ">
                        <DollarSign className="h-3 w-3 mr-1" />
                        $90K - $110K
                      </span>
                      <span className="inline-flex items-center text-xs bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5">
                        <Clock className="h-3 w-3 mr-1" />
                        Full-time
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-52 left-8 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] rounded-lg shadow-xl p-6 border animate-bounce">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Marketing Manager</h3>
                    <p className="text-muted-foreground">GrowthGenius</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center text-xs bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5">
                        <DollarSign className="h-3 w-3 mr-1" />
                        $85K - $105K
                      </span>
                      <span className="inline-flex items-center text-xs bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5">
                        <Clock className="h-3 w-3 mr-1" />
                        Contract
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8  bg-gradient-to-br from-blue-900 via-sky-500 to-black text-transparent bg-clip-text"
          >
            {[
              { label: "Impacted Learners", value: "14M+" },
              { label: "Innovators", value: "2,500+" },
              { label: "Educators", value: "4M+" },
              { label: "Countries", value: "14" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="flex flex-col items-center text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Jobs</h2>
              <p className="text-muted-foreground mt-2">Discover opportunities from top employers</p>
            </div>
            <Link href="/jobs">
              <Button variant="outline" className="mt-4 md:mt-0">
                View All Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "UX & Inclusivity Engineer",
                company: "MicroEngineers.org",
                location: "Kenya",
                type: "Hybrid",
                salary: "$250 - $1300",
                tags: ["React", "Next.js", "Tailwind CSS"]
              },
              {
                title: "Clinical Officer | GBV Support & Data Reporting",
                company: "MicroEngineers.org",
                location: "Kenya",
                type: "Hybrid",
                salary: "$250 - $1300",
                tags: ["Medicine", "Counseling", "Diagnosis"]
              },
              {
                title: "Chief Financial Officer (CFO)",
                company: "MicroEngineers.org",
                location: "Kenya",
                type: "Hybrid",
                salary: "$500 - $2100",
                tags: ["Accounting", "Finance", "Auditing"]
              },
              {
                title: "Data Scientist",
                company: "MicroEngineers.org",
                location: "Kenya",
                type: "Full-time",
                salary: "$250 - $1300",
                tags: ["Python", "Machine Learning", "AI"]
              },
              {
                title: "Secretary General",
                company: "MicroEngineers.org",
                location: "Kenya",
                type: "Full-time",
                salary: "$250 - $1300",
                tags: ["Education Equity", "Inclusivity", "Child Welfare"]
              },
              {
                title: "Cyber Security Analyst",
                company: "MicroEngineers.org",
                location: "Kenya",
                type: "Full-time",
                salary: "$250 - $1300",
                tags: ["Data Protection", "InfoSec", "Blue Team"]
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group relative bg-background rounded-lg border p-6 hover:shadow-md transition-shadow"
              >
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Briefcase className="h-4 w-4" />
                    <span className="sr-only">Save job</span>
                  </Button>
                </div>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-muted-foreground">{job.company}</p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center text-xs bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5">
                    <DollarSign className="h-3 w-3 mr-1" />
                    {job.salary}
                  </span>
                  <span className="inline-flex items-center text-xs bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5">
                    <Clock className="h-3 w-3 mr-1" />
                    {job.type}
                  </span>
                  <span className="inline-flex items-center text-xs bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5">
                    <Users className="h-3 w-3 mr-1" />
                    {job.location}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {job.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-primary/10 text-primary rounded px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <Link href={`/jobs/${index}`}>
                        
                      
                      <AnimatedButton
      className="w-full bg-gradient-to-br from-blue-900 via-sky-500 to-green-300 text-white py-2 px-4 rounded" // Added text-white py-2 px-4 rounded for better visual.
    >
      View Details
    </AnimatedButton>
                         
                    
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Our platform makes it easy to find your dream job or the perfect candidate
            </p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Image src={Apply} alt="Join TribeMicro, MicroEngineers the  future of education" className="h-12 w-12" />,
                title: "Create Your Profile",
                description: "Sign up and build your professional profile to showcase your skills and experience."
              },
              {
                icon: <Image src={Interview} alt="Join TribeMicro, MicroEngineers the  future of education" className="h-12 w-12" />,
                title: "Discover Opportunities",
                description: "Browse thousands of jobs from top companies or find the perfect candidate."
              },
              {
                icon: <Image src={Approval} alt="Join TribeMicro, MicroEngineers the  future of education" className="h-12 w-12" />,
                title: "Apply or Hire",
                description: "Apply to jobs with a single click or connect with qualified candidates."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div className="bg-gradient-to-br from-blue-900 via-sky-500 to-green-300 text-primary-foreground rounded-lg p-8 md:p-12"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'easeInOut',
          }}
          style={{ backgroundSize: '200% 200%' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Ready to Take the Next Step?</h2>
                <p className="mt-4 text-primary-foreground/90">
                Find Your Tribe & Join a Team Dedicated to Transforming Lives in East Africa.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <Link href="/register">
                  <Button variant="secondary" size="lg">
                    Sign Up Now
                  </Button>
                </Link>
                <Link href="/post-job">
                  <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    Post a Job
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}