// src/components/Projects.tsx
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const projects = [
  {
    title: 'Welder Framework',
    category: 'Backend / Framework / Architecture',
    description: 'A powerful backend framework designed for building scalable microservices with event-driven architecture.',
    route: '/welder-framework'
  },
  {
    title: 'Event-Driven Billing System',
    category: 'Backend / Microservices / Event Processing',
    description: 'High-throughput billing system processing millions of events with real-time accuracy and fault tolerance.',
    route: '/billing-system'
  },
  {
    title: 'Image Processing API',
    category: 'Backend / API / Performance',
    description: 'Ultra-fast image processing API handling 10,000+ requests per second with advanced caching strategies.',
    route: '/image-processing-api'
  },
  {
    title: 'Personal Portfolio Website',
    category: 'Frontend / React / Design',
    description: 'Modern portfolio showcasing projects and expertise with stunning animations, gradient effects, and responsive design built with React and TypeScript.',
    route: '/',
    isCurrentSite: true
  },
];

const Projects = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.isCurrentSite) {
      toast({
        title: "You're already here! 🎉",
        description: "You are already viewing my portfolio website.",
        duration: 3000,
      });
    } else {
      navigate(project.route);
    }
  };

  return (
    <section id="work" ref={sectionRef} className="relative min-h-screen px-6 md:px-12 py-32 bg-black overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[hsl(330,85%,65%)] opacity-10 blur-[100px] animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* Heading */}
        <div className="overflow-hidden">
          <h2 
            className={`text-display text-foreground transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            Selected work.
          </h2>
        </div>

        {/* Projects grid */}
        <div className="space-y-px">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => handleProjectClick(project)}
              className={`group relative border-t border-border py-12 transition-all duration-1000 hover:border-[hsl(280,60%,70%)]/30 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Hover gradient background with clip animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(280,60%,70%)]/0 via-[hsl(280,60%,70%)]/10 to-[hsl(330,85%,65%)]/5 opacity-0 group-hover:opacity-100 group-hover:animate-clip-reveal transition-opacity duration-700"></div>
              
              <div className="grid md:grid-cols-3 gap-8 items-start relative z-10">
                <div className="overflow-hidden">
                  <h3 className="text-3xl md:text-4xl font-light text-foreground group-hover:bg-gradient-to-r group-hover:from-[hsl(280,60%,70%)] group-hover:to-[hsl(330,85%,65%)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700">
                    {project.title}
                  </h3>
                </div>
                
                <div className="md:col-span-2 space-y-6">
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">
                    {project.category}
                  </p>
                  <p className="text-lg text-foreground/80 font-light">
                    {project.description}
                  </p>
                  
                  {/* Know More Button */}
                  <div
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[hsl(280,60%,70%)] to-[hsl(330,85%,65%)] text-white rounded-full text-sm font-medium uppercase tracking-wider hover:scale-105 hover:shadow-lg hover:shadow-[hsl(280,60%,70%)]/20 transition-all duration-300 group/btn"
                  >
                    <span>{project.isCurrentSite ? "You're Here" : "Know More"}</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
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

export default Projects;