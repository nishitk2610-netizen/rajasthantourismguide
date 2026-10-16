import React from 'react';
import { Clock, Calendar, Bookmark, ArrowRight, User } from 'lucide-react';
import { BlogArticle } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { useItinerary } from '../context/ItineraryContext';

interface BlogCardProps {
  blog: BlogArticle;
  onSelect: (blog: BlogArticle) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog, onSelect }) => {
  const { isItemSaved, saveItem, removeItem } = useItinerary();
  const saved = isItemSaved(blog.id);

  const handleToggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (saved) {
      removeItem(blog.id);
    } else {
      saveItem({
        id: blog.id,
        type: 'blog',
        title: blog.title,
        subtitle: `${blog.category} • ${blog.readingTime}`,
        slug: blog.slug,
        imageUrl: blog.featuredImage.url
      });
    }
  };

  return (
    <article
      onClick={() => onSelect(blog)}
      className="group bg-white rounded-2xl overflow-hidden border border-[#EADBCC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
    >
      {/* Featured Real Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <ImageWithFallback
          src={blog.featuredImage.url}
          alt={blog.featuredImage.alt}
          photographer={blog.featuredImage.photographer}
          showCreditBadge={true}
          className="h-full w-full"
        />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 text-[11px] font-semibold bg-[#881337]/90 backdrop-blur-md text-white rounded-full shadow-sm">
            {blog.category}
          </span>
        </div>

        {/* Bookmark Button */}
        <button
          onClick={handleToggleBookmark}
          aria-label={saved ? 'Remove bookmark' : 'Bookmark article'}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all shadow-md ${
            saved
              ? 'bg-[#B45309] text-white hover:bg-[#92400E]'
              : 'bg-white/80 text-[#5C4535] hover:bg-white hover:text-[#881337]'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
        </button>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Meta Bar */}
        <div className="flex items-center gap-3 text-[11px] text-[#786354]">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#B45309]" />
            {blog.publishedDate}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#B45309]" />
            {blog.readingTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-royal-title text-base sm:text-lg font-bold text-[#2A1B14] group-hover:text-[#881337] transition-colors leading-snug line-clamp-2">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-[#544337] line-clamp-3 leading-relaxed">
          {blog.introduction}
        </p>

        {/* Footer info: Author and CTA */}
        <div className="pt-3 border-t border-[#F2E8DC] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-6 h-6 rounded-full object-cover border border-[#D9C8B5]"
            />
            <span className="text-[#3E2E25] font-medium text-[11px] truncate max-w-[120px]">
              {blog.author.name}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 font-semibold text-[#881337] group-hover:translate-x-1 transition-transform">
            Read Guide <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </article>
  );
};
