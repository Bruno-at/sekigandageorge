import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { ServiceCard } from '@/components/ServiceCard';
import { WhyChooseBruno } from '@/components/WhyChooseBruno';
import { SEOHead } from '@/components/SEOHead';
import { Code, Globe, ShoppingCart } from 'lucide-react';
import brunoProfile from '@/assets/bruno-profile.png';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectDjango from '@/assets/project-django.jpg';

const Index = () => {
  const { t } = useTranslation();

  const featuredProjects = [
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      technologies: ['Django', 'Python', 'PostgreSQL', 'Stripe'],
      image: projectEcommerce,
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: t('projects.django.title'),
      description: t('projects.django.description'),
      technologies: ['Django', 'REST API', 'React', 'Docker'],
      image: projectDjango,
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const services = [
    {
      icon: Globe,
      title: t('services.webDesign.title'),
      description: t('services.webDesign.description')
    },
    {
      icon: Code,
      title: t('services.webDev.title'),
      description: t('services.webDev.description')
    },
    {
      icon: ShoppingCart,
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.description')
    }
  ];

  return (
    <>
      <SEOHead
        title='SEKIGANDA GEORGE "BRUNO" | Website Developer, App Builder, Programmer in Uganda'
        description="SEKIGANDA GEORGE 'BRUNO' (Sekiganda Bruno, Sekigenda George, George Bruno) is a professional website developer, app builder, and Python/Django programmer in Kampala, Uganda. Best freelance website developer offering web design, e-commerce development, and mobile app backend services."
        canonicalUrl="https://sekigandageorge.com/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-labelledby="hero-heading">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-slate-medium" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 px-4 md:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium bg-secondary rounded-full text-muted-foreground">
                  <MapPin size={14} className="text-primary" aria-hidden="true" />
                  {t('hero.location')}
                </span>
              </motion.div>

              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
              >
                SEKIGANDA GEORGE
                <br />
                <span className="gradient-text">"BRUNO"</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground mb-4 font-display font-light"
              >
                {t('hero.title')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted-foreground text-lg mb-10 max-w-xl leading-relaxed"
              >
                {t('hero.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild variant="hero">
                  <Link to="/contact" title="Hire SEKIGANDA GEORGE BRUNO - Website Developer">
                    {t('hero.hireMe')}
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline">
                  <Link to="/projects-portfolio" title="View Bruno's Web Development Projects">
                    {t('hero.viewProjects')}
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl blur-2xl animate-glow-pulse" />
                <figure className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-primary/20">
                  <img
                    src={brunoProfile}
                    alt="SEKIGANDA GEORGE BRUNO - Professional Website Developer, App Builder, and Programmer in Kampala, Uganda"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <figcaption className="sr-only">
                    SEKIGANDA GEORGE BRUNO - Website Developer and Programmer based in Kampala, Uganda
                  </figcaption>
                </figure>
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -right-4 top-1/4 glass-card px-4 py-3"
                >
                  <p className="text-sm font-medium text-foreground">{t('hero.experience')}</p>
                  <p className="text-xs text-muted-foreground">{t('hero.webDevelopment')}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -left-4 bottom-1/4 glass-card px-4 py-3"
                >
                  <p className="text-sm font-medium text-foreground">{t('hero.projectsCount')}</p>
                  <p className="text-xs text-muted-foreground">{t('hero.projectsDone')}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Bruno Section */}
      <WhyChooseBruno />

      {/* Featured Projects Section */}
      <section className="section-padding" aria-labelledby="projects-heading">
        <div className="container-custom">
          <SectionHeading
            badge={t('sections.portfolio')}
            title={t('sections.featuredProjects')}
            description={t('sections.featuredProjectsDesc')}
          />
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects-portfolio" title="View All Web Development Projects by Bruno">
                {t('sections.viewAllProjects')}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-card/30" aria-labelledby="services-heading">
        <div className="container-custom">
          <SectionHeading
            badge={t('sections.services')}
            title={t('sections.webDevServices')}
            description={t('sections.webDevServicesDesc')}
          />
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services-web-app-developer" title="View All Web Development Services">
                {t('sections.allServices')}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" aria-labelledby="cta-heading">
        <div className="container-custom">
          <AnimatedSection>
            <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
              <h2 id="cta-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                {t('cta.description')}
              </p>
              <Button asChild variant="hero">
                <Link to="/contact" title="Contact Bruno - Website Developer Uganda">
                  {t('cta.getInTouch')}
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

export default Index;
