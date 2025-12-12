import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';

import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectDjango from '@/assets/project-django.jpg';
import projectApi from '@/assets/project-api.jpg';
import projectPortfolio from '@/assets/project-portfolio.jpg';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A comprehensive electronics e-commerce platform with product management, shopping cart, secure payment processing via Stripe, order tracking, and an admin dashboard for inventory and sales analytics.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Stripe', 'JavaScript'],
    image: projectEcommerce,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Business Management System',
    description: 'Custom enterprise resource planning (ERP) solution built with Django. Features include user role management, automated reporting, workflow automation, and RESTful API integrations.',
    technologies: ['Django', 'REST API', 'React', 'Docker', 'Celery'],
    image: projectDjango,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Mobile App Backend API',
    description: 'Scalable backend API powering a mobile application with user authentication, push notifications, real-time data sync, and comprehensive API documentation.',
    technologies: ['Django REST Framework', 'Redis', 'PostgreSQL', 'AWS'],
    image: projectApi,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website with smooth animations, SEO optimization, and contact form integration. Built with performance and accessibility in mind.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: projectPortfolio,
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  return (
    <>
      {/* Header Section */}
      <section className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            badge="Portfolio"
            title="My Projects"
            description="A showcase of my work demonstrating my expertise in web development, from e-commerce platforms to custom business solutions."
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
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
                Have a Project in Mind?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                I'm always excited to work on new projects. Whether you need a website, 
                web application, or e-commerce platform, let's discuss how I can help.
              </p>
              <Button asChild variant="hero">
                <Link to="/contact">
                  Start a Project
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

export default Projects;
