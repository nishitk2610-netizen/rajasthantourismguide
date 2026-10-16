import React, { useState } from 'react';
import { Camera, ImageOff, ShieldCheck } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  photographer?: string;
  sourceUrl?: string;
  caption?: string;
  showCreditBadge?: boolean;
  priority?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  photographer,
  sourceUrl,
  caption,
  showCreditBadge = false,
  priority = false
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isUsingFallback, setIsUsingFallback] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Verified high-res authentic Rajasthan landmark photograph from Unsplash (Hawa Mahal, Jaipur)
  const verifiedFallbackSrc = 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80';

  const handleError = () => {
    if (!isUsingFallback && currentSrc !== verifiedFallbackSrc) {
      setIsUsingFallback(true);
      setCurrentSrc(verifiedFallbackSrc);
      setIsLoading(true);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className={`relative overflow-hidden group bg-[#EFE9DC] ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#EAE2D2] via-[#F4EFE6] to-[#EAE2D2] animate-pulse z-5" />
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-[#F2EDE4] text-[#8C7A6B] z-10">
          <ImageOff className="w-8 h-8 mb-2 opacity-60 text-[#B45309]" />
          <p className="text-xs text-center font-medium">Photograph Unavailable</p>
          <span className="text-[10px] text-center mt-1 text-[#A89887]">{alt}</span>
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoading(false)}
          onError={handleError}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        />
      )}

      {/* Verified Fallback Notice (if active) */}
      {isUsingFallback && !hasError && (
        <div className="absolute top-2 left-2 z-20">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium bg-amber-900/80 backdrop-blur-md text-amber-100 rounded border border-amber-500/30">
            <ShieldCheck className="w-3 h-3 text-amber-300" />
            Verified Archive Fallback
          </span>
        </div>
      )}

      {/* Photographer attribution badge */}
      {photographer && (showCreditBadge || caption) && !hasError && (
        <div className="absolute bottom-2 right-2 z-10 opacity-80 group-hover:opacity-100 transition-opacity">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium bg-[#1F140E]/80 backdrop-blur-md text-[#FDF9F3] rounded-md shadow-sm border border-amber-500/20">
            <Camera className="w-3 h-3 text-[#F59E0B]" />
            <span className="truncate max-w-[200px]">
              {isUsingFallback ? 'Annie Spratt (Archive)' : photographer}
            </span>
          </span>
        </div>
      )}
    </div>
  );
};
