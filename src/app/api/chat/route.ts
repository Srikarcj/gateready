import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message, mode } = await req.json();

    // For now, we'll return a mock response
    // In production, you would integrate with an actual AI service
    const response = {
      content: `I understand you're asking about "${message}" in ${mode} mode. I'm here to help you learn and understand this topic better. Could you please provide more specific details about what you'd like to know?`,
      type: 'text'
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process your message' },
      { status: 500 }
    );
  }
} 