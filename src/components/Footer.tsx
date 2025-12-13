import { Link } from 'react-router-dom';
import { Github, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Bruno-at', label: 'GitHub - SEKIGANDA GEORGE BRUNO', title: 'Follow Bruno on GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sekiganda-george-bruno', label: 'LinkedIn - Sekiganda George Bruno', title: 'Connect with Bruno on LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@bruno_dev', label: 'YouTube - Bruno Developer', title: 'Subscribe to Bruno on YouTube' },
];

const navLinks = [
  { name: 'Home', path: '/', title: 'SEKIGANDA GEORGE BRUNO - Home' },
  { name: 'About Bruno', path: '/about-bruno', title: 'About SEKIGANDA GEORGE BRUNO - Website Developer' },
  { name: 'Projects', path: '/projects-portfolio', title: 'Web Development Projects Portfolio' },
  { name: 'Services', path: '/services-web-app-developer', title: 'Website Development Services Uganda' },
  { name: 'Contact', path: '/contact', title: 'Contact Bruno - Hire Website Developer' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border" role="contentinfo">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4" title="SEKIGANDA GEORGE BRUNO - Website Developer">
              <span className="font-display font-bold text-2xl gradient-text">Bruno</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              <strong>SEKIGANDA GEORGE "BRUNO"</strong> — Professional Website Developer, App Builder & Programmer based in Kampala, Uganda. Building digital solutions that make a difference.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300"
                  aria-label={social.label}
                  title={social.title}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    title={link.title}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Website Developer</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary flex-shrink-0" aria-hidden="true" />
                <span>Kampala, Kyanja, Uganda</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary flex-shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:bruno@sekigandageorge.com" 
                  className="hover:text-primary transition-colors"
                  title="Email SEKIGANDA GEORGE BRUNO"
                >
                  bruno@sekigandageorge.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+256700000000" 
                  className="hover:text-primary transition-colors"
                  title="Call SEKIGANDA GEORGE BRUNO - Website Developer"
                >
                  +256 700 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} <strong>SEKIGANDA GEORGE "BRUNO"</strong> — Website Developer, App Builder, Programmer. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed by <span className="text-primary font-medium">SEKIGANDA GEORGE "BRUNO"</span> | Best Website Developer in Kampala, Uganda
          </p>
        </div>
      </div>
    </footer>
  );
}
