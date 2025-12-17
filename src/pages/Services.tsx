import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Code, ShoppingCart, Server, Smartphone, Plug } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { SEOHead } from '@/components/SEOHead';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Globe,
      title: t('servicesPage.items.webDesign.title'),
      description: t('servicesPage.items.webDesign.description'),
    },
    {
      icon: Code,
      title: t('servicesPage.items.webDev.title'),
      description: t('servicesPage.items.webDev.description'),
    },
    {
      icon: ShoppingCart,
      title: t('servicesPage.items.ecommerce.title'),
      description: t('servicesPage.items.ecommerce.description'),
    },
    {
      icon: Server,
      title: t('servicesPage.items.django.title'),
      description: t('servicesPage.items.django.description'),
    },
    {
      icon: Smartphone,
      title: t('servicesPage.items.mobile.title'),
      description: t('servicesPage.items.mobile.description'),
    },
    {
      icon: Plug,
      title: t('servicesPage.items.api.title'),
      description: t('servicesPage.items.api.description'),
    },
  ];

  const process = [
    { step: '01', title: t('servicesPage.process.discovery.title'), description: t('servicesPage.process.discovery.description') },
    { step: '02', title: t('servicesPage.process.planning.title'), description: t('servicesPage.process.planning.description') },
    { step: '03', title: t('servicesPage.process.development.title'), description: t('servicesPage.process.development.description') },
    { step: '04', title: t('servicesPage.process.launch.title'), description: t('servicesPage.process.launch.description') },
  ];

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
            badge={t('servicesPage.badge')}
            title={t('servicesPage.title')}
            description={t('servicesPage.description')}
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
            badge={t('servicesPage.howIWork')}
            title={t('servicesPage.processTitle')}
            description={t('servicesPage.processDesc')}
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
                {t('servicesPage.whyHire')}
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
                {t('servicesPage.whyHireDesc')}
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold gradient-text">5+</p>
                  <p className="text-sm text-muted-foreground">{t('servicesPage.stats.years')}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">20+</p>
                  <p className="text-sm text-muted-foreground">{t('servicesPage.stats.projects')}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">100%</p>
                  <p className="text-sm text-muted-foreground">{t('servicesPage.stats.satisfaction')}</p>
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
                {t('servicesPage.ctaTitle')}
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                {t('servicesPage.ctaDesc')}
              </p>
              <Button asChild variant="hero">
                <Link to="/contact" title="Get a Free Quote from Bruno - Website Developer Uganda">
                  {t('servicesPage.getQuote')}
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
