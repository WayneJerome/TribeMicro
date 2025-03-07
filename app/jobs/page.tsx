"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { 
  Search, 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  Filter, 
  X,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Sample job data
const JOBS = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130K - $160K",
    description: "We're looking for a Senior Software Engineer to join our team and help build our next-generation platform. You'll be working with React, Node.js, and AWS to create scalable and performant applications.",
    tags: ["React", "Node.js", "AWS"],
    posted: "2 days ago",
    featured: true
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateLabs",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110K - $140K",
    description: "Join our product team to lead the development of innovative solutions. You'll work closely with engineering, design, and marketing teams to define product strategy and roadmap.",
    tags: ["Product Strategy", "Agile", "UX"],
    posted: "1 week ago",
    featured: true
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "DesignMasters",
    location: "Remote",
    type: "Contract",
    salary: "$90K - $120K",
    description: "We're seeking a talented UX/UI Designer to create beautiful, intuitive interfaces for our clients. You'll be responsible for the entire design process from research to final implementation.",
    tags: ["Figma", "User Research", "Prototyping"],
    posted: "3 days ago",
    featured: false
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataDriven",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$120K - $150K",
    description: "Join our data science team to build machine learning models and analyze large datasets. You'll work on challenging problems and help drive business decisions through data insights.",
    tags: ["Python", "Machine Learning", "SQL"],
    posted: "5 days ago",
    featured: false
  },
  {
    id: 5,
    title: "Marketing Specialist",
    company: "GrowthGenius",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$70K - $90K",
    description: "We're looking for a Marketing Specialist to help grow our brand presence and drive customer acquisition. You'll be responsible for creating and executing marketing campaigns across various channels.",
    tags: ["Digital Marketing", "SEO", "Content Strategy"],
    posted: "1 day ago",
    featured: false
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudNative",
    location: "Remote",
    type: "Full-time",
    salary: "$110K - $140K",
    description: "Join our DevOps team to build and maintain our cloud infrastructure. You'll work with Kubernetes, Docker, and CI/CD pipelines to ensure our systems are reliable, scalable, and secure.",
    tags: ["Kubernetes", "Docker", "CI/CD"],
    posted: "2 weeks ago",
    featured: false
  },
  {
    id: 7,
    title: "Frontend Developer",
    company: "WebWizards",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$90K - $120K",
    description: "We're seeking a Frontend Developer to create responsive and performant web applications. You'll work with modern JavaScript frameworks to deliver exceptional user experiences.",
    tags: ["React", "TypeScript", "CSS"],
    posted: "3 days ago",
    featured: false
  },
  {
    id: 8,
    title: "Backend Engineer",
    company: "ServerSolutions",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$100K - $130K",
    description: "Join our backend team to build scalable APIs and services. You'll work with modern technologies to create robust systems that power our applications.",
    tags: ["Node.js", "PostgreSQL", "GraphQL"],
    posted: "1 week ago",
    featured: false
  }
];

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [jobType, setJobType] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState([50, 150]);
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
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
  
  // Filter jobs based on search criteria
  const filteredJobs = JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = locationQuery === "" || 
                           job.location.toLowerCase().includes(locationQuery.toLowerCase());
    
    const matchesJobType = jobType.length === 0 || 
                          jobType.some(type => job.type.toLowerCase().includes(type.toLowerCase()));
    
    // Extract numeric salary range
    const salaryText = job.salary.replace(/[^0-9-]/g, '');
    const [minSalary, maxSalary] = salaryText.split('-').map(Number);
    const avgSalary = (minSalary + maxSalary) / 2;
    
    const matchesSalary = avgSalary >= salaryRange[0] && avgSalary <= salaryRange[1];
    
    return matchesSearch && matchesLocation && matchesJobType && matchesSalary;
  });
  
  // Sort jobs
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === "newest") {
      // Sort by posted date (assuming newer jobs have "days" or "day" in the posted field)
      const aTime = a.posted.includes("day") ? parseInt(a.posted) : 30;
      const bTime = b.posted.includes("day") ? parseInt(b.posted) : 30;
      return aTime - bTime;
    } else if (sortBy === "salary-high") {
      // Sort by highest salary
      const aSalary = parseInt(a.salary.replace(/[^0-9-]/g, '').split('-')[1]);
      const bSalary = parseInt(b.salary.replace(/[^0-9-]/g, '').split('-')[1]);
      return bSalary - aSalary;
    } else if (sortBy === "salary-low") {
      // Sort by lowest salary
      const aSalary = parseInt(a.salary.replace(/[^0-9-]/g, '').split('-')[0]);
      const bSalary = parseInt(b.salary.replace(/[^0-9-]/g, '').split('-')[0]);
      return aSalary - bSalary;
    } else {
      // Default: relevance (featured jobs first)
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    }
  });
  
  const jobTypeOptions = [
    { id: "full-time", label: "Full-time" },
    { id: "part-time", label: "Part-time" },
    { id: "contract", label: "Contract" },
    { id: "freelance", label: "Freelance" },
    { id: "internship", label: "Internship" },
  ];
  
  const toggleJobType = (value: string) => {
    setJobType(current =>
      current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value]
    );
  };
  
  const clearFilters = () => {
    setSearchQuery("");
    setLocationQuery("");
    setJobType([]);
    setSalaryRange([50, 150]);
    setSortBy("relevance");
  };

  const FilterSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-3">Job Type</h3>
        <div className="space-y-2">
          {jobTypeOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox 
                id={option.id} 
                checked={jobType.includes(option.id)}
                onCheckedChange={() => toggleJobType(option.id)}
              />
              <label
                htmlFor={option.id}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-3">Salary Range (K)</h3>
        <div className="px-2">
          <Slider
            defaultValue={[50, 150]}
            max={200}
            step={5}
            value={salaryRange}
            onValueChange={setSalaryRange}
            className="mb-6"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${salaryRange[0]}K</span>
            <span>${salaryRange[1]}K</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-3">Experience Level</h3>
        <div className="space-y-2">
          {["Entry Level", "Mid Level", "Senior Level", "Director", "Executive"].map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox id={`level-${level}`} />
              <label
                htmlFor={`level-${level}`}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <Button 
        variant="outline" 
        className="w-full"
        onClick={clearFilters}
      >
        <X className="mr-2 h-4 w-4" />
        Clear Filters
      </Button>
    </div>
  );

  return (
    <div className="container py-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="flex flex-col gap-4 mb-8"
      >
        <h1 className="text-3xl font-bold tracking-tight">Browse Jobs</h1>
        <p className="text-muted-foreground">
          Find your next opportunity from our curated list of jobs
        </p>
      </motion.div>
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Job title, keyword, or company" 
              className="pl-10 h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Location or remote" 
              className="pl-10 h-12"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
            />
          </div>
        </div>
        <Button className="h-12 px-6">
          <Search className="mr-2 h-5 w-5" />
          Search
        </Button>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24">
            <div className="bg-card rounded-lg border p-6">
              <h2 className="font-semibold text-lg mb-6">Filters</h2>
              <FilterSection />
            </div>
          </div>
        </div>
        
        {/* Filters - Mobile */}
        <div className="lg:hidden mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                    {(jobType.length > 0 || salaryRange[0] !== 50 || salaryRange[1] !== 150) && (
                      <span className="ml-1 rounded-full bg-primary w-5 h-5 text-xs flex items-center justify-center text-primary-foreground">
                        {jobType.length + (salaryRange[0] !== 50 || salaryRange[1] !== 150 ? 1 : 0)}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                      Narrow down your job search with filters
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterSection />
                  </div>
                </SheetContent>
              </Sheet>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="newest">Most Recent</SelectItem>
                  <SelectItem value="salary-high">Highest Salary</SelectItem>
                  <SelectItem value="salary-low">Lowest Salary</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="text-sm text-muted-foreground">
              {filteredJobs.length} jobs found
            </div>
          </div>
        </div>
        
        {/* Job Listings */}
        <div className="flex-1">
          <div className="hidden lg:flex justify-between items-center mb-6">
            <div className="text-sm text-muted-foreground">
              {filteredJobs.length} jobs found
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="newest">Most Recent</SelectItem>
                <SelectItem value="salary-high">Highest Salary</SelectItem>
                <SelectItem value="salary-low">Lowest Salary</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-4"
          >
            {sortedJobs.length > 0 ? (
              sortedJobs.map((job) => (
                <motion.div
                  key={job.id}
                  variants={fadeIn}
                  className={`group relative bg-background rounded-lg border p-6 hover:shadow-md transition-shadow ${
                    job.featured ? "border-primary/50 bg-primary/5" : ""
                  }`}
                >
                  {job.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center text-xs bg-primary text-primary-foreground rounded-full px-2.5 py-0.5">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <span className="text-sm text-muted-foreground">{job.posted}</span>
                      </div>
                      
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
                          <MapPin className="h-3 w-3 mr-1" />
                          {job.location}
                        </span>
                      </div>
                      
                      <p className="mt-4 text-sm line-clamp-2">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {job.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs bg-primary/10 text-primary rounded px-2 py-0.5">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Link href={`/jobs/${job.id}`}>
                          <Button>View Details</Button>
                        </Link>
                        <Button variant="outline">Quick Apply</Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-4">
                  <Search className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">No jobs found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </motion.div>
          
          {sortedJobs.length > 0 && (
            <div className="mt-8 flex justify-center">
              <Button variant="outline">Load More Jobs</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}