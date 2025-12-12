import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillBadge } from '@/components/SkillBadge';

import brunoProfile from '@/assets/bruno-profile.jpg';

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Python', 'Django',
  'React', 'REST APIs', 'PostgreSQL', 'MySQL', 'Git', 'Docker',
  'Tailwind CSS', 'Bootstrap', 'Node.js', 'API Integrations'
];

const experience = [
  {
    year: '2023 - Present',
    title: 'Senior Web Developer',
    company: 'Freelance',
    description: 'Building custom web solutions for clients across Africa and beyond. Specializing in Django backends and modern frontends.',
  },
  {
    year: '2021 - 2023',
    title: 'Full Stack Developer',
    company: 'Tech Startup',
    description: 'Developed and maintained multiple web applications, implemented API integrations, and led junior developers.',
  },
  {
    year: '2019 - 2021',
    title: 'Junior Developer',
    company: 'Digital Agency',
    description: 'Started my professional journey building websites and learning best practices in web development.',
  },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border">
                  <img
                    src={brunoProfile}
                    alt="SEKIGANDA GEORGE BRUNO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <div>
              <AnimatedSection>
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                  About Me
                </span>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Hello, I'm <span className="gradient-text">Bruno</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  I'm <strong className="text-foreground">SEKIGANDA GEORGE "BRUNO"</strong>, a passionate 
                  Programmer and Web Developer based in <strong className="text-foreground">Kampala, Uganda</strong>. 
                  With a deep love for technology and problem-solving, I've dedicated my career to crafting 
                  exceptional digital experiences.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  My journey began with a curiosity about how websites work, which evolved into a full-fledged 
                  career in web development. Today, I specialize in building robust backend systems with Django 
                  and Python, creating responsive frontends with modern JavaScript frameworks, and developing 
                  complete e-commerce solutions.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Whether it's in Kyanja, Kyengera, or Munyonyo – I serve clients across Kampala and beyond, 
                  helping businesses establish their digital presence and achieve their goals through technology.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={18} className="text-primary" />
                    <span>Kampala, Uganda</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={18} className="text-primary" />
                    <span>5+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award size={18} className="text-primary" />
                    <span>20+ Projects Completed</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeading
            badge="Expertise"
            title="Skills & Technologies"
            description="Tools and technologies I use to bring ideas to life."
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
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Journey"
            title="Work Experience"
            description="My professional journey in web development."
          />
          <div className="max-w-3xl mx-auto">
            {experience.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.1}>
                <div className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border last:border-transparent">
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {item.year}
                  </span>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">{item.company}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
