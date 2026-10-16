import { TravelTipCategory } from '../types';

export const travelTipsData: TravelTipCategory[] = [
  {
    id: 'best-time-weather',
    title: '1. Best Time to Visit & Climate',
    iconName: 'Sun',
    summary: 'Understanding seasonal temperature swings between winter, summer, and monsoon ensures a comfortable trip.',
    keyPoints: [
      'Peak Season (October to March): Pleasant daytime weather (20°C–28°C) and crisp nights. Ideal for sightseeing, desert camps, and wildlife safaris.',
      'Shoulder Season (July to September): The monsoon brings lush green scenery to southern Rajasthan (Udaipur, Mount Abu) and lower hotel tariffs.',
      'Summer (April to June): Temperatures often cross 40°C–45°C. Generally discouraged for outdoor sightseeing unless restricted to early mornings.'
    ],
    dos: [
      'Book heritage hotels and trains 2–3 months ahead for travel in December and January.',
      'Pack warm woolens or a fleece jacket for desert nights in Jaisalmer and Bikaner, where temperatures can fall below 8°C.',
      'Plan outdoor fort visits before 11:00 AM or after 3:30 PM to avoid harsh midday sun.'
    ],
    donts: [
      'Do not plan strenuous uphill fort treks during peak afternoon heat in April and May.',
      'Do not assume Rajasthan is solely sand dunes; cities like Udaipur and Mount Abu feature dense forests, lakes, and hill climates.'
    ]
  },
  {
    id: 'transport-connectivity',
    title: '2. Transport & Getting Around',
    iconName: 'Compass',
    summary: 'Navigating between royal cities via high-speed express trains, modern expressways, and domestic flights.',
    keyPoints: [
      'Indian Railways: The most reliable and scenic way to travel between major cities. Trains like the Vande Bharat Express and Shatabdi link Delhi to Jaipur and Ajmer swiftly.',
      'Expressways: The new Delhi-Mumbai Expressway (NE-4) has brought driving time between Delhi and Jaipur down to under 4 hours.',
      'Intra-City Travel: App-based cabs (Uber and Ola) operate in Jaipur, Jodhpur, and Udaipur. In smaller towns, auto-rickshaws and tuk-tuks are common.'
    ],
    dos: [
      'Use the official IRCTC app or authorized booking portals to book 3rd AC or Executive Chair Car seats well in advance.',
      'Confirm the auto-rickshaw fare or ensure the meter is switched on before embarking on a journey where app cabs are unavailable.',
      'Carry small Indian Rupee cash notes (₹10, ₹20, ₹50, ₹100) for toll stops, parking, and small rural purchases.'
    ],
    donts: [
      'Never accept unsolicited rides from private drivers approaching you aggressively inside airport arrival halls or railway platforms.',
      'Do not drive on unfamiliar rural country roads after dark due to stray cattle and unlit vehicles.'
    ]
  },
  {
    id: 'clothing-packing',
    title: '3. Clothing & Packing Essentials',
    iconName: 'Shirt',
    summary: 'Dressing comfortably for arid daytime warmth, chilly desert evenings, and modest cultural expectations.',
    keyPoints: [
      'Daytime: Breathable, loose-fitting cotton or linen clothing that protects skin from the strong desert sun.',
      'Evenings: In winter (Nov–Feb), pack thermal inner layers, a windproof jacket, and a warm woolen scarf.',
      'Modesty: Respectful attire that covers shoulders and knees is appreciated in markets and strictly required at religious sanctuaries.'
    ],
    dos: [
      'Pack comfortable slip-on walking shoes; many temples require removing footwear at the entrance.',
      'Carry a lightweight cotton scarf (dupatta) to cover your head when entering active shrines and gurdwaras.',
      'Bring broad-spectrum SPF 50+ sunscreen, polarized sunglasses, and a wide-brimmed hat.'
    ],
    donts: [
      'Avoid wearing delicate heels or hard leather shoes on the steep, cobblestone ramps of medieval fortresses.',
      'Do not wear tight or revealing beachwear when walking through residential heritage quarters or pilgrimage towns like Pushkar and Ajmer.'
    ]
  },
  {
    id: 'cultural-etiquette',
    title: '4. Local Customs & Cultural Etiquette',
    iconName: 'HeartHandshake',
    summary: 'Embracing the gracious spirit of "Atithi Devo Bhava" (The Guest is God) with warmth and mutual respect.',
    keyPoints: [
      'Greetings: A warm "Namaste" with palms pressed together at chest level is the universally cherished greeting across Rajasthan.',
      'Religious Sites: Remove footwear, leather belts (in certain Jain temples), and ensure shoulders and knees are covered.',
      'Interaction: Always use your right hand when giving or receiving food, money, or temple prasad.'
    ],
    dos: [
      'Accept offered water or chai at shops; it is a sincere gesture of Rajasthani hospitality and does not obligate you to buy.',
      'Circumambulate temple sanctums in a clockwise direction (pradakshina).',
      'Learn a few polite Hindi/Rajasthani phrases like "Dhanyawad" (Thank you) or "Padharo Sa" (Welcome).'
    ],
    donts: [
      'Never touch religious idols, holy scriptures, or sacred temple bells with your feet.',
      'Do not engage with pushy roadside priests at Pushkar Lake who demand exorbitant fees for "puja threads"; legitimate blessings are freely given.'
    ]
  },
  {
    id: 'safety-responsible-tourism',
    title: '5. Safety & Responsible Tourism',
    iconName: 'ShieldCheck',
    summary: 'Staying alert, recognizing common tourist tout scams, and supporting local artisan communities ethically.',
    keyPoints: [
      'General Safety: Rajasthan is widely considered one of the safest states in India for solo and international travelers.',
      'Tourist Touts (Lapkas): Be vigilant around monument gates and railway stations where touts offer "special cheap gem deals" or "exclusive factory visits".',
      'Responsible Travel: Support local weavers, potters, and folk artists directly rather than buying factory-made mass souvenirs.'
    ],
    dos: [
      'Check that your tour guide holds an official identification badge issued by the Ministry of Tourism or State Department of Archaeology.',
      'Save the national 24/7 Tourist Helpline (1363) and Police Helpline (112) on your mobile phone.',
      'Carry a reusable insulated water bottle to minimize single-use plastic waste at fragile ecological and heritage sites.'
    ],
    donts: [
      'Never allow auto drivers to divert you to "government approved" textile emporiums claiming the place you requested is closed.',
      'Do not encourage child begging; instead, donate to verified educational charities or community schools.'
    ]
  },
  {
    id: 'food-water-hygiene',
    title: '6. Food & Water Hygiene Recommendations',
    iconName: 'Utensils',
    summary: 'Savoring delicious Rajasthani delicacies safely and avoiding digestive discomfort on the road.',
    keyPoints: [
      'Drinking Water: Always drink packaged sealed mineral water from reputed brands, or purified water from reputable hotel stations.',
      'Street Food: Eat at busy, high-turnover stalls where food is freshly cooked in front of you over piping hot oil or tandoors.',
      'Spice Tolerance: Rajasthani cuisine features bold chili and mustard oil. You can always ask cooks for "Kam Teekha" (mild spice).'
    ],
    dos: [
      'Try fresh yogurt-based drinks like buttermilk (chaas) or sweet lassi, which naturally aid digestive flora in arid heat.',
      'Wash hands thoroughly with soap or carry an alcohol-based hand sanitizer before eating.',
      'Eat freshly peeled fruits like bananas, oranges, and pomegranates rather than pre-cut roadside fruit platters.'
    ],
    donts: [
      'Do not consume untreated tap water, ice cubes made from unfiltered water, or salads washed in raw tap water at roadside stalls.',
      'Do not overeat rich ghee-laden dishes on your very first day; allow your digestion time to adjust gradually.'
    ]
  },
  {
    id: 'photography-heritage',
    title: '7. Photography & Heritage Etiquette',
    iconName: 'Camera',
    summary: 'Capturing unforgettable memories while respecting private citizens, sanctity, and monument conservation rules.',
    keyPoints: [
      'Permits: Most major monuments charge a nominal fee (₹50–₹100) for professional DSLRs; mobile phone cameras are usually free.',
      'Drones: Commercial and recreational drone flying is strictly prohibited around historic forts, military installations, and city centers without prior written permission from the DGCA and local police.',
      'Strict Restrictions: Interior sanctums of certain temples (like Dilwara in Mount Abu) strictly ban all cameras and phones.'
    ],
    dos: [
      'Always ask for verbal permission ("Aapki photo le sakte hain?") with a warm smile before photographing local residents or children.',
      'Respect the privacy of women bathing or performing rituals at holy lake ghats.',
      'Turn off camera flashes when photographing centuries-old wall paintings and delicate miniature frescoes to preserve ancient pigments.'
    ],
    donts: [
      'Never attempt to deface or carve initials into ancient sandstone ramparts or heritage walls.',
      'Do not violate drone regulations; penalties include confiscation of equipment and legal prosecution.'
    ]
  }
];
