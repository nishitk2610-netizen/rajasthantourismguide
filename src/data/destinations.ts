import { Destination } from '../types';
import { destinationImages } from './destinationImages';

export const destinationsData: Destination[] = [
  {
    id: 'jaipur',
    slug: 'jaipur',
    name: 'Jaipur',
    title: 'The Pink City',
    shortDescription: 'The royal capital of Rajasthan, celebrated for its terracotta-pink facades, astronomy observatories, and hill-cresting Mughal-Rajput citadels.',
    fullOverview: 'Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is India’s first planned city and a UNESCO World Heritage Site. Painted terracotta-pink in 1876 to welcome the Prince of Wales, the city seamlessly merges 18th-century grid architecture with bustling bazaars, hilltop fortresses, and opulent living royal palaces.',
    image: {
      url: destinationImages.jaipurHawaMahal.url,
      alt: destinationImages.jaipurHawaMahal.alt,
      caption: destinationImages.jaipurHawaMahal.caption,
      photographer: destinationImages.jaipurHawaMahal.photographer,
      sourceUrl: destinationImages.jaipurHawaMahal.sourcePage
    },
    gallery: [
      {
        url: destinationImages.jaipurAmberFort.url,
        alt: destinationImages.jaipurAmberFort.alt,
        caption: destinationImages.jaipurAmberFort.caption,
        photographer: destinationImages.jaipurAmberFort.photographer,
        sourceUrl: destinationImages.jaipurAmberFort.sourcePage
      },
      {
        url: destinationImages.jaipurCityPalace.url,
        alt: destinationImages.jaipurCityPalace.alt,
        caption: destinationImages.jaipurCityPalace.caption,
        photographer: destinationImages.jaipurCityPalace.photographer,
        sourceUrl: destinationImages.jaipurCityPalace.sourcePage
      },
      {
        url: destinationImages.jaipurJantarMantar.url,
        alt: destinationImages.jaipurJantarMantar.alt,
        caption: destinationImages.jaipurJantarMantar.caption,
        photographer: destinationImages.jaipurJantarMantar.photographer,
        sourceUrl: destinationImages.jaipurJantarMantar.sourcePage
      }
    ],
    bestTimeToVisit: 'October to March (Pleasant daytime highs 22°C–28°C; crisp winter evenings)',
    recommendedDuration: '3 to 4 Days',
    idealFor: ['Heritage Lovers', 'Architecture Aficionados', 'Textile & Gem Shoppers', 'Foodies'],
    categories: ['Heritage'],
    topAttractions: [
      {
        name: 'Amber Fort & Palace',
        description: 'Spectacular 16th-century fortress on the Cheel ka Teela hills, boasting the Sheesh Mahal (Mirror Palace) and panoramic lake views.',
        timings: '08:00 AM – 05:30 PM & 06:30 PM – 09:15 PM (Night Fort View)',
        estimatedEntry: '₹100 (Indian), ₹550 (Foreigner) [Composite ticket available]'
      },
      {
        name: 'Hawa Mahal (Palace of Winds)',
        description: 'Five-story red and pink sandstone structure with 953 delicately carved jharokhas designed for royal ladies to observe street life without being seen.',
        timings: '09:00 AM – 05:00 PM',
        estimatedEntry: '₹50 (Indian), ₹200 (Foreigner)'
      },
      {
        name: 'Jantar Mantar',
        description: 'UNESCO World Heritage 18th-century astronomical observatory featuring the world’s largest stone sundial, the Vrihat Samrat Yantra.',
        timings: '09:00 AM – 05:00 PM',
        estimatedEntry: '₹50 (Indian), ₹200 (Foreigner)'
      },
      {
        name: 'City Palace Complex',
        description: 'Living royal residence showcasing the Maharaja Sawai Man Singh II Museum, Mubarak Mahal, and the exquisite Peacock Gate.',
        timings: '09:30 AM – 05:00 PM',
        estimatedEntry: '₹300 (Indian Museum access), ₹700 (Foreigner)'
      }
    ],
    culturalHighlights: [
      'Jaipur Blue Pottery craftsmanship in Sanganer & Kot Jewar',
      'Hand-block printing workshops using natural vegetable dyes',
      'Evening Kathak and Rajasthani folk dances at Bagore Ki Haveli/local venues',
      'Johari Bazaar gemstone cutting and Kundan-Meenakari jewelry'
    ],
    localDelicacy: 'Pyaaz Kachori at Rawat Mishtan Bhandar & Royal Ghewar at LMB',
    howToReach: {
      air: 'Jaipur International Airport (JAI), 12 km from city center; daily direct flights to major Indian metro hubs and select Gulf destinations.',
      rail: 'Jaipur Junction (JP) receives premium superfast trains including Vande Bharat Express and Shatabdi from New Delhi (4.5 hrs).',
      road: 'Connected via NH-48 and Delhi–Mumbai Expressway (NE-4), cutting driving time from New Delhi to under 4 hours.'
    },
    insiderTip: 'Purchase the Department of Archaeology composite ticket at Amber Fort or Hawa Mahal to save both time and admission fees across five major state monuments.'
  },
  {
    id: 'udaipur',
    slug: 'udaipur',
    name: 'Udaipur',
    title: 'The City of Lakes',
    shortDescription: 'Regarded as the Venice of the East, Udaipur is nestled around shimmering Lake Pichola with whitewashed palaces and serene Aravali hill backdrops.',
    fullOverview: 'Founded in 1559 by Maharana Udai Singh II as the historic capital of the Mewar Kingdom, Udaipur is famous for its interconnected freshwater lakes, romantic lakeside ghats, marble palaces, and deep Rajput martial pride.',
    image: {
      url: destinationImages.udaipurLakePichola.url,
      alt: destinationImages.udaipurLakePichola.alt,
      caption: destinationImages.udaipurLakePichola.caption,
      photographer: destinationImages.udaipurLakePichola.photographer,
      sourceUrl: destinationImages.udaipurLakePichola.sourcePage
    },
    gallery: [
      {
        url: destinationImages.udaipurCityPalace.url,
        alt: destinationImages.udaipurCityPalace.alt,
        caption: destinationImages.udaipurCityPalace.caption,
        photographer: destinationImages.udaipurCityPalace.photographer,
        sourceUrl: destinationImages.udaipurCityPalace.sourcePage
      },
      {
        url: destinationImages.udaipurJagMandir.url,
        alt: destinationImages.udaipurJagMandir.alt,
        caption: destinationImages.udaipurJagMandir.caption,
        photographer: destinationImages.udaipurJagMandir.photographer,
        sourceUrl: destinationImages.udaipurJagMandir.sourcePage
      }
    ],
    bestTimeToVisit: 'September to March (Crisp post-monsoon greenery and pleasant lake breezes)',
    recommendedDuration: '3 Days',
    idealFor: ['Couples & Honeymooners', 'Photographers', 'Heritage Walkers', 'Artisanal Craft Collectors'],
    categories: ['Lakes', 'Heritage'],
    topAttractions: [
      {
        name: 'City Palace Udaipur',
        description: 'The largest palace complex in Rajasthan, built over 400 years with granite and marble balconies offering sweeping views of Lake Pichola.',
        timings: '09:00 AM – 05:30 PM',
        estimatedEntry: '₹400 (Adult entry to Museum)'
      },
      {
        name: 'Lake Pichola Boat Cruise & Jag Mandir',
        description: 'Scenic cruise passing the Lake Palace (Taj Lake Palace) and docking at the 17th-century island retreat of Jag Mandir.',
        timings: '10:00 AM – 06:00 PM',
        estimatedEntry: '₹550–₹850 (Boat ride + Island stop)'
      },
      {
        name: 'Saheliyon Ki Bari',
        description: 'Garden of the Maidens with marble elephants, lotus pools, and gravity-fed water fountains built for the queen and her royal attendants.',
        timings: '09:00 AM – 07:00 PM',
        estimatedEntry: '₹20 (Indian), ₹100 (Foreigner)'
      },
      {
        name: 'Sajjangarh (Monsoon Palace)',
        description: 'Palace set high on Bansdara mountain in the Aravali Range, legendary for watching dramatic monsoon clouds and sunset over Udaipur.',
        timings: '09:00 AM – 06:00 PM',
        estimatedEntry: '₹100 (Indian), ₹300 (Foreigner) + Forest vehicle toll'
      }
    ],
    culturalHighlights: [
      'Dharohar Folk Dance show at Bagore Ki Haveli every evening at 7:00 PM',
      'Mewar miniature painting tradition using squirrel hair brushes on silk and handmade paper',
      'Strolling along Gangaur Ghat at dawn for temple chimes and pigeon feeding rituals'
    ],
    localDelicacy: 'Authentic Mewari Dal Baati Churma cooked over dried cow dung cakes and hot charcoal, plus fresh Jalebi at Jagdish Chowk.',
    howToReach: {
      air: 'Maharana Pratap Airport (UDR), 22 km east of Udaipur, with daily flights to Mumbai, Delhi, Bengaluru, and Jaipur.',
      rail: 'Udaipur City Railway Station (UDZ) connects directly to New Delhi, Ahmedabad, Jaipur, and Kota.',
      road: 'Well connected via NH-48 and NH-58, ideal for scenic road trips from Mount Abu, Kumbhalgarh, and Jodhpur.'
    },
    insiderTip: 'Book the 5:00 PM sunset boat trip on Lake Pichola for the most magical golden hour light hitting the whitewashed havelis and the Aravali ridges.'
  },
  {
    id: 'jaisalmer',
    slug: 'jaisalmer',
    name: 'Jaisalmer',
    title: 'The Golden City',
    shortDescription: 'Rising like a mirage from the Thar Desert, Jaisalmer is famous for its living yellow sandstone fort, grand merchant havelis, and undulating sand dunes.',
    fullOverview: 'Founded in 1156 AD by the Bhati Rajput ruler Rawal Jaisal, Jaisalmer prospered as a crucial caravan waypoint along the ancient Silk Route. Its signature yellow sandstone glows rich honey-gold at dawn and dusk. The crowning jewel is the Sonar Qila (Golden Fort), one of the very few living forts in the world where thousands still reside inside the ramparts.',
    image: {
      url: destinationImages.jaisalmerSonarQila.url,
      alt: destinationImages.jaisalmerSonarQila.alt,
      caption: destinationImages.jaisalmerSonarQila.caption,
      photographer: destinationImages.jaisalmerSonarQila.photographer,
      sourceUrl: destinationImages.jaisalmerSonarQila.sourcePage
    },
    gallery: [
      {
        url: destinationImages.jaisalmerPatwonHaveli.url,
        alt: destinationImages.jaisalmerPatwonHaveli.alt,
        caption: destinationImages.jaisalmerPatwonHaveli.caption,
        photographer: destinationImages.jaisalmerPatwonHaveli.photographer,
        sourceUrl: destinationImages.jaisalmerPatwonHaveli.sourcePage
      },
      {
        url: destinationImages.jaisalmerSamDunes.url,
        alt: destinationImages.jaisalmerSamDunes.alt,
        caption: destinationImages.jaisalmerSamDunes.caption,
        photographer: destinationImages.jaisalmerSamDunes.photographer,
        sourceUrl: destinationImages.jaisalmerSamDunes.sourcePage
      }
    ],
    bestTimeToVisit: 'October to March (Desert daytime around 24°C; night temps drop to 5°C–8°C)',
    recommendedDuration: '2 to 3 Days',
    idealFor: ['Desert Adventurers', 'Stargazers', 'History Buffs', 'Folk Music Enthusiasts'],
    categories: ['Desert', 'Heritage'],
    topAttractions: [
      {
        name: 'Jaisalmer Fort (Sonar Qila)',
        description: 'UNESCO World Heritage living fort featuring seven ancient Jain temples, royal palace museum, and bustling alleyways lined with craft stalls.',
        timings: 'Open 24/7 (Palace museum: 09:00 AM – 06:00 PM)',
        estimatedEntry: 'Fort entry is free; Palace Museum ₹100 (Indian), ₹250 (Foreigner)'
      },
      {
        name: 'Patwon Ki Haveli',
        description: 'A cluster of five merchant residences built by Guman Chand Patwa, showcasing the most intricate stone lattice filigree in Rajasthan.',
        timings: '09:00 AM – 06:00 PM',
        estimatedEntry: '₹100 (Indian), ₹250 (Foreigner)'
      },
      {
        name: 'Sam & Khuri Sand Dunes',
        description: 'Vast sweeping sea of desert dunes 40 km west of town; popular for camel safaris, 4x4 dune bashing, and night glamping with folk music.',
        timings: 'Best between 04:00 PM – 09:00 AM next day',
        estimatedEntry: 'Camel safari approx ₹500–₹1,000; desert camp packages variable'
      },
      {
        name: 'Gadisar Lake',
        description: '14th-century rainwater reservoir surrounded by carved chhatris and pavilions, built by Maharawal Gadsi Singh.',
        timings: 'Open sunrise to sunset (Boating available)',
        estimatedEntry: 'Free entry; pedal boat ₹100–₹200'
      }
    ],
    culturalHighlights: [
      'Soulful Manganiyar and Langa musical performances with Kamaicha and Khartal instruments',
      'Annual Jaisalmer Desert Festival (February) with camel polo and turban tying competitions',
      'Ancient yellow fossil stone souvenirs and camel leather handicraft'
    ],
    localDelicacy: 'Ghotua Ladoo (authentic condensed milk sweet) and fiery Ker Sangri desert bean curry.',
    howToReach: {
      air: 'Jaisalmer Airport (JSA) operates seasonal winter domestic flights (Oct–March) to Delhi, Mumbai, and Jaipur.',
      rail: 'Jaisalmer Railway Station (JSM) connects directly to Delhi (via Runicha Express), Jaipur, and Jodhpur.',
      road: 'Smooth four-lane desert highways connect Jaisalmer with Jodhpur (285 km, 4.5 hrs) and Bikaner (330 km, 5.5 hrs).'
    },
    insiderTip: 'For a tranquil desert experience away from the noisy commercial safari crowds at Sam, consider the quieter dunes of Khuri or Barna village.'
  },
  {
    id: 'jodhpur',
    slug: 'jodhpur',
    name: 'Jodhpur',
    title: 'The Blue City',
    shortDescription: 'Guarded by the mighty cliff-top Mehrangarh Fort, Jodhpur charms with its ocean of indigo-painted houses, spice markets, and Marwar heritage.',
    fullOverview: 'Founded in 1459 by Rao Jodha of the Rathore clan, Jodhpur is the gateway to the Thar Desert and the historic heart of the Marwar Kingdom. The city is celebrated for its deep indigo Brahmin quarter, the imposing Mehrangarh Fort that towers 400 feet above the skyline, and mouth-watering street savories.',
    image: {
      url: destinationImages.jodhpurMehrangarh.url,
      alt: destinationImages.jodhpurMehrangarh.alt,
      caption: destinationImages.jodhpurMehrangarh.caption,
      photographer: destinationImages.jodhpurMehrangarh.photographer,
      sourceUrl: destinationImages.jodhpurMehrangarh.sourcePage
    },
    gallery: [
      {
        url: destinationImages.jodhpurJaswantThada.url,
        alt: destinationImages.jodhpurJaswantThada.alt,
        caption: destinationImages.jodhpurJaswantThada.caption,
        photographer: destinationImages.jodhpurJaswantThada.photographer,
        sourceUrl: destinationImages.jodhpurJaswantThada.sourcePage
      },
      {
        url: destinationImages.jodhpurBlueCity.url,
        alt: destinationImages.jodhpurBlueCity.alt,
        caption: destinationImages.jodhpurBlueCity.caption,
        photographer: destinationImages.jodhpurBlueCity.photographer,
        sourceUrl: destinationImages.jodhpurBlueCity.sourcePage
      }
    ],
    bestTimeToVisit: 'October to March (Warm sunny days and cool refreshing desert nights)',
    recommendedDuration: '2 to 3 Days',
    idealFor: ['History Enthusiasts', 'Adventure Seekers (Ziplining)', 'Street Photographers', 'Culinary Explorers'],
    categories: ['Heritage', 'Desert'],
    topAttractions: [
      {
        name: 'Mehrangarh Fort',
        description: 'One of India’s largest and best-preserved fortresses, featuring the Sheesh Mahal, Phool Mahal, palanquin gallery, and dramatic ramparts.',
        timings: '09:00 AM – 05:00 PM',
        estimatedEntry: '₹100 (Indian), ₹600 (Foreigner including audio guide)'
      },
      {
        name: 'Jaswant Thada',
        description: 'Exquisite 1899 white marble cenotaph built by Maharaja Sardar Singh in memory of his father, glowing warmly in morning sunlight.',
        timings: '09:00 AM – 05:00 PM',
        estimatedEntry: '₹30 (Indian), ₹50 (Foreigner)'
      },
      {
        name: 'Umaid Bhawan Palace',
        description: 'One of the world’s largest private royal residences, designed in Art Deco and Beaux-Arts styles by Henry Lanchester.',
        timings: '09:00 AM – 05:00 PM (Museum section)',
        estimatedEntry: '₹30 (Indian), ₹100 (Foreigner)'
      },
      {
        name: 'Ghanta Ghar (Clock Tower) & Sardar Market',
        description: 'Lively bustling center surrounded by triple-tier bazaars selling Mathania red chillies, spices, leather mojris, and handicrafts.',
        timings: '10:00 AM – 09:00 PM',
        estimatedEntry: 'Free entry'
      }
    ],
    culturalHighlights: [
      'Flying Fox zipline experience soaring over Mehrangarh’s moats and battlements',
      'Walking through the narrow labyrinthine Navchokiya blue-walled lanes with a local historian',
      'Bishnoi Village Safari exploring traditional conservation ethos and wildlife protection'
    ],
    localDelicacy: 'Mawa Kachori from Janta Sweet Home and authentic Mirchi Vada with sweet curd lassi.',
    howToReach: {
      air: 'Jodhpur Airport (JDH) operates regular daily flights to Delhi, Mumbai, Hyderabad, and Bengaluru.',
      rail: 'Jodhpur Junction (JU) is a primary railway hub connecting across northern and western India.',
      road: 'Centrally located on Rajasthan highway network, 250 km from Udaipur and 330 km from Jaipur.'
    },
    insiderTip: 'Climb up to Jaswant Thada at 8:30 AM before tourists arrive to photograph Mehrangarh Fort reflecting across the small lake with morning mist.'
  },
  {
    id: 'pushkar',
    slug: 'pushkar',
    name: 'Pushkar',
    title: 'The Holy Town',
    shortDescription: 'A spiritual oasis situated on the banks of a sacred lake with 52 ghats, housing one of the few dedicated Lord Brahma temples in the world.',
    fullOverview: 'Revered as Tirth Raj (the King of Pilgrim Sites), Pushkar is steeped in mythology. Legend holds that Lord Brahma dropped a lotus petal here to create the holy Pushkar Lake. The town vibrates with spiritual chanting, incense, vegan cafes, bohemian markets, and the globally celebrated annual Pushkar Camel Fair.',
    image: {
      url: destinationImages.pushkarLake.url,
      alt: destinationImages.pushkarLake.alt,
      caption: destinationImages.pushkarLake.caption,
      photographer: destinationImages.pushkarLake.photographer,
      sourceUrl: destinationImages.pushkarLake.sourcePage
    },
    gallery: [
      {
        url: destinationImages.pushkarBrahmaTemple.url,
        alt: destinationImages.pushkarBrahmaTemple.alt,
        caption: destinationImages.pushkarBrahmaTemple.caption,
        photographer: destinationImages.pushkarBrahmaTemple.photographer,
        sourceUrl: destinationImages.pushkarBrahmaTemple.sourcePage
      }
    ],
    bestTimeToVisit: 'October to March (Special highlight during Kartik Purnima / Camel Fair in Nov)',
    recommendedDuration: '1 to 2 Days',
    idealFor: ['Spiritual Pilgrims', 'Photographers', 'Backpackers', 'Cultural Enthusiasts'],
    categories: ['Spiritual', 'Heritage'],
    topAttractions: [
      {
        name: 'Brahma Temple (Jagatpita Brahma Mandir)',
        description: '14th-century temple with its distinct red spire and hansa (swan) motif, dedicated to the creator god Brahma.',
        timings: '06:00 AM – 01:30 PM & 03:00 PM – 09:00 PM',
        estimatedEntry: 'Free entry (Bags and phones must be deposited in lockers)'
      },
      {
        name: 'Pushkar Sacred Lake & 52 Ghats',
        description: 'Sacred water body where pilgrims perform ritual purification. Varaha, Brahma, and Gau Ghats are the most prominent.',
        timings: 'Open 24/7 (Morning and evening aartis are most auspicious)',
        estimatedEntry: 'Free entry (Beware of pushy flower priests offering blessing threads for high fees)'
      },
      {
        name: 'Savitri Devi Temple (Ratnagiri Hill)',
        description: 'Hilltop shrine offering panoramic 360-degree views of Pushkar town, the lake, and the Thar Desert sands. Accessible by stairs or cable car.',
        timings: '05:00 AM – 07:00 PM',
        estimatedEntry: 'Free entry; Ropeway return ticket approx ₹150'
      },
      {
        name: 'Pushkar Annual Camel Fair Ground',
        description: 'Site of the world-famous week-long mela featuring tens of thousands of decorated camels, horses, cattle traders, and folk dancers.',
        timings: 'Annual event in Kartik Purnima (October/November)',
        estimatedEntry: 'Free entry to public grounds'
      }
    ],
    culturalHighlights: [
      'Evening Maha Aarti at Varaha Ghat accompanied by conch shells and brass temple bells',
      'Rose farming tours: Pushkar is the largest producer of Damascus roses and pure Gulab Jal in India',
      'Sampling falafel and wood-fired pizza along the hippie market streets'
    ],
    localDelicacy: 'Famous Pushkar Malpua fried in pure desi ghee at Radhey Ji Halwai on Sadar Bazaar.',
    howToReach: {
      air: 'Kishangarh Airport (KQH) is 45 km away; Jaipur International Airport (JAI) is 145 km away.',
      rail: 'Ajmer Junction (AII) is the closest major railway hub, located just 14 km across the Snake Mountain pass (30 mins by taxi or local bus).',
      road: 'Scenic 3-hour drive from Jaipur via NH-48 or 4.5 hours from Jodhpur.'
    },
    insiderTip: 'Take the Savitri Temple ropeway at 5:30 AM to catch the sunrise glowing over the entire desert basin.'
  },
  {
    id: 'mount-abu',
    slug: 'mount-abu',
    name: 'Mount Abu',
    title: 'Rajasthan’s Hill Station',
    shortDescription: 'The solitary hill resort of Rajasthan, perched at 1,220 meters amidst cool Aravali pine forests, scenic Nakki Lake, and the Dilwara Jain Temples.',
    fullOverview: 'Mount Abu is Rajasthan’s only hill station, providing cool respite from desert heat since the era of the British Raj and Rajput kings. It is universally celebrated for the world-renowned 11th-to-13th century Dilwara Temples, carved with marble precision rivaling lace, as well as panoramic mountain viewpoints.',
    image: {
      url: destinationImages.mountAbuNakkiLake.url,
      alt: destinationImages.mountAbuNakkiLake.alt,
      caption: destinationImages.mountAbuNakkiLake.caption,
      photographer: destinationImages.mountAbuNakkiLake.photographer,
      sourceUrl: destinationImages.mountAbuNakkiLake.sourcePage
    },
    gallery: [
      {
        url: destinationImages.mountAbuDilwara.url,
        alt: destinationImages.mountAbuDilwara.alt,
        caption: destinationImages.mountAbuDilwara.caption,
        photographer: destinationImages.mountAbuDilwara.photographer,
        sourceUrl: destinationImages.mountAbuDilwara.sourcePage
      }
    ],
    bestTimeToVisit: 'Throughout the year; October to March for cool weather, July to September for misty monsoon greenery',
    recommendedDuration: '2 Days',
    idealFor: ['Nature Lovers', 'Couples', 'Architectural Pilgrims', 'Trekking Enthusiasts'],
    categories: ['Hill Station', 'Spiritual'],
    topAttractions: [
      {
        name: 'Dilwara Jain Temples',
        description: 'Five legendary marble temples (especially Vimal Vasahi and Luna Vasahi) celebrated globally for astonishing marble carving craftsmanship.',
        timings: '12:00 PM – 05:00 PM (Tourist hours; strictly no photography allowed inside)',
        estimatedEntry: 'Free entry'
      },
      {
        name: 'Nakki Lake',
        description: 'Sacred mythological lake believed to have been dug by the gods using their fingernails (nakh). Boasts pedal boating and scenic waterfront walks.',
        timings: '08:00 AM – 06:00 PM',
        estimatedEntry: 'Free entry; Boating ₹100–₹250'
      },
      {
        name: 'Guru Shikhar',
        description: 'The highest peak of the Aravali Range at 1,722 meters (5,650 ft), featuring the shrine of Guru Dattatreya and sweeping cloud vistas.',
        timings: '08:00 AM – 06:00 PM',
        estimatedEntry: 'Free entry'
      },
      {
        name: 'Toad Rock Viewpoint',
        description: 'A colossal naturally sculpted rock formation resembling a toad poised to leap into the lake, offering scenic views over the valley.',
        timings: 'Sunrise to Sunset',
        estimatedEntry: 'Free entry'
      }
    ],
    culturalHighlights: [
      'Brahma Kumaris World Spiritual University international headquarters and peace gardens',
      'Trekking trails through Mount Abu Wildlife Sanctuary to spot sloth bears and leopards',
      'Annual Mount Abu Summer Festival (May) and Winter Festival (December)'
    ],
    localDelicacy: 'Mount Abu special rabdi kulfi and warm Rajasthani spiced tea with roasted corn on the cob.',
    howToReach: {
      air: 'Udaipur Maharana Pratap Airport (185 km, 3.5 hrs drive) or Ahmedabad Sardar Vallabhbhai Patel Airport (225 km, 4.5 hrs).',
      rail: 'Abu Road Railway Station (ABR) is 28 km down the hill, connected by mainline trains on the Delhi–Ahmedabad railway corridor.',
      road: 'Scenic mountain ghat roads connect Abu Road to the hill town (approx 45 mins drive).'
    },
    insiderTip: 'Respect the strict photography ban inside Dilwara Temples; keep at least two quiet hours to observe the marble ceilings up close without rush.'
  },
  {
    id: 'bikaner',
    slug: 'bikaner',
    name: 'Bikaner',
    title: 'The Desert Heritage City',
    shortDescription: 'Famed for its unvanquished Junagarh Fort, ancient merchant havelis, camel research sanctuary, and world-renowned bhujia and sweets.',
    fullOverview: 'Founded in 1488 by Rao Bika, a Rathore prince, Bikaner is a quintessential desert oasis renowned for its red sandstone palaces, unbroken defensive fortresses, and vibrant culinary traditions. Unlike many other forts in Rajasthan built atop hills, Junagarh Fort is uniquely built on the desert plains yet was never conquered.',
    image: {
      url: destinationImages.bikanerJunagarh.url,
      alt: destinationImages.bikanerJunagarh.alt,
      caption: destinationImages.bikanerJunagarh.caption,
      photographer: destinationImages.bikanerJunagarh.photographer,
      sourceUrl: destinationImages.bikanerJunagarh.sourcePage
    },
    bestTimeToVisit: 'October to March (Ideal for exploring fortresses and the January Camel Festival)',
    recommendedDuration: '2 Days',
    idealFor: ['Foodies (Bhujia & Sweets)', 'Desert Explorers', 'Fort Architecture Seekers', 'Offbeat Travelers'],
    categories: ['Heritage', 'Desert'],
    topAttractions: [
      {
        name: 'Junagarh Fort & Prachina Museum',
        description: 'Impregnable 16th-century fortress complex housing Anup Mahal, Karan Mahal, Badal Mahal with painted blue cloud frescoes, and antique weapons.',
        timings: '10:00 AM – 04:30 PM',
        estimatedEntry: '₹50 (Indian), ₹300 (Foreigner)'
      },
      {
        name: 'Karni Mata Temple (Deshnoke)',
        description: 'Famous 600-year-old temple 30 km from Bikaner where over 25,000 revered black rats (kabbas) are protected and worshipped as ancestors.',
        timings: '04:00 AM – 10:00 PM',
        estimatedEntry: 'Free entry (Camera ticket ₹30–₹50)'
      },
      {
        name: 'National Research Centre on Camel',
        description: 'Asia’s premier camel breeding and research facility where visitors can learn about desert breeds and taste fresh camel milk kulfi.',
        timings: '02:00 PM – 06:00 PM',
        estimatedEntry: '₹50 (Indian), ₹150 (Foreigner)'
      },
      {
        name: 'Rampuria Havelis',
        description: 'Stunning cluster of Dulmera red sandstone havelis featuring Victorian, Mughal, and Rajput architectural synthesis.',
        timings: 'Exterior view open all hours',
        estimatedEntry: 'Free exterior walking view'
      }
    ],
    culturalHighlights: [
      'Bikaner Camel Festival held every January with camel dances, beauty pageants, and acrobatics',
      'Usta Art: exquisite gold leaf embossing on camel leather and wooden artifacts',
      'Traditional Bikaneri Bhujia cottage industry using moth dal flour and desert spices'
    ],
    localDelicacy: 'Authentic Bikaneri Bhujia, Rasgullas, and savory Khasta Kachori from Chhappan Bhog.',
    howToReach: {
      air: 'Bikaner Civil Airport (BKB) has limited seasonal flights; Jaipur Airport (330 km) and Jodhpur Airport (250 km) are standard gateways.',
      rail: 'Bikaner Junction (BKN) is well connected to Delhi, Kolkata, Mumbai, and Jaipur.',
      road: 'Well-paved national highways NH-11 and NH-62 provide direct connectivity to Jaisalmer, Jodhpur, and Jaipur.'
    },
    insiderTip: 'Take an early morning walking tour through the old town to admire the Rampuria Havelis when the narrow lanes are quiet and bathed in soft morning light.'
  },
  {
    id: 'chittorgarh',
    slug: 'chittorgarh',
    name: 'Chittorgarh',
    title: 'The Land of Rajput Valour',
    shortDescription: 'The epicenter of Mewar courage, sacrifice, and romance, crowned by India’s largest fort complex perched high above the Gambhiri River plains.',
    fullOverview: 'Chittorgarh embodies the heroic spirit of the Rajputs. Spread across a 700-acre hill site, the fort witnessed three legendary sieges and the supreme sacrifices of Jauhar led by Rani Padmini and Rani Karnavati. The sprawling fortress contains 65 historic structures including grand palaces, nine temples, and victory towers.',
    image: {
      url: destinationImages.chittorgarhFort.url,
      alt: destinationImages.chittorgarhFort.alt,
      caption: destinationImages.chittorgarhFort.caption,
      photographer: destinationImages.chittorgarhFort.photographer,
      sourceUrl: destinationImages.chittorgarhFort.sourcePage
    },
    bestTimeToVisit: 'September to March (Winter months are ideal for walking across the extensive fort grounds)',
    recommendedDuration: '1 to 2 Days',
    idealFor: ['History Enthusiasts', 'Epic Tale Seekers', 'Architecture Photographers', 'Mewar Heritage Buffs'],
    categories: ['Heritage'],
    topAttractions: [
      {
        name: 'Chittorgarh Fort (UNESCO World Heritage)',
        description: 'Largest fort in India, surrounded by steep natural cliffs and seven monumental gates (pols) commemorating fallen warriors Jaimal and Patta.',
        timings: '09:00 AM – 05:00 PM',
        estimatedEntry: '₹40 (Indian), ₹600 (Foreigner)'
      },
      {
        name: 'Vijay Stambha (Tower of Victory)',
        description: 'Erected by Maharana Kumbha in 1448 to commemorate victory over Mahmud Khilji, featuring 9 intricately sculpted stories depicting Hindu deities.',
        timings: '09:00 AM – 05:00 PM',
        estimatedEntry: 'Included in Fort entry'
      },
      {
        name: 'Padmini’s Palace & Water Pavilion',
        description: 'Legendary palace where Sultan Alauddin Khilji was reputedly permitted to glimpse the reflection of Queen Padmini in a mirror across the lotus pool.',
        timings: '09:00 AM – 05:00 PM',
        estimatedEntry: 'Included in Fort entry'
      },
      {
        name: 'Kirti Stambha (Tower of Fame)',
        description: '12th-century 22-meter tower dedicated to Adinatha, the first Jain Tirthankara, decorated with standing figures of the Tirthankaras.',
        timings: '09:00 AM – 05:00 PM',
        estimatedEntry: 'Included in Fort entry'
      }
    ],
    culturalHighlights: [
      'Evening Sound and Light Show recounting the tales of Maharana Pratap, Meera Bai, and Rani Padmini',
      'Meera Bai Temple dedicated to the saint-poetess who renounced royalty for devotion to Lord Krishna',
      'Gaumukh Reservoir: naturally emerging spring pouring water from a carved cow’s mouth'
    ],
    localDelicacy: 'Traditional Mewari Kadhi with steamed rice and local sweet Gulab Halwa.',
    howToReach: {
      air: 'Maharana Pratap Airport in Udaipur is 90 km away (1.5 hrs drive along NH-27).',
      rail: 'Chittaurgarh Junction (COR) is a major junction connected to Jaipur, Kota, Delhi, Mumbai, and Ahmedabad.',
      road: 'Positioned conveniently on the Golden Quadrilateral (NH-48), easily combined on a route between Jaipur, Ajmer, and Udaipur.'
    },
    insiderTip: 'Because Chittorgarh Fort is over 5 kilometers long from north to south, hire an authorized auto-rickshaw or guide with vehicle inside the gate rather than attempting to walk the entire perimeter on foot in the sun.'
  },
  {
    id: 'ranthambore',
    slug: 'ranthambore',
    name: 'Ranthambore',
    title: 'Wildlife and Tiger Safaris',
    shortDescription: 'One of northern India’s finest tiger reserves, where royal Bengal tigers roam among the atmospheric ruins of ancient stone pavilions and lakeside palaces.',
    fullOverview: 'Located where the Aravali and Vindhya ranges converge in Sawai Madhopur, Ranthambore National Park is famous across the globe for diurnal tiger sightings. Royal Bengal tigers frequently stroll past 1,000-year-old fort ramparts, banyan trees, and lotus-choked lakes like Padam Talao.',
    image: {
      url: destinationImages.ranthamboreWildlife.url,
      alt: destinationImages.ranthamboreWildlife.alt,
      caption: destinationImages.ranthamboreWildlife.caption,
      photographer: destinationImages.ranthamboreWildlife.photographer,
      sourceUrl: destinationImages.ranthamboreWildlife.sourcePage
    },
    gallery: [
      {
        url: destinationImages.ranthamboreFort.url,
        alt: destinationImages.ranthamboreFort.alt,
        caption: destinationImages.ranthamboreFort.caption,
        photographer: destinationImages.ranthamboreFort.photographer,
        sourceUrl: destinationImages.ranthamboreFort.sourcePage
      }
    ],
    bestTimeToVisit: 'October to June (Park closed July–September for monsoon); best tiger sightings March–May',
    recommendedDuration: '2 to 3 Days (Book at least 3–4 safaris to maximize sighting chances)',
    idealFor: ['Wildlife Photographers', 'Nature Enthusiasts', 'Adventure Travelers', 'Birdwatchers'],
    categories: ['Wildlife', 'Heritage'],
    topAttractions: [
      {
        name: 'Tiger Safaris (Zones 1 to 10)',
        description: 'Morning and afternoon game drives in open 6-seater gypsies or 20-seater canters through core and buffer forest habitats.',
        timings: 'Morning: 06:30 AM – 10:00 AM; Afternoon: 02:30 PM – 06:00 PM (times adjust seasonally)',
        estimatedEntry: 'Gypsy safari ₹1,500–₹2,200 per seat (Indian), Canter ₹800–₹1,200 per seat'
      },
      {
        name: 'Ranthambore Fort (UNESCO World Heritage)',
        description: '10th-century fortress standing 700 feet above the forest canopy, featuring the renowned Trinetra Ganesha Temple and scenic vistas of lake zones.',
        timings: '06:00 AM – 06:00 PM',
        estimatedEntry: 'Free entry (Vehicle entry charges apply to park gate)'
      },
      {
        name: 'Padam Talao & Rajbagh Lake',
        description: 'The largest of the park’s lakes, overlooked by the historic Jogi Mahal and a massive banyan tree considered the second largest in India.',
        timings: 'Accessed during jungle safari drives in Zones 3 and 4',
        estimatedEntry: 'Safari ticket required'
      },
      {
        name: 'Sawai Madhopur Bird Watching',
        description: 'Home to over 300 bird species including crested serpent eagles, painted storks, white-throated kingfishers, and Indian peafowls.',
        timings: 'Dawn and dusk',
        estimatedEntry: 'Safari or guided walk'
      }
    ],
    culturalHighlights: [
      'Trinetra Ganesha Temple inside the fort where thousands of wedding invitations from all over India are sent daily to seek blessings',
      'Dastkar Ranthambore artisan cooperative empowering local village women through tie-dye and block print crafts',
      'Conservation awareness interactions with forest naturalists'
    ],
    localDelicacy: 'Chilli paneer, fresh local bajre ki roti with garlic chutney, and Guava fruit from Sawai Madhopur orchards.',
    howToReach: {
      air: 'Jaipur International Airport is 160 km away (approx 3.5 hrs by taxi or express bus).',
      rail: 'Sawai Madhopur Junction (SWM) is the primary railhead, just 12 km from the park entrance, serviced by major Delhi–Mumbai Rajdhani trains.',
      road: 'Easily accessible from Jaipur (160 km) and Agra (260 km) via smooth state and national highways.'
    },
    insiderTip: 'Book your jungle safari permits online through the official Rajasthan forest portal months in advance, especially for high-demand core zones 1 through 5.'
  },
  {
    id: 'ajmer',
    slug: 'ajmer',
    name: 'Ajmer',
    title: 'Spiritual and Cultural Heritage',
    shortDescription: 'A revered pilgrimage center crowned by the Sufi shrine of Khwaja Moinuddin Chishti, the historic Taragarh Fort, and peaceful Ana Sagar Lake.',
    fullOverview: 'Founded in the 7th century AD by Raja Ajaypal Chauhan, Ajmer is a focal point of communal harmony and deep spiritual devotion. Nestled in a valley enclosed by the Aravali hills, it draws millions of pilgrims of all faiths to the world-renowned Ajmer Sharif Dargah, alongside magnificent Mughal pavilions and Indo-Islamic monuments.',
    image: {
      url: destinationImages.ajmerDargah.url,
      alt: destinationImages.ajmerDargah.alt,
      caption: destinationImages.ajmerDargah.caption,
      photographer: destinationImages.ajmerDargah.photographer,
      sourceUrl: destinationImages.ajmerDargah.sourcePage
    },
    gallery: [
      {
        url: destinationImages.ajmerAnaSagar.url,
        alt: destinationImages.ajmerAnaSagar.alt,
        caption: destinationImages.ajmerAnaSagar.caption,
        photographer: destinationImages.ajmerAnaSagar.photographer,
        sourceUrl: destinationImages.ajmerAnaSagar.sourcePage
      }
    ],
    bestTimeToVisit: 'October to March (Comfortable walking weather and vibrant festive ambiance)',
    recommendedDuration: '1 to 2 Days',
    idealFor: ['Spiritual Pilgrims', 'Sufi Devotees', 'History Buffs', 'Heritage Walkers'],
    categories: ['Spiritual', 'Heritage'],
    topAttractions: [
      {
        name: 'Ajmer Sharif Dargah',
        description: 'The sanctum sanctorum of Sufi saint Khwaja Moinuddin Chishti, featuring silver doors, marble courtyards, and gigantic cauldrons (degs) for langar distribution.',
        timings: '05:00 AM – 09:00 PM (Closes briefly in early afternoon for cleaning)',
        estimatedEntry: 'Free entry (Modest dress mandatory; heads must be covered)'
      },
      {
        name: 'Ana Sagar Lake & Baradari Pavilions',
        description: '12th-century artificial lake created by Anaji Chauhan, lined with five gleaming white marble pavilions built by Mughal Emperor Shah Jahan.',
        timings: '08:00 AM – 08:00 PM',
        estimatedEntry: 'Free entry to lakeside gardens; boating available'
      },
      {
        name: 'Adhai Din Ka Jhonpra',
        description: 'Extraordinary mosque constructed in 1192 CE by Qutb-ud-din Aibak over remnants of an ancient Sanskrit college, featuring 10 intricately carved arched screens.',
        timings: '06:00 AM – 07:00 PM',
        estimatedEntry: 'Free entry'
      },
      {
        name: 'Taragarh Fort',
        description: 'One of the oldest hill forts in India perched 800 feet above the town, commanding defensive views over the entire Ajmer pass.',
        timings: '08:00 AM – 06:00 PM',
        estimatedEntry: 'Free entry'
      }
    ],
    culturalHighlights: [
      'Soul-stirring Qawwali sessions sung at the Mehfil Khana inside the Dargah after evening Maghrib prayers',
      'The annual Urs festival commemorating the saint’s union with the divine, bringing Sufi masters from across the globe',
      'Nasiyan Jain Temple (Golden Temple) housing an astonishing gold-plated wooden model of Ayodhya'
    ],
    localDelicacy: 'Ajmer special Sohan Halwa from ancient sweet shops outside the Dargah and fragrant Mutton Biryani.',
    howToReach: {
      air: 'Kishangarh Airport (KQH) is 30 km away with regional connections; Jaipur Airport is 135 km away.',
      rail: 'Ajmer Junction (AII) is a premier station on the Western Railway network with regular Shatabdi and Vande Bharat connections to Delhi and Jaipur.',
      road: 'Located right off NH-48, well connected by luxury buses and express taxis from Jaipur (2 hrs) and Jodhpur (4 hrs).'
    },
    insiderTip: 'Carry a scarf or handkerchief to cover your head when visiting the Dargah, and deposit footwear at authorized counters rather than leaving them unattended in the outer lanes.'
  }
];
