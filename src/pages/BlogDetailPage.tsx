import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Bookmark,
  Share2,
  Check,
  Compass,
  Sparkles,
  ShieldAlert,
  Info,
  BookOpen,
  ArrowRight,
  User,
  Quote
} from 'lucide-react';
import { BlogArticle } from '../types';
import { blogsData } from '../data/blogs';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AEOSection } from '../components/AEOSection';
import { useItinerary } from '../context/ItineraryContext';

interface BlogDetailPageProps {
  blog: BlogArticle;
  onBack: () => void;
  onSelectBlog: (blog: BlogArticle) => void;
  onNavigate?: (page: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  blog,
  onBack,
  onSelectBlog,
  onNavigate
}) => {
  const { isItemSaved, saveItem, removeItem } = useItinerary();
  const saved = isItemSaved(blog.id);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleToggleBookmark = () => {
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

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 3000);
  };

  // Find related articles
  const relatedArticles = blogsData.filter(
    (b) => b.id !== blog.id && (blog.relatedSlugs.includes(b.slug) || b.category === blog.category)
  ).slice(0, 3);

  // Article structured data schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.metaDescription,
    image: [blog.featuredImage.url],
    datePublished: blog.publishedDate,
    dateModified: blog.publishedDate,
    author: {
      '@type': 'Person',
      name: blog.author.name,
      jobTitle: blog.author.role
    },
    publisher: {
      '@type': 'Organization',
      name: 'Explore Rajasthan',
      logo: {
        '@type': 'ImageObject',
        url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=400&q=80'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://explore-rajasthan.guide/#blog/${blog.slug}`
    },
    keywords: blog.tags.join(', '),
    articleSection: blog.category,
    wordCount: blog.wordCount
  };

  return (
    <article className="pt-24 pb-20 space-y-10">
      <SEOHead
        title={`${blog.title} | Explore Rajasthan`}
        description={blog.metaDescription}
        canonicalPath={`/blog/${blog.slug}`}
        ogImage={blog.featuredImage.url}
        schema={articleSchema}
      />

      {/* Breadcrumbs Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Travel Blogs', href: 'blogs' },
            { label: blog.title, isCurrent: true }
          ]}
          onNavigate={(page) => {
            if (page === 'blogs') {
              onBack();
            } else if (onNavigate) {
              onNavigate(page);
            }
          }}
        />
      </div>

      {/* Top Navigation & Share Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 border-b border-[#E7D6C3] text-xs">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 font-semibold text-[#881337] hover:text-[#B45309] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Travel Blogs</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleBookmark}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                saved
                  ? 'bg-[#B45309] text-white'
                  : 'bg-[#F5ECE0] text-[#735A48] hover:bg-[#EADBCC]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
              <span>{saved ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#F5ECE0] text-[#735A48] hover:bg-[#EADBCC] transition-colors cursor-pointer"
            >
              {copiedShare ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider bg-[#881337] text-white rounded-full">
            {blog.category}
          </span>
          <span className="text-xs text-[#7A6759] flex items-center gap-1 bg-[#F5ECE0] px-3 py-1 rounded-full">
            <Clock className="w-3.5 h-3.5 text-[#B45309]" />
            {blog.readingTime} ({blog.wordCount} words)
          </span>
          <span className="text-xs text-[#7A6759] flex items-center gap-1 bg-[#F5ECE0] px-3 py-1 rounded-full">
            <Calendar className="w-3.5 h-3.5 text-[#B45309]" />
            {blog.publishedDate}
          </span>
        </div>

        <h1 className="font-royal-title text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#241A17] leading-tight tracking-tight">
          {blog.title}
        </h1>

        {/* Author Bio Box */}
        <div className="flex items-center gap-3 pt-2">
          <img
            src={blog.author.avatar}
            alt={blog.author.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-[#B45309]"
          />
          <div>
            <h3 className="font-semibold text-sm text-[#241A17]">{blog.author.name}</h3>
            <p className="text-xs text-[#735A48]">{blog.author.role}</p>
          </div>
        </div>

        {/* Real Featured Photograph */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E7D6C3] aspect-video">
          <ImageWithFallback
            src={blog.featuredImage.url}
            alt={blog.featuredImage.alt}
            photographer={blog.featuredImage.photographer}
            sourceUrl={blog.featuredImage.sourceUrl}
            caption={blog.featuredImage.caption}
            showCreditBadge={true}
            priority={true}
            className="w-full h-full object-cover"
          />
        </div>
        {blog.featuredImage.caption && (
          <p className="text-xs text-[#6B5749] italic border-l-2 border-[#B45309] pl-3 py-0.5">
            {blog.featuredImage.caption} (Photo: {blog.featuredImage.photographer})
          </p>
        )}
      </header>

      {/* Main Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Table of Contents */}
        <div className="p-5 rounded-2xl bg-[#F5ECE0] border border-[#EADBCC] text-xs space-y-2">
          <span className="font-bold text-[#881337] uppercase tracking-wider block">
            Table of Contents
          </span>
          <ul className="space-y-1.5 pl-4 list-decimal text-[#523F35]">
            {blog.sections.map((sec, idx) => (
              <li key={idx} className="hover:text-[#881337] transition-colors">
                <a href={`#section-${idx}`} className="font-medium">
                  {sec.heading}
                </a>
              </li>
            ))}
            <li>
              <a href="#practical-guide" className="font-medium">
                Practical Travel Planning Guide
              </a>
            </li>
            <li>
              <a href="#direct-qa" className="font-medium">
                Verified Direct Answers & Q&A
              </a>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section className="text-base sm:text-lg leading-relaxed text-[#3D2C23] font-serif border-b border-[#E7D6C3] pb-6">
          <p>{blog.introduction}</p>
        </section>

        {/* Content Sections */}
        {blog.sections.map((section, idx) => (
          <section key={idx} id={`section-${idx}`} className="space-y-4 pt-4">
            <h2 className="font-royal-title text-xl sm:text-2xl font-bold text-[#241A17] pt-2 border-l-4 border-[#881337] pl-3">
              {section.heading}
            </h2>

            {section.subheading && (
              <h3 className="font-semibold text-sm sm:text-base text-[#881337] italic">
                {section.subheading}
              </h3>
            )}

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#3D2C23]">
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* Optional Callout Box */}
            {section.calloutBox && (
              <div
                className={`p-5 rounded-2xl my-4 text-sm leading-relaxed border ${
                  section.calloutBox.type === 'tip'
                    ? 'bg-[#FEF9EE] border-amber-300 text-[#78350F]'
                    : section.calloutBox.type === 'history'
                    ? 'bg-[#F5F2EB] border-[#D4C3AF] text-[#4A392D]'
                    : section.calloutBox.type === 'caution'
                    ? 'bg-rose-50 border-rose-200 text-rose-900'
                    : 'bg-[#F2ECE1] border-[#C8B6A2] text-[#3D2C23]'
                }`}
              >
                <div className="flex items-center gap-2 font-bold mb-1">
                  {section.calloutBox.type === 'tip' && <Sparkles className="w-4 h-4 text-amber-600" />}
                  {section.calloutBox.type === 'history' && <Compass className="w-4 h-4 text-[#881337]" />}
                  {section.calloutBox.type === 'caution' && <ShieldAlert className="w-4 h-4 text-rose-600" />}
                  <span>{section.calloutBox.title}</span>
                </div>
                <p className="text-xs sm:text-sm">{section.calloutBox.content}</p>
              </div>
            )}

            {/* Inline Image */}
            {section.inlineImage && (
              <div className="my-6 rounded-2xl overflow-hidden border border-[#E7D6C3] shadow-sm">
                <div className="relative h-64 sm:h-80 w-full">
                  <ImageWithFallback
                    src={section.inlineImage.url}
                    alt={section.inlineImage.alt}
                    photographer={section.inlineImage.photographer}
                    caption={section.inlineImage.caption}
                    showCreditBadge={true}
                    className="h-full w-full object-cover"
                  />
                </div>
                {section.inlineImage.caption && (
                  <div className="p-2.5 bg-[#F5ECE0] text-[11px] text-[#6B5749] flex justify-between">
                    <span>{section.inlineImage.caption}</span>
                    <span className="font-medium text-[#B45309]">
                      Photo: {section.inlineImage.photographer}
                    </span>
                  </div>
                )}
              </div>
            )}
          </section>
        ))}

        {/* Practical Travel Guide Summary Box */}
        <div id="practical-guide" className="p-6 sm:p-8 rounded-3xl bg-[#F7EFE4] border-2 border-[#E0CEB7] shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#881337]">
            <Compass className="w-4 h-4 text-[#B45309]" />
            Practical Travel Planning Summary
          </div>
          <h3 className="font-royal-title text-xl font-bold text-[#241A17]">
            Key Takeaways for Your Itinerary
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-white p-3.5 rounded-xl border border-[#E7D6C3]">
              <strong className="block text-[#881337] mb-0.5">Best Time to Visit</strong>
              <p className="text-[#4D3A2F]">{blog.practicalTravelGuide.bestTimeToVisit}</p>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-[#E7D6C3]">
              <strong className="block text-[#881337] mb-0.5">Ideal Trip Duration</strong>
              <p className="text-[#4D3A2F]">{blog.practicalTravelGuide.idealDuration}</p>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-[#E7D6C3]">
              <strong className="block text-[#881337] mb-0.5">Budget Classification</strong>
              <p className="text-[#4D3A2F]">{blog.practicalTravelGuide.approxBudgetCategory}</p>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-[#E7D6C3]">
              <strong className="block text-[#881337] mb-0.5">Explorer's Top Tip</strong>
              <p className="text-[#4D3A2F]">{blog.practicalTravelGuide.topAdvice}</p>
            </div>
          </div>

          <div className="pt-2">
            <strong className="block text-xs font-semibold text-[#241A17] mb-1.5">
              Essential Items to Pack:
            </strong>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#523F35]">
              {blog.practicalTravelGuide.essentialItemsToPack.map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B45309]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AEO DIRECT ANSWERS & Q&A FOR THIS ARTICLE */}
        {blog.qaSection && blog.qaSection.length > 0 && (
          <div id="direct-qa">
            <AEOSection
              title={`Direct Answers: ${blog.title}`}
              subtitle="Quick, verified answers to top traveler questions addressed in this guide"
              qaPairs={blog.qaSection}
            />
          </div>
        )}

        {/* Conclusion */}
        <section className="space-y-3 pt-4 border-t border-[#E7D6C3]">
          <h2 className="font-royal-title text-xl sm:text-2xl font-bold text-[#881337]">
            Final Thoughts
          </h2>
          <p className="text-base leading-relaxed text-[#3D2C23]">
            {blog.conclusion}
          </p>
        </section>

        {/* Tags */}
        <div className="pt-4 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-[#F2E8DC] text-[#70102D]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Sources and References Section */}
        {blog.sourcesAndReferences && blog.sourcesAndReferences.length > 0 && (
          <div className="p-4 rounded-xl bg-white border border-[#E7D6C3] text-xs text-[#7A6759] space-y-1.5">
            <strong className="block text-[#241A17] uppercase tracking-wider text-[11px] font-bold">
              Historical Sources & Research References:
            </strong>
            <ul className="list-disc pl-4 space-y-1">
              {blog.sourcesAndReferences.map((ref, idx) => (
                <li key={idx}>{ref}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-[#E7D6C3]">
          <h3 className="font-royal-title text-xl sm:text-2xl font-bold text-[#241A17] mb-6">
            Related Travel Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  onSelectBlog(rel);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-2xl overflow-hidden border border-[#E7D6C3] shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <ImageWithFallback
                    src={rel.featuredImage.url}
                    alt={rel.featuredImage.alt}
                    photographer={rel.featuredImage.photographer}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-2 left-2 z-10 px-2 py-0.5 text-[10px] font-bold bg-[#881337] text-white rounded-full">
                    {rel.category}
                  </span>
                </div>
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <h4 className="font-royal-title text-sm font-bold text-[#241A17] group-hover:text-[#881337] line-clamp-2">
                    {rel.title}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#881337]">
                    Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
