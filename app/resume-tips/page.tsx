"use client";

import { motion } from "framer-motion";

export default function ResumeTips() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-green-300 to-black p-10 flex flex-col items-center text-white">
      <motion.h1 
        className="text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Resume Tips for a Modern Job Market
      </motion.h1>
      <motion.div 
        className="max-w-3xl bg-black/70 p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-blue-300">1. Keep It Concise</h2>
        <p className="text-lg text-gray-300">Your resume should be no more than one or two pages. Focus on relevant experience and use bullet points for readability.</p>
        
        <h2 className="text-3xl font-semibold mt-6 mb-4 text-green-300">2. Tailor Your Resume</h2>
        <p className="text-lg text-gray-300">Customize your resume for each job application. Use keywords from the job description to optimize for applicant tracking systems (ATS).</p>
        
        <h2 className="text-3xl font-semibold mt-6 mb-4 text-blue-300">3. Highlight Achievements</h2>
        <p className="text-lg text-gray-300">Instead of listing duties, showcase measurable achievements using quantifiable results (e.g., "Increased sales by 30% in six months").</p>
        
        <h2 className="text-3xl font-semibold mt-6 mb-4 text-green-300">4. Use a Clean, Modern Design</h2>
        <p className="text-lg text-gray-300">Avoid excessive graphics and colors. Stick to a clean, professional layout with consistent fonts and spacing.</p>
        
        <h2 className="text-3xl font-semibold mt-6 mb-4 text-blue-300">5. Proofread & Get Feedback</h2>
        <p className="text-lg text-gray-300">Typos and grammatical errors can hurt your chances. Proofread your resume and ask a mentor or friend for feedback.</p>
      </motion.div>
    </div>
  );
}
