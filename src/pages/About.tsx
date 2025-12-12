import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillBadge } from '@/components/SkillBadge';
import { SEOHead } from '@/components/SEOHead';

import brunoProfile from '@/assets/bruno-profile.jpg';

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Python', 'Django',
  'React', 'REST APIs', 'PostgreSQL', 'MySQL', 'Git', 'Docker',
  'Tailwind CSS', 'Bootstrap', 'Node.js', 'API Integrations'
];

const experience = [
  {
    year: '2023 - Present',
    title: 'Senior Website Developer',
    company: 'Freelance - Kampala, Uganda',
    description: 'Building custom web solutions for clients across Africa and beyond. Specializing in Django backends, React frontends, and e-commerce development as the best website developer in Kampala.',
  },
  {
    year: '2021 - 2023',
    title: 'Full Stack Developer',
    company: 'Tech Startup - Uganda',
    description: 'Developed and maintained multiple web applications, implemented API integrations, and led junior developers in website and app development projects.',
  },
  {
    year: '2019 - 2021',
    title: 'Junior Web Developer',
    company: 'Digital Agency - Kampala',
    description: 'Started my professional journey building websites and learning best practices in web development and programming.',
  },
];

const About = () => {
  return (
    <>
      <SEOHead 
        title="About SEKIGANDA GEORGE BRUNO | Website Developer, App Builder in Uganda"
        description="Learn about SEKIGANDA GEORGE 'BRUNO' (Sekiganda Bruno, Sekigenda George) - a professional website developer, app builder, and Python/Django programmer based in Kampala, Uganda. 5+ years of experience in web development, software development, and e-commerce solutions."
        canonicalUrl="https://sekigandageorge.com/about-bruno"
        keywords="Sekiganda George Bruno about, Sekiganda Bruno biography, website developer Uganda, Django developer Kampala, Python programmer Africa, freelance web developer Uganda, George Bruno developer, Sekigenda programmer"
      />

      {/* Hero Section */}
      <section className="section-padding pt-32" aria-labelledby="about-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <AnimatedSection direction="left">
              <figure className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border">
                  <img
                    src={brunoProfile}
                    alt="SEKIGANDA GEORGE BRUNO - Professional Website Developer, App Builder, and Programmer in Kampala, Uganda"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-4 text-center text-sm text-muted-foreground">
                  SEKIGANDA GEORGE "BRUNO" — Website Developer & Programmer in Uganda
                </figcaption>
              </figure>
            </AnimatedSection>

            {/* Content */}
            <div>
              <AnimatedSection>
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                  About Me
                </span>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 id="about-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Hello, I'm <span className="gradient-text">SEKIGANDA GEORGE "BRUNO"</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  I'm <strong className="text-foreground">SEKIGANDA GEORGE "BRUNO"</strong> (also known as Sekiganda Bruno, Sekigenda George, George Bruno), 
                  a passionate <strong>Website Developer</strong>, <strong>App Builder</strong>, and <strong>Programmer</strong> based in 
                  <strong className="text-foreground"> Kampala, Uganda</strong>. With a deep love for technology and problem-solving, 
                  I've dedicated my career to crafting exceptional digital experiences.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  My journey began with a curiosity about how websites work, which evolved into a full-fledged 
                  career as a <strong>software developer</strong>. Today, I specialize in building robust backend systems with <strong>Django</strong> 
                  and <strong>Python</strong>, creating responsive frontends with modern <strong>JavaScript</strong> frameworks like <strong>React</strong>, 
                  and developing complete <strong>e-commerce solutions</strong>.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  As a <strong>freelance website developer in Uganda</strong>, I serve clients across Kampala (Kyanja, Kyengera, Munyonyo) and beyond, 
                  helping businesses establish their digital presence through professional web development, app building, and programming services.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={18} className="text-primary" aria-hidden="true" />
                    <span>Kampala, Uganda</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={18} className="text-primary" aria-hidden="true" />
                    <span>5+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award size={18} className="text-primary" aria-hidden="true" />
                    <span>20+ Projects Completed</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-card/30" aria-labelledby="skills-heading">
        <div className="container-custom">
          <SectionHeading
            badge="Expertise"
            title="Website Developer Skills & Technologies"
            description="Tools and technologies I use as a professional programmer and web developer to bring your ideas to life."
          />
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <SkillBadge key={skill} name={skill} index={index} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding" aria-labelledby="experience-heading">
        <div className="container-custom">
          <SectionHeading
            badge="Journey"
            title="Web Development Experience"
            description="My professional journey as a website developer and programmer in Uganda."
          />
          <div className="max-w-3xl mx-auto">
            {experience.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.1}>
                <article className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border last:border-transparent">
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" aria-hidden="true" />
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {item.year}
                  </span>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">{item.company}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
