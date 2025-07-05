import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const faqCategories = [
  {
    title: 'Getting Started',
    questions: [
      {
        question: 'What is GATE Ready with AI?',
        answer: 'GATE Ready with AI is an intelligent platform designed to help students prepare for GATE exams using advanced AI technology. It provides personalized study plans, practice tests, and real-time feedback to enhance your learning experience.'
      },
      {
        question: 'How do I get started with the platform?',
        answer: 'Getting started is easy! Simply create an account, complete your profile, and our AI will generate a personalized study plan based on your goals and current knowledge level.'
      },
      {
        question: 'What features are included in the platform?',
        answer: 'Our platform includes AI-powered tutoring, personalized study plans, practice tests, progress tracking, study group collaboration, and comprehensive resource materials.'
      }
    ]
  },
  {
    title: 'Account & Login',
    questions: [
      {
        question: 'How do I create an account?',
        answer: 'Click on the "Sign Up" button in the top right corner, fill in your details, and verify your email address to create your account.'
      },
      {
        question: 'What if I forget my password?',
        answer: 'Click on "Forgot Password" on the login page, enter your email address, and follow the instructions sent to your email to reset your password.'
      },
      {
        question: 'Can I change my email address?',
        answer: 'Yes, you can change your email address from your profile settings. You will need to verify the new email address for security purposes.'
      }
    ]
  },
  {
    title: 'Billing & Subscription',
    questions: [
      {
        question: 'What subscription plans are available?',
        answer: 'We offer monthly and annual subscription plans with different features. Check our pricing page for detailed information about each plan.'
      },
      {
        question: 'How can I cancel my subscription?',
        answer: 'You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.'
      },
      {
        question: 'Do you offer refunds?',
        answer: 'Yes, we offer a 7-day money-back guarantee if you are not satisfied with our service. Contact our support team to process your refund.'
      }
    ]
  },
  {
    title: 'Technical Support',
    questions: [
      {
        question: 'What are the system requirements?',
        answer: 'Our platform works on all modern web browsers. We recommend using Chrome, Firefox, Safari, or Edge with the latest updates.'
      },
      {
        question: 'How do I report a technical issue?',
        answer: 'You can report technical issues through our support portal or contact our technical support team directly through the "Contact Support" page.'
      },
      {
        question: 'Is there a mobile app available?',
        answer: 'Yes, we have mobile apps available for both iOS and Android devices. You can download them from the respective app stores.'
      }
    ]
  },
  {
    title: 'General Queries',
    questions: [
      {
        question: 'How accurate is the AI tutor?',
        answer: 'Our AI tutor is trained on extensive GATE exam materials and is regularly updated to provide accurate and relevant assistance.'
      },
      {
        question: 'Can I use the platform offline?',
        answer: 'Some features are available offline through our mobile app, but for the best experience, we recommend using the platform with an internet connection.'
      },
      {
        question: 'How often is the content updated?',
        answer: 'We regularly update our content to reflect the latest GATE exam patterns and syllabus changes. Updates are typically released monthly.'
      }
    ]
  }
];

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              GATE Ready with AI
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/dashboard" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
              <Link to="/ai-tutor" className="text-muted-foreground hover:text-foreground">
                AI Tutor
              </Link>
              <Link to="/support" className="text-muted-foreground hover:text-foreground">
                Support
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about our platform. Can't find what you're looking for?
            Our support team is here to help.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search questions..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-8">
          {filteredCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold">{category.title}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Didn't find your answer?</h2>
          <p className="text-muted-foreground mb-6">
            Our support team is ready to help you with any questions you may have.
          </p>
          <Link to="/support">
            <Button size="lg">Contact Support</Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/dashboard" className="text-muted-foreground hover:text-foreground">Dashboard</Link></li>
                <li><Link to="/ai-tutor" className="text-muted-foreground hover:text-foreground">AI Tutor</Link></li>
                <li><Link to="/support" className="text-muted-foreground hover:text-foreground">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
                <li><Link to="/tutorials" className="text-muted-foreground hover:text-foreground">Tutorials</Link></li>
                <li><Link to="/documentation" className="text-muted-foreground hover:text-foreground">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                <li><Link to="/cookies" className="text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Email: support@gateready.ai</li>
                <li className="text-muted-foreground">Hours: Mon-Fri, 9am-5pm EST</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} GATE Ready with AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 