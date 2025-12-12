import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Clock, Users, Award } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeading } from './SectionHeading';

const reasons = [
  {
    icon: Zap,
    title: 'Fast & Efficient Development',
    description: 'As an experienced website developer and app builder, I deliver projects on time without compromising quality.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable Solutions',
    description: 'Every website, app, and system I build follows best security practices to protect your business data.',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround Time',
    description: 'Get your website or app launched faster. I understand the importance of time in today\'s competitive market.',
  },
  {
    icon: Users,
    title: 'Client-Focused Approach',
    description: 'Your success is my priority. I work closely with you to understand your needs and deliver tailored solutions.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'With 5+ years of experience and 20+ successful projects, I have the expertise to handle any web development challenge.',
  },
  {
    icon: CheckCircle,
    title: 'Full-Stack Expertise',
    description: 'From frontend design to backend development, e-commerce systems to mobile app backends — I do it all.',
  },
];

export function WhyChooseBruno() {
  return (
    <section className="section-padding bg-card/30" aria-labelledby="why-choose-heading">
      <div className="container-custom">
        <SectionHeading
          badge="Why Bruno?"
          title="Why Choose SEKIGANDA GEORGE BRUNO?"
          description="As a professional website developer, app builder, and programmer in Kampala, Uganda, I bring expertise, dedication, and results to every project."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection key={reason.title} delay={index * 0.1}>
              <div className="glass-card p-6 h-full hover:border-primary/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* SEO-rich text block */}
        <AnimatedSection delay={0.4}>
          <div className="mt-12 p-8 glass-card text-center">
            <h3 className="font-display font-semibold text-xl text-foreground mb-4">
              Hire the Best Website Developer in Kampala, Uganda
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <strong>SEKIGANDA GEORGE "BRUNO"</strong> (also known as Sekiganda Bruno, Sekigenda George, George Bruno) 
              is a trusted <strong>website developer</strong>, <strong>app builder</strong>, and <strong>programmer</strong> in Uganda. 
              Whether you need a professional website, custom web application, e-commerce platform, or mobile app backend, 
              Bruno delivers high-quality solutions using modern technologies like <strong>Python</strong>, <strong>Django</strong>, 
              <strong>JavaScript</strong>, and <strong>React</strong>. As a <strong>freelance website developer in Uganda</strong>, 
              I offer personalized service and competitive pricing for businesses of all sizes. Contact me today to discuss your project!
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
