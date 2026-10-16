import React from 'react';
import { Castle, Compass, Shield, Users, Camera, Heart, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AEOSection } from '../components/AEOSection';
import { seoDataMap } from '../data/seoData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Explore Rajasthan',
    url: 'https://explore-rajasthan.guide',
    description: seoDataMap.about.metaDescription,
    founder: {
      '@type': 'Person',
      name: 'Dr. Vikramaditya Singh'
    },
    knowsAbout: [
      'Rajasthan Tourism',
      'Rajput Architecture',
      'Thar Desert Expeditions',
      'UNESCO Hill Forts of Rajasthan'
    ]
  };

  return (
    <div className="pt-24 pb-20 space-y-16">
      <SEOHead
        title={seoDataMap.about.title}
        description={seoDataMap.about.metaDescription}
        canonicalPath="/about-us"
        schema={organizationSchema}
      />

      {/* Breadcrumbs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: 'About Us', isCurrent: true }]}
          onNavigate={(page) => onNavigate(page)}
        />
      </div>

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2D1B13] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-amber-900/40">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-amber-300 border border-amber-400/20">
              <Castle className="w-3.5 h-3.5" />
              Independent Cultural Publication
            </span>
            <h1 className="font-royal-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
              About Explore Rajasthan
            </h1>
            <p className="text-sm sm:text-base text-[#E2D2C2] leading-relaxed">
              We are an independent digital travel publication and cultural archive dedicated to helping travelers explore the regal heritage, breathtaking architecture, vibrant folk traditions, and culinary riches of Rajasthan, India.
            </p>
          </div>

          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* Mission & Real Photography Pledge */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                OUR CORE PURPOSE
              </span>
              <h2 className="font-royal-title text-2xl sm:text-3xl font-bold text-[#241A17]">
                Preserving & Celebrating Royal Heritage
              </h2>
            </div>

            <p className="text-sm text-[#4A392D] leading-relaxed">
              Explore Rajasthan was conceptualized as a premier digital marketing and tourism education initiative. Our objective is to bridge the gap between superficial tourism lists and genuine historical appreciation. We provide meticulous travel guides, verified itineraries, and practical planning advice so every traveler can experience the soul of Rajasthan respectfully.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E7D6C3]">
                <Camera className="w-5 h-5 text-[#881337] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm text-[#241A17]">100% Real Photography Commitment</h3>
                  <p className="text-xs text-[#6B5749]">
                    We strictly forbid AI-generated imagery. Every photograph featured across our platform is a verified real photograph captured by talented photographers on Unsplash and Wikimedia Commons, complete with authentic attributions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E7D6C3]">
                <Shield className="w-5 h-5 text-[#881337] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm text-[#241A17]">Factual Accuracy & Integrity</h3>
                  <p className="text-xs text-[#6B5749]">
                    Our historical data is cross-referenced with Archaeological Survey of India (ASI) monographs, Mewar & Marwar foundation archives, and regional gazetteers. We clearly differentiate verified costs from seasonal travel estimates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E7D6C3]">
                <Heart className="w-5 h-5 text-[#881337] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm text-[#241A17]">Ethical & Responsible Tourism</h3>
                  <p className="text-xs text-[#6B5749]">
                    We champion fair compensation for local guides, humane treatment of safari camels and elephants, conservation of wildlife corridors, and the protection of living havelis from commercial degradation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
              alt="Intricate Rajasthani architecture of Hawa Mahal in Jaipur"
              photographer="Annie Spratt"
              caption="Our commitment: real, authentic imagery capturing genuine Rajasthan monuments."
              showCreditBadge={true}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Editorial Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#881337]">
            MEET THE RESEARCH COLLECTIVE
          </span>
          <h2 className="font-royal-title text-2xl sm:text-3xl font-bold text-[#241A17]">
            Travel Historians & Field Guides
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E7D6C3] shadow-sm text-center space-y-3">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
              alt="Dr. Vikramaditya Singh"
              className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-[#B45309]"
            />
            <div>
              <h3 className="font-royal-title text-base font-bold text-[#241A17]">Dr. Vikramaditya Singh</h3>
              <p className="text-xs text-[#B45309] font-medium">Heritage Architect & Historian</p>
            </div>
            <p className="text-xs text-[#6B5749] leading-relaxed">
              Specializes in Rajput military architecture, hill fort defensive engineering, and astronomical observatories across Jaipur and Amber.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E7D6C3] shadow-sm text-center space-y-3">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
              alt="Ananya Rathore"
              className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-[#B45309]"
            />
            <div>
              <h3 className="font-royal-title text-base font-bold text-[#241A17]">Ananya Rathore</h3>
              <p className="text-xs text-[#B45309] font-medium">Senior Travel Writer & Cultural Essayist</p>
            </div>
            <p className="text-xs text-[#6B5749] leading-relaxed">
              Focuses on Mewar traditions, traditional Rajasthani food history, temple festivals, and romantic lakeside havelis of Udaipur.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E7D6C3] shadow-sm text-center space-y-3">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
              alt="Rohan Meena"
              className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-[#B45309]"
            />
            <div>
              <h3 className="font-royal-title text-base font-bold text-[#241A17]">Rohan Meena</h3>
              <p className="text-xs text-[#B45309] font-medium">Adventure Traveler & Desert Expeditions</p>
            </div>
            <p className="text-xs text-[#6B5749] leading-relaxed">
              Leads overland road trip mapping, Thar desert glamping audits, wildlife tracking in Ranthambore, and backpacker budget planning.
            </p>
          </div>
        </div>
      </section>

      {/* AEO Section for About Page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AEOSection
          title="Editorial Mission & Standards Q&A"
          subtitle="Answers about our publication, authentic photography pledge, and non-government status"
          qaPairs={seoDataMap.about.qaPairs}
        />
      </section>
    </div>
  );
};
