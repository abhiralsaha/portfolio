import { useEffect, useState } from 'react';
import { Package, Github, BookOpen, ExternalLink } from 'lucide-react';

const WelderFramework = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            setIsVisible(true);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        `}</style>
        <div className="overflow-hidden">
          <h1 className="text-6xl md:text-8xl font-normal text-white tracking-tight lowercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            welder
          </h1>
        </div>
        
        <div className="flex items-center gap-3 mt-8">
          <div className="w-2 h-2 bg-[hsl(280,60%,70%)] rounded-full animate-pulse"></div>
          <span className="text-sm lowercase tracking-[0.2em] text-gray-400" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            loading framework
          </span>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
          <div 
            className="h-full bg-gradient-to-r from-[hsl(280,60%,70%)] to-[hsl(330,85%,65%)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes charReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .text-reveal {
          animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .scale-in {
          animation: scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .char-reveal {
          display: inline-block;
          animation: charReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .word-reveal {
          display: inline-block;
          overflow: hidden;
        }
        
        .word-reveal span {
          display: inline-block;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(280,60%,70%)] opacity-20 blur-[120px] transition-transform duration-1000 scroll-parallax"
            style={{ 
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02 + scrollY * 0.3}px)` 
            }}
          ></div>
          <div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(330,85%,65%)] opacity-20 blur-[120px] transition-transform duration-1000 scroll-parallax" 
            style={{ 
              transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02 - scrollY * 0.2}px)` 
            }}
          ></div>
        </div>

        <div className="max-w-7xl w-full relative z-10">
          <div className="space-y-10 md:space-y-16">
            {/* Back button */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <button 
                onClick={() => window.history.back()}
                className="text-gray-300 hover:text-[hsl(280,60%,70%)] transition-colors duration-300 flex items-center gap-2 text-base md:text-lg font-normal lowercase"
              >
                <span className="text-xl">←</span>
                <span>back to portfolio</span>
              </button>
            </div>

            {/* Main heading - Centered with character-by-character reveal */}
            <div className="text-center space-y-4 md:space-y-6">
              <div className="overflow-hidden">
                <h1 
                  className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-white tracking-tight lowercase transition-all duration-1000 ${
                    isVisible ? 'text-reveal' : 'opacity-0'
                  }`}
                  style={{ animationDelay: '0.1s' }}
                >
                  {'welder'.split('').map((char, i) => (
                    <span 
                      key={i} 
                      className="char-reveal inline-block"
                      style={{ animationDelay: `${0.1 + i * 0.05}s` }}
                    >
                      {char}
                    </span>
                  ))}
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <h1 
                  className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal transition-all duration-1000 lowercase ${
                    isVisible ? 'text-reveal' : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: '0.5s',
                    background: 'linear-gradient(to right, hsl(280,60%,70%), hsl(330,85%,65%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  framework
                </h1>
              </div>
            </div>

            {/* Description - Centered with fade in */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.9s' }}>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed text-center font-normal lowercase">
                an ai-native, modular backend framework built with node.js and typescript, designed for high-performance, self-healing, and cloud-native systems. features automatic runtime error detection and resolution, secure plugin architecture, built-in and ai-generated middleware, websocket and api support, and observability tools.
              </p>
            </div>

            {/* Action buttons - Centered with scale in animation */}
            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 ${
              isVisible ? 'scale-in' : 'opacity-0'
            }`} style={{ animationDelay: '1.1s' }}>
              <a 
                href="https://welder-framework.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-[hsl(280,60%,70%)] to-[hsl(330,85%,65%)] rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg shadow-[hsl(280,60%,70%)]/20"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="flex items-center gap-2 relative z-10 text-white lowercase">
                  <ExternalLink size={20} />
                  <span className="font-medium text-base">view project</span>
                </div>
              </a>

              <a 
                href="https://www.npmjs.com/package/welder-framework" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-8 py-4 border-2 border-[hsl(280,60%,70%)] rounded-full hover:bg-[hsl(280,60%,70%)]/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 text-white lowercase">
                  <Package size={20} />
                  <span className="font-medium text-base">npm package</span>
                </div>
              </a>

              <a 
                href="https://github.com/abhiralsaha/welder-framework" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-8 py-4 border-2 border-[hsl(280,60%,70%)] rounded-full hover:bg-[hsl(280,60%,70%)]/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 text-white lowercase">
                  <Github size={20} />
                  <span className="font-medium text-base">github</span>
                </div>
              </a>

              <a 
                href="https://welder-framework.dev/docs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-8 py-4 border-2 border-gray-600 rounded-full hover:border-[hsl(330,85%,65%)] hover:bg-[hsl(330,85%,65%)]/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 text-white lowercase">
                  <BookOpen size={20} />
                  <span className="font-medium text-base">documentation</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-gray-300 lowercase tracking-wider font-normal">more details</span>
            <div className="w-px h-16 bg-gray-500"></div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[hsl(280,60%,70%)] to-[hsl(330,85%,65%)] opacity-10 blur-[150px]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="overflow-hidden">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight fade-in-up lowercase">
              coming soon
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-200 font-normal fade-in-up lowercase" style={{ animationDelay: '0.2s' }}>
            advanced documentation, tutorials, and live demos
          </p>
          <div className="flex items-center justify-center gap-3 pt-8">
            <div className="w-2.5 h-2.5 bg-[hsl(280,60%,70%)] rounded-full animate-pulse"></div>
            <div className="w-2.5 h-2.5 bg-[hsl(330,85%,65%)] rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-2.5 h-2.5 bg-[hsl(280,60%,70%)] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm md:text-base font-normal lowercase">
          <p>© 2025 abhiral saha. all rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/abhiralsaha" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(280,60%,70%)] transition-colors">
              github
            </a>
            <a href="https://linkedin.com/in/abhiralsaha" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(280,60%,70%)] transition-colors">
              linkedin
            </a>
            <a href="mailto:contact@abhiralsaha.dev" className="hover:text-[hsl(280,60%,70%)] transition-colors">
              contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelderFramework;