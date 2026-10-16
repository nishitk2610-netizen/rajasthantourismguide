export interface FAQItem {
  id: string;
  category: 'Trip Planning & Timing' | 'Monuments & Permits' | 'Wildlife & Safaris' | 'Transport & Roads' | 'Culture & Etiquette' | 'Budget & Food Safety';
  question: string;
  answer: string;
  detailedContext?: string;
}

export const faqsData: FAQItem[] = [
  // 1. Trip Planning & Timing
  {
    id: 'faq-best-time',
    category: 'Trip Planning & Timing',
    question: 'When is the best time of the year to visit Rajasthan?',
    answer: 'October to March is universally considered the best time to visit Rajasthan. Daytime temperatures hover comfortably between 20°C and 28°C with clear sunny skies and minimal precipitation. Night temperatures in desert regions like Jaisalmer and Bikaner can dip below 8°C in December and January.',
    detailedContext: 'The monsoon months (July to September) are ideal for Udaipur and Mount Abu, as the lakes fill up and Aravali hills turn vibrant green with fewer tourist crowds.'
  },
  {
    id: 'faq-trip-duration',
    category: 'Trip Planning & Timing',
    question: 'How many days are needed to explore Rajasthan comfortably?',
    answer: 'A minimum of 7 to 10 days is recommended for a classic first-time circuit (Jaipur, Jodhpur, and Udaipur). For a comprehensive journey including the Thar Desert of Jaisalmer and wildlife safaris in Ranthambore, allocate 12 to 14 days.',
    detailedContext: 'If you have only 4 to 5 days, focus exclusively on the Golden Triangle (Delhi–Agra–Jaipur) or a romantic 4-day lakeside stay in Udaipur.'
  },
  {
    id: 'faq-festivals-timing',
    category: 'Trip Planning & Timing',
    question: 'Which cultural festivals are most famous and when do they take place?',
    answer: 'The most celebrated festivals are the Pushkar Camel Fair (late October/November during Kartik Purnima), the Jaisalmer Desert Festival (February), Jaipur Literature Festival (January), Teej and Gangaur in Jaipur (August/March), and Mewar Festival in Udaipur (March/April).',
    detailedContext: 'Hotel rates in Pushkar and Jaisalmer rise sharply during festival weeks; reserve accommodation at least 3 to 4 months in advance.'
  },
  {
    id: 'faq-solo-female-travel',
    category: 'Trip Planning & Timing',
    question: 'Is Rajasthan safe for solo female travelers and backpackers?',
    answer: 'Yes, Rajasthan is one of India’s most visited, hospitable, and tourist-welcoming states. Major tourist hubs like Jaipur, Udaipur, and Pushkar have an established international traveler ecosystem, boutique heritage hostels, and dedicated tourist police outposts.',
    detailedContext: 'Standard precautions include dressing modestly in religious or rural zones, booking pre-paid or app-based cabs after dark, and avoiding unlit streets alone late at night.'
  },

  // 2. Monuments & Permits
  {
    id: 'faq-composite-tickets',
    category: 'Monuments & Permits',
    question: 'What is the Rajasthan composite monument ticket and how does it work?',
    answer: 'The Department of Archaeology and Museums issues a composite entry ticket in Jaipur (valid for 2 consecutive days). It grants entry to Amber Fort, Albert Hall Museum, Hawa Mahal, Jantar Mantar, and Nahargarh Fort, saving up to 40% compared to separate admissions.',
    detailedContext: 'Composite passes can be purchased directly at ticket windows of any of the participating monuments or online via the official Rajasthan Tourism portal.'
  },
  {
    id: 'faq-photography-rules',
    category: 'Monuments & Permits',
    question: 'What are the rules and fees for photography and videography at forts?',
    answer: 'Handheld smartphone photography is permitted at almost all monuments for free. Dedicated DSLR cameras require a nominal camera permit fee (typically ₹50 to ₹100 for Indian citizens and ₹100 to ₹300 for foreign visitors) purchased at the ticket booth.',
    detailedContext: 'Tripods, professional video rigs, and drones are strictly prohibited at ASI and living palace premises without prior written clearance from the Archaeological Survey of India.'
  },
  {
    id: 'faq-monument-timings',
    category: 'Monuments & Permits',
    question: 'What are the standard visiting hours for palaces and forts across Rajasthan?',
    answer: 'Most state-protected monuments open between 9:00 AM and 5:00 PM daily. Several premier monuments, including Amber Fort and Mehrangarh Fort, also host evening sound-and-light spectacles or night tourism viewings between 6:30 PM and 9:00 PM.',
    detailedContext: 'Active temples inside forts (such as Shila Devi in Amber or Chamunda Devi in Mehrangarh) may open earlier at 6:00 AM for morning aarti.'
  },
  {
    id: 'faq-inner-line-permits',
    category: 'Monuments & Permits',
    question: 'Do foreign tourists need special permits to visit border areas in Rajasthan?',
    answer: 'Standard tourist areas in Jaisalmer, Barmer, and Bikaner do not require special permits for foreign tourists. However, venturing into sensitive international border zones near the Indo-Pak border (such as Tanot Mata or Longewala border post) requires permission from the District Collector or BSF authorities for foreign nationals.',
    detailedContext: 'Always carry original passport identification when traveling in Western Rajasthan border districts.'
  },

  // 3. Wildlife & Safaris
  {
    id: 'faq-ranthambore-booking',
    category: 'Wildlife & Safaris',
    question: 'How far in advance should Ranthambore Tiger Safaris be booked?',
    answer: 'Bookings for Ranthambore Tiger Reserve should ideally be made 60 to 90 days in advance via the official Rajasthan Forest Department online reservation system. Core zones (Zones 1 through 5) sell out earliest due to strictly enforced vehicle quotas.',
    detailedContext: 'Safari options include 6-seater 4x4 open Gypsies and 20-seater Canter open safari buses. Morning safaris begin around sunrise; afternoon safaris start around 2:30 PM.'
  },
  {
    id: 'faq-safari-zones',
    category: 'Wildlife & Safaris',
    question: 'Which safari zones in Ranthambore offer the highest chances of tiger sightings?',
    answer: 'Zones 1, 2, 3, 4, and 5 form the historic core around Ranthambore Fort and three scenic lakes (Padam Talao, Rajbagh, and Malik Talao), historically offering high sighting probabilities. However, buffer zones 6 through 10 have also recorded frequent tiger movements and fewer vehicle clusters.',
    detailedContext: 'Wildlife sightings depend heavily on waterhole conditions, season, and natural territorial movements, not solely zone numbers.'
  },
  {
    id: 'faq-leopard-safaris',
    category: 'Wildlife & Safaris',
    question: 'Where can I experience leopard safaris in Rajasthan?',
    answer: 'Jawai Bandh (Bera) located between Jodhpur and Udaipur is India’s premier leopard destination, famous for wild leopards coexisting peacefully with Rabari pastoralists on granite rocky hills. Safaris operate in open private 4x4 vehicles with local naturalists.',
    detailedContext: 'Jhalana Leopard Reserve situated right inside Jaipur city borders is another excellent half-day leopard safari destination.'
  },
  {
    id: 'faq-desert-camel-safari',
    category: 'Wildlife & Safaris',
    question: 'What is the difference between Sam Sand Dunes and Khuri Sand Dunes in Jaisalmer?',
    answer: 'Sam Sand Dunes (42 km west of Jaisalmer) is the bustling tourism epicenter with extensive luxury tent resorts, musical folk performances, dune-bashing 4x4s, and quad bikes. Khuri Sand Dunes (50 km southwest) is much quieter, less commercialized, offering traditional homestays and serene sunset camel treks.',
    detailedContext: 'If you seek vibrant nightlife and Rajasthani dance troupes, choose Sam; if you seek untouched serenity and pristine ripples, choose Khuri.'
  },

  // 4. Transport & Roads
  {
    id: 'faq-vande-bharat-trains',
    category: 'Transport & Roads',
    question: 'Are there high-speed train connections between Delhi and Rajasthan?',
    answer: 'Yes, Indian Railways operates semi-high-speed Vande Bharat Express and Shatabdi Express services connecting New Delhi with Jaipur, Ajmer, and Udaipur in under 4 to 8 hours. The trains offer air-conditioned Chair Car and Executive Class seating with onboard meals.',
    detailedContext: 'Book train tickets 30 to 60 days ahead via the official IRCTC web portal or app to secure confirmed reservations.'
  },
  {
    id: 'faq-road-conditions',
    category: 'Transport & Roads',
    question: 'What are road conditions like for self-driving or hiring private taxis in Rajasthan?',
    answer: 'Rajasthan boasts some of the finest highway infrastructure in India. The Delhi–Mumbai Expressway (NE-4), NH-48 (Jaipur to Udaipur), and the desert highway network connecting Jodhpur, Bikaner, and Jaisalmer feature multi-lane smooth asphalt with well-appointed wayside rest plazas.',
    detailedContext: 'Toll plazas accept FASTag electronic toll payment seamlessly. Driving at night on single-lane rural roads is best avoided due to stray cattle and lack of streetlights.'
  },
  {
    id: 'faq-intra-city-cabs',
    category: 'Transport & Roads',
    question: 'Are app-based cabs like Uber and Ola available in Rajasthan?',
    answer: 'Uber and Ola operate widely in Jaipur, Jodhpur, and Udaipur for local city transfers, railway station pick-ups, and airport trips. In smaller towns like Jaisalmer, Pushkar, Bikaner, and Mount Abu, auto-rickshaws, pre-paid taxis, and walking are standard.',
    detailedContext: 'Always agree on the fare beforehand or ask the auto-rickshaw driver to turn on the meter in non-app towns.'
  },

  // 5. Culture & Etiquette
  {
    id: 'faq-temple-dress-code',
    category: 'Culture & Etiquette',
    question: 'What is the appropriate dress code when visiting temples and religious shrines in Rajasthan?',
    answer: 'Both men and women must cover their shoulders and knees when visiting active temples, mosques, gurdwaras, and sacred lake ghats. Footwear and leather items (such as belts or wallets at Jain temples) must be deposited at the shoe counter before entering.',
    detailedContext: 'At Ajmer Sharif Dargah, Gurudwaras, and Pushkar Brahma Temple, covering your head with a scarf or handkerchief is customary and respectful.'
  },
  {
    id: 'faq-greeting-customs',
    category: 'Culture & Etiquette',
    question: 'What is the traditional greeting and etiquette in Rajasthan?',
    answer: 'The traditional Rajasthani greeting is "Khamma Ghani" (meaning "warm greetings and abundant blessings"), accompanied by folded hands (Namaste gesture). In response, elders or peers reply with "Ghani Khamma".',
    detailedContext: 'Polite greetings establish instant warmth and goodwill with local shopkeepers, haveli hosts, and village artisans.'
  },
  {
    id: 'faq-tipping-norms',
    category: 'Culture & Etiquette',
    question: 'What are the customary tipping norms in Rajasthan?',
    answer: 'In standalone restaurants and cafes, a tip of 7% to 10% is customary unless a service charge is already included in the bill. For hotel bellboys, ₹50 to ₹100 per luggage bag is standard. For private tour guides and drivers, ₹300 to ₹600 per full day reflects commendable service.',
    detailedContext: 'Tipping is not compulsory, but it is deeply appreciated by service professionals across the hospitality sector.'
  },

  // 6. Budget & Food Safety
  {
    id: 'faq-drinking-water',
    category: 'Budget & Food Safety',
    question: 'Is tap water safe to drink in Rajasthan for foreign tourists?',
    answer: 'No, tap water is not potable for tourists. Always drink sealed packaged mineral water from recognized brands (such as Kinley, Aquafina, Bisleri, or Himalayan), or filtered water from UV/RO purification stations provided by your heritage hotel.',
    detailedContext: 'Carry an insulated reusable water bottle that you can refill at hotel stations to reduce plastic waste, and avoid ice cubes at unverified roadside stalls.'
  },
  {
    id: 'faq-vegetarian-food',
    category: 'Budget & Food Safety',
    question: 'Is it easy to find pure vegetarian or vegan food in Rajasthan?',
    answer: 'Yes! Rajasthan has one of the world’s richest vegetarian culinary traditions, influenced by Jain and Marwari dietary cultures. Most restaurants are 100% pure vegetarian (look for the green dot symbol), serving Dal Baati Churma, Gatte ki Sabzi, Ker Sangri, and Bajre ki Roti.',
    detailedContext: 'Non-vegetarian specialties like royal Laal Maas (spicy mutton cooked in Mathania chillies) are found at dedicated royal Mewar/Marwar dining establishments and luxury palace hotels.'
  },
  {
    id: 'faq-digital-payments',
    category: 'Budget & Food Safety',
    question: 'Can I pay with credit cards and UPI digital wallets everywhere in Rajasthan?',
    answer: 'UPI payments (via apps like Google Pay, PhonePe, and Paytm) are ubiquitous—accepted by luxury boutiques and roadside chai stalls alike. Major international credit cards (Visa, MasterCard, Amex) work seamlessly at hotels, fine-dining restaurants, and state monument ticket booths.',
    detailedContext: 'Always carry ₹1,500 to ₹3,000 in physical cash banknotes (₹100, ₹200, and ₹500 denominations) for rural highway tolls, camera permits, and traditional craft markets.'
  }
];
