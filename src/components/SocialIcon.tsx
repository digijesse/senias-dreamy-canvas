import { Instagram, Linkedin } from "lucide-react";

interface SocialIconProps {
  type: 'instagram' | 'pinterest' | 'linkedin';
  href: string;
}

export const SocialIcon = ({ type, href }: SocialIconProps) => {
  const iconMap = {
    instagram: Instagram,
    pinterest: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.181 1.219-5.181s-.3-.6-.3-1.486c0-1.394.808-2.434 1.815-2.434.855 0 1.269.642 1.269 1.411 0 .859-.547 2.145-.828 3.337-.236.994.499 1.807 1.481 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.516 2.135-4.516 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.97-.527-2.297-1.178l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
      </svg>
    ),
    linkedin: Linkedin,
  };

  const Icon = iconMap[type];
  
  const colorClasses = {
    instagram: 'text-instagram hover:text-instagram/80',
    pinterest: 'text-pinterest hover:text-pinterest/80',
    linkedin: 'text-linkedin hover:text-linkedin/80',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        p-3 rounded-full bg-card/50 backdrop-blur-sm shadow-soft
        hover:shadow-dreamy hover:scale-110 
        transition-all duration-300 ease-out
        ${colorClasses[type]}
        group
      `}
    >
      <Icon className="w-6 h-6 group-hover:animate-gentle-pulse" />
    </a>
  );
};