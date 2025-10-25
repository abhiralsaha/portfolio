import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden bg-black" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}</style>
      
      {/* Animated gradient background with magnetic parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(280,60%,70%)] opacity-20 blur-[120px] animate-glow-pulse animate-float animate-morph transition-transform duration-1000"
          style={{ 
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` 
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(330,85%,65%)] opacity-20 blur-[120px] animate-glow-pulse animate-float animate-morph transition-transform duration-1000" 
          style={{ 
            animationDelay: '2s', 
            animationDuration: '8s',
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)` 
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl w-full relative z-10">
        <div className="space-y-8 md:space-y-12">
          {/* Main heading with animation */}
          <div className="overflow-hidden">
            <h1 
              className={`text-huge text-foreground transition-all duration-1000 font-normal lowercase ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              specialise in
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <h1 
              className={`text-huge text-foreground transition-all duration-1000 delay-200 font-normal lowercase ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              crafting <span className="bg-gradient-to-r from-[hsl(280,60%,70%)] to-[hsl(330,85%,65%)] bg-clip-text text-transparent">backend</span>
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <h1 
              className={`text-huge text-foreground transition-all duration-1000 delay-300 font-normal lowercase ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              experiences.
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-normal lowercase">
              abhiral saha — backend engineer specializing in microservices architect and scalable backend 
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground tracking-wider font-normal lowercase">scroll for more</span>
            <div className="w-px h-16 bg-muted-foreground/30"></div>
          </div>
        </div>
      </div>

      {/* Large text at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <div className={`text-[20vw] font-light text-foreground/5 whitespace-nowrap transition-all duration-1500 delay-1000 lowercase ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}>
          abhiral saha
        </div>
      </div>
    </section>
  );
};

export default Hero;