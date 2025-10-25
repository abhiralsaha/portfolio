import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const experiences = [
  {
    period: '2023 — Present',
    company: 'JSI Software',
    role: 'Backend Engineer',
    description: 'Leading backend development with Architected microservices platform (Node.js, PostgreSQL) serving 1M+ requests/day.',
    route: '/jsi-expertise'
  },
  {
    period: '2022 — 2023',
    company: 'Freelance',
    role: 'Backend Developer',
    description: 'Delivered high-performance backend solutions for various clients across industries.',
    route: '/freelance-expertise'
  },
  {
    period: '2021 — 2022',
    company: 'Cetpa Infotech',
    role: 'Junior Developer',
    description: 'Developed backend services and APIs, gaining expertise in system design.',
    route: '/cetpa-expertise'
  },
];

const Experience = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });
  const navigate = useNavigate();

  return (
    <section ref={sectionRef} className="min-h-screen px-6 md:px-12 py-32 bg-black">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="overflow-hidden">
          <h2 
            className={`text-6xl md:text-8xl font-light text-foreground transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            Experience.
          </h2>
        </div>

        <div className="space-y-px">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              onClick={() => navigate(exp.route)}
              className={`group relative border-t border-border py-12 transition-all duration-1000 hover:border-[hsl(280,60%,70%)]/30 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Hover gradient background with clip animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(280,60%,70%)]/0 via-[hsl(280,60%,70%)]/10 to-[hsl(330,85%,65%)]/5 opacity-0 group-hover:opacity-100 group-hover:animate-clip-reveal transition-opacity duration-700"></div>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  {exp.period}
                </div>
                <div className="md:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light text-foreground group-hover:bg-gradient-to-r group-hover:from-[hsl(280,60%,70%)] group-hover:to-[hsl(330,85%,65%)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700">{exp.company}</h3>
                    <p className="text-lg text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors duration-500">{exp.role}</p>
                  </div>
                  <p className="text-lg text-foreground/70 font-light group-hover:text-foreground/90 transition-colors duration-500">{exp.description}</p>
                  
                  {/* Know More Button */}
                  <div className="pt-2">
                    <div
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[hsl(280,60%,70%)] to-[hsl(330,85%,65%)] text-white rounded-full text-sm font-medium uppercase tracking-wider hover:scale-105 hover:shadow-lg hover:shadow-[hsl(280,60%,70%)]/20 transition-all duration-300 group/btn"
                    >
                      <span>Know More</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;