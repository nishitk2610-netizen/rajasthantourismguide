import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { TravelTipsPage } from './pages/TravelTipsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { DestinationModal } from './components/DestinationModal';
import { SearchModal } from './components/SearchModal';
import { SavedItineraryModal } from './components/SavedItineraryModal';
import { ItineraryProvider } from './context/ItineraryContext';
import { destinationsData } from './data/destinations';
import { blogsData } from './data/blogs';
import { Destination, BlogArticle } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogArticle | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isItineraryOpen, setIsItineraryOpen] = useState(false);

  // Sync hash routing for back/forward browser support and shareable URLs
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash || hash === 'home') {
        setCurrentPage('home');
      } else if (hash.startsWith('blog/')) {
        const slug = hash.replace('blog/', '');
        const found = blogsData.find((b) => b.slug === slug);
        if (found) {
          setSelectedBlog(found);
          setCurrentPage('blog-detail');
        } else {
          setCurrentPage('blogs');
        }
      } else if (hash.startsWith('destination/')) {
        const slug = hash.replace('destination/', '');
        const found = destinationsData.find((d) => d.slug === slug);
        if (found) {
          setSelectedDestination(found);
          setCurrentPage('destinations');
        }
      } else if (['destinations', 'blogs', 'tips', 'about', 'contact', 'faq', 'privacy-policy'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string, param?: string) => {
    if (page === 'blog-detail' && param) {
      const found = blogsData.find((b) => b.slug === param);
      if (found) {
        setSelectedBlog(found);
        setCurrentPage('blog-detail');
        window.location.hash = `blog/${param}`;
      }
    } else if (page === 'destinations' && param) {
      const found = destinationsData.find((d) => d.slug === param);
      if (found) {
        setSelectedDestination(found);
        setCurrentPage('destinations');
        window.location.hash = `destination/${param}`;
      } else {
        setCurrentPage('destinations');
        window.location.hash = 'destinations';
      }
    } else {
      setCurrentPage(page);
      window.location.hash = page === 'home' ? '' : page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    window.location.hash = `destination/${dest.slug}`;
  };

  const handleSelectBlog = (blog: BlogArticle) => {
    setSelectedBlog(blog);
    setCurrentPage('blog-detail');
    window.location.hash = `blog/${blog.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ItineraryProvider>
      <div className="min-h-screen flex flex-col bg-[#FCF9F2] text-[#241A17] antialiased">
        {/* Persistent Royal Navigation Header */}
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenItinerary={() => setIsItineraryOpen(true)}
        />

        {/* Dynamic Page Router */}
        <main className="flex-1">
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onSelectDestination={handleSelectDestination}
              onSelectBlog={handleSelectBlog}
            />
          )}

          {currentPage === 'destinations' && (
            <DestinationsPage
              onSelectDestination={handleSelectDestination}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'blogs' && (
            <BlogsPage
              onSelectBlog={handleSelectBlog}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'blog-detail' && (
            selectedBlog ? (
              <BlogDetailPage
                blog={selectedBlog}
                onBack={() => handleNavigate('blogs')}
                onSelectBlog={handleSelectBlog}
                onNavigate={handleNavigate}
              />
            ) : (
              <BlogsPage onSelectBlog={handleSelectBlog} onNavigate={handleNavigate} />
            )
          )}

          {currentPage === 'tips' && (
            <TravelTipsPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'about' && (
            <AboutPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'contact' && (
            <ContactPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'faq' && (
            <FAQPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'privacy-policy' && (
            <PrivacyPolicyPage onNavigate={handleNavigate} />
          )}
        </main>

        {/* Persistent Royal Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Global Destination Details Modal */}
        <DestinationModal
          destination={selectedDestination}
          onClose={() => {
            setSelectedDestination(null);
            if (window.location.hash.startsWith('#destination/')) {
              window.location.hash = 'destinations';
            }
          }}
          onNavigateToBlog={(slug) => handleNavigate('blog-detail', slug)}
        />

        {/* Global Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectDestination={(slug) => {
            const found = destinationsData.find((d) => d.slug === slug);
            if (found) setSelectedDestination(found);
            handleNavigate('destinations', slug);
          }}
          onSelectBlog={(slug) => handleNavigate('blog-detail', slug)}
          onSelectTip={(tipId) => handleNavigate('tips')}
        />

        {/* Saved Itinerary Drawer Modal */}
        <SavedItineraryModal
          isOpen={isItineraryOpen}
          onClose={() => setIsItineraryOpen(false)}
          onNavigateToDestination={(slug) => {
            const found = destinationsData.find((d) => d.slug === slug);
            if (found) setSelectedDestination(found);
            handleNavigate('destinations', slug);
          }}
          onNavigateToBlog={(slug) => handleNavigate('blog-detail', slug)}
        />
      </div>
    </ItineraryProvider>
  );
}
