import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, generateJobApplicationEmail, generateJobOfferEmail, generateOnboardingEmail } from '@/lib/nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;
    
    if (!type || !data) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    let emailPayload;
    
    switch (type) {
      case 'job-application':
        if (!data.jobTitle || !data.companyName || !data.candidateName || !data.recipientEmail) {
          return NextResponse.json(
            { error: 'Missing required fields for job application email' },
            { status: 400 }
          );
        }
        
        const applicationEmail = generateJobApplicationEmail(
          data.jobTitle,
          data.companyName,
          data.candidateName
        );
        
        emailPayload = {
          to: data.recipientEmail,
          subject: applicationEmail.subject,
          html: applicationEmail.html,
        };
        break;
        
      case 'job-offer':
        if (!data.candidateName || !data.jobTitle || !data.companyName || !data.startDate || !data.recipientEmail) {
          return NextResponse.json(
            { error: 'Missing required fields for job offer email' },
            { status: 400 }
          );
        }
        
        const offerEmail = generateJobOfferEmail(
          data.candidateName,
          data.jobTitle,
          data.companyName,
          data.startDate
        );
        
        emailPayload = {
          to: data.recipientEmail,
          subject: offerEmail.subject,
          html: offerEmail.html,
        };
        break;
        
      case 'onboarding':
        if (!data.candidateName || !data.jobTitle || !data.companyName || !data.startDate || !data.recipientEmail) {
          return NextResponse.json(
            { error: 'Missing required fields for onboarding email' },
            { status: 400 }
          );
        }
        
        const onboardingEmail = generateOnboardingEmail(
          data.candidateName,
          data.jobTitle,
          data.companyName,
          data.startDate
        );
        
        emailPayload = {
          to: data.recipientEmail,
          subject: onboardingEmail.subject,
          html: onboardingEmail.html,
        };
        break;
        
      default:
        return NextResponse.json(
          { error: 'Invalid email type' },
          { status: 400 }
        );
    }
    
    const result = await sendEmail(emailPayload);
    
    if (result.success) {
      return NextResponse.json({ success: true, messageId: result.messageId });
    } else {
      return NextResponse.json(
        { error: 'Failed to send email', details: result.error },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('Error in email API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}