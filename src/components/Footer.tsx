import React, { useState } from 'react';
import { Castle, Mail, CheckCircle2, AlertCircle, Heart, ArrowUp, Compass, Shield, MapPin } from 'lucide-react';
import { destinationsData } from '../data/destinations';

interface FooterProps {
  onNavigate: (page: string, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^\S+@\S+\.\S+$/.test(newsletterEmail)) {
      setNewsletterStatus('error');
      setStatusMessage('Please enter a valid email address.');
      return;
    }
    setNewsletterStatus('success');
    setStatusMessage('Khamma Ghani! You have successfully subscribed to the Explore Rajasthan Travel Dispatch.');
    setNewsletterEmail('');
    setTimeout(() => {
      setNewsletterStatus('idle');
    }, 6000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C120C] text-[#F3ECE2] border-t-4 border-[#B45309] relative overflow-hidden">
      {/* Decorative top motif line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#881337] via-[#D97706] to-[#881337]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-[#38261D]">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#881337] to-[#B45309] text-amber-200 flex items-center justify-center shadow-md">
                <Castle className="w-5 h-5" />
              </div>
              <div>
                <span className="font-royal-title text-xl font-bold tracking-wider text-white">
                  EXPLORE RAJASTHAN
                </span>
                <p className="text-xs text-amber-400 font-medium">Discover the Royal Land of India</p>
              </div>
            </div>

            <p className="text-sm text-[#C8B8A9] leading-relaxed pr-4">
              A comprehensive cultural travel publication showcasing the timeless majesty of Rajasthan—from the golden sand dunes of the Thar to the hilltop fortresses of Mewar and Marwar. Designed with authentic photography and verified travel intelligence.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D97706]" />
                Subscribe to Royal Travel Dispatch
              </h4>
              <p className="text-xs text-[#A89887] mb-3">
                Receive curated itineraries, festival alerts, and seasonal guides directly in your inbox.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-3.5 py-2 text-xs bg-[#2B1D15] border border-[#483327] rounded-lg text-white placeholder-[#8A796C] focus:outline-none focus:border-[#D97706]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold bg-[#881337] hover:bg-[#991B1B] text-white rounded-lg transition-colors cursor-pointer"
                  >
                    Join
                  </button>
                </div>

                {newsletterStatus === 'success' && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 pt-1 animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}
                {newsletterStatus === 'error' && (
                  <div className="flex items-center gap-1.5 text-xs text-rose-400 pt-1 animate-fadeIn">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-royal-title text-sm font-bold text-amber-300 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#D3C3B3]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  All 10 Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blogs')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Travel Guides & Blogs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tips')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Essential Travel Tips
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  About Our Platform
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Contact & Tourism FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Top Royal Destinations */}
          <div className="space-y-3">
            <h4 className="font-royal-title text-sm font-bold text-amber-300 uppercase tracking-wider">
              Top Destinations
            </h4>
            <ul className="space-y-2 text-sm text-[#D3C3B3]">
              {destinationsData.slice(0, 6).map((dest) => (
                <li key={dest.id}>
                  <button
                    onClick={() => onNavigate('destinations', dest.slug)}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#B45309]" />
                    <span>{dest.name} ({dest.title})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Travel Guides */}
          <div className="space-y-3">
            <h4 className="font-royal-title text-sm font-bold text-amber-300 uppercase tracking-wider">
              Popular Guides
            </h4>
            <ul className="space-y-2 text-xs text-[#D3C3B3]">
              <li>
                <button
                  onClick={() => onNavigate('blog-detail', 'top-10-places-jaipur-guide')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer line-clamp-1"
                >
                  Jaipur: Top 10 Places Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog-detail', 'udaipur-travel-guide-city-of-lakes')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer line-clamp-1"
                >
                  Udaipur: City of Lakes Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog-detail', 'jaisalmer-golden-city-thar-desert')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer line-clamp-1"
                >
                  Jaisalmer & Thar Desert Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog-detail', 'royal-rajasthan-road-trip-itinerary')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer line-clamp-1"
                >
                  Royal Rajasthan Road Trip (12 Days)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog-detail', 'rajasthani-food-guide-traditional-dishes')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer line-clamp-1"
                >
                  Rajasthani Food: 10 Traditional Dishes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog-detail', 'rajasthan-travel-budget-guide-smartly')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer line-clamp-1"
                >
                  Rajasthan Travel Budget Planning
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Ethical Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9E8E80]">
          <div className="space-y-1 text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} Explore Rajasthan. All rights reserved.
            </p>
            <p className="text-[11px] text-[#827266] max-w-2xl">
              <span className="font-semibold text-amber-500/90">Disclaimer:</span> Explore Rajasthan is an independent educational and cultural travel information resource created for travel enthusiasts and digital marketing studies. We do not claim official government affiliation or representation of the Rajasthan Tourism Development Corporation (RTDC). All imagery is authentic, non-AI photography attributed to verified real photographers via Unsplash.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-[11px] bg-[#2E1E16] px-3 py-1.5 rounded-full border border-[#483327] text-amber-200">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              100% Real Photography
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 bg-[#2E1E16] hover:bg-[#881337] text-amber-200 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
