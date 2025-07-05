
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from '@/features/dashboard/Dashboard';
import { Navigation } from "./components/Navigation";
import { Notes } from "./pages/Notes";
import { Flashcards } from "./pages/Flashcards";
import { MockTests } from "./pages/MockTests";
import { Groups } from "./pages/Groups";
import { Profile } from "./pages/Profile";
import CollegePredictor from "./features/predictor/CollegePredictor";
import CollegeMap from "./features/college-map/CollegeMap";
import CollegeGallery from "./features/college-gallery/CollegeGallery";
import Resources from "./features/resources/Resources";
import { TitleBanner } from "./components/TitleBanner";
import { Footer } from "./components/Footer";
import { GateRankPredictor } from '@/pages/GateRankPredictor';
import CollegeTransportExplorer from '@/pages/CollegeTransportExplorer';

import { TodoList } from '@/features/todo/TodoList';
import TestInterface from '@/pages/TestInterface';
import Layout from '@/components/layout/Layout';
import CollegeDetails from './features/predictor/CollegeDetails';
import AITutor from './pages/AITutor';
import GenerateSchedule from './pages/GenerateSchedule';
import Support from './pages/Support';
import FAQs from './pages/FAQs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Blog from './pages/Blog';
import Tutorials from './pages/Tutorials';
import Documentation from './pages/Documentation';
import PriorityScheduler from './pages/PriorityScheduler';
import PomodoroRevision from './pages/PomodoroRevision';
import Doubts from './pages/Doubts';
import SpacedRepetition from './pages/SpacedRepetition';
import { ProtectedRoute } from './components/ProtectedRoute';
import { StudyMaterials } from './pages/StudyMaterials';
import { Courses } from './pages/Courses';
import PracticeTests from './pages/PracticeTests';
import { Performance } from './pages/Performance';

const queryClient = new QueryClient();

const App = () => {
  const { isLoaded, isSignedIn } = useAuth();

  // Show loading state while auth is being checked
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Navigation />
          <TitleBanner />
          <Layout>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/support" element={<Support />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/docs" element={<Documentation />} />

              {/* Protected Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route
                path="/practice-tests"
                element={
                  <ProtectedRoute>
                    <PracticeTests />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/test-interface"
                element={
                  <ProtectedRoute>
                    <TestInterface />
                  </ProtectedRoute>
                }
              />
              <Route path="/study-materials" element={
                <ProtectedRoute>
                  <StudyMaterials />
                </ProtectedRoute>
              } />
              <Route path="/notes" element={
                <ProtectedRoute>
                  <Notes />
                </ProtectedRoute>
              } />
              <Route path="/flashcards" element={
                <ProtectedRoute>
                  <Flashcards />
                </ProtectedRoute>
              } />
              <Route path="/mock-tests" element={
                <ProtectedRoute>
                  <MockTests />
                </ProtectedRoute>
              } />
              <Route path="/groups" element={
                <ProtectedRoute>
                  <Groups />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              <Route path="/college-map" element={
                <ProtectedRoute>
                  <CollegeMap />
                </ProtectedRoute>
              } />
              <Route path="/college-predictor" element={
                <ProtectedRoute>
                  <CollegePredictor />
                </ProtectedRoute>
              } />
              <Route path="/college/:id" element={
                <ProtectedRoute>
                  <CollegeDetails />
                </ProtectedRoute>
              } />
              <Route path="/college-gallery" element={
                <ProtectedRoute>
                  <CollegeGallery />
                </ProtectedRoute>
              } />
              <Route path="/resources" element={
                <ProtectedRoute>
                  <Resources />
                </ProtectedRoute>
              } />
              <Route path="/gate-rank-predictor" element={
                <ProtectedRoute>
                  <GateRankPredictor />
                </ProtectedRoute>
              } />
              <Route path="/college-transport" element={
                <ProtectedRoute>
                  <CollegeTransportExplorer />
                </ProtectedRoute>
              } />

              <Route path="/todo" element={
                <ProtectedRoute>
                  <TodoList />
                </ProtectedRoute>
              } />
              <Route path="/ai-tutor" element={
                <ProtectedRoute>
                  <AITutor />
                </ProtectedRoute>
              } />
              <Route path="/generate-schedule" element={
                <ProtectedRoute>
                  <GenerateSchedule />
                </ProtectedRoute>
              } />
              <Route path="/priority-scheduler" element={
                <ProtectedRoute>
                  <PriorityScheduler />
                </ProtectedRoute>
              } />
              <Route path="/pomodoro-revision" element={
                <ProtectedRoute>
                  <PomodoroRevision />
                </ProtectedRoute>
              } />
              <Route path="/doubts" element={
                <ProtectedRoute>
                  <Doubts />
                </ProtectedRoute>
              } />
              <Route path="/spaced-repetition" element={
                <ProtectedRoute>
                  <SpacedRepetition />
                </ProtectedRoute>
              } />
              <Route path="/courses" element={
                <ProtectedRoute>
                  <Courses />
                </ProtectedRoute>
              } />
              <Route path="/performance" element={
                <ProtectedRoute>
                  <Performance />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
          <Footer />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
