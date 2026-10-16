export interface ImageCredit {
  url: string;
  alt: string;
  caption: string;
  photographer: string;
  sourceUrl?: string;
}

export type DestinationCategory = 'Heritage' | 'Desert' | 'Lakes' | 'Wildlife' | 'Spiritual' | 'Hill Station';

export interface Destination {
  id: string;
  slug: string;
  name: string;
  title: string; // e.g. "The Pink City"
  shortDescription: string;
  fullOverview: string;
  image: ImageCredit;
  gallery?: ImageCredit[];
  bestTimeToVisit: string;
  recommendedDuration: string;
  idealFor: string[];
  categories: DestinationCategory[];
  topAttractions: {
    name: string;
    description: string;
    timings?: string;
    estimatedEntry?: string;
  }[];
  culturalHighlights: string[];
  localDelicacy: string;
  howToReach: {
    air: string;
    rail: string;
    road: string;
  };
  insiderTip: string;
}

export type BlogCategory = 'City Guides' | 'Culture & Food' | 'Itineraries' | 'Budget & Planning' | 'Offbeat';

export interface BlogSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  calloutBox?: {
    type: 'tip' | 'history' | 'caution' | 'quote';
    title: string;
    content: string;
  };
  inlineImage?: ImageCredit;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  category: BlogCategory;
  tags: string[];
  publishedDate: string;
  readingTime: string;
  wordCount: number;
  featuredImage: ImageCredit;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  introduction: string;
  sections: BlogSection[];
  practicalTravelGuide: {
    bestTimeToVisit: string;
    idealDuration: string;
    approxBudgetCategory: 'Budget' | 'Mid-Range' | 'Luxury' | 'All Travelers';
    essentialItemsToPack: string[];
    topAdvice: string;
  };
  conclusion: string;
  sourcesAndReferences: string[];
  relatedSlugs: string[];
}

export interface TravelExperience {
  id: string;
  title: string;
  location: string;
  tag: string;
  priceIndicator: string;
  duration: string;
  description: string;
  image: ImageCredit;
}

export interface TravelTipCategory {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  keyPoints: string[];
  dos: string[];
  donts: string[];
}

export interface SavedItem {
  id: string;
  type: 'destination' | 'blog';
  title: string;
  slug: string;
  subtitle: string;
  imageUrl: string;
  addedAt: string;
}
