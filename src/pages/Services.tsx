import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Code, ShoppingCart, Server, Smartphone, Plug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { SEOHead } from '@/components/SEOHead';

const services = [
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Eye-catching, modern website designs that capture your brand essence. As a professional web designer in Uganda, I create visually stunning interfaces that engage visitors and drive conversions, with attention to user experience and accessibility.',
  },
  {
    icon: Code,
    title: 'Website Development',
    description: 'Full-stack web development using modern technologies. As the best website developer in Kampala, I build performant websites with React frontends and Django backends that scale with your business.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Development',
    description: 'Complete e-commerce solutions tailored to your business needs. Specializing in electronics retail systems with inventory management, secure payments via Stripe, order tracking, and analytics dashboards.',
  },
  {
    icon: Server,
    title: 'Django Backend Development',
    description: 'Expert Django and Python development for your backend needs. REST APIs, database design, user authentication, and integrations with third-party services – all built with security and scalability by this Django developer in Uganda.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Backend',
    description: 'Powerful backend systems to power your mobile applications. As an experienced app builder, I provide user authentication, push notifications, real-time data sync, and comprehensive API endpoints for iOS and Android apps.',
  },
  {
    icon: Plug,
    title: 'API Integrations',
    description: 'Seamless integration with third-party APIs and services. Payment gateways, social media platforms, email services, SMS providers, and custom API development by a professional programmer in Uganda.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We discuss your project requirements, goals, and timeline for your website or app.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'I create a detailed project plan and technical architecture for your web development project.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Building your website or application with regular updates and feedback loops.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Testing, deployment, and post-launch support for your new website.',
  },
];

const Services = () => {
  return (
    <>
      <SEOHead 
        title="Website Development Services | SEKIGANDA GEORGE BRUNO - App Builder, Programmer Uganda"
        description="Professional website development services by SEKIGANDA GEORGE 'BRUNO' in Kampala, Uganda. Web design, website development, e-commerce systems, Django backend, mobile app backend, and API integrations. Best freelance website developer in Uganda."
        canonicalUrl="https://sekigandageorge.com/services-web-app-developer"
        keywords="website development services Uganda, web design Kampala, e-commerce development Uganda, Django developer Uganda, mobile app backend developer, API integration services, freelance programmer Uganda, Sekiganda George Bruno services"
      />

      {/* Header Section */}
      <section className="section-padding pt-32" aria-labelledby="services-heading">
        <div className="container-custom">
          <SectionHeading
            badge="Services"
            title="Website Development Services by SEKIGANDA GEORGE BRUNO"
            description="Professional website developer, app builder, and programming services to help your business succeed in the digital world. Based in Kampala, Uganda, serving clients globally."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-0" aria-label="List of web development services">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-card/30" aria-labelledby="process-heading">
        <div className="container-custom">
          <SectionHeading
            badge="How I Work"
            title="Web Development Process"
            description="A streamlined approach to deliver high-quality website and app development results."
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

      {/* Testimonial/Trust Section */}
      <section className="section-padding" aria-labelledby="trust-heading">
        <div className="container-custom">
          <AnimatedSection>
            <div className="glass-card p-8 md:p-12 text-center">
              <h2 id="trust-heading" className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Hire SEKIGANDA GEORGE BRUNO as Your Website Developer?
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
                As a <strong>freelance website developer in Uganda</strong>, I offer personalized service, competitive pricing, 
                and a commitment to quality that larger agencies can't match. With expertise in <strong>Python</strong>, <strong>Django</strong>, 
                <strong>JavaScript</strong>, and <strong>React</strong>, I build websites and applications that not only look great 
                but also perform exceptionally. Whether you're a startup in Kampala or an established business looking to expand online, 
                I have the skills and experience to deliver results.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold gradient-text">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">20+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">100%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" aria-labelledby="services-cta">
        <div className="container-custom">
          <AnimatedSection>
            <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
              <h2 id="services-cta" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started with Your Website?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your project and find the perfect website development solution for your business. 
                Contact <strong>SEKIGANDA GEORGE BRUNO</strong> today for a free quote!
              </p>
              <Button asChild variant="hero">
                <Link to="/contact" title="Get a Free Quote from Bruno - Website Developer Uganda">
                  Get a Free Quote
                  <ArrowRight size={18} aria-hidden="true" />
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
