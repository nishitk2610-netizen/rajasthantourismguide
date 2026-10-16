import React from 'react';
import {
  ShieldCheck,
  Lock,
  Database,
  EyeOff,
  FileText,
  Mail,
  Camera,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AEOSection } from '../components/AEOSection';
import { seoDataMap } from '../data/seoData';

interface PrivacyPolicyPageProps {
  onNavigate?: (page: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 space-y-12">
      <SEOHead
        title={seoDataMap.privacy.title}
        description={seoDataMap.privacy.metaDescription}
        canonicalPath="/privacy-policy"
      />

      {/* Breadcrumbs Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: 'Privacy Policy', isCurrent: true }]}
          onNavigate={(page) => onNavigate && onNavigate(page)}
        />
      </div>

      {/* Header Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2D1B13] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-amber-900/40">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-amber-300 border border-amber-400/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              Privacy & Data Transparency
            </span>
            <h1 className="font-royal-title text-3xl sm:text-4xl font-bold text-white tracking-wide">
              Privacy Policy & Data Ethics
            </h1>
            <p className="text-sm sm:text-base text-[#E2D2C2] leading-relaxed">
              Explore Rajasthan is committed to absolute data transparency, visitor respect, and ethical digital publishing. Review how your information is handled.
            </p>
            <p className="text-xs text-amber-400/80 pt-1">
              Effective Date: October 16, 2026 • Last Reviewed: October 2026
            </p>
          </div>

          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E7D6C3] shadow-sm space-y-8 text-[#291A14]">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="font-royal-title text-xl font-bold text-[#881337] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#B45309]" />
              1. Our Foundational Privacy Principle
            </h2>
            <p className="text-sm leading-relaxed text-[#4A392D]">
              Explore Rajasthan is an educational cultural travel publication. We believe you should explore destination guides, historical research, and monument itineraries freely without invasive profiling, aggressive telemetry, or tracking scripts. We do not sell, rent, monetize, or broker personal visitor data to any advertising exchanges or third-party data aggregators.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3 pt-4 border-t border-[#F2ECE1]">
            <h2 className="font-royal-title text-xl font-bold text-[#881337] flex items-center gap-2">
              <Database className="w-5 h-5 text-[#B45309]" />
              2. Client-Side Browser Storage (LocalStorage)
            </h2>
            <p className="text-sm leading-relaxed text-[#4A392D]">
              When you use our <strong>"My Saved Royal Itinerary"</strong> feature to bookmark destinations and travel articles, this data is saved exclusively inside your own browser using HTML5 <code>localStorage</code> (key: <code>rajasthan_saved_itinerary</code>).
            </p>
            <ul className="list-disc pl-5 text-xs text-[#5C483B] space-y-1.5">
              <li>This saved itinerary information never leaves your personal device.</li>
              <li>No account creation or personal identification is required.</li>
              <li>You have full control and can empty your saved list at any time with a single click in the itinerary drawer or by clearing your browser cache.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 pt-4 border-t border-[#F2ECE1]">
            <h2 className="font-royal-title text-xl font-bold text-[#881337] flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-[#B45309]" />
              3. Cookies & Tracking Technologies
            </h2>
            <p className="text-sm leading-relaxed text-[#4A392D]">
              Explore Rajasthan does not utilize third-party cross-site advertising cookies, fingerprinting technology, or behavioral re-targeting pixels. We deliver fast Core Web Vitals and lightweight experiences without third-party ad network scripts.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3 pt-4 border-t border-[#F2ECE1]">
            <h2 className="font-royal-title text-xl font-bold text-[#881337] flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#B45309]" />
              4. Newsletter & Contact Form Submissions
            </h2>
            <p className="text-sm leading-relaxed text-[#4A392D]">
              When you submit a travel inquiry via our Contact form or subscribe to the Royal Travel Dispatch newsletter:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
              <div className="p-4 rounded-xl bg-[#FCF9F2] border border-[#EADBCC]">
                <strong className="block text-[#881337] font-semibold mb-1">Inquiry Form Data</strong>
                <p className="text-[#5C483B]">Used strictly to respond to your specific editorial question or itinerary query. Never shared with commercial tour brokers.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FCF9F2] border border-[#EADBCC]">
                <strong className="block text-[#881337] font-semibold mb-1">Newsletter Email</strong>
                <p className="text-[#5C483B]">Used solely to send educational travel dispatches and festival alerts. You can unsubscribe at any time.</p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-3 pt-4 border-t border-[#F2ECE1]">
            <h2 className="font-royal-title text-xl font-bold text-[#881337] flex items-center gap-2">
              <Camera className="w-5 h-5 text-[#B45309]" />
              5. Authentic Photography & Intellectual Property
            </h2>
            <p className="text-sm leading-relaxed text-[#4A392D]">
              All photographs featured across Explore Rajasthan are genuine, real photographs of verified Rajasthan locations, captured by photographers on Unsplash and Wikimedia Commons. Each image is prominently credited with photographer name, platform, and license terms. If you are an artist or copyright holder with an inquiry regarding image attribution, please contact us immediately for prompt adjustment.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3 pt-4 border-t border-[#F2ECE1]">
            <h2 className="font-royal-title text-xl font-bold text-[#881337] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#B45309]" />
              6. Non-Government Status Disclaimer
            </h2>
            <p className="text-sm leading-relaxed text-[#4A392D]">
              Explore Rajasthan is an independent travel resource created for travelers, cultural enthusiasts, and academic digital marketing study. It is not affiliated with, authorized by, or an official agency of the Rajasthan Tourism Development Corporation (RTDC) or Government of Rajasthan. For official state services, visit tourism.rajasthan.gov.in.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3 pt-4 border-t border-[#F2ECE1]">
            <h2 className="font-royal-title text-xl font-bold text-[#881337]">
              7. Contact for Privacy Inquiries
            </h2>
            <p className="text-sm leading-relaxed text-[#4A392D]">
              For any questions regarding our data practices, or to request removal of communication history, reach out to our editorial privacy officer:
            </p>
            <div className="p-4 rounded-xl bg-[#FAF5EE] border border-[#EADBCC] text-xs space-y-1">
              <p><strong>Editorial Privacy Office:</strong> Explore Rajasthan Guide</p>
              <p><strong>Email:</strong> privacy@explore-rajasthan.guide</p>
              <p><strong>Address:</strong> M.I. Road, Heritage Quarter, Jaipur, Rajasthan 302001, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Q&A Section for Privacy */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AEOSection
          title="Privacy & Data Protection Q&A"
          subtitle="Quick answers regarding user data, client storage, and tracking on Explore Rajasthan"
          qaPairs={seoDataMap.privacy.qaPairs}
        />
      </section>
    </div>
  );
};
