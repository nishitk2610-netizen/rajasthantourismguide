import React, { useState } from 'react';
import { Search, BookOpen, Clock, Calendar, ArrowUpDown, Filter, Sparkles, User } from 'lucide-react';
import { blogsData } from '../data/blogs';
import { BlogCard } from '../components/BlogCard';
import { BlogArticle, BlogCategory } from '../types';

interface BlogsPageProps {
  onSelectBlog: (blog: BlogArticle) => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ onSelectBlog }) => {
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

  return (
    <div className="pt-24 pb-20 space-y-12">
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
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E7D6C3] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-[#881337] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides by title, tag, or topic..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#FCF9F2] border border-[#E5D5C2] rounded-xl text-[#291A14] placeholder-[#8A796C] focus:outline-none focus:border-[#881337]"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#881337] text-white shadow-sm'
                    : 'bg-[#F5ECE0] text-[#5C4535] hover:bg-[#EADBCC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full lg:w-auto justify-end">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#B45309]" />
            <span className="text-xs text-[#7A6759] font-medium hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 text-xs bg-[#FCF9F2] border border-[#E5D5C2] rounded-xl text-[#291A14] focus:outline-none focus:border-[#881337] cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="reading-time">Longest Read</option>
              <option value="word-count">Most Detailed (Word Count)</option>
            </select>
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between text-xs text-[#7A6759]">
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
    </div>
  );
};
