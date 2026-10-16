import React from 'react';
import { Calendar, Clock, Bookmark, ArrowRight, MapPin } from 'lucide-react';
import { Destination } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { useItinerary } from '../context/ItineraryContext';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (dest: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onSelect }) => {
  const { isItemSaved, saveItem, removeItem } = useItinerary();
  const saved = isItemSaved(destination.id);

  const handleToggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
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
    <div
      onClick={() => onSelect(destination)}
      className="group bg-white rounded-2xl overflow-hidden border border-[#EADBCC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
    >
      {/* Real Photograph with Photographer Badge */}
      <div className="relative h-60 w-full overflow-hidden">
        <ImageWithFallback
          src={destination.image.url}
          alt={destination.image.alt}
          photographer={destination.image.photographer}
          showCreditBadge={true}
          className="h-full w-full"
        />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10 flex gap-1.5 flex-wrap">
          {destination.categories.map((cat) => (
            <span
              key={cat}
              className="px-2.5 py-1 text-[11px] font-semibold bg-[#881337]/90 backdrop-blur-md text-white rounded-full shadow-sm"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Bookmark Button */}
        <button
          onClick={handleToggleBookmark}
          aria-label={saved ? 'Remove from Saved Itinerary' : 'Save to Itinerary'}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all shadow-md ${
            saved
              ? 'bg-[#B45309] text-white hover:bg-[#92400E]'
              : 'bg-white/80 text-[#5C4535] hover:bg-white hover:text-[#881337]'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
        </button>

        {/* Subtle gradient vignette at bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="flex items-center gap-1 text-xs text-amber-300 font-medium mb-0.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Rajasthan, India</span>
          </div>
          <h3 className="font-royal-title text-xl font-bold tracking-wide text-white drop-shadow-sm">
            {destination.name}
          </h3>
          <p className="text-xs text-amber-100 font-medium">{destination.title}</p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-sm text-[#4E3D33] line-clamp-2 leading-relaxed">
          {destination.shortDescription}
        </p>

        {/* Meta badges */}
        <div className="space-y-2 pt-2 border-t border-[#F2E8DC] text-xs text-[#6B5749]">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#B45309] shrink-0" />
            <span className="truncate">
              <strong className="text-[#362720]">Best Time:</strong> {destination.bestTimeToVisit.split('(')[0]}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#B45309] shrink-0" />
            <span>
              <strong className="text-[#362720]">Ideal Stay:</strong> {destination.recommendedDuration}
            </span>
          </div>
        </div>

        {/* Action button */}
        <div className="pt-2">
          <button
            onClick={() => onSelect(destination)}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#F7EFE4] text-[#881337] group-hover:bg-[#881337] group-hover:text-white transition-colors duration-200"
          >
            <span>Explore Destination</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
