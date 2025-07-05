import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function GET() {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a motivational speaker specializing in education and exam preparation. Generate a short, inspiring quote for GATE exam aspirants."
        },
        {
          role: "user",
          content: "Generate a motivational quote for GATE exam preparation."
        }
      ],
      max_tokens: 100,
      temperature: 0.7
    });

    const quote = completion.choices[0]?.message?.content || "Success is not final, failure is not fatal: it is the courage to continue that counts.";

    return NextResponse.json({ quote });
  } catch (error) {
    console.error('Error generating motivational quote:', error);
    return NextResponse.json(
      { error: 'Failed to generate motivational quote' },
      { status: 500 }
    );
  }
} 
 
 