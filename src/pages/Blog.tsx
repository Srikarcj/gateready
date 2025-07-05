import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const blogPosts = [
  {
    id: 1,
    title: "How to Prepare for GATE 2025: A Complete Guide",
    excerpt: "Learn the best strategies and tips to prepare for GATE 2025 effectively. From study planning to practice tests, we cover everything you need to know.",
    category: "Study Tips",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Understanding GATE Exam Pattern Changes",
    excerpt: "Stay updated with the latest changes in GATE exam pattern and how to adapt your preparation strategy accordingly.",
    category: "Exam Updates",
    date: "2024-03-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Top 10 Resources for GATE Preparation",
    excerpt: "Discover the most effective resources, books, and online materials to enhance your GATE preparation journey.",
    category: "Resources",
    date: "2024-03-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Time Management Tips for GATE Aspirants",
    excerpt: "Learn how to effectively manage your time while preparing for GATE, balancing study, practice, and revision.",
    category: "Study Tips",
    date: "2024-03-01",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const categories = [
  "All Posts",
  "Study Tips",
  "Exam Updates",
  "Resources",
  "Success Stories",
  "Technical Articles"
];

export default function Blog() {
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">GATE Preparation Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest tips, strategies, and resources for GATE preparation
          </p>
        </div>

        {/* Search and Categories */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  <Link to={`/blog/${post.id}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Tag className="h-4 w-4" />
                    {post.category}
                  </span>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" size="sm">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Get the latest articles and updates delivered to your inbox
          </p>
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button>Subscribe</Button>
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