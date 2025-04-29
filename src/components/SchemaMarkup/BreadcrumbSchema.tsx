import { FC } from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbSchemaProps {
  title: string;
}

export const BreadcrumbSchema: FC<BreadcrumbSchemaProps> = ({ title }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://zantravel.vercel.app'
      },
      ...pathSegments.map((segment, index) => ({
        '@type': 'ListItem',
        'position': index + 2,
        'name': index === pathSegments.length - 1 ? title : segment.charAt(0).toUpperCase() + segment.slice(1),
        'item': `https://zantravel.vercel.app/${pathSegments.slice(0, index + 1).join('/')}`
      }))
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(breadcrumbList)}
    </script>
  );
};
