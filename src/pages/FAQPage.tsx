import React, { useState } from 'react';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Filter,
  Compass,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { faqsData, FAQItem } from '../data/faqs';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { seoDataMap } from '../data/seoData';

interface FAQPageProps {
  onNavigate?: (page: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-best-time': true,
    'faq-trip-duration': true
  });

  const categories = [
    'All',
    'Trip Planning & Timing',
    'Monuments & Permits',
    'Wildlife & Safaris',
    'Transport & Roads',
    'Culture & Etiquette',
    'Budget & Food Safety'
  ];

  const filteredFaqs = faqsData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.detailedContext && item.detailedContext.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    filteredFaqs.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  // Structured Data Schema for FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsData.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${f.answer} ${f.detailedContext || ''}`.trim()
      }
    }))
  };

  return (
    <div className="pt-24 pb-20 space-y-12">
      <SEOHead
        title={seoDataMap.faq.title}
        description={seoDataMap.faq.metaDescription}
        canonicalPath="/faq"
        schema={faqSchema}
      />

      {/* Breadcrumbs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: 'Frequently Asked Questions', isCurrent: true }]}
          onNavigate={(page) => onNavigate && onNavigate(page)}
        />
      </div>

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2D1B13] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-amber-900/40">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-amber-300 border border-amber-400/20">
              <Sparkles className="w-3.5 h-3.5" />
              Verified Answers & Essential Knowledge
            </span>
            <h1 className="font-royal-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
              Rajasthan Tourism FAQ & Essential Guidance
            </h1>
            <p className="text-sm sm:text-base text-[#E2D2C2] leading-relaxed">
              Find authoritative, field-tested answers to the most common questions about planning, visiting, budgeting, and enjoying the royal heritage of Rajasthan, India.
            </p>
          </div>

          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* Search and Filters Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#E7D6C3] shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#7A6759] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions (e.g., permits, best time, tigers, trains)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF6F0] border border-[#EADBCC] rounded-xl text-xs sm:text-sm text-[#241A17] placeholder-[#8A796C] focus:outline-none focus:border-[#881337]"
              />
            </div>

            {/* Quick Actions: Expand/Collapse */}
            <div className="flex items-center gap-2 self-end md:self-auto text-xs">
              <button
                onClick={expandAll}
                className="px-3 py-1.5 rounded-lg border border-[#E2D4C3] bg-[#FCF9F2] text-[#634F41] hover:bg-[#F2ECE1] transition-colors cursor-pointer font-medium"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-3 py-1.5 rounded-lg border border-[#E2D4C3] bg-[#FCF9F2] text-[#634F41] hover:bg-[#F2ECE1] transition-colors cursor-pointer font-medium"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-[#F2ECE1]">
            <Filter className="w-3.5 h-3.5 text-[#B45309] shrink-0" />
            <span className="text-xs font-semibold text-[#7A6759] shrink-0 mr-1">Categories:</span>
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

      {/* FAQ Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center justify-between text-xs text-[#7A6759] px-1 pb-2">
          <span>Showing {filteredFaqs.length} verified answers</span>
          {selectedCategory !== 'All' && <span>Category: <strong>{selectedCategory}</strong></span>}
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E7D6C3] p-8 space-y-3">
            <HelpCircle className="w-12 h-12 text-[#D97706] mx-auto opacity-70" />
            <h3 className="font-royal-title text-lg font-bold text-[#241A17]">No Matching Questions Found</h3>
            <p className="text-xs text-[#7A6759] max-w-md mx-auto">
              We couldn't find an answer matching "{searchQuery}". You can submit your question directly to our travel team on the Contact page.
            </p>
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="mt-2 px-5 py-2 rounded-xl text-xs font-semibold bg-[#881337] text-white hover:bg-[#70102D] transition-colors cursor-pointer"
            >
              Ask Travel Researchers
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <article
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#EADBCC] shadow-sm overflow-hidden transition-all duration-200 hover:border-[#D4BCA4]"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1.5 flex-1 pr-2">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#B45309] bg-[#FEF3C7] px-2 py-0.5 rounded">
                        {faq.category}
                      </span>
                      {/* Question heading semantic H2 */}
                      <h2 className="font-royal-title text-base sm:text-lg font-bold text-[#241A17] hover:text-[#881337] transition-colors leading-snug">
                        {faq.question}
                      </h2>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#FAF5EE] border border-[#E8DEC8] flex items-center justify-center shrink-0 text-[#881337] mt-1">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#F5ECE0] space-y-3 bg-[#FCFBF8]">
                      {/* Direct concise 40-80 word answer */}
                      <div className="pl-4 border-l-2 border-[#881337]">
                        <p className="text-sm text-[#291A14] font-medium leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>

                      {faq.detailedContext && (
                        <p className="text-xs text-[#6B5749] leading-relaxed pl-4 pt-1">
                          {faq.detailedContext}
                        </p>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF3E8] p-6 sm:p-8 rounded-3xl border border-[#EADBCC] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#881337] flex items-center justify-center sm:justify-start gap-1.5">
              <MessageSquare className="w-4 h-4 text-[#B45309]" />
              Need Specific Help?
            </span>
            <h3 className="font-royal-title text-xl font-bold text-[#241A17]">
              Have a Question About Your Upcoming Trip?
            </h3>
            <p className="text-xs sm:text-sm text-[#665447] max-w-lg">
              Our editorial researchers and regional guides are happy to assist with custom itineraries, accessibility details, and transport options.
            </p>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="px-6 py-3 rounded-xl text-xs font-semibold bg-[#881337] hover:bg-[#70102D] text-white transition-colors cursor-pointer flex items-center gap-2 shrink-0 shadow-md"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
