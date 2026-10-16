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

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Sun,
  Compass,
  Shirt,
  HeartHandshake,
  ShieldCheck,
  Utensils,
  Camera
};

export const TravelTipsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(travelTipsData[0].id);

  const selectedTip = travelTipsData.find((t) => t.id === activeTab) || travelTipsData[0];
  const IconComponent = iconMap[selectedTip.iconName] || Compass;

  return (
    <div className="pt-24 pb-20 space-y-12">
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#881337] block mb-2 px-1">
              Travel Categories
            </span>
            <div className="space-y-1.5 bg-white p-3 rounded-2xl border border-[#E7D6C3] shadow-sm">
              {travelTipsData.map((tip) => {
                const ItemIcon = iconMap[tip.iconName] || Compass;
                const isActive = activeTab === tip.id;
                return (
                  <button
                    key={tip.id}
                    onClick={() => setActiveTab(tip.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left cursor-pointer ${
                      isActive
                        ? 'bg-[#881337] text-white shadow-sm'
                        : 'text-[#4A3B32] hover:bg-[#F5ECE0]'
                    }`}
                  >
                    <ItemIcon className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-300' : 'text-[#B45309]'}`} />
                    <span className="truncate">{tip.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Emergency Assistance Box */}
            <div className="p-4 rounded-2xl bg-[#F7EFE4] border border-[#E2D2BC] text-xs space-y-2 text-[#4A392D] mt-4">
              <strong className="block text-[#881337] font-bold text-sm">
                Emergency Contact Numbers
              </strong>
              <div className="space-y-1 text-[11px]">
                <p><strong>National Police Helpline:</strong> 112</p>
                <p><strong>Tourist Helpline (Govt of India):</strong> 1363 (Toll Free, Multi-language)</p>
                <p><strong>Medical Emergency / Ambulance:</strong> 108</p>
              </div>
            </div>
          </div>

          {/* Right Active Content Panel */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-[#E7D6C3] shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#F0E4D5]">
              <div className="w-10 h-10 rounded-xl bg-[#881337] text-white flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h2 className="font-royal-title text-xl sm:text-2xl font-bold text-[#241A17]">
                  {selectedTip.title}
                </h2>
                <p className="text-xs text-[#7A6759]">{selectedTip.summary}</p>
              </div>
            </div>

            {/* Key Information Points */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#B45309]">
                Critical Travel Insights
              </h3>
              <div className="space-y-2.5">
                {selectedTip.keyPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FCF9F2] border border-[#EADBCC] text-xs sm:text-sm text-[#3E2D24] leading-relaxed flex items-start gap-2.5"
                  >
                    <Sparkles className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dos and Don'ts Comparison Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Do List */}
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Recommended Dos
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
    </div>
  );
};
