import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './Support.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How do I reset my password?",
    answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. We'll send you an email with instructions to create a new password."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment gateway."
  },
  {
    question: "How can I track my progress?",
    answer: "You can track your progress through the dashboard, which shows your completed modules, quiz scores, and overall performance metrics."
  }
];

const helpTopics = [
  { title: "Account Issues", icon: "👤", description: "Login, password, and account settings" },
  { title: "Technical Help", icon: "🔧", description: "Platform usage and technical support" },
  { title: "Billing", icon: "💳", description: "Payments, subscriptions, and refunds" },
  { title: "General Queries", icon: "❓", description: "General questions and information" }
];

const Support: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="support-page">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Need Help? We're Here for You
        </motion.h1>
        <p className="subtitle">Search our knowledge base or contact our support team</p>
        <div className="search-container">
          <input type="text" placeholder="Search for help..." />
          <button className="search-button">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${expandedFaq === index ? 'expanded' : ''}`}
              onClick={() => handleFaqClick(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                {expandedFaq === index ? 
                  <ChevronUp className="h-5 w-5" /> : 
                  <ChevronDown className="h-5 w-5" />
                }
              </div>
              {expandedFaq === index && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="faq-answer"
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Help Topics Grid */}
      <section className="help-topics-section">
        <h2>Help Topics</h2>
        <div className="help-topics-grid">
          {helpTopics.map((topic, index) => (
            <motion.div 
              key={index}
              className="help-topic-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="topic-icon">{topic.icon}</span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Live Chat Widget */}
      <motion.div 
        className="live-chat-widget"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-5 w-5" />
        <span>Chat with us</span>
      </motion.div>

      {/* Footer */}
      <footer className="support-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: support@gateready.com</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 GATE Ready. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Support; 