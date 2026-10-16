import React, { useState } from 'react';
import { Search, MapPin, Compass, Sparkles, Filter } from 'lucide-react';
import { destinationsData } from '../data/destinations';
import { DestinationCard } from '../components/DestinationCard';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AEOSection } from '../components/AEOSection';
import { seoDataMap } from '../data/seoData';
import { Destination, DestinationCategory } from '../types';

interface DestinationsPageProps {
  onSelectDestination: (dest: Destination) => void;
  selectedSlug?: string;
  onNavigate?: (page: string) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  onSelectDestination,
  selectedSlug,
  onNavigate
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Heritage', 'Desert', 'Lakes', 'Wildlife', 'Spiritual', 'Hill Station'];

  const filteredDestinations = destinationsData.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.topAttractions.some((a) => a.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All' || dest.categories.includes(selectedCategory as DestinationCategory);

    return matchesSearch && matchesCategory;
  });

  const destinationsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top 10 Tourist Destinations in Rajasthan',
    description: 'Complete directory of 10 royal cities, hill forts, and desert oases in Rajasthan, India.',
    itemListElement: destinationsData.map((d, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'TouristDestination',
        name: d.name,
        description: d.shortDescription,
        image: d.image.url,
        touristType: d.categories
      }
    }))
  };

  return (
    <div className="pt-24 pb-20 space-y-12">
      <SEOHead
        title={seoDataMap.destinations.title}
        description={seoDataMap.destinations.metaDescription}
        canonicalPath="/destinations"
        schema={destinationsSchema}
      />

      {/* Breadcrumbs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: 'Destinations', isCurrent: true }]}
          onNavigate={(page) => onNavigate && onNavigate(page)}
        />
      </div>

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2D1B13] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-amber-900/40">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-amber-300 border border-amber-400/20">
              <Compass className="w-3.5 h-3.5" />
              Comprehensive Rajasthan Destination Atlas
            </span>
            <h1 className="font-royal-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
              The 10 Royal Destinations of Rajasthan
            </h1>
            <p className="text-sm sm:text-base text-[#E2D2C2] leading-relaxed">
              From the pink terracotta architecture of Jaipur and the romantic waterways of Udaipur, to the golden dunes of Jaisalmer and tiger sanctuaries of Ranthambore. Every city possesses its own distinct history, colors, and culinary soul.
            </p>
          </div>

          {/* Decorative motif element */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E7D6C3] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#7A6759] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by city, fort, lake, palace..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#FAF6F0] border border-[#EADBCC] rounded-xl text-xs sm:text-sm text-[#241A17] placeholder-[#8A796C] focus:outline-none focus:border-[#881337]"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <Filter className="w-3.5 h-3.5 text-[#B45309] shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#881337] text-white shadow-sm'
                    : 'bg-[#F5ECE0] text-[#735A48] hover:bg-[#EADBCC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between text-xs text-[#7A6759] px-1">
          <span>Showing <strong>{filteredDestinations.length}</strong> of 10 destinations</span>
          {selectedCategory !== 'All' && <span>Filtered by: <strong>{selectedCategory}</strong></span>}
        </div>

        {filteredDestinations.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E7D6C3] p-8 space-y-3">
            <MapPin className="w-10 h-10 mx-auto text-[#B45309] opacity-50" />
            <h3 className="font-royal-title text-base font-bold text-[#291A14]">
              No Destinations Match Your Filter
            </h3>
            <p className="text-xs text-[#7A6759]">
              Try adjusting your search query or reset category filter to "All".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 text-xs font-semibold bg-[#881337] text-white rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDestinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onSelect={onSelectDestination}
              />
            ))}
          </div>
        )}
      </section>

      {/* AEO Section for Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AEOSection
          title="Direct Destination Guidance & Q&A"
          subtitle="Key answers regarding choosing cities, routes, and itineraries across Rajasthan"
          qaPairs={seoDataMap.destinations.qaPairs}
        />
      </section>
    </div>
  );
};
