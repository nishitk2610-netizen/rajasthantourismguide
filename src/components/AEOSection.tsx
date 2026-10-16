import React from 'react';
import { HelpCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export interface QAPair {
  question: string;
  answer: string;
  additionalDetails?: string;
}

interface AEOSectionProps {
  title?: string;
  subtitle?: string;
  qaPairs: QAPair[];
  className?: string;
}

export const AEOSection: React.FC<AEOSectionProps> = ({
  title = 'Direct Travel Answers & Essential Q&A',
  subtitle = 'Concise, authoritative answers to high-intent questions for this guide',
  qaPairs,
  className = ''
}) => {
  if (!qaPairs || qaPairs.length === 0) return null;

  return (
    <section aria-labelledby="aeo-section-heading" className={`my-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#E7D6C3] shadow-sm space-y-6 ${className}`}>
      <div className="border-b border-[#F0E4D5] pb-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B45309]">
          <Sparkles className="w-3.5 h-3.5" />
          Verified Answers for Travelers
        </span>
        <h2 id="aeo-section-heading" className="font-royal-title text-xl sm:text-2xl font-bold text-[#241A17] mt-1">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs text-[#7A6759] mt-1">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-6">
        {qaPairs.map((pair, idx) => (
          <article key={idx} className="space-y-3 bg-[#FCF9F2] p-5 rounded-2xl border border-[#EADBCC]">
            {/* Question as semantic H2 */}
            <h2 className="font-royal-title text-base sm:text-lg font-bold text-[#881337] flex items-start gap-2.5 leading-snug">
              <HelpCircle className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" />
              <span>{pair.question}</span>
            </h2>

            {/* Direct 40-80 word answer in the first paragraph */}
            <p className="text-sm font-medium text-[#291A14] leading-relaxed pl-7 border-l-2 border-[#881337]">
              {pair.answer}
            </p>

            {/* Additional details */}
            {pair.additionalDetails && (
              <p className="text-xs text-[#6B5749] leading-relaxed pl-7 pt-1">
                {pair.additionalDetails}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
