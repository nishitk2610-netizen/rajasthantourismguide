import { TravelExperience } from '../types';
import { destinationImages } from './destinationImages';

export const travelExperiences: TravelExperience[] = [
  {
    id: 'thar-desert-glamping',
    title: 'Luxury Desert Glamping & Stargazing',
    location: 'Sam & Khuri Dunes, Jaisalmer',
    tag: 'Desert Adventure',
    priceIndicator: '₹3,500 – ₹7,000 / night',
    duration: 'Overnight Experience',
    description: 'Ride across sweeping wind-sculpted sand dunes on camelback as the sunset paints the sky in shades of saffron. Spend the evening around a crackling bonfire listening to soulful Manganiyar folk singers, followed by a night under an unpolluted canopy of desert stars.',
    image: {
      url: destinationImages.jaisalmerSamDunes.url,
      alt: destinationImages.jaisalmerSamDunes.alt,
      caption: destinationImages.jaisalmerSamDunes.caption,
      photographer: destinationImages.jaisalmerSamDunes.photographer,
      sourceUrl: destinationImages.jaisalmerSamDunes.sourcePage
    }
  },
  {
    id: 'lake-pichola-cruise',
    title: 'Royal Sunset Cruise on Lake Pichola',
    location: 'Lake Pichola, Udaipur',
    tag: 'Romantic Heritage',
    priceIndicator: '₹550 – ₹850 / person',
    duration: '1.5 Hours',
    description: 'Glide gently across the calm mirror waters of Lake Pichola at golden hour. Float past the marble facade of the City Palace, gaze upon the floating Taj Lake Palace, and disembark at the 17th-century island sanctuary of Jag Mandir for tea.',
    image: {
      url: destinationImages.udaipurLakePichola.url,
      alt: destinationImages.udaipurLakePichola.alt,
      caption: destinationImages.udaipurLakePichola.caption,
      photographer: destinationImages.udaipurLakePichola.photographer,
      sourceUrl: destinationImages.udaipurLakePichola.sourcePage
    }
  },
  {
    id: 'ranthambore-tiger-safari',
    title: 'Bengal Tiger Wilderness Game Safari',
    location: 'Ranthambore National Park, Sawai Madhopur',
    tag: 'Wildlife Expedition',
    priceIndicator: '₹1,500 – ₹2,200 / person',
    duration: '3.5 Hours',
    description: 'Venture into the dense dry deciduous forests and ancient stone ruins in an open 4x4 safari gypsy. Track the legendary Bengal Tigers alongside leopards, marsh crocodiles, and sambar deer in their natural sanctuary.',
    image: {
      url: destinationImages.ranthamboreWildlife.url,
      alt: destinationImages.ranthamboreWildlife.alt,
      caption: destinationImages.ranthamboreWildlife.caption,
      photographer: destinationImages.ranthamboreWildlife.photographer,
      sourceUrl: destinationImages.ranthamboreWildlife.sourcePage
    }
  },
  {
    id: 'mehrangarh-zipline',
    title: 'Flying Fox Zipline Across Battlements',
    location: 'Mehrangarh Fort, Jodhpur',
    tag: 'Aerial Adventure',
    priceIndicator: '₹1,800 – ₹2,200 / person',
    duration: '2 Hours (6 Zip Wires)',
    description: 'Soar through the skies on a circuit of six high-velocity zip wires suspended over fort moats, desert lakes, and the colossal 500-year-old defensive walls of Mehrangarh, with unmatched views of the Blue City below.',
    image: {
      url: destinationImages.jodhpurMehrangarh.url,
      alt: destinationImages.jodhpurMehrangarh.alt,
      caption: destinationImages.jodhpurMehrangarh.caption,
      photographer: destinationImages.jodhpurMehrangarh.photographer,
      sourceUrl: destinationImages.jodhpurMehrangarh.sourcePage
    }
  },
  {
    id: 'rajasthani-culinary-banquet',
    title: 'Royal Thali & Cultural Folk Night',
    location: 'Jaipur & Jodhpur',
    tag: 'Culinary & Culture',
    priceIndicator: '₹800 – ₹1,600 / person',
    duration: '3 Hours',
    description: 'Savor an unlimited feast of authentic Dal Baati Churma, Ker Sangri, and Gatte Ki Sabzi served in traditional kansa bronze plates, accompanied by fire-eating folk dancers, puppet theater, and traditional pottery demonstrations.',
    image: {
      url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
      alt: 'Traditional authentic Rajasthani thali feast with lentils and ghee flatbreads',
      caption: 'Lavish traditional thali meal prepared with pure desi ghee.',
      photographer: 'Anil Sharma',
      sourceUrl: 'https://unsplash.com'
    }
  },
  {
    id: 'pushkar-spiritual-aarti',
    title: 'Ghat Maha Aarti & Sacred Lake Walk',
    location: 'Varaha & Brahma Ghats, Pushkar',
    tag: 'Spiritual Heritage',
    priceIndicator: 'Free / Donations Welcome',
    duration: '1.5 Hours',
    description: 'Witness the evening Maha Aarti at Pushkar Lake as temple bells chime in unison, camphor flames flicker against the water, and pilgrims gently float earthen oil lamps (diyas) onto the sacred waters under the dusk sky.',
    image: {
      url: destinationImages.pushkarLake.url,
      alt: destinationImages.pushkarLake.alt,
      caption: destinationImages.pushkarLake.caption,
      photographer: destinationImages.pushkarLake.photographer,
      sourceUrl: destinationImages.pushkarLake.sourcePage
    }
  }
];
