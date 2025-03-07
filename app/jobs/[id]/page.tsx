// /jobs/[id]/page.js (or .tsx)

import Link from "next/link";
interface JobPageParams {
  id: string; // Assuming 'id' is a string
}

const jobData = [
    {
        id: '0',
        title: 'UX & Inclusivity Engineer',
        description: 'Design and develop accessible, inclusive, and user-friendly interfaces that ensure equitable digital experiences for all users, particularly those with disabilities and underrepresented groups. Collaborate with cross-functional teams to integrate accessibility best practices into web applications and AI-driven learning platforms.',
        roles: [
          'User Experience (UX) Research & Design',
          'Accessibility Compliance & Inclusive Design',
          'Frontend Development with a focus on Accessibility',
          'Collaboration with AI and Product Teams to ensure Usability',
          'Conducting Usability Testing with Diverse User Groups'
        ],
        salary: '$250 - $1300',
        requirements: [
          '5+ years of experience in UX/UI design, accessibility, or frontend development',
          'Proficiency in JavaScript, HTML, CSS, and modern frontend frameworks (React, Vue, or Angular)',
          'Deep understanding of WCAG (Web Content Accessibility Guidelines) and ARIA standards',
          'Experience with usability testing, user research, and inclusive design principles',
          'Strong collaboration skills with product managers, developers, and stakeholders',
          'Passion for digital inclusion and advocating for accessibility best practices'
        ]
      },
      {
        id: '1',
        title: 'Clinical Officer | GBV Support & Data Reporting',
        description: 'Provide medical guidance, analyze AI-assisted reports on Gender-Based Violence (GBV), and report findings to relevant authorities. Offer pre-diagnosis support and ensure accurate data collection and reporting to enhance response and intervention strategies.',
        roles: [
          'Medical Guidance & Initial Assessment of GBV Cases',
          'Analysis of AI-Assisted Reports on GBV Incidents',
          'Collaboration with Law Enforcement & Social Welfare Authorities',
          'Pre-Diagnosis & Referral for Further Medical Assistance',
          'Data Collection & Reporting to Improve GBV Response Mechanisms'
        ],
        salary: '$250 - $1300',
        requirements: [
          '5+ years of experience in clinical practice or public health',
          'Strong background in gender-based violence (GBV) response and medical reporting',
          'Experience analyzing AI-generated reports and health data',
          'Knowledge of medical pre-diagnosis procedures and trauma-informed care',
          'Ability to work with law enforcement and social welfare organizations',
          'Strong ethical and confidentiality standards when handling sensitive cases'
        ]
      },
      
      {
        id: '2',
        title: 'Chief Financial Officer (CFO)',
        description: 'Lead the financial strategy and operations of an AI-driven e-learning platform focused on social impact. Oversee budgeting, fundraising, financial reporting, and resource allocation to ensure sustainable growth and maximum impact for underprivileged children.',
        roles: [
          'Develop and execute financial strategies to support business growth and social impact',
          'Oversee budgeting, forecasting, and financial planning',
          'Manage fundraising efforts, including grants and investor relations',
          'Ensure compliance with financial regulations and reporting standards',
          'Optimize financial resource allocation to enhance platform scalability and accessibility',
          'Collaborate with executive leadership to align financial goals with organizational mission'
        ],
        salary: '$500 - $2100',
        requirements: [
          '10+ years of experience in financial management, preferably in tech or social enterprises',
          'Strong background in fundraising, grants, and impact investment',
          'Experience in scaling technology-driven or AI-powered platforms',
          'Proficiency in financial modeling, budgeting, and risk management',
          'Deep understanding of financial compliance and regulatory frameworks',
          'Ability to work with diverse stakeholders, including investors, NGOs, and policymakers'
        ]
      },
      {
        id: '3',
        title: 'Data Scientist | AI-Driven E-Learning & Assessment Analytics',
        description: 'Collect, process, and analyze datasets to enhance AI-driven learning experiences. Extract and interpret human-marked test results to improve assessment accuracy and personalized learning outcomes.',
        roles: [
          'Data collection, cleaning, and preprocessing for AI models',
          'Extraction and analysis of human-marked tests to enhance AI grading systems',
          'Develop machine learning models for student performance prediction',
          'Collaborate with educators and engineers to refine AI-driven assessments',
          'Ensure data integrity, security, and compliance with ethical standards',
          'Generate insights and reports to improve educational impact'
        ],
        salary: '$250 - $1300',
        requirements: [
          '5+ years of experience in data science, machine learning, or educational analytics',
          'Proficiency in Python, R, SQL, and data visualization tools',
          'Experience working with large-scale datasets and AI-driven assessment tools',
          'Strong understanding of statistical analysis and predictive modeling',
          'Ability to work with cross-functional teams to refine learning outcomes',
          'Knowledge of data privacy regulations and ethical AI considerations'
        ]
      },
      {
        id: '4',
        title: 'Secretary-General for Education Equity & Child Welfare',
        description: 'Lead initiatives that promote education equity and child welfare, ensuring inclusive access to quality education for underprivileged children. Advocate for policy changes, oversee program implementation, and collaborate with stakeholders to drive impactful reforms.',
        roles: [
          'Develop and implement policies for equitable education access',
          'Advocate for child welfare and protection at national and international levels',
          'Oversee educational programs and initiatives for underprivileged children',
          'Collaborate with NGOs, government agencies, and educational institutions',
          'Monitor and evaluate the impact of education equity programs',
          'Ensure compliance with child welfare regulations and ethical standards'
        ],
        salary: '$250 - $1300',
        requirements: [
          '10+ years of experience in education policy, child welfare, or social impact leadership',
          'Strong background in advocacy, policy development, and program implementation',
          'Experience working with government bodies, NGOs, and international organizations',
          'Expertise in education equity strategies and child protection frameworks',
          'Strong leadership, communication, and stakeholder management skills',
          'Commitment to fostering inclusive and impactful educational initiatives'
        ]
      },
      {
        id: '5',
        title: 'Cyber Security Analyst',
        description: 'Ensure the security and integrity of student, teacher, and institutional data within an AI-driven e-learning platform. Implement robust cybersecurity strategies, monitor threats, and ensure compliance with data privacy regulations.',
        roles: [
          'Develop and maintain security protocols to protect sensitive student, teacher, and institutional data',
          'Monitor and analyze potential security threats, vulnerabilities, and breaches',
          'Implement AI-driven security measures to enhance data protection',
          'Ensure compliance with data privacy laws (e.g., GDPR, FERPA)',
          'Conduct regular security audits and risk assessments',
          'Collaborate with IT and development teams to integrate secure coding practices',
          'Educate staff and stakeholders on cybersecurity best practices'
        ],
        salary: '$100,000 - $140,000',
        requirements: [
          '5+ years of experience in cybersecurity, information security, or data protection',
          'Expertise in network security, encryption, and threat analysis',
          'Experience securing AI-driven applications and cloud-based infrastructures',
          'Knowledge of regulatory compliance for educational institutions (e.g., FERPA, GDPR)',
          'Strong analytical and problem-solving skills in cyber threat detection',
          'Ability to work with cross-functional teams to integrate security best practices'
        ]
      }
    // Add more job data as needed
  ];
  
  export async function generateStaticParams() {
    return jobData.map((job) => ({
      id: job.id, // 'id' is already a string in this case.
    }));
  }
  
  export default function JobPage({ params }:{params: JobPageParams}) {
    const { id } = params;
    const job = jobData.find((job) => job.id === id);
  
    if (!job) {
      return <div>Job not found</div>; // Handle case where job is not found
    }
  
    return (
        <>
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
          {job.title}
        </h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px', color: '#555' }}>
          {job.description}
        </p>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px', color: '#444' }}>
          Roles:
        </h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px', color: '#666' }}>
          {job.roles.map((role, index) => (
            <li key={index} style={{ fontSize: '16px', marginBottom: '5px' }}>
              {role}
            </li>
          ))}
        </ul>
        <p style={{ fontSize: '16px', marginBottom: '15px', color: '#555' }}>
          <strong style={{ fontWeight: '600' }}>Salary:</strong> {job.salary}
        </p>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px', color: '#444' }}>
          Requirements:
        </h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#666' }}>
          {job.requirements.map((req, index) => (
            <li key={index} style={{ fontSize: '16px', marginBottom: '5px' }}>
              {req}
            </li>
          ))}
        </ul>

        <div>

<Link href="" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
   Apply
</Link>
</div>

      </div>

     
</>
    );
  }