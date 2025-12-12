import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Code, ShoppingCart, Server, Smartphone, Plug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';

const services = [
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Eye-catching, modern website designs that capture your brand essence. I create visually stunning interfaces that engage visitors and drive conversions, with attention to user experience and accessibility.',
  },
  {
    icon: Code,
    title: 'Website Development',
    description: 'Full-stack web development using modern technologies. From responsive frontends with React to robust backends with Django, I build performant websites that scale with your business.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Systems',
    description: 'Complete e-commerce solutions tailored to your business needs. Specializing in electronics retail systems with inventory management, secure payments, order tracking, and analytics dashboards.',
  },
  {
    icon: Server,
    title: 'Django Backend Development',
    description: 'Expert Django and Python development for your backend needs. REST APIs, database design, user authentication, and integrations with third-party services – all built with security and scalability in mind.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Backend',
    description: 'Powerful backend systems to power your mobile applications. User authentication, push notifications, real-time data sync, and comprehensive API endpoints for iOS and Android apps.',
  },
  {
    icon: Plug,
    title: 'API Integrations',
    description: 'Seamless integration with third-party APIs and services. Payment gateways, social media platforms, email services, SMS providers, and custom API development for your specific needs.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We discuss your project requirements, goals, and timeline.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'I create a detailed project plan and technical architecture.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Building your solution with regular updates and feedback loops.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Testing, deployment, and post-launch support.',
  },
];

const Services = () => {
  return (
    <>
      {/* Header Section */}
      <section className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            badge="Services"
            title="What I Offer"
            description="Professional web development services tailored to help your business succeed in the digital world."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeading
            badge="How I Work"
            title="My Process"
            description="A streamlined approach to deliver high-quality results."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="text-center">
                  <span className="inline-block font-display text-5xl font-bold gradient-text mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your project and find the perfect solution for your business needs.
              </p>
              <Button asChild variant="hero">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Services;
