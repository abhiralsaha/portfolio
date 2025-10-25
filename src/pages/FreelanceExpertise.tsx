import { useEffect, useState } from 'react';
import { Code, Database, Layers, Server, GitBranch, Cloud, Shield, Zap, TrendingUp, Network, Package, ExternalLink, BookOpen } from 'lucide-react';

const FreelanceExpertise = () => {
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
          <h1 className="text-5xl md:text-7xl font-normal text-white tracking-tight lowercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            freelance engineering
          </h1>
        </div>
        
        <div className="flex items-center gap-3 mt-8">
          <div className="w-2 h-2 bg-[hsl(150,70%,55%)] rounded-full animate-pulse"></div>
          <span className="text-sm lowercase tracking-[0.2em] text-gray-400" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            loading expertise
          </span>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
          <div 
            className="h-full bg-gradient-to-r from-[hsl(150,70%,55%)] to-[hsl(280,70%,60%)] transition-all duration-300"
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
      `}</style>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(150,70%,55%)] opacity-20 blur-[120px] transition-transform duration-1000"
            style={{ 
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02 + scrollY * 0.3}px)` 
            }}
          ></div>
          <div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(280,70%,60%)] opacity-20 blur-[120px] transition-transform duration-1000" 
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
                className="text-gray-300 hover:text-[hsl(150,70%,55%)] transition-colors duration-300 flex items-center gap-2 text-base md:text-lg font-normal lowercase"
              >
                <span className="text-xl">←</span>
                <span>back to portfolio</span>
              </button>
            </div>

            {/* Main heading */}
            <div className="text-center space-y-4 md:space-y-6">
              <div className="overflow-hidden">
                <h1 
                  className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight lowercase transition-all duration-1000 ${
                    isVisible ? 'text-reveal' : 'opacity-0'
                  }`}
                  style={{ animationDelay: '0.1s' }}
                >
                  {'freelance'.split('').map((char, i) => (
                    <span 
                      key={i} 
                      className="char-reveal inline-block"
                      style={{ animationDelay: `${0.1 + i * 0.04}s` }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <h1 
                  className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal transition-all duration-1000 lowercase ${
                    isVisible ? 'text-reveal' : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: '0.5s',
                    background: 'linear-gradient(to right, hsl(150,70%,55%), hsl(280,70%,60%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  backend engineer
                </h1>
              </div>
            </div>

            {/* Subtitle */}
            <div className={`text-center transition-all duration-1000 ${
              isVisible ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.7s' }}>
              <p className="text-xl md:text-2xl text-gray-400 font-normal lowercase">
                remote • apr 2025 – sep 2025
              </p>
            </div>

            {/* Description */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.9s' }}>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed text-center font-normal lowercase">
                built multi-tenant saas backend using express, prisma, and postgresql with comprehensive data isolation. automated ci/cd pipeline via github actions deploying to aws ecs for seamless production releases.
              </p>
            </div>

            {/* Action buttons */}
            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 ${
              isVisible ? 'scale-in' : 'opacity-0'
            }`} style={{ animationDelay: '1.1s' }}>
              <a 
                href="#" 
                className="group relative px-8 py-4 bg-gradient-to-r from-[hsl(150,70%,55%)] to-[hsl(280,70%,60%)] rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg shadow-[hsl(150,70%,55%)]/20"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="flex items-center gap-2 relative z-10 text-white lowercase">
                  <Code size={20} />
                  <span className="font-medium text-base">view project</span>
                </div>
              </a>

              <a 
                href="#" 
                className="group px-8 py-4 border-2 border-[hsl(280,70%,60%)] rounded-full hover:bg-[hsl(280,70%,60%)]/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 text-white lowercase">
                  <BookOpen size={20} />
                  <span className="font-medium text-base">case study</span>
                </div>
              </a>

              <a 
                href="#" 
                className="group px-8 py-4 border-2 border-gray-600 rounded-full hover:border-[hsl(150,70%,55%)] hover:bg-[hsl(150,70%,55%)]/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 text-white lowercase">
                  <ExternalLink size={20} />
                  <span className="font-medium text-base">live demo</span>
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
            <span className="text-sm text-gray-300 lowercase tracking-wider font-normal">explore architecture</span>
            <div className="w-px h-16 bg-gray-500"></div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(150,70%,55%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                key achievements
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(150,70%,55%)] to-[hsl(280,70%,60%)] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(150,70%,55%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[hsl(150,70%,55%)]/10 rounded-lg">
                  <Layers className="text-[hsl(150,70%,55%)]" size={32} />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-normal text-white mb-4">multi-tenant</h3>
              <p className="text-gray-300 text-base md:text-lg font-normal lowercase">
                saas architecture
              </p>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(220,70%,58%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[hsl(220,70%,58%)]/10 rounded-lg">
                  <GitBranch className="text-[hsl(220,70%,58%)]" size={32} />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-normal text-white mb-4">automated</h3>
              <p className="text-gray-300 text-base md:text-lg font-normal lowercase">
                ci/cd pipeline
              </p>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(280,70%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[hsl(280,70%,60%)]/10 rounded-lg">
                  <Cloud className="text-[hsl(280,70%,60%)]" size={32} />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-normal text-white mb-4">aws ecs</h3>
              <p className="text-gray-300 text-base md:text-lg font-normal lowercase">
                scalable deployment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(280,70%,60%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                technology stack
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(150,70%,55%)] to-[hsl(280,70%,60%)] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(150,70%,55%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(150,70%,55%)]/10 rounded-lg">
                  <Server className="text-[hsl(150,70%,55%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">express.js</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-4">
                fast, unopinionated web framework for node.js. built robust rest api with middleware architecture for authentication, validation, and error handling.
              </p>
              <div className="flex items-center gap-2 text-[hsl(150,70%,55%)] text-sm font-medium">
                <span>Role:</span>
                <span className="text-white">api layer, routing, middleware</span>
              </div>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(220,70%,58%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(220,70%,58%)]/10 rounded-lg">
                  <Database className="text-[hsl(220,70%,58%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">prisma orm</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-4">
                next-generation orm with type-safe database client. enables elegant data modeling, migrations, and queries with excellent typescript integration.
              </p>
              <div className="flex items-center gap-2 text-[hsl(220,70%,58%)] text-sm font-medium">
                <span>Role:</span>
                <span className="text-white">data layer, migrations, queries</span>
              </div>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(280,70%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(280,70%,60%)]/10 rounded-lg">
                  <Database className="text-[hsl(280,70%,60%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">postgresql</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-4">
                powerful relational database with advanced features. leveraged row-level security, jsonb columns, and indexes for multi-tenant data isolation.
              </p>
              <div className="flex items-center gap-2 text-[hsl(280,70%,60%)] text-sm font-medium">
                <span>Role:</span>
                <span className="text-white">data storage, multi-tenancy</span>
              </div>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(150,70%,55%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(150,70%,55%)]/10 rounded-lg">
                  <Cloud className="text-[hsl(150,70%,55%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">aws ecs</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-4">
                elastic container service for docker orchestration. enables auto-scaling, load balancing, and zero-downtime deployments with fargate launch type.
              </p>
              <div className="flex items-center gap-2 text-[hsl(150,70%,55%)] text-sm font-medium">
                <span>Role:</span>
                <span className="text-white">container orchestration, scaling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Tenant Architecture Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(150,70%,55%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                multi-tenant architecture
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(150,70%,55%)] to-[hsl(280,70%,60%)] mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(150,70%,55%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase flex items-center gap-3">
                <Layers className="text-[hsl(150,70%,55%)]" size={28} />
                data isolation strategy
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-8">
                implemented schema-based multi-tenancy with tenant-specific databases for complete data isolation. each tenant has dedicated schema ensuring security and scalability.
              </p>
              
              <div className="space-y-4 pl-4 border-l-2 border-[hsl(150,70%,55%)]/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(150,70%,55%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">tenant identification</p>
                    <p className="text-gray-400 text-sm lowercase">middleware extracts tenant context from jwt tokens</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(190,70%,56%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">schema isolation</p>
                    <p className="text-gray-400 text-sm lowercase">each tenant operates in separate postgresql schema</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(230,70%,58%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">query scoping</p>
                    <p className="text-gray-400 text-sm lowercase">prisma automatically filters queries by tenant context</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(280,70%,60%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">access control</p>
                    <p className="text-gray-400 text-sm lowercase">row-level security policies prevent cross-tenant access</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-800 rounded-xl bg-black/40">
                <h4 className="text-lg font-medium text-white mb-3 lowercase">security features</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(150,70%,55%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">jwt authentication:</span> secure token-based auth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(150,70%,55%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">role-based access:</span> granular permissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(150,70%,55%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">data encryption:</span> at rest and in transit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(150,70%,55%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">audit logging:</span> comprehensive activity tracking</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 border border-gray-800 rounded-xl bg-black/40">
                <h4 className="text-lg font-medium text-white mb-3 lowercase">scalability features</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(280,70%,60%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">connection pooling:</span> efficient database connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(280,70%,60%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">caching layer:</span> redis for performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(280,70%,60%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">horizontal scaling:</span> stateless design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(280,70%,60%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">load balancing:</span> distributed traffic</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CI/CD Pipeline Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(280,70%,60%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                ci/cd automation
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(150,70%,55%)] to-[hsl(280,70%,60%)] mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(220,70%,58%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase flex items-center gap-3">
                <GitBranch className="text-[hsl(220,70%,58%)]" size={28} />
                github actions pipeline
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-8">
                automated build, test, and deployment workflow triggered on every commit. ensures code quality and enables rapid, reliable releases to production.
              </p>
              
              <div className="space-y-4 pl-4 border-l-2 border-[hsl(220,70%,58%)]/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(150,70%,55%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">code quality checks</p>
                    <p className="text-gray-400 text-sm lowercase">eslint, prettier, and typescript validation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(190,70%,56%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">automated testing</p>
                    <p className="text-gray-400 text-sm lowercase">unit and integration tests with jest</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(230,70%,58%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">docker build</p>
                    <p className="text-gray-400 text-sm lowercase">containerize application and push to ecr</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(280,70%,60%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">ecs deployment</p>
                    <p className="text-gray-400 text-sm lowercase">zero-downtime rolling updates to production</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-800 rounded-xl bg-black/40">
                <h4 className="text-lg font-medium text-white mb-3 lowercase">build process</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(150,70%,55%)]">→</span>
                    <span className="lowercase">dependency caching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(150,70%,55%)]">→</span>
                    <span className="lowercase">multi-stage docker builds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(150,70%,55%)]">→</span>
                    <span className="lowercase">image optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(150,70%,55%)]">→</span>
                    <span className="lowercase">security scanning</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 border border-gray-800 rounded-xl bg-black/40">
                <h4 className="text-lg font-medium text-white mb-3 lowercase">testing strategy</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(220,70%,58%)]">→</span>
                    <span className="lowercase">unit test coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(220,70%,58%)]">→</span>
                    <span className="lowercase">integration tests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(220,70%,58%)]">→</span>
                    <span className="lowercase">api endpoint testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(220,70%,58%)]">→</span>
                    <span className="lowercase">database migration tests</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 border border-gray-800 rounded-xl bg-black/40">
                <h4 className="text-lg font-medium text-white mb-3 lowercase">deployment features</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(280,70%,60%)]">→</span>
                    <span className="lowercase">blue-green deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(280,70%,60%)]">→</span>
                    <span className="lowercase">automatic rollback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(280,70%,60%)]">→</span>
                    <span className="lowercase">health check validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(280,70%,60%)]">→</span>
                    <span className="lowercase">slack notifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Highlights Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(150,70%,55%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                implementation highlights
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(150,70%,55%)] to-[hsl(280,70%,60%)] mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(150,70%,55%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase flex items-center gap-3">
                <Shield className="text-[hsl(150,70%,55%)]" size={28} />
                authentication & authorization
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-6">
                implemented jwt-based authentication with refresh token rotation. role-based access control ensures proper permissions across tenant boundaries.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">security measures</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(150,70%,55%)]">→</span>
                      <span className="lowercase">bcrypt password hashing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(150,70%,55%)]">→</span>
                      <span className="lowercase">jwt token expiration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(150,70%,55%)]">→</span>
                      <span className="lowercase">refresh token rotation</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">authorization</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(150,70%,55%)]">→</span>
                      <span className="lowercase">role-based permissions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(150,70%,55%)]">→</span>
                      <span className="lowercase">resource-level access control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(150,70%,55%)]">→</span>
                      <span className="lowercase">tenant context validation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(220,70%,58%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase flex items-center gap-3">
                <Network className="text-[hsl(220,70%,58%)]" size={28} />
                api design & optimization
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-6">
                restful api design with consistent error handling, request validation, and comprehensive documentation. optimized for performance with caching and pagination.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">api features</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(220,70%,58%)]">→</span>
                      <span className="lowercase">restful conventions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(220,70%,58%)]">→</span>
                      <span className="lowercase">swagger documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(220,70%,58%)]">→</span>
                      <span className="lowercase">request validation</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">performance</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(220,70%,58%)]">→</span>
                      <span className="lowercase">redis caching layer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(220,70%,58%)]">→</span>
                      <span className="lowercase">cursor-based pagination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(220,70%,58%)]">→</span>
                      <span className="lowercase">query optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(280,70%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase flex items-center gap-3">
                <Cloud className="text-[hsl(280,70%,60%)]" size={28} />
                aws infrastructure
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-6">
                containerized deployment on aws ecs fargate with auto-scaling. leveraged rds for postgresql, elasticache for redis, and cloudwatch for monitoring.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">compute</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(280,70%,60%)]">→</span>
                      <span className="lowercase">ecs fargate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(280,70%,60%)]">→</span>
                      <span className="lowercase">application load balancer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(280,70%,60%)]">→</span>
                      <span className="lowercase">auto-scaling groups</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">storage</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(280,70%,60%)]">→</span>
                      <span className="lowercase">rds postgresql</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(280,70%,60%)]">→</span>
                      <span className="lowercase">elasticache redis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(280,70%,60%)]">→</span>
                      <span className="lowercase">s3 for assets</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">monitoring</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(280,70%,60%)]">→</span>
                      <span className="lowercase">cloudwatch logs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(280,70%,60%)]">→</span>
                      <span className="lowercase">cloudwatch metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(280,70%,60%)]">→</span>
                      <span className="lowercase">x-ray tracing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm md:text-base font-normal lowercase">
          <p>© 2025 freelance engineering showcase</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[hsl(150,70%,55%)] transition-colors">
              portfolio
            </a>
            <a href="#" className="hover:text-[hsl(150,70%,55%)] transition-colors">
              contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FreelanceExpertise;