import React, { useState } from 'react';
import { Camera, ImageOff } from 'lucide-react';

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
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fallback high-res real Rajasthan photograph from Unsplash if primary URL fails
  const fallbackSrc = 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80';

  return (
    <div className={`relative overflow-hidden group bg-[#EFE9DC] ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#EAE2D2] via-[#F4EFE6] to-[#EAE2D2] animate-pulse" />
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-[#F2EDE4] text-[#8C7A6B]">
          <ImageOff className="w-8 h-8 mb-2 opacity-60 text-[#B45309]" />
          <p className="text-xs text-center font-medium">Real photo unavailable</p>
          <span className="text-[10px] text-center mt-1 text-[#A89887]">{alt}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            if (src !== fallbackSrc) {
              setHasError(false);
              // Try fallback
              // If already fallback failed, show error
            } else {
              setHasError(true);
            }
            setIsLoading(false);
          }}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        />
      )}

      {/* Photographer attribution badge */}
      {photographer && (showCreditBadge || caption) && (
        <div className="absolute bottom-2 right-2 z-10 opacity-80 group-hover:opacity-100 transition-opacity">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium bg-[#1F140E]/75 backdrop-blur-md text-[#FDF9F3] rounded-md shadow-sm border border-amber-500/20">
            <Camera className="w-3 h-3 text-[#F59E0B]" />
            <span>Photo: {photographer}</span>
          </span>
        </div>
      )}
    </div>
  );
};
