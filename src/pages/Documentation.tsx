import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Book, Code, Settings, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const sections = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", path: "/docs/introduction" },
      { title: "Quick Start Guide", path: "/docs/quick-start" },
      { title: "Installation", path: "/docs/installation" },
      { title: "Basic Concepts", path: "/docs/basic-concepts" }
    ]
  },
  {
    title: "Features",
    items: [
      { title: "AI Tutor", path: "/docs/ai-tutor" },
      { title: "Practice Tests", path: "/docs/practice-tests" },
      { title: "Progress Tracking", path: "/docs/progress-tracking" },
      { title: "Study Schedule", path: "/docs/study-schedule" }
    ]
  },
  {
    title: "API Reference",
    items: [
      { title: "Authentication", path: "/docs/api/auth" },
      { title: "Endpoints", path: "/docs/api/endpoints" },
      { title: "Webhooks", path: "/docs/api/webhooks" },
      { title: "Rate Limits", path: "/docs/api/rate-limits" }
    ]
  }
];

const popularTopics = [
  {
    title: "How to Use AI Tutor",
    description: "Learn how to effectively use our AI-powered tutoring system",
    icon: <Book className="h-5 w-5" />
  },
  {
    title: "API Integration",
    description: "Integrate GATE Ready with AI into your applications",
    icon: <Code className="h-5 w-5" />
  },
  {
    title: "Account Settings",
    description: "Manage your account preferences and settings",
    icon: <Settings className="h-5 w-5" />
  },
  {
    title: "Troubleshooting",
    description: "Common issues and their solutions",
    icon: <HelpCircle className="h-5 w-5" />
  }
];

export default function Documentation() {
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
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search documentation..."
                  className="pl-10"
                />
              </div>
              <nav className="space-y-6">
                {sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-semibold mb-2">{section.title}</h3>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item.title}>
                          <Link
                            to={item.path}
                            className="flex items-center text-sm text-muted-foreground hover:text-foreground"
                          >
                            <ChevronRight className="h-4 w-4 mr-1" />
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Hero Section */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">Documentation</h1>
              <p className="text-muted-foreground max-w-2xl">
                Comprehensive documentation to help you get the most out of GATE Ready with AI
              </p>
            </div>

            {/* Popular Topics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {popularTopics.map((topic) => (
                <div
                  key={topic.title}
                  className="bg-card p-6 rounded-lg border hover:border-primary transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {topic.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Getting Started Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
              <div className="prose prose-sm max-w-none">
                <p>
                  Welcome to GATE Ready with AI! This documentation will help you understand
                  how to use our platform effectively for your GATE preparation.
                </p>
                <h3>Key Features</h3>
                <ul>
                  <li>AI-powered tutoring system</li>
                  <li>Comprehensive practice tests</li>
                  <li>Personalized study schedules</li>
                  <li>Progress tracking and analytics</li>
                </ul>
                <h3>Quick Start</h3>
                <ol>
                  <li>Create an account or sign in</li>
                  <li>Complete your profile and preferences</li>
                  <li>Start with the AI Tutor assessment</li>
                  <li>Follow your personalized study plan</li>
                </ol>
              </div>
            </section>

            {/* API Reference Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">API Reference</h2>
              <div className="prose prose-sm max-w-none">
                <p>
                  Our API allows you to integrate GATE Ready with AI into your own
                  applications. Here's a quick overview of what you can do:
                </p>
                <pre className="bg-muted p-4 rounded-lg">
                  <code>
                    {`// Example API request
const response = await fetch('https://api.gateready.ai/v1/tests', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    subject: 'Computer Science',
    difficulty: 'medium'
  })
});`}
                  </code>
                </pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} GATE Ready with AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 