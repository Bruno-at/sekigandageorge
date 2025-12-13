import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

const BASE_URL = 'https://sekigandageorge.com';

const defaultKeywords = 
  'Sekiganda George Bruno, Sekiganda Bruno, Sekigenda George, Sekigenda Bruno, George Bruno, ' +
  'Website Developer, Web Designer, App Developer, App Builder, Programmer, Software Developer Uganda, ' +
  'Django Developer, Python Developer, Freelance Website Developer Uganda, Mobile App Backend Developer, ' +
  'Best Website Developer in Kampala, Website Developer Uganda, Web Developer Kampala, ' +
  'React Developer Uganda, JavaScript Developer Africa, Full Stack Developer Kampala';

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "SEKIGANDA GEORGE \"BRUNO\"",
  "alternateName": [
    "Sekiganda Bruno",
    "Sekigenda George",
    "Sekigenda Bruno",
    "George Bruno",
    "Bruno"
  ],
  "jobTitle": "Website Developer, App Builder, Programmer",
  "description": "Website developer, app builder, software developer, and Django/Python programmer based in Kampala, Uganda. Specializing in website development, web design, e-commerce systems, and mobile app backend development.",
  "url": BASE_URL,
  "image": `${BASE_URL}/bruno-profile.jpg`,
  "telephone": "+256700000000",
  "email": "bruno@sekigandageorge.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kyanja",
    "addressLocality": "Kampala",
    "addressRegion": "Central Region",
    "addressCountry": "UG"
  },
  "sameAs": [
    "https://github.com/Bruno-at",
    "https://www.linkedin.com/in/sekiganda-george-bruno",
    "https://www.youtube.com/@bruno_dev",
    "https://facebook.com/sekigandageorgebruno"
  ],
  "knowsAbout": [
    "Website Development",
    "Web Design",
    "Python Programming",
    "Django Framework",
    "JavaScript",
    "React",
    "E-Commerce Development",
    "Mobile App Backend",
    "API Development",
    "Database Design"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SEKIGANDA GEORGE BRUNO - Website Developer & Programmer",
  "alternateName": "Bruno Web Developer",
  "url": BASE_URL,
  "description": "Professional website developer, app builder, and programmer based in Kampala, Uganda",
  "author": personSchema
};

export function SEOHead({
  title = 'SEKIGANDA GEORGE "BRUNO" | Website Developer, App Builder, Programmer in Uganda',
  description = "SEKIGANDA GEORGE 'BRUNO' (Sekiganda Bruno, Sekigenda George) is a website developer, app builder, and Python/Django programmer based in Kampala, Uganda. Skilled in HTML, CSS, JavaScript, Python, Django, and React. Available for website development, app development, e-commerce systems, and custom software solutions. Best website developer in Kampala.",
  keywords = defaultKeywords,
  canonicalUrl = BASE_URL,
  ogImage = `${BASE_URL}/og-image.jpg`,
  ogType = 'website',
  noIndex = false,
}: SEOHeadProps) {
  const fullTitle = title.includes('SEKIGANDA') ? title : `${title} | SEKIGANDA GEORGE "BRUNO"`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SEKIGANDA GEORGE BRUNO" />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_UG" />
      <meta property="og:site_name" content="SEKIGANDA GEORGE BRUNO - Website Developer" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="UG-102" />
      <meta name="geo.placename" content="Kampala" />
      <meta name="geo.position" content="0.3476;32.5825" />
      <meta name="ICBM" content="0.3476, 32.5825" />

      {/* JSON-LD Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}

export { personSchema, websiteSchema, defaultKeywords, BASE_URL };
