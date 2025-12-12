import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  image, 
  liveUrl, 
  githubUrl,
  index 
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card overflow-hidden"
    >
      <figure className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={`${title} - Web Development Project by SEKIGANDA GEORGE BRUNO, Website Developer in Uganda`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <figcaption className="sr-only">
          {title} - Built by SEKIGANDA GEORGE BRUNO, professional website developer and programmer in Kampala, Uganda
        </figcaption>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
          {liveUrl && (
            <Button asChild size="sm" variant="default">
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                title={`View ${title} Live Demo - Project by Bruno`}
              >
                <ExternalLink size={16} aria-hidden="true" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button asChild size="sm" variant="outline">
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                title={`View ${title} Source Code on GitHub - SEKIGANDA GEORGE BRUNO`}
              >
                <Github size={16} aria-hidden="true" />
                Code
              </a>
            </Button>
          )}
        </div>
      </figure>
      <div className="p-6">
        <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2" aria-label="Technologies used">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
