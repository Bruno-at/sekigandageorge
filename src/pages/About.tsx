import { MapPin, Calendar, Award, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillBadge } from '@/components/SkillBadge';
import { SEOHead } from '@/components/SEOHead';
import brunoProfile from '@/assets/bruno-profile.png';

const skills = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Python', 'Django', 'React', 'REST APIs', 'PostgreSQL', 'MySQL', 'Git', 'Docker', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'API Integrations'];

const About = () => {
  const { t } = useTranslation();

  const experience = [
    {
      year: '2023 - Present',
      title: t('about.experience.senior.title'),
      company: t('about.experience.senior.company'),
      description: t('about.experience.senior.description')
    },
    {
      year: '2021 - 2023',
      title: t('about.experience.fullstack.title'),
      company: t('about.experience.fullstack.company'),
      description: t('about.experience.fullstack.description')
    },
    {
      year: '2019 - 2021',
      title: t('about.experience.junior.title'),
      company: t('about.experience.junior.company'),
      description: t('about.experience.junior.description')
    }
  ];

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
                  SEKIGANDA GEORGE "BRUNO" — {t('about.imageCaption')}
                </figcaption>
              </figure>
            </AnimatedSection>

            {/* Content */}
            <div>
              <AnimatedSection>
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                  {t('about.badge')}
                </span>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 id="about-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {t('about.greeting')} <span className="gradient-text">SEKIGANDA GEORGE "BRUNO"</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {t('about.intro')}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {t('about.journey')}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {t('about.serving')}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={18} className="text-primary" aria-hidden="true" />
                    <span>{t('about.location')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={18} className="text-primary" aria-hidden="true" />
                    <span>{t('about.yearsExperience')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award size={18} className="text-primary" aria-hidden="true" />
                    <span>{t('about.projectsCompleted')}</span>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <Button variant="hero" asChild>
                  <a href="/resume" aria-label="View SEKIGANDA GEORGE BRUNO's Resume/CV">
                    <Download size={20} />
                    {t('about.viewResume')}
                  </a>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-card/30" aria-labelledby="skills-heading">
        <div className="container-custom">
          <SectionHeading
            badge={t('about.expertise')}
            title={t('about.skillsTitle')}
            description={t('about.skillsDesc')}
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
            badge={t('about.journey')}
            title={t('about.experienceTitle')}
            description={t('about.experienceDesc')}
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
