import React, { useState, useEffect } from 'react';
import { Compass, Search, Bookmark, Menu, X, Castle, Sparkles } from 'lucide-react';
import { useItinerary } from '../context/ItineraryContext';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, param?: string) => void;
  onOpenSearch: () => void;
  onOpenItinerary: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenItinerary
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { savedItems } = useItinerary();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'blogs', label: 'Travel Blogs' },
    { id: 'tips', label: 'Travel Tips' },
    { id: 'faq', label: 'FAQ' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FCF9F2]/95 backdrop-blur-md shadow-md py-3 border-b border-[#E7D6C0]'
            : 'bg-gradient-to-b from-[#1C120C]/80 via-[#1C120C]/40 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Tagline */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
              aria-label="Explore Rajasthan Homepage"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                  isScrolled
                    ? 'bg-gradient-to-br from-[#881337] to-[#991B1B] text-[#FEF3C7]'
                    : 'bg-[#B45309] text-white'
                }`}
              >
                <Castle className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div>
                <span
                  className={`block font-royal-title text-lg sm:text-xl font-bold tracking-wider ${
                    isScrolled ? 'text-[#881337]' : 'text-white drop-shadow-sm'
                  }`}
                >
                  EXPLORE RAJASTHAN
                </span>
                <span
                  className={`block text-[10px] tracking-widest uppercase font-medium ${
                    isScrolled ? 'text-[#B45309]' : 'text-amber-200'
                  }`}
                >
                  Discover the Royal Land of India
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id || (link.id === 'blogs' && currentPage === 'blog-detail');
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                      isActive
                        ? isScrolled
                          ? 'bg-[#881337]/10 text-[#881337] font-semibold'
                          : 'bg-white/20 text-white font-semibold backdrop-blur-sm shadow-sm'
                        : isScrolled
                        ? 'text-[#4A3B32] hover:text-[#881337] hover:bg-[#F2E8D8]'
                        : 'text-amber-100 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Button */}
              <button
                onClick={onOpenSearch}
                aria-label="Search destinations and articles"
                className={`p-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium ${
                  isScrolled
                    ? 'text-[#4A3B32] hover:text-[#881337] hover:bg-[#F2E8D8]'
                    : 'text-white hover:bg-white/15'
                }`}
              >
                <Search className="w-4 h-4" />
                <span className="hidden xl:inline">Search</span>
              </button>

              {/* Saved Itinerary Bookmark */}
              <button
                onClick={onOpenItinerary}
                aria-label="View Saved Itinerary"
                className={`relative p-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium ${
                  isScrolled
                    ? 'bg-[#B45309]/10 text-[#B45309] hover:bg-[#B45309]/20'
                    : 'bg-white/15 text-amber-200 hover:bg-white/25 backdrop-blur-sm'
                }`}
              >
                <Bookmark className="w-4 h-4" />
                <span className="hidden lg:inline">Saved</span>
                {savedItems.length > 0 && (
                  <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-[#881337] rounded-full">
                    {savedItems.length}
                  </span>
                )}
              </button>

              {/* Quick Trip CTA on Desktop */}
              <button
                onClick={() => handleLinkClick('destinations')}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#881337] text-white hover:bg-[#70102D] shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Explore</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className={`md:hidden p-2 rounded-lg cursor-pointer ${
                  isScrolled ? 'text-[#2D1B13]' : 'text-white'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FCF9F2] text-[#2D1B13] border-b border-[#E2D2BC] shadow-xl px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
            <div className="pb-2 border-b border-[#EADBCC] mb-2">
              <span className="text-xs uppercase tracking-wider text-[#8C6D58] font-bold">
                Navigation
              </span>
            </div>
            {navLinks.map((link) => {
              const isActive = currentPage === link.id || (link.id === 'blogs' && currentPage === 'blog-detail');
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#881337] text-white font-semibold'
                      : 'text-[#4A3B32] hover:bg-[#F2E8D8]'
                  }`}
                >
                  <span>{link.label}</span>
                  <Compass className="w-4 h-4 opacity-70" />
                </button>
              );
            })}

            <div className="pt-3 border-t border-[#EADBCC] flex gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium bg-[#F2E8D8] text-[#881337] rounded-lg"
              >
                <Search className="w-4 h-4" />
                Search
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenItinerary();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium bg-[#881337] text-white rounded-lg"
              >
                <Bookmark className="w-4 h-4" />
                Saved ({savedItems.length})
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
