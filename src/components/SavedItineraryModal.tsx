import React, { useEffect } from 'react';
import { X, Bookmark, Trash2, Printer, MapPin, BookOpen, ArrowRight, Share2 } from 'lucide-react';
import { useItinerary } from '../context/ItineraryContext';

interface SavedItineraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToDestination: (slug: string) => void;
  onNavigateToBlog: (slug: string) => void;
}

export const SavedItineraryModal: React.FC<SavedItineraryModalProps> = ({
  isOpen,
  onClose,
  onNavigateToDestination,
  onNavigateToBlog
}) => {
  const { savedItems, removeItem, clearAll } = useItinerary();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const destinations = savedItems.filter((i) => i.type === 'destination');
  const blogs = savedItems.filter((i) => i.type === 'blog');

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#FCF9F2] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#DCCBB5] overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E7D6C3] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#881337] text-white flex items-center justify-center">
              <Bookmark className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-royal-title text-base sm:text-lg font-bold text-[#291A14]">
                My Saved Royal Itinerary
              </h3>
              <p className="text-xs text-[#7A6759]">
                {savedItems.length} {savedItems.length === 1 ? 'place/article' : 'places & articles'} bookmarked
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {savedItems.length > 0 && (
              <button
                onClick={handlePrint}
                className="p-2 text-xs font-semibold text-[#881337] hover:bg-[#F2E8DC] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Print Itinerary"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-[#8A796C] hover:text-[#881337] rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content list */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {savedItems.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Bookmark className="w-12 h-12 mx-auto text-[#B45309] opacity-40" />
              <div>
                <p className="font-royal-title text-base font-bold text-[#291A14]">
                  Your Royal Itinerary is Empty
                </p>
                <p className="text-xs text-[#7A6759] max-w-sm mx-auto mt-1 leading-relaxed">
                  Click the bookmark icon on any destination card or travel guide to save places and build your customized royal Rajasthan journey.
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Saved Destinations */}
              {destinations.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#881337] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> Bookmarked Destinations ({destinations.length})
                  </h4>
                  <div className="space-y-2">
                    {destinations.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 bg-white rounded-xl border border-[#E7D6C3] flex items-center justify-between gap-3 shadow-xs hover:border-[#B45309] transition-colors"
                      >
                        <div
                          className="flex items-center gap-3 flex-1 cursor-pointer"
                          onClick={() => {
                            onNavigateToDestination(item.slug);
                            onClose();
                          }}
                        >
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <h5 className="text-sm font-semibold text-[#291A14] hover:text-[#881337]">
                              {item.title}
                            </h5>
                            <p className="text-xs text-[#7A6759]">{item.subtitle}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              onNavigateToDestination(item.slug);
                              onClose();
                            }}
                            className="p-1.5 text-xs text-[#881337] hover:bg-[#F2E8DC] rounded-md transition-colors"
                            title="View Destination"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1.5 text-xs text-rose-700 hover:bg-rose-50 rounded-md transition-colors"
                            title="Remove from itinerary"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Saved Articles */}
              {blogs.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#881337] flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" /> Bookmarked Travel Guides ({blogs.length})
                  </h4>
                  <div className="space-y-2">
                    {blogs.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 bg-white rounded-xl border border-[#E7D6C3] flex items-center justify-between gap-3 shadow-xs hover:border-[#B45309] transition-colors"
                      >
                        <div
                          className="flex items-center gap-3 flex-1 cursor-pointer"
                          onClick={() => {
                            onNavigateToBlog(item.slug);
                            onClose();
                          }}
                        >
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <h5 className="text-sm font-semibold text-[#291A14] hover:text-[#881337] line-clamp-1">
                              {item.title}
                            </h5>
                            <p className="text-xs text-[#7A6759]">{item.subtitle}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              onNavigateToBlog(item.slug);
                              onClose();
                            }}
                            className="p-1.5 text-xs text-[#881337] hover:bg-[#F2E8DC] rounded-md transition-colors"
                            title="Read Blog"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1.5 text-xs text-rose-700 hover:bg-rose-50 rounded-md transition-colors"
                            title="Remove bookmark"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer actions */}
        {savedItems.length > 0 && (
          <div className="p-4 bg-[#F5ECE0] border-t border-[#E5D5C2] flex items-center justify-between">
            <button
              onClick={clearAll}
              className="text-xs text-rose-800 hover:text-rose-950 font-semibold cursor-pointer"
            >
              Clear All Items
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold bg-[#881337] text-white rounded-xl hover:bg-[#70102D] cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
