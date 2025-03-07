import nodemailer from 'nodemailer';

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER || 'smtp.example.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || 'user@example.com',
    pass: process.env.EMAIL_PASSWORD || 'password',
  },
});

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(payload: EmailPayload) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'JobNexus <noreply@jobnexus.com>',
      ...payload,
    });
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

export function generateJobApplicationEmail(jobTitle: string, companyName: string, candidateName: string) {
  return {
    subject: `New Application: ${jobTitle} at ${companyName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Job Application</h2>
        <p>Hello,</p>
        <p>A new candidate has applied for the <strong>${jobTitle}</strong> position at <strong>${companyName}</strong>.</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Candidate Information</h3>
          <p><strong>Name:</strong> ${candidateName}</p>
        </div>
        <p>You can review this application in your JobNexus dashboard.</p>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
          <p>This is an automated email from JobNexus. Please do not reply to this email.</p>
        </div>
      </div>
    `,
  };
}

export function generateJobOfferEmail(candidateName: string, jobTitle: string, companyName: string, startDate: string) {
  return {
    subject: `Job Offer: ${jobTitle} at ${companyName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Job Offer</h2>
        <p>Dear ${candidateName},</p>
        <p>Congratulations! We are pleased to offer you the position of <strong>${jobTitle}</strong> at <strong>${companyName}</strong>.</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Offer Details</h3>
          <p><strong>Position:</strong> ${jobTitle}</p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Start Date:</strong> ${startDate}</p>
        </div>
        <p>Please log in to your JobNexus account to view the complete offer details and respond.</p>
        <div style="margin-top: 30px; text-align: center;">
          <a href="#" style="display: inline-block; background-color: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">View Offer Details</a>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
          <p>This is an automated email from JobNexus. Please do not reply to this email.</p>
        </div>
      </div>
    `,
  };
}

export function generateOnboardingEmail(candidateName: string, jobTitle: string, companyName: string, startDate: string) {
  return {
    subject: `Welcome to ${companyName} - Onboarding Information`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Welcome to ${companyName}!</h2>
        <p>Dear ${candidateName},</p>
        <p>We're excited to have you join our team as a <strong>${jobTitle}</strong>. Here's some important information to help you get started.</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Onboarding Details</h3>
          <p><strong>Start Date:</strong> ${startDate}</p>
          <p><strong>First Day Schedule:</strong></p>
          <ul>
            <li>9:00 AM - Welcome and Introduction</li>
            <li>10:00 AM - HR Orientation</li>
            <li>12:00 PM - Team Lunch</li>
            <li>1:30 PM - IT Setup</li>
            <li>3:00 PM - Meet with Manager</li>
          </ul>
        </div>
        <p>Please complete the following tasks before your first day:</p>
        <ol>
          <li>Complete the background check form</li>
          <li>Sign and return the employment contract</li>
          <li>Fill out the direct deposit form</li>
          <li>Review the employee handbook</li>
        </ol>
        <div style="margin-top: 30px; text-align: center;">
          <a href="#" style="display: inline-block; background-color: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Access Onboarding Portal</a>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
          <p>If you have any questions, please contact our HR department at hr@example.com.</p>
        </div>
      </div>
    `,
  };
}