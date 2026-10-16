import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Info, ChevronDown, ChevronUp, Castle, Shield, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AEOSection } from '../components/AEOSection';
import { seoDataMap } from '../data/seoData';

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required.';
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide a message with at least 15 characters.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setIsSubmitted(false);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const faqs = [
    {
      q: 'Is Rajasthan safe for solo female travelers and backpackers?',
      a: 'Yes, Rajasthan is one of the most visited and hospitable states in India. Thousands of solo travelers explore Jaipur, Pushkar, and Udaipur each year. Basic precautions apply: use registered taxis or app-based cabs (Uber/Ola), dress modestly when visiting rural villages and temples, and avoid poorly lit alleys late at night.'
    },
    {
      q: 'How many days are recommended for a first-time Rajasthan trip?',
      a: 'A 7-to-10 day itinerary is ideal for covering the classic "Golden Triangle" plus Udaipur or Jodhpur (e.g. Delhi – Jaipur – Pushkar – Jodhpur – Udaipur). For a comprehensive circuit that includes the Thar Desert dunes of Jaisalmer and Ranthambore wildlife, allocate 12 to 14 days.'
    },
    {
      q: 'Do I need advance bookings for monument entries and tiger safaris?',
      a: 'For major monuments like Amber Fort, City Palace, and Mehrangarh, tickets can be purchased at the gate, though ASI/State composite tickets save significant time. However, Ranthambore Tiger Safaris MUST be booked online months ahead through the Rajasthan Forest Department portal as gypsy permits are strictly capped.'
    },
    {
      q: 'What is the best way to travel between Rajasthan cities?',
      a: 'Indian Railways offers comfortable and affordable connectivity (3rd AC or Chair Car on Vande Bharat/Shatabdi express trains). For scenic independence, private AC taxis or self-drive along well-maintained national highways (such as the Delhi-Mumbai NE-4 and NH-48) are highly recommended.'
    }
  ];

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Explore Rajasthan',
    description: seoDataMap.contact.metaDescription,
    mainEntity: {
      '@type': 'TouristInformationCenter',
      name: 'Explore Rajasthan Information Bureau',
      telephone: '+91-141-2200778',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'M.I. Road, Heritage Quarter',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        postalCode: '302001',
        addressCountry: 'IN'
      }
    }
  };

  return (
    <div className="pt-24 pb-20 space-y-16">
      <SEOHead
        title={seoDataMap.contact.title}
        description={seoDataMap.contact.metaDescription}
        canonicalPath="/contact"
        schema={contactSchema}
      />

      {/* Breadcrumbs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: 'Contact Us', isCurrent: true }]}
          onNavigate={(page) => onNavigate && onNavigate(page)}
        />
      </div>

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2D1B13] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-amber-900/40">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-amber-300 border border-amber-400/20">
              <Mail className="w-3.5 h-3.5" />
              Get in Touch with Travel Researchers
            </span>
            <h1 className="font-royal-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide">
              Contact & Tourism Inquiries
            </h1>
            <p className="text-sm sm:text-base text-[#E2D2C2] leading-relaxed">
              Have questions regarding heritage itineraries, photography permissions, regional transport routes, or editorial collaborations? Reach out through our inquiry portal.
            </p>
          </div>

          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* Main Grid: Form + Info Centers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#E7D6C3] shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                INQUIRY FORM
              </span>
              <h2 className="font-royal-title text-2xl font-bold text-[#241A17]">
                Send an Editorial Message
              </h2>
              <p className="text-xs text-[#7A6759]">
                Submit your travel inquiry below. All questions are reviewed by our regional travel editorial team.
              </p>
            </div>

            {isSubmitted && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold">Khamma Ghani! Inquiry Received.</strong>
                  <p className="text-xs text-emerald-800 mt-0.5">
                    Thank you for reaching out. In live production, our cultural research team responds within 24 to 48 business hours. (Demo submission verified successfully).
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#241A17]">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maharani Gayatri Devi"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FCF9F2] border rounded-xl focus:outline-none ${
                      errors.name ? 'border-rose-500 bg-rose-50/30' : 'border-[#EADBCC] focus:border-[#881337]'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-600">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#241A17]">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FCF9F2] border rounded-xl focus:outline-none ${
                      errors.email ? 'border-rose-500 bg-rose-50/30' : 'border-[#EADBCC] focus:border-[#881337]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-600">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#241A17]">
                  Subject Line <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Inquiry regarding Jaisalmer desert camel safaris"
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FCF9F2] border rounded-xl focus:outline-none ${
                    errors.subject ? 'border-rose-500 bg-rose-50/30' : 'border-[#EADBCC] focus:border-[#881337]'
                  }`}
                />
                {errors.subject && <p className="text-[11px] text-rose-600">{errors.subject}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#241A17]">
                  Message & Specific Details <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please specify dates, travel style, destinations of interest, and any questions..."
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FCF9F2] border rounded-xl focus:outline-none ${
                    errors.message ? 'border-rose-500 bg-rose-50/30' : 'border-[#EADBCC] focus:border-[#881337]'
                  }`}
                />
                {errors.message && <p className="text-[11px] text-rose-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#881337] to-[#B45309] text-white hover:from-[#70102D] hover:to-[#92400E] shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Submit Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Regional Information Centers Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-white rounded-3xl border border-[#E7D6C3] shadow-sm space-y-4">
              <h3 className="font-royal-title text-lg font-bold text-[#881337]">
                Government Tourist Reception Centres (TRC)
              </h3>
              <p className="text-xs text-[#6B5749] leading-relaxed">
                For in-person tourist maps, certified government guide bookings, and official brochures upon arrival in Rajasthan, visit these verified reception desks:
              </p>

              <div className="space-y-3.5 pt-1 text-xs">
                <div className="p-3.5 rounded-xl bg-[#FCF9F2] border border-[#EADBCC] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#241A17]">
                    <MapPin className="w-3.5 h-3.5 text-[#B45309]" />
                    <span>Jaipur Central Tourist Information</span>
                  </div>
                  <p className="text-[#6B5749] pl-5">Railway Station Platform No. 1, Jaipur Junction</p>
                  <p className="text-[#881337] pl-5 font-medium">Tel: +91-141-2200778</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FCF9F2] border border-[#EADBCC] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#241A17]">
                    <MapPin className="w-3.5 h-3.5 text-[#B45309]" />
                    <span>Udaipur Tourist Reception Centre</span>
                  </div>
                  <p className="text-[#6B5749] pl-5">Fateh Memorial, Surajpol, Udaipur</p>
                  <p className="text-[#881337] pl-5 font-medium">Tel: +91-294-2411535</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FCF9F2] border border-[#EADBCC] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#241A17]">
                    <MapPin className="w-3.5 h-3.5 text-[#B45309]" />
                    <span>Jodhpur Tourist Information Bureau</span>
                  </div>
                  <p className="text-[#6B5749] pl-5">RTDC Hotel Ghoomar Campus, High Court Road, Jodhpur</p>
                  <p className="text-[#881337] pl-5 font-medium">Tel: +91-291-2545083</p>
                </div>
              </div>
            </div>

            {/* Emergency & 24/7 Helpline Card */}
            <div className="p-6 bg-[#FEF3C7]/40 rounded-3xl border border-amber-300 text-xs text-[#78350F] space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <Shield className="w-4 h-4 text-[#B45309]" />
                Official 24/7 National Tourist Helpline
              </div>
              <p>
                The Ministry of Tourism operates a 24-hour multi-lingual tourist helpline at <strong>1363</strong> (Toll Free within India) in 12 languages including English, Hindi, French, German, Spanish, Japanese, and Russian.
              </p>
              <p className="text-[11px] text-amber-800/80">
                For police, medical, or fire emergencies across Rajasthan, dial <strong>112</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Preview with CTA to full FAQ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-royal-title text-2xl sm:text-3xl font-bold text-[#241A17]">
            Planning Questions & Answers
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E7D6C3] overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-[#FCF9F2] transition-colors"
                >
                  <span className="font-royal-title text-sm sm:text-base font-bold text-[#241A17]">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#881337] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#7A6759] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4E3C32] leading-relaxed border-t border-[#F2E8DC] bg-[#FCF9F2]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate && onNavigate('faq')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold bg-[#881337] text-white hover:bg-[#70102D] transition-colors cursor-pointer shadow-sm"
          >
            <span>View Full Rajasthan FAQ Hub (20+ Questions)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* AEO Section for Contact */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AEOSection
          title="Direct Tourist Reception & Helpline Answers"
          subtitle="Key contact addresses and national assistance helpline details"
          qaPairs={seoDataMap.contact.qaPairs}
        />
      </section>
    </div>
  );
};
