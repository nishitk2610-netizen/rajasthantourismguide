import React, { useState } from 'react';
import {
  Compass,
  Sun,
  Shirt,
  HeartHandshake,
  ShieldCheck,
  Utensils,
  Camera,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertTriangle,
  Sparkles
} from 'lucide-react';
import { travelTipsData } from '../data/tips';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AEOSection } from '../components/AEOSection';
import { seoDataMap } from '../data/seoData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Sun,
  Compass,
  Shirt,
  HeartHandshake,
  ShieldCheck,
  Utensils,
  Camera
};

interface TravelTipsPageProps {
  onNavigate?: (page: string) => void;
}

export const TravelTipsPage: React.FC<TravelTipsPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState(travelTipsData[0].id);

  const selectedTip = travelTipsData.find((t) => t.id === activeTab) || travelTipsData[0];
  const IconComponent = iconMap[selectedTip.iconName] || Compass;

  return (
    <div className="pt-24 pb-20 space-y-12">
      <SEOHead
        title={seoDataMap.tips.title}
        description={seoDataMap.tips.metaDescription}
        canonicalPath="/travel-tips"
      />

      {/* Breadcrumbs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: 'Travel Tips', isCurrent: true }]}
          onNavigate={(page) => onNavigate && onNavigate(page)}
        />
      </div>

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2D1B13] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-amber-900/40">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-amber-300 border border-amber-400/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              Essential Travel Intelligence
            </span>
            <h1 className="font-royal-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
              Rajasthan Travel Advisory & Smart Tips
            </h1>
            <p className="text-sm sm:text-base text-[#E2D2C2] leading-relaxed">
              Ensure a seamless, safe, and culturally respectful journey across the royal state. Master train connectivity, avoid common tourist tout scams, respect heritage etiquette, and pack smartly.
            </p>
          </div>

          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* Main Content Layout with Side Nav */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Navigation Buttons */}
          <div className="lg:col-span-4 space-y-2">
            <div className="p-4 bg-white rounded-2xl border border-[#E7D6C3] shadow-sm mb-4">
              <h2 className="font-royal-title text-sm font-bold text-[#881337] uppercase tracking-wider mb-1">
                7 Essential Travel Dimensions
              </h2>
              <p className="text-xs text-[#7A6759]">
                Select a category to view actionable dos, don'ts, and local advice.
              </p>
            </div>

            <div className="space-y-1.5">
              {travelTipsData.map((tip) => {
                const ItemIcon = iconMap[tip.iconName] || Compass;
                const isActive = tip.id === activeTab;
                return (
                  <button
                    key={tip.id}
                    onClick={() => setActiveTab(tip.id)}
                    className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between cursor-pointer border ${
                      isActive
                        ? 'bg-gradient-to-r from-[#881337] to-[#B45309] text-white shadow-md border-transparent'
                        : 'bg-white text-[#291A14] hover:bg-[#FAF4ED] border-[#E8DEC8]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive ? 'bg-white/20 text-white' : 'bg-[#F5ECE0] text-[#881337]'
                        }`}
                      >
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-xs sm:text-sm line-clamp-1">
                        {tip.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Detailed Tip View */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-[#E7D6C3] shadow-sm space-y-8">
            <div className="border-b border-[#F0E4D5] pb-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
                <IconComponent className="w-4 h-4" />
                <span>Verified Field Advice</span>
              </div>
              <h2 className="font-royal-title text-2xl sm:text-3xl font-bold text-[#241A17]">
                {selectedTip.title}
              </h2>
              <p className="text-sm sm:text-base text-[#4D3A2F] leading-relaxed">
                {selectedTip.summary}
              </p>
            </div>

            {/* Dos and Don'ts Split Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Do List */}
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Recommended Practices (Dos)
                </h4>
                <ul className="space-y-2 text-xs text-emerald-950 leading-relaxed">
                  {selectedTip.dos.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don't List */}
              <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  Things to Avoid (Don'ts)
                </h4>
                <ul className="space-y-2 text-xs text-rose-950 leading-relaxed">
                  {selectedTip.donts.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Section for Travel Tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AEOSection
          title="Direct Practical Answers: Weather & Etiquette"
          subtitle="Direct answers to critical questions about dressing, packing, and visiting seasons"
          qaPairs={seoDataMap.tips.qaPairs}
        />
      </section>
    </div>
  );
};
