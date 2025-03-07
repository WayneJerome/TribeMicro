"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Resource {
  title: string;
  description: string;
  careerguide: string;
}

export default function CareerResources() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const resources: Resource[] = [
    {
      title: "AI in Education: A Career Guide",
      description: "Learn how AI is transforming education and how you can build a career in this field.",
      careerguide: `
        <h1>AI in Education: A Career Guide</h1>
        </br>
        <p>Explore career opportunities in AI-driven education and how to get started.</p>
        </br>
        <p>AI is revolutionizing education, opening new career paths. From personalized learning to automated grading, AI's impact is vast. This guide explores how you can contribute to this field. AI enables tailored learning, boosting student engagement. Educators can focus on teaching as AI handles admin tasks. Accessibility improves, reaching diverse learners. Data-driven insights refine teaching strategies, and innovation thrives.</p>
        <p>Consider roles like AI Curriculum Developer, designing AI-enhanced content. AI Learning Platform Developer builds the systems. AI Learning Data Analysts interpret student data. AI Educational Researchers study AI's effectiveness. AI Educational Product Managers lead product development. AI Ethics Specialists ensure responsible AI use. AI-Enhanced Special Education Specialists use AI for inclusive education.</p>
        <p>Essential skills include AI fundamentals, programming, data analysis, and educational technology knowledge. Gain experience through projects and internships. Network, build a portfolio, and stay updated. Resources like online courses and conferences are invaluable. The future holds immense potential for AI in education. Start building your skills to be part of this transformation.</p>
      `,
    },
    {
      title: "Cybersecurity in EdTech",
      description: "Best practices for protecting student data and securing AI-driven platforms.",
      careerguide: `
        <h1>Cybersecurity in EdTech</h1>
        </br>
        <p>Learn about the role of cybersecurity in educational technology and career paths.</p>
        </br>
        <p>EdTech's growth brings cybersecurity challenges. Protecting student data is crucial. AI-driven platforms must be secure to prevent breaches. Schools face cyberattacks like ransomware and phishing. Compliance with regulations like GDPR is essential. Strong cybersecurity builds trust. This guide explores best practices and career paths.</p>
        <p>Consider roles like Cybersecurity Analyst, Security Engineer, Data Protection Officer, Security Consultant, Ethical Hacker, and Incident Response Specialist. Skills include network security, risk management, data privacy, and incident handling. Certifications and experience are vital. Stay updated on industry trends.</p>
        <p>Resources include cybersecurity certifications, online courses, and industry conferences. Cybersecurity in EdTech is vital as digital learning expands. Pursue a career to safeguard education's future. Protecting student data and ensuring secure platforms is critical for the future of educational technology.</p>
      `,
    },
    {
      title: "Inclusive UX/UI for AI-Powered Learning",
      description: "Designing accessible and inclusive learning experiences with AI.",
      careerguide: `
        <h1>Inclusive UX/UI</h1>
        </br>
        <p>How to ensure AI-driven learning platforms are accessible for all students.</p>
        </br>
        <p>Inclusive UX/UI is vital for AI-powered learning. It ensures all students, regardless of ability or background, can use the platforms. Accessibility is key, catering to diverse needs. Cultural sensitivity ensures a welcoming environment. User-centered design focuses on the student experience. Design should be adaptable, catering to various learning styles and disabilities. This guide explores how to create inclusive learning experiences.</p>
        <p>Consider roles like UX/UI Designer, Accessibility Specialist, and Interaction Designer. Skills include user research, wireframing, and knowledge of accessibility guidelines. Understanding diverse user needs is crucial. Stay updated on inclusive design practices. Resources include online courses and accessibility guidelines.</p>
        <p>Creating inclusive AI-powered learning platforms is essential for equitable education. Design with accessibility and diversity in mind. User-centered and adaptable designs will ensure all students have equal access to learning resources. Building these platforms will help bridge the digital divide.</p>
      `,
    },
    {
      title: "Data Science & AI for Education Equity",
      description: "Using AI and data analytics to personalize learning for vulnerable students.",
      careerguide: `
        <h1>Data Science in Education</h1>
        </br>
        <p>Using AI and data to create equitable learning opportunities.</p>
        </br>
        <p>Data science and AI can drive education equity. Analyzing student data identifies learning gaps. AI personalizes learning, catering to individual needs. Predictive analytics helps at-risk students. Data-driven insights inform policy decisions. This guide explores how data science and AI can create equitable learning opportunities.</p>
        <p>Consider roles like Data Analyst, Data Scientist, and AI Specialist. Skills include data analysis, machine learning, and statistical modeling. Understanding educational data is crucial. Stay updated on AI and data science trends. Resources include online courses and data science tools.</p>
        <p>Using data science and AI to personalize learning for vulnerable students is essential for education equity. AI-driven personalization ensures all students receive tailored support. Data-driven insights help educators make informed decisions, improving learning outcomes. Building equitable AI-powered educational tools is essential to bridge the opportunity gap.</p>
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-sky-500 to-green-300 p-10">
      <h1 className="text-4xl font-bold text-white text-center mb-6">Career Resources for AI in Education</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {resources.map((resource, index) => (
          <Card key={index} className="bg-white shadow-lg rounded-xl p-4">
            <CardHeader>
              <CardTitle className="text-black/70">{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black mb-4">{resource.description}</p>
              <Button
                className="bg-blue-600 text-black hover:bg-blue-700"
                onClick={() => setSelectedResource(resource)}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedResource && (
        <Dialog open={!!selectedResource} onOpenChange={() => setSelectedResource(null)}>
          <DialogContent className="p-6">
            <DialogHeader>
              <DialogTitle>{selectedResource.title}</DialogTitle>
            </DialogHeader>
            <div dangerouslySetInnerHTML={{ __html: selectedResource.careerguide }} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}