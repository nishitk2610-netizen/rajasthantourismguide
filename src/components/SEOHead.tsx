import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  schema?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  ogImage = 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
  schema
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to set or create meta tag
    const setMeta = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);

    // 3. OpenGraph Tags
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', ogImage);
    const origin = window.location.origin;
    const fullUrl = `${origin}${canonicalPath.startsWith('/') ? canonicalPath : '/' + canonicalPath}`;
    setMeta('property', 'og:url', fullUrl);
    setMeta('property', 'og:type', canonicalPath.includes('blog') ? 'article' : 'website');

    // 4. Twitter Cards
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);
    setMeta('name', 'twitter:card', 'summary_large_image');

    // 5. Canonical Link Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // 6. Structured Data (JSON-LD)
    const scriptId = 'seo-dynamic-jsonld';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }

    if (schema) {
      script.textContent = JSON.stringify(schema);
    } else {
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Explore Rajasthan',
        url: origin,
        description: description
      });
    }

    return () => {
      // Clean up dynamic script when unmounting/changing
    };
  }, [title, description, canonicalPath, ogImage, schema]);

  return null;
};
