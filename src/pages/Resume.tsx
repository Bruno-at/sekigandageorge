import { useState } from 'react';
import { FileText, Download, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SEOHead } from '@/components/SEOHead';

const RESUME_PATH = '/resume-sekiganda-george-bruno.pdf';

const Resume = () => {
  const [pdfExists, setPdfExists] = useState<boolean | null>(null);

  // Check if PDF exists
  useState(() => {
    fetch(RESUME_PATH, { method: 'HEAD' })
      .then((response) => {
        setPdfExists(response.ok);
      })
      .catch(() => {
        setPdfExists(false);
      });
  });

  return (
    <>
      <SEOHead
        title="Resume - SEKIGANDA GEORGE BRUNO | Website Developer CV"
        description="View and download the professional resume of SEKIGANDA GEORGE 'BRUNO' - Website Developer, App Builder, and Python/Django Programmer based in Kampala, Uganda."
        canonicalUrl="https://sekigandageorge.com/resume"
        keywords="Sekiganda George Bruno resume, website developer CV Uganda, Django developer resume, Python programmer CV Kampala"
      />

      <section className="section-padding pt-32 min-h-screen">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                My Resume
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Professional <span className="gradient-text">Resume</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                SEKIGANDA GEORGE "BRUNO" — Website Developer, App Builder & Programmer
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {pdfExists === null ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-pulse text-muted-foreground">Loading...</div>
              </div>
            ) : pdfExists ? (
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-end mb-4">
                  <Button variant="outline" asChild>
                    <a href={RESUME_PATH} download aria-label="Download Resume PDF">
                      <Download size={18} />
                      Download PDF
                    </a>
                  </Button>
                </div>
                <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg">
                  <iframe
                    src={RESUME_PATH}
                    title="SEKIGANDA GEORGE BRUNO Resume"
                    className="w-full h-[80vh] min-h-[600px]"
                  />
                </div>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <div className="bg-card/50 rounded-xl border border-border p-12 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                    <FileText size={40} className="text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-center gap-2 text-primary mb-4">
                    <AlertCircle size={20} />
                    <span className="font-medium">No Resume Uploaded Yet</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    The resume PDF has not been uploaded yet. Please check back later or contact me directly for my credentials.
                  </p>
                  <Button variant="hero" asChild>
                    <a href="/contact">Contact Me</a>
                  </Button>
                </div>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Resume;
