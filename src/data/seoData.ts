export interface PageSEO {
  slug: string;
  canonicalPath: string;
  title: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: 'Informational' | 'Navigational' | 'Transactional';
  targetAudience: string;
  searchQuestion: string;
  schemaType: 'WebSite' | 'TouristDestination' | 'Article' | 'FAQPage' | 'Organization';
  qaPairs: {
    question: string;
    answer: string;
    additionalDetails?: string;
  }[];
}

export const seoDataMap: Record<string, PageSEO> = {
  // HOME PAGE
  home: {
    slug: '',
    canonicalPath: '/',
    title: 'Explore Rajasthan Tourism – Royal Palaces, Forts & Desert Guides',
    metaDescription: 'Discover Rajasthan tourism with researched travel guides to royal palaces, UNESCO hill forts, Thar desert safaris, authentic Mewar cuisine, and itineraries.',
    primaryKeyword: 'Rajasthan tourism',
    secondaryKeywords: ['places to visit in Rajasthan', 'Rajasthan travel guide', 'royal Rajasthan heritage'],
    searchIntent: 'Informational',
    targetAudience: 'First-time and returning travelers planning a cultural or adventure trip to Rajasthan.',
    searchQuestion: 'What are the top attractions and cultural experiences in Rajasthan, India?',
    schemaType: 'WebSite',
    qaPairs: [
      {
        question: 'What are the best places to visit in Rajasthan for first-time travelers?',
        answer: 'The essential destinations for first-time visitors are Jaipur for royal architecture and bazaars, Udaipur for romantic lakeside palaces, Jodhpur for the cliff-top Mehrangarh Fort, and Jaisalmer for golden sand dunes and camel safaris. Travelers with extra days should include Ranthambore for Bengal tiger safaris and Pushkar for sacred lake ghats.',
        additionalDetails: 'These core destinations form the classic Golden Triangle and Marwar circuit, offering well-connected highways, high-speed rail lines, and airports.'
      },
      {
        question: 'How many days are ideal for a complete Rajasthan tour?',
        answer: 'A duration of 10 to 14 days is ideal to experience Rajasthan at a comfortable pace. This allows 3 days in Jaipur, 2 days in Pushkar and Ajmer, 2 days in Jodhpur, 2 to 3 days in Jaisalmer including desert glamping, and 3 days exploring Udaipur and nearby Kumbhalgarh Fort.',
        additionalDetails: 'Shorter 5-to-7 day trips can comfortably focus on the Golden Triangle (Delhi–Agra–Jaipur) with an express train extension to Udaipur or Jodhpur.'
      }
    ]
  },

  // DESTINATIONS INDEX
  destinations: {
    slug: 'destinations',
    canonicalPath: '/destinations',
    title: 'Top 10 Places to Visit in Rajasthan – Complete City & Fort Guide',
    metaDescription: 'Explore all 10 iconic royal destinations in Rajasthan: Jaipur, Udaipur, Jaisalmer, Jodhpur, Pushkar, Mount Abu, Bikaner, Chittorgarh, Ranthambore, and Ajmer.',
    primaryKeyword: 'places to visit in Rajasthan',
    secondaryKeywords: ['Rajasthan tourist cities', 'Rajasthan hill forts', 'Rajasthan travel destinations'],
    searchIntent: 'Informational',
    targetAudience: 'Travel planners choosing which Rajasthan cities, forts, and lakes to include in their travel itinerary.',
    searchQuestion: 'Which cities and tourist destinations in Rajasthan should I visit?',
    schemaType: 'TouristDestination',
    qaPairs: [
      {
        question: 'Which city in Rajasthan is best to visit first?',
        answer: 'Jaipur is universally considered the best city to visit first because it serves as the state capital, sits just four hours from New Delhi via the NE-4 expressway, and introduces travelers to magnificent Rajput architecture at Amber Fort and Hawa Mahal before venturing deeper into the Thar Desert.',
        additionalDetails: 'Jaipur International Airport (JAI) and Jaipur Junction offer the most frequent domestic flights and express train connections.'
      },
      {
        question: 'What is the most scenic way to travel between Rajasthan cities?',
        answer: 'Traveling by Indian Railways aboard express trains like the Vande Bharat or Shatabdi offers the most comfortable and scenic intercity transit, while private chauffeured cars along national expressways (NH-48 and NH-58) provide scenic mountain pass views across the Aravali Range.',
        additionalDetails: 'Self-driving is rewarding along multi-lane desert highways between Jodhpur, Bikaner, and Jaisalmer.'
      }
    ]
  },

  // TRAVEL BLOGS INDEX
  blogs: {
    slug: 'blog',
    canonicalPath: '/blog',
    title: 'Rajasthan Travel Blogs & Itineraries – 10 In-Depth Research Guides',
    metaDescription: 'Read 10 comprehensive Rajasthan travel guides covering Jaipur attractions, Udaipur lakes, Jaisalmer dunes, royal food recipes, and multi-day road trips.',
    primaryKeyword: 'Rajasthan travel blogs',
    secondaryKeywords: ['Rajasthan travel itinerary', 'Rajasthan food guide', 'Rajasthan budget tips'],
    searchIntent: 'Informational',
    targetAudience: 'Independent travelers, backpackers, and cultural tourists seeking verified travel itineraries and practical advice.',
    searchQuestion: 'Where can I find verified, authentic travel guides and itineraries for Rajasthan?',
    schemaType: 'Article',
    qaPairs: [
      {
        question: 'Where can I find verified travel itineraries for Rajasthan?',
        answer: 'Explore Rajasthan publishes comprehensive, field-tested itineraries ranging from classic 7-day Golden Triangle routes to 14-day overland road trips connecting Delhi, Jaipur, Pushkar, Jodhpur, Jaisalmer, and Udaipur, complete with highway driving times and rest stops.',
        additionalDetails: 'Every guide distinguishes estimated seasonal travel expenses from verified monument entrance fees.'
      },
      {
        question: 'How do I plan a budget-friendly trip across Rajasthan?',
        answer: 'To travel Rajasthan on a budget, travel between October and November or in early March during shoulder season, book 3rd AC train tickets 60 days ahead via IRCTC, stay in authentic family-run heritage havelis, and dine on traditional regional thalis at busy local dhabas.',
        additionalDetails: 'Purchasing state archaeology composite tickets at Amber Fort saves up to 40% on monument admissions across five state landmarks.'
      }
    ]
  },

  // TRAVEL TIPS PAGE
  tips: {
    slug: 'travel-tips',
    canonicalPath: '/travel-tips',
    title: 'Rajasthan Travel Tips – Weather, Transport, Packing & Scams Advice',
    metaDescription: 'Essential Rajasthan travel advice: best visiting seasons, train and expressway connectivity, temple dress codes, drinking water hygiene, and tout avoidance.',
    primaryKeyword: 'Rajasthan travel tips',
    secondaryKeywords: ['best time to visit Rajasthan', 'Rajasthan clothing tips', 'Rajasthan tourist safety'],
    searchIntent: 'Informational',
    targetAudience: 'Travelers preparing their packing lists, train bookings, safety precautions, and cultural etiquette for Rajasthan.',
    searchQuestion: 'What should I know before traveling to Rajasthan for the first time?',
    schemaType: 'FAQPage',
    qaPairs: [
      {
        question: 'What is the best time to visit Rajasthan?',
        answer: 'October to March is the best time to visit Rajasthan because daytime temperatures are mild (20°C to 28°C) and rainfall is minimal, making outdoor walking across hilltop fortresses and desert safaris comfortable. Desert nights in December and January can dip below 8°C.',
        additionalDetails: 'Monsoon season (July to September) transforms southern Rajasthan (Udaipur and Mount Abu) into lush, misty green landscapes with lower hotel tariffs.'
      },
      {
        question: 'What is the official dress code for temples and monuments in Rajasthan?',
        answer: 'Visitors should dress respectfully by covering shoulders and knees when visiting active temples, mosques, and religious lake ghats. Footwear and leather belts must be removed before entering sanctums, and carrying a lightweight cotton scarf to cover your head is recommended.',
        additionalDetails: 'Slip-on shoes or sandals with socks are practical when walking over stone courtyards warmed by the midday sun.'
      }
    ]
  },

  // ABOUT US
  about: {
    slug: 'about-us',
    canonicalPath: '/about-us',
    title: 'About Explore Rajasthan – Independent Cultural Travel Publication',
    metaDescription: 'Learn about Explore Rajasthan: an independent digital travel publication dedicated to authentic non-AI photography, verified heritage research, and ethical tourism.',
    primaryKeyword: 'About Explore Rajasthan',
    secondaryKeywords: ['Rajasthan cultural publication', 'independent travel guide Rajasthan', 'Rajasthan tourism documentation'],
    searchIntent: 'Navigational',
    targetAudience: 'Visitors seeking information about the editorial standards, non-government status, and research team behind Explore Rajasthan.',
    searchQuestion: 'Who creates and verifies the travel content on Explore Rajasthan?',
    schemaType: 'Organization',
    qaPairs: [
      {
        question: 'Who publishes the Explore Rajasthan travel guides?',
        answer: 'Explore Rajasthan is published by an independent editorial collective of heritage architects, cultural historians, and field travel researchers passionate about authentic Rajasthani heritage. The platform is not an official government agency and does not represent RTDC.',
        additionalDetails: 'All content is researched against Archaeological Survey of India (ASI) reports, regional museum archives, and field logs.'
      },
      {
        question: 'How are photographs verified on Explore Rajasthan?',
        answer: 'Explore Rajasthan enforces a strict 100% authentic photography policy with zero AI-generated images. Every photograph is cross-referenced with the exact physical monument and licensed through reputable sources like Wikimedia Commons and verified photographers on Unsplash.',
        additionalDetails: 'Photographer credits and licensing details are maintained in a central image registry to preserve transparent copyright compliance.'
      }
    ]
  },

  // CONTACT US
  contact: {
    slug: 'contact',
    canonicalPath: '/contact',
    title: 'Contact Explore Rajasthan – Tourist Reception Centers & Inquiries',
    metaDescription: 'Contact Explore Rajasthan for editorial inquiries, verified tourist reception office addresses in Jaipur, Udaipur, and Jodhpur, and travel assistance.',
    primaryKeyword: 'Contact Rajasthan tourism guide',
    secondaryKeywords: ['Rajasthan tourist reception center', 'Rajasthan travel inquiry', 'Rajasthan tourist helpline'],
    searchIntent: 'Navigational',
    targetAudience: 'Travelers seeking assistance, contact details of government tourist offices, or submitting travel questions.',
    searchQuestion: 'How can I contact tourist support and information centers in Rajasthan?',
    schemaType: 'Organization',
    qaPairs: [
      {
        question: 'Where can travelers find official tourist reception centres in Rajasthan?',
        answer: 'Official Tourist Information Bureaus are located at Jaipur Railway Station Platform 1 (Tel: +91-141-2200778), Fateh Memorial at Surajpol in Udaipur (Tel: +91-294-2411535), and High Court Road RTDC Hotel Ghoomar in Jodhpur (Tel: +91-291-2545083).',
        additionalDetails: 'These centers provide free printed city maps, registered guide rosters, and certified transport tariff rate cards.'
      },
      {
        question: 'What is the national tourist helpline number for travelers in Rajasthan?',
        answer: 'The Government of India Ministry of Tourism operates a 24/7 multi-lingual tourist helpline at 1363 (toll-free within India) or +91-11-23365358, providing emergency guidance, directions, and tourist assistance in 12 international languages.',
        additionalDetails: 'For police emergencies, call the unified national emergency response service number 112.'
      }
    ]
  },

  // FAQ PAGE
  faq: {
    slug: 'faq',
    canonicalPath: '/faq',
    title: 'Rajasthan Tourism FAQ – 20+ Frequently Asked Questions Answered',
    metaDescription: 'Find clear answers to popular Rajasthan travel questions: visa permits, tiger safari booking, winter weather, dress codes, train travel, and estimated budgets.',
    primaryKeyword: 'Rajasthan tourism FAQ',
    secondaryKeywords: ['Rajasthan travel questions', 'visiting Rajasthan answers', 'Rajasthan trip planning FAQ'],
    searchIntent: 'Informational',
    targetAudience: 'Travelers looking for quick, authoritative answers to practical questions about planning a trip to Rajasthan.',
    searchQuestion: 'What are the most frequently asked questions about traveling in Rajasthan?',
    schemaType: 'FAQPage',
    qaPairs: [
      {
        question: 'Do I need advance bookings for Ranthambore Tiger Safaris?',
        answer: 'Yes, Ranthambore Tiger Reserve strictly limits the daily number of 6-seater gypsies and 20-seater canters permitted into core forest zones (Zones 1 to 5). Permits should be reserved 60 to 90 days in advance through the official Rajasthan Forest Department online portal.',
        additionalDetails: 'Last-minute quota safaris are sometimes available through hotel naturalists, but advance booking guarantees core zone allocation.'
      },
      {
        question: 'Is tap water safe to drink in Rajasthan?',
        answer: 'No, tap water is not potable for international tourists. Travelers should drink purified filtered water provided by reputable heritage hotels, carry an insulated reusable bottle with filtration capabilities, or purchase sealed packaged mineral water from reputed brands.',
        additionalDetails: 'Avoid ice cubes made from untreated water and avoid eating pre-cut raw fruits from street vendors.'
      }
    ]
  },

  // PRIVACY POLICY
  privacy: {
    slug: 'privacy-policy',
    canonicalPath: '/privacy-policy',
    title: 'Privacy Policy – Explore Rajasthan Travel Guide',
    metaDescription: 'Review the privacy policy of Explore Rajasthan: our transparent data practices, local storage usage for itineraries, and cookie-free travel guidance.',
    primaryKeyword: 'Explore Rajasthan privacy policy',
    secondaryKeywords: ['Rajasthan travel website privacy', 'user data terms Rajasthan guide'],
    searchIntent: 'Informational',
    targetAudience: 'Visitors interested in how personal data and browser localStorage are handled on Explore Rajasthan.',
    searchQuestion: 'How does Explore Rajasthan handle visitor privacy and data?',
    schemaType: 'WebSite',
    qaPairs: [
      {
        question: 'How does Explore Rajasthan protect visitor privacy?',
        answer: 'Explore Rajasthan does not collect, sell, or rent personal browsing data or payment card information. Features such as "My Saved Royal Itinerary" operate entirely client-side using standard browser localStorage without transmitting saved items to external tracking servers.',
        additionalDetails: 'Our newsletter and inquiry forms are strictly opt-in and demo-safe, requiring no sensitive personal identifiers.'
      },
      {
        question: 'Does Explore Rajasthan use third-party tracking cookies?',
        answer: 'No third-party behavioral advertising or invasive tracking cookies are used. We prioritize fast Core Web Vitals, lightweight static assets, and transparent educational content delivery.',
        additionalDetails: 'You can clear your saved bookmarks at any time directly through the "My Saved Royal Itinerary" drawer in the navigation bar.'
      }
    ]
  }
};
