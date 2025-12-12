import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { SEOHead } from '@/components/SEOHead';

import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectDjango from '@/assets/project-django.jpg';
import projectApi from '@/assets/project-api.jpg';
import projectPortfolio from '@/assets/project-portfolio.jpg';

const projects = [
  {
    title: 'E-Commerce Platform - Electronics Store',
    description: 'A comprehensive electronics e-commerce platform with product management, shopping cart, secure payment processing via Stripe, order tracking, and an admin dashboard for inventory and sales analytics. Built by SEKIGANDA GEORGE BRUNO, website developer in Uganda.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Stripe', 'JavaScript'],
    image: projectEcommerce,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Business Management System - Django ERP',
    description: 'Custom enterprise resource planning (ERP) solution built with Django by Bruno. Features include user role management, automated reporting, workflow automation, and RESTful API integrations for business efficiency.',
    technologies: ['Django', 'REST API', 'React', 'Docker', 'Celery'],
    image: projectDjango,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Mobile App Backend API',
    description: 'Scalable backend API powering a mobile application with user authentication, push notifications, real-time data sync, and comprehensive API documentation. Professional app backend development by Sekiganda George Bruno.',
    technologies: ['Django REST Framework', 'Redis', 'PostgreSQL', 'AWS'],
    image: projectApi,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website - Modern Design',
    description: 'Modern, responsive portfolio website with smooth animations, SEO optimization, and contact form integration. Built with performance and accessibility in mind by Bruno, the best website developer in Kampala.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: projectPortfolio,
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
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
            badge="Portfolio"
            title="Web Development Projects by SEKIGANDA GEORGE BRUNO"
            description="A showcase of my work as a website developer and app builder, demonstrating expertise in e-commerce platforms, business systems, and custom web solutions."
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
                Have a Website Project in Mind?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Looking for a professional <strong>website developer</strong> in Uganda? Whether you need a website, 
                web application, or e-commerce platform, <strong>SEKIGANDA GEORGE BRUNO</strong> can help bring your vision to life.
              </p>
              <Button asChild variant="hero">
                <Link to="/contact" title="Start a Web Development Project with Bruno">
                  Start a Project
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
