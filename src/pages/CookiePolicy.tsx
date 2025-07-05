import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

export default function CookiePolicy() {
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
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Cookie className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us make your experience better by remembering your preferences and providing essential functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
              <p>
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6">
                <li>Essential cookies for website functionality</li>
                <li>Authentication and security</li>
                <li>Remembering your preferences</li>
                <li>Analyzing how you use our website</li>
                <li>Personalizing your experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
              <h3 className="text-xl font-medium mb-2">3.1 Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
              </p>

              <h3 className="text-xl font-medium mb-2">3.2 Performance Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>

              <h3 className="text-xl font-medium mb-2">3.3 Functionality Cookies</h3>
              <p>
                These cookies allow the website to remember choices you make and provide enhanced, more personal features.
              </p>

              <h3 className="text-xl font-medium mb-2">3.4 Targeting Cookies</h3>
              <p>
                These cookies are used to track visitors across websites to display relevant advertisements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
              <p>
                Some cookies are placed by third-party services that appear on our pages. We use trusted third-party services that track this information on our behalf.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us at:
              </p>
              <p className="text-muted-foreground">
                Email: privacy@gateready.ai
              </p>
            </section>
          </div>
        </div>
      </main>

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