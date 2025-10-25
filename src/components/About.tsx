import { useScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-32 bg-black overflow-hidden">
      {/* Gradient orbs with morph animation */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[hsl(280,60%,70%)] opacity-10 blur-[100px] animate-float animate-morph"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[hsl(330,85%,65%)] opacity-10 blur-[100px] animate-float animate-morph" style={{ animationDelay: '4s' }}></div>
      
      <div className="max-w-6xl w-full space-y-24 relative z-10">
        {/* Main heading with clip reveal */}
        <div className="overflow-hidden">
          <h2 
            className={`text-display text-foreground transition-all duration-1500 ${
              isVisible ? 'translate-y-0 opacity-100 animate-clip-reveal' : 'translate-y-full opacity-0'
            }`}
          >
            Design for impact.
          </h2>
        </div>

        {/* Content */}
        <div className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-foreground/90 font-light leading-relaxed">
              Backend Engineer with expertise in building high-performance, scalable systems using the Welder Framework.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Specializing in event-driven architectures, microservices, and creating robust backend solutions that power modern applications.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { number: '1+', label: 'Years Experience' },
              { number: '5+', label: 'Projects Delivered' },
              { number: '99%', label: 'Uptime Achieved' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={`border-t border-border pt-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="text-5xl md:text-6xl font-light bg-gradient-to-r from-foreground to-[hsl(280,60%,70%)] bg-clip-text text-transparent">{stat.number}</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
