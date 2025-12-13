import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Github, Linkedin, Youtube, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { SEOHead } from '@/components/SEOHead';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kampala, Kyanja, Uganda',
    href: null,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'brunog0745090566@gmail.com',
    href: 'mailto:brunog0745090566@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+256 708 434 656',
    href: 'tel:+256708434656',
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/Bruno-at', label: 'GitHub - SEKIGANDA GEORGE BRUNO', title: 'Follow Bruno on GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sekiganda-george-bruno', label: 'LinkedIn - Sekiganda George Bruno', title: 'Connect with Bruno on LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@bruno_dev', label: 'YouTube - Bruno Developer', title: 'Subscribe to Bruno on YouTube' },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. SEKIGANDA GEORGE BRUNO will get back to you within 1-2 business days.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <>
      <SEOHead 
        title="Contact SEKIGANDA GEORGE BRUNO | Hire Website Developer Uganda"
        description="Contact SEKIGANDA GEORGE 'BRUNO' - professional website developer, app builder, and programmer in Kampala, Uganda. Get a free quote for your web development project. Email: brunog0745090566@gmail.com. Best freelance website developer in Uganda."
        canonicalUrl="https://sekigandageorge.com/contact"
        keywords="contact Bruno developer, hire website developer Uganda, contact Sekiganda George, web developer Kampala contact, freelance programmer Uganda hire, get quote website development"
      />

      {/* Header Section */}
      <section className="section-padding pt-32" aria-labelledby="contact-heading">
        <div className="container-custom">
          <SectionHeading
            badge="Get in Touch"
            title="Contact SEKIGANDA GEORGE BRUNO"
            description="Have a website project in mind or just want to say hello? I'd love to hear from you. Let's discuss how I can help with your web development needs."
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding pt-0" aria-label="Contact information and form">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <div className="glass-card p-8">
                  <h2 className="font-display font-semibold text-2xl text-foreground mb-6">
                    Let's Connect
                  </h2>

                  <div className="space-y-6 mb-8">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-foreground hover:text-primary transition-colors font-medium"
                              title={`${item.label} - SEKIGANDA GEORGE BRUNO`}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Response Time */}
                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl mb-8">
                    <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                    <p className="text-sm text-muted-foreground">
                      I typically respond within <span className="text-foreground font-medium">1-2 business days</span>
                    </p>
                  </div>

                  {/* Social Links */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-4">Follow SEKIGANDA GEORGE BRUNO on</p>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300"
                          aria-label={social.label}
                          title={social.title}
                        >
                          <social.icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <form onSubmit={handleSubmit} className="glass-card p-8" aria-label="Contact form">
                  <h2 className="font-display font-semibold text-2xl text-foreground mb-6">
                    Send a Message to Bruno
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-border focus:border-primary"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-border focus:border-primary"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Website Development Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                      aria-required="true"
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your website or app development project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border focus:border-primary resize-none"
                      aria-required="true"
                    />
                  </div>

                  <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message to Bruno
                        <Send size={18} aria-hidden="true" />
                      </>
                    )}
                  </Button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Setup Guide Section */}
      <section className="section-padding" aria-labelledby="seo-guide-heading">
        <div className="container-custom">
          <AnimatedSection>
            <div className="glass-card p-8 md:p-12">
              <h2 id="seo-guide-heading" className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                Google Search Console Setup Guide
              </h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                After your website is live, follow these steps to get indexed on Google and start appearing in search results:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Verify Domain</h3>
                  <p className="text-sm text-muted-foreground">Go to Google Search Console and verify your domain ownership</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Submit Sitemap</h3>
                  <p className="text-sm text-muted-foreground">Submit your sitemap.xml file to help Google crawl your site</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Request Indexing</h3>
                  <p className="text-sm text-muted-foreground">Request indexing for your main pages to speed up the process</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Connect Analytics</h3>
                  <p className="text-sm text-muted-foreground">Set up Google Analytics to track your website visitors (optional)</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Contact;
