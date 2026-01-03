import { Twitter, Youtube, Linkedin, MapPin, ExternalLink, Award } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const socialLinks: SocialLink[] = [
  {
    name: 'X (Twitter)',
    url: 'https://x.com/AntekAutomation',
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@AntekAutomation',
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/antek-automation',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: 'Google Business',
    url: 'https://maps.app.goo.gl/XwJc5GwJvMBSJrG4A',
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    name: 'Crunchbase',
    url: 'https://www.crunchbase.com/organization/antek-automation',
    icon: <ExternalLink className="w-5 h-5" />,
  },
  {
    name: 'Retell AI Partner',
    url: 'https://www.retellai.com/partner/antek-automation',
    icon: <Award className="w-5 h-5" />,
  },
];

interface SocialLinksProps {
  variant?: 'footer' | 'page';
  showLabels?: boolean;
}

export function SocialLinks({ variant = 'footer', showLabels = true }: SocialLinksProps) {
  const isFooter = variant === 'footer';

  return (
    <div className={`flex flex-wrap gap-4 ${isFooter ? 'justify-start' : 'justify-center md:justify-start'}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex items-center space-x-2 px-4 py-2.5
            ${isFooter ? 'bg-charcoal text-off-white hover:bg-off-white hover:text-charcoal' : 'bg-off-white text-charcoal hover:bg-charcoal hover:text-off-white'}
            border-3 border-charcoal shadow-brutal-xs
            hover:shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5
            transition-all duration-200 font-bold text-sm uppercase
          `}
          aria-label={link.name}
        >
          {link.icon}
          {showLabels && <span className="whitespace-nowrap">{link.name}</span>}
        </a>
      ))}
    </div>
  );
}
