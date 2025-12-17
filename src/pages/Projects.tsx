import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { SEOHead } from '@/components/SEOHead';

import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectDjango from '@/assets/project-django.jpg';
import projectApi from '@/assets/project-api.jpg';
import projectPortfolio from '@/assets/project-portfolio.jpg';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projectsPage.items.ecommerce.title'),
      description: t('projectsPage.items.ecommerce.description'),
      technologies: ['Django', 'Python', 'PostgreSQL', 'Stripe', 'JavaScript'],
      image: projectEcommerce,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: t('projectsPage.items.django.title'),
      description: t('projectsPage.items.django.description'),
      technologies: ['Django', 'REST API', 'React', 'Docker', 'Celery'],
      image: projectDjango,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: t('projectsPage.items.api.title'),
      description: t('projectsPage.items.api.description'),
      technologies: ['Django REST Framework', 'Redis', 'PostgreSQL', 'AWS'],
      image: projectApi,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: t('projectsPage.items.portfolio.title'),
      description: t('projectsPage.items.portfolio.description'),
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: projectPortfolio,
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <>
      <SEOHead
        title="Web Development Projects Portfolio | SEKIGANDA GEORGE BRUNO"
        description="View the web development projects portfolio of SEKIGANDA GEORGE 'BRUNO' - a professional website developer and app builder in Uganda. E-commerce platforms, business systems, mobile app backends, and custom websites built with Django, Python, React, and JavaScript."
        canonicalUrl="https://sekigandageorge.com/projects-portfolio"
        keywords="Bruno web development projects, Sekiganda George portfolio, website developer Uganda projects, Django projects Uganda, e-commerce development Kampala, web application portfolio, Python developer projects, React developer work"
      />

      {/* Header Section */}
      <section className="section-padding pt-32" aria-labelledby="projects-heading">
        <div className="container-custom">
          <SectionHeading
            badge={t('projectsPage.badge')}
            title={t('projectsPage.title')}
            description={t('projectsPage.description')}
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding pt-0" aria-label="Projects gallery">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" aria-labelledby="projects-cta">
        <div className="container-custom">
          <AnimatedSection>
            <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
              <h2 id="projects-cta" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('projectsPage.ctaTitle')}
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                {t('projectsPage.ctaDesc')}
              </p>
              <Button asChild variant="hero">
                <Link to="/contact" title="Start a Web Development Project with Bruno">
                  {t('projectsPage.startProject')}
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

export default Projects;
