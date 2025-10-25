import { useScrollReveal } from '@/hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Backend',
    skills: ['Welder Framework', 'Rust', 'Python', 'C++', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Architecture',
    skills: ['Microservices', 'Event-Driven', 'System Design', 'API Design'],
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'Linux', 'CI/CD', 'Git', 'GitHub'],
  },
];

const Skills = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="relative min-h-screen px-6 md:px-12 py-32 bg-black overflow-hidden">
      {/* Gradient orbs with magnetic effect */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[hsl(280,60%,70%)] opacity-10 blur-[100px] animate-float animate-morph animate-magnetic" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[hsl(330,85%,65%)] opacity-10 blur-[100px] animate-float animate-morph" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        <div className="overflow-hidden">
          <h2 
            className={`text-6xl md:text-8xl font-light text-foreground transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            Expertise.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + categoryIndex * 150}ms` }}
            >
              <h3 className="text-2xl font-light text-foreground border-t border-border pt-4">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className={`text-lg text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-[hsl(280,60%,70%)] hover:to-[hsl(330,85%,65%)] hover:bg-clip-text hover:text-transparent hover:translate-x-2 hover:scale-105 transition-all duration-500 cursor-default ${
                      isVisible ? 'opacity-100 animate-reveal-up' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: `${400 + categoryIndex * 150 + skillIndex * 50}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
