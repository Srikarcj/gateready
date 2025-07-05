import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BrainCircuit, BookOpen, Users, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-6">
          About GATE Ready with AI
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering engineering students with AI-driven tools to ace the GATE examination and secure admissions to premier institutions.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <Target className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To democratize access to quality GATE preparation through innovative AI technology, making exam preparation more effective, personalized, and accessible to students across India.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
            <Award className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To become the most trusted GATE preparation platform that helps millions of engineering students achieve their academic and career aspirations through cutting-edge technology.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <BrainCircuit className="h-8 w-8 text-indigo-600" />,
              title: 'AI-Powered Learning',
              description: 'Smart algorithms adapt to your learning style and pace, focusing on areas that need improvement.'
            },
            {
              icon: <BookOpen className="h-8 w-8 text-green-600" />,
              title: 'Comprehensive Study Material',
              description: 'Access to a vast library of study materials, practice questions, and mock tests.'
            },
            {
              icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
              title: 'Expert Guidance',
              description: 'Get insights and tips from GATE toppers and subject matter experts.'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet the Founder</h2>
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
            <div className="w-32 h-32 rounded-full bg-indigo-100 mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="/images/ceo.jpg" 
                alt="Srikar CJ - Founder & GATE Aspirant"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to default avatar if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234f46e5"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
                }}
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Srikar CJ</h3>
            <p className="text-indigo-600 font-medium mb-4">Founder & GATE Aspirant</p>
            <p className="text-gray-600 mb-4">
              As a dedicated GATE aspirant myself, I understand the challenges students face during preparation. 
              I created this platform to make the journey easier for fellow aspirants by combining my technical 
              skills with my first-hand experience of the GATE examination process.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-indigo-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto bg-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Ace Your GATE Exam?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join thousands of students who have already transformed their GATE preparation with our AI-powered platform.
        </p>
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-indigo-600 hover:bg-indigo-700"
            asChild
          >
            <Link to="/dashboard">Get Started for Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
