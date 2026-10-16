import React from 'react';
import { ArrowRight, Compass, Castle, Sparkles, BookOpen, MapPin, Shield, Calendar, Users, Star, Award, Heart } from 'lucide-react';
import { destinationsData } from '../data/destinations';
import { blogsData } from '../data/blogs';
import { travelExperiences } from '../data/experiences';
import { DestinationCard } from '../components/DestinationCard';
import { BlogCard } from '../components/BlogCard';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { SEOHead } from '../components/SEOHead';
import { AEOSection } from '../components/AEOSection';
import { seoDataMap } from '../data/seoData';
import { Destination, BlogArticle } from '../types';

interface HomePageProps {
  onNavigate: (page: string, param?: string) => void;
  onSelectDestination: (dest: Destination) => void;
  onSelectBlog: (blog: BlogArticle) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectDestination,
  onSelectBlog
}) => {
  const featuredDestinations = destinationsData.slice(0, 4);
  const latestBlogs = blogsData.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24">
      <SEOHead
        title={seoDataMap.home.title}
        description={seoDataMap.home.metaDescription}
        canonicalPath="/"
      />
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Real High-Resolution Background Photograph */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=85"
            alt="The majestic Hawa Mahal facade in Jaipur, Rajasthan, India"
            photographer="Annie Spratt"
            caption="The iconic honeycomb sandstone facade of Hawa Mahal at sunrise."
            showCreditBadge={true}
            priority={true}
            className="w-full h-full object-cover scale-105"
          />
          {/* Royal Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C120C] via-[#1C120C]/60 to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-24 space-y-6">
          {/* Royal Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-300/30 text-amber-200 text-xs sm:text-sm font-medium tracking-wide">
            <Castle className="w-4 h-4 text-amber-400" />
            <span>Welcome to Explore Rajasthan</span>
          </div>

          {/* Headline */}
          <h1 className="font-royal-title text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md">
            Experience the Royal Magic of Rajasthan
          </h1>

          {/* Supporting Text */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-[#F0E6D8] font-light leading-relaxed drop-shadow-sm">
            Explore magnificent forts, golden deserts, colourful markets, royal palaces, and unforgettable cultural experiences across the Land of Kings.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('destinations')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#881337] to-[#B45309] text-white hover:from-[#70102D] hover:to-[#92400E] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Destinations</span>
              <Compass className="w-4 h-4 text-amber-300" />
            </button>

            <button
              onClick={() => onNavigate('blogs')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Read Travel Blogs</span>
              <BookOpen className="w-4 h-4 text-amber-300" />
            </button>
          </div>

          {/* Real Photo Notice */}
          <div className="pt-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-amber-200/90 font-medium bg-black/40 px-3 py-1 rounded-full border border-amber-500/20">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              100% Authentic Photography • Real Verified Rajasthan Locations
            </span>
          </div>
        </div>

        {/* Decorative Bottom Wave/Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FCF9F2] to-transparent pointer-events-none" />
      </section>

      {/* ROYAL STATS TICKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E8DAC8] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="font-royal-title text-2xl sm:text-3xl font-extrabold text-[#881337]">
              10
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#291A14]">Iconic Royal Cities</p>
            <p className="text-[11px] text-[#7A6759]">From Pink Jaipur to Golden Jaisalmer</p>
          </div>
          <div className="space-y-1">
            <span className="font-royal-title text-2xl sm:text-3xl font-extrabold text-[#B45309]">
              6+
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#291A14]">UNESCO Hill Forts</p>
            <p className="text-[11px] text-[#7A6759]">World Heritage Military Citadels</p>
          </div>
          <div className="space-y-1">
            <span className="font-royal-title text-2xl sm:text-3xl font-extrabold text-[#881337]">
              10+
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#291A14]">In-Depth Travel Guides</p>
            <p className="text-[11px] text-[#7A6759]">800+ words of researched insights</p>
          </div>
          <div className="space-y-1">
            <span className="font-royal-title text-2xl sm:text-3xl font-extrabold text-[#B45309]">
              5,000+
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#291A14]">Years of Culture</p>
            <p className="text-[11px] text-[#7A6759]">Sovereign Mewar & Marwar History</p>
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
              ROYAL RAJPUTANA DESTINATIONS
            </span>
            <h2 className="font-royal-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#241A17]">
              Crown Jewels of Rajasthan
            </h2>
            <p className="text-sm text-[#665447] max-w-xl">
              From fortified desert citadels to tranquil island palaces, explore our curated top destinations in the Land of Kings.
            </p>
          </div>

          <button
            onClick={() => onNavigate('destinations')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#881337] hover:text-[#B45309] transition-colors cursor-pointer group"
          >
            <span>View All 10 Destinations</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDestinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onSelect={onSelectDestination}
            />
          ))}
        </div>
      </section>

      {/* POPULAR TRAVEL EXPERIENCES SECTION */}
      <section className="bg-[#F5ECE0] py-16 border-y border-[#E5D5C2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
              UNFORGETTABLE MOMENTS
            </span>
            <h2 className="font-royal-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#241A17]">
              Signature Royal Experiences
            </h2>
            <p className="text-sm text-[#665447]">
              Immerse yourself in legendary moments that define a true journey across Rajasthan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelExperiences.slice(0, 3).map((exp) => (
              <div
                key={exp.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E7D6C3] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <ImageWithFallback
                    src={exp.image.url}
                    alt={exp.image.alt}
                    photographer={exp.image.photographer}
                    showCreditBadge={true}
                    className="h-full w-full"
                  />
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-[11px] font-semibold bg-[#881337] text-white rounded-full">
                    {exp.tag}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-medium text-[#B45309] block mb-1">
                      {exp.location}
                    </span>
                    <h3 className="font-royal-title text-base font-bold text-[#291A14]">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-[#523F35] mt-2 line-clamp-3 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F2E8DC] flex items-center justify-between text-xs text-[#735A48]">
                    <span>
                      <strong>Est. Cost:</strong> {exp.priceIndicator}
                    </span>
                    <span className="font-medium text-[#881337]">{exp.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('destinations')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold bg-[#881337] text-white hover:bg-[#70102D] shadow-sm transition-all cursor-pointer"
            >
              <span>Explore All Royal Experiences</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* RAJASTHAN CULTURE & HERITAGE SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#2D1B13] via-[#3D251A] to-[#1C120C] text-white rounded-3xl overflow-hidden shadow-2xl border border-amber-700/30">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Text description */}
            <div className="p-8 sm:p-12 lg:p-16 space-y-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Living Rajputana Traditions
              </div>

              <h2 className="font-royal-title text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
                Soul of the Desert: Music, Royalty & Courage
              </h2>

              <p className="text-sm sm:text-base text-[#E2D2C2] leading-relaxed">
                Rajasthan’s heritage is not trapped behind velvet ropes in silent museums—it reverberates in the soulful tunes of the Kamaicha played by desert Manganiyars, in the kaleidoscopic colors of Bandhani turbans, and in the timeless hospitality of "Padharo Mhare Des" (Welcome to My Land).
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <h4 className="font-semibold text-sm text-amber-300 mb-1">Mewar & Marwar</h4>
                  <p className="text-xs text-[#C8B8A9]">A legacy of unyielding Rajput sovereignty and martial courage.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <h4 className="font-semibold text-sm text-amber-300 mb-1">Artisan Crafts</h4>
                  <p className="text-xs text-[#C8B8A9]">Hand block printing, blue pottery, and filigree stone jharokhas.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('blog-detail', 'rajasthan-royal-forts-palaces-history')}
                  className="px-6 py-3 rounded-xl text-xs font-semibold bg-[#B45309] hover:bg-[#D97706] text-white transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Heritage History</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Real Photograph with Attribution */}
            <div className="relative min-h-[300px] lg:min-h-full">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80"
                alt="Rajasthani folk dancers performing in traditional mirrorwork costumes"
                photographer="Debashis Biswas"
                caption="Traditional Rajasthani folk artists performing cultural dance."
                showCreditBadge={true}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LATEST TRAVEL BLOGS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
              TRAVEL ESSAYS & RESEARCH
            </span>
            <h2 className="font-royal-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#241A17]">
              Latest Travel Guides
            </h2>
            <p className="text-sm text-[#665447] max-w-xl">
              Authentic travel itineraries, culinary journeys, and practical budget advice written by cultural explorers.
            </p>
          </div>

          <button
            onClick={() => onNavigate('blogs')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#881337] hover:text-[#B45309] transition-colors cursor-pointer group"
          >
            <span>Read All 10 Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onSelect={onSelectBlog}
            />
          ))}
        </div>
      </section>

      {/* TRIP PLANNER & TIPS TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-[#F7EFE4] rounded-2xl p-6 sm:p-10 border border-[#E7D6C3] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#881337] flex items-center justify-center md:justify-start gap-1.5">
              <Shield className="w-4 h-4 text-[#B45309]" />
              Smart Travel Readiness
            </span>
            <h3 className="font-royal-title text-xl sm:text-2xl font-bold text-[#291A14]">
              Planning Your First Journey to Rajasthan?
            </h3>
            <p className="text-xs sm:text-sm text-[#5C483B] max-w-xl">
              Check out our complete Travel Tips guide covering train bookings, weather windows, dress etiquette for temples, and avoiding common market tout scams.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onNavigate('tips')}
              className="px-6 py-3 rounded-xl text-xs font-semibold bg-[#881337] hover:bg-[#70102D] text-white transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Read Travel Tips</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* AEO DIRECT ANSWERS & ESSENTIAL Q&A */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <AEOSection
          title="Direct Rajasthan Travel Answers & High-Intent Q&A"
          subtitle="Direct, authoritative summaries answering high-volume traveler queries about visiting Rajasthan"
          qaPairs={seoDataMap.home.qaPairs}
        />
      </section>
    </div>
  );
};
