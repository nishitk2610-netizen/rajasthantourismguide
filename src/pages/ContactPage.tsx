import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Info, ChevronDown, ChevronUp, Castle, Shield } from 'lucide-react';

export const ContactPage: React.FC = () => {
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

  return (
    <div className="pt-24 pb-20 space-y-16">
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
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                EDITORIAL & TRAVEL INQUIRY
              </span>
              <h2 className="font-royal-title text-xl sm:text-2xl font-bold text-[#241A17] mt-1">
                Send Us a Message
              </h2>
              <p className="text-xs text-[#7A6759] mt-1">
                Fill in the form below. Please note that this is a simulated interactive demo form for this project.
              </p>
            </div>

            {/* Clear Demo Mode Disclaimer Box */}
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-[#78350F] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Demonstration Mode:</strong> Submitting this form tests client-side input validation and will trigger a demo confirmation message without transmitting emails to a remote server.
              </span>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-royal-title text-lg font-bold text-emerald-950">
                  Khamma Ghani! Message Received (Demo)
                </h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you for testing our inquiry form. All fields were validated successfully. In a live production environment, your request would be routed to our Rajasthan travel desk.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 px-5 py-2 text-xs font-semibold bg-emerald-800 text-white rounded-xl hover:bg-emerald-900 transition-colors cursor-pointer"
                >
                  Send Another Demo Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="block text-xs font-semibold text-[#3D2C23] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maharawal Singh or Emily Davis"
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-[#FCF9F2] border rounded-xl text-[#291A14] placeholder-[#8A796C] focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500 bg-rose-50/30' : 'border-[#E5D5C2] focus:border-[#881337]'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D2C23] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. traveler@example.com"
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-[#FCF9F2] border rounded-xl text-[#291A14] placeholder-[#8A796C] focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500 bg-rose-50/30' : 'border-[#E5D5C2] focus:border-[#881337]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D2C23] mb-1">
                    Inquiry Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. 10-Day Road Trip Route or Photography Guidelines"
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-[#FCF9F2] border rounded-xl text-[#291A14] placeholder-[#8A796C] focus:outline-none transition-colors ${
                      errors.subject ? 'border-rose-500 bg-rose-50/30' : 'border-[#E5D5C2] focus:border-[#881337]'
                    }`}
                  />
                  {errors.subject && <p className="text-[11px] text-rose-600 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D2C23] mb-1">
                    Your Message / Travel Question *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you would like to know about visiting Rajasthan..."
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-[#FCF9F2] border rounded-xl text-[#291A14] placeholder-[#8A796C] focus:outline-none transition-colors ${
                      errors.message ? 'border-rose-500 bg-rose-50/30' : 'border-[#E5D5C2] focus:border-[#881337]'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl text-xs font-semibold bg-[#881337] hover:bg-[#70102D] text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Submit Inquiry (Demo)</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Tourism Centres & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-[#E7D6C3] shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                REGIONAL TOURIST OFFICES
              </span>
              <h3 className="font-royal-title text-lg font-bold text-[#241A17]">
                Government Tourist Reception Centres (TRC)
              </h3>
              <p className="text-xs text-[#6B5749]">
                For official permits, government authorized guides, and verified emergency assistance in person:
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#4A392D]">
                <div className="p-3 bg-[#FCF9F2] rounded-xl border border-[#EADBCC] space-y-1">
                  <strong className="block text-[#881337]">Jaipur Central TRC</strong>
                  <p>Tourist Information Bureau, Railway Station Platform 1, Jaipur, Rajasthan</p>
                  <p className="text-[11px] text-[#7A6759]">Tel: +91-141-2200778</p>
                </div>

                <div className="p-3 bg-[#FCF9F2] rounded-xl border border-[#EADBCC] space-y-1">
                  <strong className="block text-[#881337]">Udaipur Tourist Bureau</strong>
                  <p>Fateh Memorial, Surajpol, Udaipur, Rajasthan</p>
                  <p className="text-[11px] text-[#7A6759]">Tel: +91-294-2411535</p>
                </div>

                <div className="p-3 bg-[#FCF9F2] rounded-xl border border-[#EADBCC] space-y-1">
                  <strong className="block text-[#881337]">Jodhpur Tourist Information</strong>
                  <p>High Court Road, RTDC Ghoomar Hotel, Jodhpur, Rajasthan</p>
                  <p className="text-[11px] text-[#7A6759]">Tel: +91-291-2545083</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F7EFE4] p-6 rounded-3xl border border-[#E5D5C2] space-y-2 text-xs text-[#523F35]">
              <div className="flex items-center gap-2 font-bold text-[#881337] text-sm">
                <Shield className="w-4 h-4 text-[#B45309]" />
                Official 24/7 Tourist Assistance
              </div>
              <p>
                The Ministry of Tourism operates a 24-hour multi-lingual tourist helpline at <strong>1363</strong> (Toll Free within India) in 12 languages including English, Hindi, French, German, Spanish, Japanese, and Russian.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
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
      </section>
    </div>
  );
};
