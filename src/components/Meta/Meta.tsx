import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface MetaProps {
  title: string;
  description: string;
  image?: string;
  canonicalUrl?: string;
  locale?: string;
}

const Meta: React.FC<MetaProps> = ({ 
  title, 
  description, 
  image,
  canonicalUrl = 'https://zantravel.vercel.app',
  locale = 'en_US'
}) => {
  const location = useLocation();
  const canonicalUrlProp = canonicalUrl || `https://zantravel.com${location.pathname}`;

  return (
    <Helmet>
      <html lang={locale} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrlProp} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrlProp} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Zantravel" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Additional SEO tags */}
      <meta name="keywords" content="zanzibar tours, travel zanzibar, stone town tours, safari blue, beach activities, zanzibar packages" />
      <meta name="author" content="Zantravel" />
      <meta name="geo.region" content="TZ-15" />
      <meta name="geo.placename" content="Zanzibar" />
      <meta name="geo.position" content="-6.165917;39.202641" />
      <meta name="ICBM" content="-6.165917, 39.202641" />
    </Helmet>
  );
};

export { Meta };
