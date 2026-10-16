import React, { useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Plane, Train, Car, Utensils, Sparkles, Bookmark, Compass, CheckCircle2 } from 'lucide-react';
import { Destination } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { useItinerary } from '../context/ItineraryContext';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onNavigateToBlog?: (slug: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onNavigateToBlog
}) => {
  const { isItemSaved, saveItem, removeItem } = useItinerary();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (destination) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [destination, onClose]);

  if (!destination) return null;

  const saved = isItemSaved(destination.id);

  const handleToggleBookmark = () => {
    if (saved) {
      removeItem(destination.id);
    } else {
      saveItem({
        id: destination.id,
        type: 'destination',
        title: destination.name,
        subtitle: destination.title,
        slug: destination.slug,
        imageUrl: destination.image.url
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-[#FCF9F2] w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-[#DCCBB5] my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Close Bar */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={handleToggleBookmark}
            aria-label={saved ? 'Remove from Itinerary' : 'Save to Itinerary'}
            className={`p-2.5 rounded-full shadow-lg backdrop-blur-md transition-all ${
              saved
                ? 'bg-[#B45309] text-white hover:bg-[#92400E]'
                : 'bg-white/90 text-[#362720] hover:bg-white hover:text-[#881337]'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2.5 rounded-full bg-white/90 text-[#362720] hover:bg-white hover:text-[#881337] shadow-lg backdrop-blur-md transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto flex-1">
          {/* Hero Banner with Authentic Photo */}
          <div className="relative h-72 sm:h-96 w-full">
            <ImageWithFallback
              src={destination.image.url}
              alt={destination.image.alt}
              photographer={destination.image.photographer}
              showCreditBadge={true}
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C120C]/90 via-[#1C120C]/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                {destination.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 text-xs font-semibold bg-[#881337] rounded-full shadow-sm text-white"
                  >
                    {cat}
                  </span>
                ))}
                <span className="text-xs text-amber-200 flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-500/20">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Rajasthan, India
                </span>
              </div>

              <h1 className="font-royal-title text-3xl sm:text-4xl font-bold tracking-wide text-white">
                {destination.name}
              </h1>
              <p className="text-base sm:text-lg text-amber-200 font-medium">
                {destination.title}
              </p>
            </div>
          </div>

          {/* Quick Info Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-[#F5ECE0] border-b border-[#E5D5C2]">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#881337] mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs font-bold uppercase text-[#735A48] tracking-wider">
                  Best Time to Visit
                </span>
                <span className="text-sm font-semibold text-[#291A14]">
                  {destination.bestTimeToVisit}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#881337] mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs font-bold uppercase text-[#735A48] tracking-wider">
                  Recommended Duration
                </span>
                <span className="text-sm font-semibold text-[#291A14]">
                  {destination.recommendedDuration}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:col-span-2 md:col-span-1">
              <Utensils className="w-5 h-5 text-[#881337] mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs font-bold uppercase text-[#735A48] tracking-wider">
                  Signature Delicacy
                </span>
                <span className="text-sm font-semibold text-[#291A14]">
                  {destination.localDelicacy}
                </span>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Overview */}
            <div className="space-y-3">
              <h2 className="font-royal-title text-xl font-bold text-[#881337] flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#B45309]" />
                Historical & Cultural Overview
              </h2>
              <p className="text-[#3F2E25] text-base leading-relaxed">
                {destination.fullOverview}
              </p>
            </div>

            {/* Top Attractions with timings & entry fees */}
            <div className="space-y-4">
              <h2 className="font-royal-title text-xl font-bold text-[#881337] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#B45309]" />
                Key Attractions & Monuments
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.topAttractions.map((attraction, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#E7D6C3] shadow-sm space-y-2 hover:border-[#B45309] transition-colors"
                  >
                    <h3 className="font-semibold text-base text-[#291A14]">
                      {attraction.name}
                    </h3>
                    <p className="text-xs text-[#523F35] leading-relaxed">
                      {attraction.description}
                    </p>
                    {(attraction.timings || attraction.estimatedEntry) && (
                      <div className="pt-2 text-[11px] text-[#735A48] border-t border-[#F2E8DC] space-y-1">
                        {attraction.timings && (
                          <p>
                            <strong>Hours:</strong> {attraction.timings}
                          </p>
                        )}
                        {attraction.estimatedEntry && (
                          <p>
                            <strong>Est. Entry:</strong> {attraction.estimatedEntry}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Cultural Highlights */}
            <div className="space-y-3">
              <h2 className="font-royal-title text-xl font-bold text-[#881337]">
                Cultural Traditions & Experiences
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {destination.culturalHighlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-[#3E2D24] bg-[#F7EFE4] p-3 rounded-xl border border-[#EADECE]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Reach Connectivity */}
            <div className="space-y-3 bg-white p-5 rounded-2xl border border-[#E7D6C3]">
              <h2 className="font-royal-title text-lg font-bold text-[#881337]">
                Transport & Getting There
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#48372D]">
                <div className="flex gap-2.5">
                  <Plane className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#291A14] font-semibold mb-0.5">By Air</strong>
                    <p>{destination.howToReach.air}</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <Train className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#291A14] font-semibold mb-0.5">By Train</strong>
                    <p>{destination.howToReach.rail}</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <Car className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#291A14] font-semibold mb-0.5">By Road</strong>
                    <p>{destination.howToReach.road}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Insider Tip Callout */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FEF3C7] to-[#FDE68A] border-l-4 border-[#B45309] text-[#78350F] flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold text-sm mb-0.5">Local Explorer’s Insider Tip</strong>
                <p className="text-xs leading-relaxed">{destination.insiderTip}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 sm:p-5 bg-[#F5ECE0] border-t border-[#E5D5C2] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleToggleBookmark}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-colors cursor-pointer ${
              saved
                ? 'bg-[#B45309] text-white hover:bg-[#92400E]'
                : 'bg-white text-[#881337] border border-[#D5C2AF] hover:bg-[#F2E8DC]'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
            <span>{saved ? 'Saved in Itinerary' : 'Save to Itinerary'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold bg-[#881337] hover:bg-[#70102D] text-white rounded-xl transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
