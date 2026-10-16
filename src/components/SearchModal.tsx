import React, { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin, BookOpen, Compass, ArrowRight, ShieldCheck } from 'lucide-react';
import { destinationsData } from '../data/destinations';
import { blogsData } from '../data/blogs';
import { travelTipsData } from '../data/tips';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDestination: (slug: string) => void;
  onSelectBlog: (slug: string) => void;
  onSelectTip: (tipId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDestination,
  onSelectBlog,
  onSelectTip
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  // Filter destinations
  const matchedDestinations = cleanQuery
    ? destinationsData.filter(
        (d) =>
          d.name.toLowerCase().includes(cleanQuery) ||
          d.title.toLowerCase().includes(cleanQuery) ||
          d.shortDescription.toLowerCase().includes(cleanQuery) ||
          d.topAttractions.some((a) => a.name.toLowerCase().includes(cleanQuery))
      )
    : [];

  // Filter blogs
  const matchedBlogs = cleanQuery
    ? blogsData.filter(
        (b) =>
          b.title.toLowerCase().includes(cleanQuery) ||
          b.tags.some((t) => t.toLowerCase().includes(cleanQuery)) ||
          b.category.toLowerCase().includes(cleanQuery) ||
          b.introduction.toLowerCase().includes(cleanQuery)
      )
    : [];

  // Filter travel tips
  const matchedTips = cleanQuery
    ? travelTipsData.filter(
        (t) =>
          t.title.toLowerCase().includes(cleanQuery) ||
          t.summary.toLowerCase().includes(cleanQuery) ||
          t.keyPoints.some((k) => k.toLowerCase().includes(cleanQuery))
      )
    : [];

  const totalResults = matchedDestinations.length + matchedBlogs.length + matchedTips.length;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6 pt-16 sm:pt-20 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#FCF9F2] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#DCCBB5] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E7D6C3] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#881337] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search palaces, Thar desert, Jaipur, food, tips, or blogs..."
            className="flex-1 text-sm sm:text-base text-[#291A14] placeholder-[#8A796C] focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#8A796C] hover:text-[#291A14] px-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-[#8A796C] hover:text-[#881337] transition-colors rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {!cleanQuery ? (
            <div className="space-y-4 text-center py-8">
              <Compass className="w-10 h-10 mx-auto text-[#B45309] opacity-60" />
              <div>
                <p className="text-sm font-semibold text-[#291A14]">
                  Search Rajasthan’s Royal Treasures
                </p>
                <p className="text-xs text-[#7A6759] mt-1">
                  Try searching for "Hawa Mahal", "Lake Pichola", "Dal Baati", "Budget", or "Jaisalmer"
                </p>
              </div>

              {/* Quick Suggestion Pills */}
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Jaipur', 'Udaipur', 'Thar Desert', 'Mehrangarh', 'Pushkar Fair', 'Laal Maas'].map(
                  (suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setQuery(suggestion)}
                      className="px-3 py-1 text-xs rounded-full bg-[#F2E8DC] text-[#70102D] hover:bg-[#881337] hover:text-white transition-colors cursor-pointer"
                    >
                      {suggestion}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-10 space-y-2">
              <p className="text-sm font-semibold text-[#291A14]">No royal matches found</p>
              <p className="text-xs text-[#7A6759]">
                We couldn’t find anything matching "{query}". Try checking your spelling or searching for a broader term.
              </p>
            </div>
          ) : (
            <>
              {/* Matched Destinations */}
              {matchedDestinations.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#881337] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> Destinations ({matchedDestinations.length})
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedDestinations.map((dest) => (
                      <button
                        key={dest.id}
                        onClick={() => {
                          onSelectDestination(dest.slug);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-white hover:bg-[#F7EFE4] border border-[#E7D6C3] flex items-center justify-between transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={dest.image.url}
                            alt={dest.name}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="text-sm font-semibold text-[#291A14] group-hover:text-[#881337]">
                              {dest.name}
                            </h4>
                            <p className="text-xs text-[#6B5749] line-clamp-1">{dest.title}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#B45309] group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Blogs */}
              {matchedBlogs.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#881337] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" /> Travel Guides ({matchedBlogs.length})
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedBlogs.map((blog) => (
                      <button
                        key={blog.id}
                        onClick={() => {
                          onSelectBlog(blog.slug);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-white hover:bg-[#F7EFE4] border border-[#E7D6C3] flex items-center justify-between transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={blog.featuredImage.url}
                            alt={blog.title}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div className="flex-1 pr-2">
                            <span className="text-[10px] text-[#B45309] font-bold uppercase">
                              {blog.category}
                            </span>
                            <h4 className="text-xs font-semibold text-[#291A14] group-hover:text-[#881337] line-clamp-1">
                              {blog.title}
                            </h4>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#B45309] group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Tips */}
              {matchedTips.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#881337] flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" /> Travel Advice & Tips ({matchedTips.length})
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedTips.map((tip) => (
                      <button
                        key={tip.id}
                        onClick={() => {
                          onSelectTip(tip.id);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-white hover:bg-[#F7EFE4] border border-[#E7D6C3] flex items-center justify-between transition-colors group cursor-pointer"
                      >
                        <div>
                          <h4 className="text-xs font-semibold text-[#291A14] group-hover:text-[#881337]">
                            {tip.title}
                          </h4>
                          <p className="text-xs text-[#6B5749] line-clamp-1">{tip.summary}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#B45309] group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
