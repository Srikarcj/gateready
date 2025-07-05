import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PriorityScheduler() {
  useEffect(() => {
    window.open('https://psgatewithmeai.netlify.app/', '_blank');
  }, []);

  return null;
} 