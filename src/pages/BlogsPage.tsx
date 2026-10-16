import React, { useState } from 'react';
import { Search, BookOpen, Clock, Calendar, ArrowUpDown, Filter, Sparkles, User } from 'lucide-react';
import { blogsData } from '../data/blogs';
import { BlogCard } from '../components/BlogCard';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AEOSection } from '../components/AEOSection';
import { seoDataMap } from '../data/seoData';
import { BlogArticle, BlogCategory } from '../types';

interface BlogsPageProps {
  onSelectBlog: (blog: BlogArticle) => void;
  onNavigate?: (page: string) => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ onSelectBlog, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'reading-time' | 'word-count'>('newest');

  const categories = ['All', 'City Guides', 'Culture & Food', 'Itineraries', 'Budget & Planning', 'Offbeat'];

  const filteredBlogs = blogsData
    .filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        blog.introduction.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || blog.category === (selectedCategory as BlogCategory);

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      }
      if (sortBy === 'reading-time') {
        const timeA = parseInt(a.readingTime) || 0;
        const timeB = parseInt(b.readingTime) || 0;
        return timeB - timeA;
      }
      if (sortBy === 'word-count') {
        return b.wordCount - a.wordCount;
      }
      return 0;
    });

  const blogsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Rajasthan Travel Blogs & Itineraries',
    description: '10 comprehensive, research-backed travel guides for exploring Rajasthan, India.',
    itemListElement: blogsData.map((b, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Article',
        headline: b.title,
        description: b.metaDescription,
        image: b.featuredImage.url,
        datePublished: b.publishedDate,
        author: {
          '@type': 'Person',
          name: b.author.name
        }
      }
    }))
  };

  return (
    <div className="pt-24 pb-20 space-y-12">
      <SEOHead
        title={seoDataMap.blogs.title}
        description={seoDataMap.blogs.metaDescription}
        canonicalPath="/blog"
        schema={blogsSchema}
      />

      {/* Breadcrumbs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: 'Travel Blogs', isCurrent: true }]}
          onNavigate={(page) => onNavigate && onNavigate(page)}
        />
      </div>

      {/* Editorial Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2D1B13] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-amber-900/40">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-amber-300 border border-amber-400/20">
              <BookOpen className="w-3.5 h-3.5" />
              10 Comprehensive Research Guides • 800+ Words Each
            </span>
            <h1 className="font-royal-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
              The Royal Rajasthan Travel Dispatch
            </h1>
            <p className="text-sm sm:text-base text-[#E2D2C2] leading-relaxed">
              Explore in-depth city walkthroughs, secret stepwells in Bundi, multi-day self-drive itineraries, authentic regional recipes, and honest budget breakdowns written by passionate cultural historians.
            </p>
          </div>

          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* Search, Filter, and Sort Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#E7D6C3] shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#7A6759] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles by title, tags, text..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#FAF6F0] border border-[#EADBCC] rounded-xl text-xs sm:text-sm text-[#241A17] placeholder-[#8A796C] focus:outline-none focus:border-[#881337]"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <ArrowUpDown className="w-4 h-4 text-[#7A6759]" />
              <span className="text-xs text-[#7A6759] font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort articles"
                className="px-3 py-1.5 bg-[#FAF6F0] border border-[#EADBCC] rounded-xl text-xs font-semibold text-[#241A17] focus:outline-none focus:border-[#881337] cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="reading-time">Reading Time</option>
                <option value="word-count">Most Detailed (Word Count)</option>
              </select>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-[#F2ECE1]">
            <Filter className="w-3.5 h-3.5 text-[#B45309] shrink-0" />
            <span className="text-xs font-semibold text-[#7A6759] shrink-0 mr-1">Category:</span>
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

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between text-xs text-[#7A6759] px-1">
          <span>
            Showing <strong className="text-[#291A14]">{filteredBlogs.length}</strong> of 10 Travel Guides
          </span>
          <span className="hidden sm:inline">All guides feature verified real photography and historical sources</span>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E7D6C3] p-8 space-y-3">
            <BookOpen className="w-10 h-10 mx-auto text-[#B45309] opacity-50" />
            <h3 className="font-royal-title text-base font-bold text-[#291A14]">
              No Travel Guides Found
            </h3>
            <p className="text-xs text-[#7A6759]">
              No articles match your search criteria. Try a different search term or reset your category.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onSelect={onSelectBlog}
              />
            ))}
          </div>
        )}
      </section>

      {/* AEO Section for Blogs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AEOSection
          title="Direct Itinerary & Planning Answers"
          subtitle="Direct answers to frequent travel planning questions answered in our guides"
          qaPairs={seoDataMap.blogs.qaPairs}
        />
      </section>
    </div>
  );
};
