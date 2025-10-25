import { useEffect, useState } from 'react';
import { TrendingDown, Database, Zap, GitBranch, BarChart3, Github, BookOpen, ExternalLink, Activity, Server, Clock } from 'lucide-react';

const JSIExpertise = () => {
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
            jsi software
          </h1>
        </div>
        
        <div className="flex items-center gap-3 mt-8">
          <div className="w-2 h-2 bg-[hsl(270,70%,65%)] rounded-full animate-pulse"></div>
          <span className="text-sm lowercase tracking-[0.2em] text-gray-400" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            loading expertise
          </span>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
          <div 
            className="h-full bg-gradient-to-r from-[hsl(270,70%,65%)] to-[hsl(320,80%,60%)] transition-all duration-300"
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
            className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(270,70%,65%)] opacity-20 blur-[120px] transition-transform duration-1000"
            style={{ 
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02 + scrollY * 0.3}px)` 
            }}
          ></div>
          <div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(320,80%,60%)] opacity-20 blur-[120px] transition-transform duration-1000" 
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
                className="text-gray-300 hover:text-[hsl(270,70%,65%)] transition-colors duration-300 flex items-center gap-2 text-base md:text-lg font-normal lowercase"
              >
                <span className="text-xl">←</span>
                <span>back to portfolio</span>
              </button>
            </div>

            {/* Main heading */}
            <div className="text-center space-y-4 md:space-y-6">
              <div className="overflow-hidden">
                <a 
                  href="https://jsisoftwaresolutions.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-block relative"
                  title="Visit JSI Software Solutions"
                >
                  <h1 
                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight lowercase transition-all duration-1000 ${
                      isVisible ? 'text-reveal' : 'opacity-0'
                    }`}
                    style={{ animationDelay: '0.1s' }}
                  >
                    {'jsi software'.split('').map((char, i) => (
                      <span 
                        key={i} 
                        className="char-reveal inline-block"
                        style={{ animationDelay: `${0.1 + i * 0.04}s` }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                  </h1>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <span className="text-sm text-[hsl(270,70%,65%)] lowercase tracking-wide">company website →</span>
                  </div>
                </a>
              </div>
              
              <div className="overflow-hidden">
                <a 
                  href="https://jsisoftwaresolutions.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-block relative"
                  title="Visit JSI Software Solutions"
                >
                  <h1 
                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal transition-all duration-1000 lowercase ${
                      isVisible ? 'text-reveal' : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: '0.5s',
                      background: 'linear-gradient(to right, hsl(270,70%,65%), hsl(320,80%,60%))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    solutions
                  </h1>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <span className="text-sm text-[hsl(320,80%,60%)] lowercase tracking-wide">company website →</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Description */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.9s' }}>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed text-center font-normal lowercase">
                end-to-end latency optimization across microservices platform. achieved 38% latency reduction through redis caching, grpc migration, and postgresql optimization. serving 1m+ requests/day with fastify, kubernetes hpa, and opentelemetry observability.
              </p>
            </div>

            {/* Action buttons */}
            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 ${
              isVisible ? 'scale-in' : 'opacity-0'
            }`} style={{ animationDelay: '1.1s' }}>
              <a 
                href="https://jsisoftwaresolutions.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-[hsl(270,70%,65%)] to-[hsl(320,80%,60%)] rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg shadow-[hsl(270,70%,65%)]/20"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="flex items-center gap-2 relative z-10 text-white lowercase">
                  <ExternalLink size={20} />
                  <span className="font-medium text-base">company website</span>
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
            <span className="text-sm text-gray-300 lowercase tracking-wider font-normal">explore optimizations</span>
            <div className="w-px h-16 bg-gray-500"></div>
          </div>
        </div>
      </section>

      {/* Performance Impact Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(270,70%,65%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                performance impact
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(270,70%,65%)] to-[hsl(320,80%,60%)] mx-auto"></div>
          </div>

          {/* Metrics Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Latency Reduction */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(270,70%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[hsl(270,70%,65%)]/10 rounded-lg">
                  <TrendingDown className="text-[hsl(270,70%,65%)]" size={32} />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-normal text-white mb-4">38%</h3>
              <p className="text-gray-300 text-base md:text-lg font-normal lowercase">
                latency reduction
              </p>
            </div>

            {/* DB Load Reduction */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(320,80%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[hsl(320,80%,60%)]/10 rounded-lg">
                  <Database className="text-[hsl(320,80%,60%)]" size={32} />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-normal text-white mb-4">45%</h3>
              <p className="text-gray-300 text-base md:text-lg font-normal lowercase">
                db load reduction
              </p>
            </div>

            {/* Request Throughput */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(270,70%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[hsl(270,70%,65%)]/10 rounded-lg">
                  <BarChart3 className="text-[hsl(270,70%,65%)]" size={32} />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-normal text-white mb-4">1m+</h3>
              <p className="text-gray-300 text-base md:text-lg font-normal lowercase">
                requests per day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Optimizations Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(320,80%,60%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                technical optimizations
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(270,70%,65%)] to-[hsl(320,80%,60%)] mx-auto"></div>
          </div>

          {/* Optimization Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Redis Caching */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(270,70%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(270,70%,65%)]/10 rounded-lg">
                  <Zap className="text-[hsl(270,70%,65%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">redis caching</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-4">
                implemented redis caching for hot data paths, storing frequently accessed data in-memory to avoid repetitive database reads. reduced database load by 45% and improved response times significantly.
              </p>
              <div className="flex items-center gap-2 text-[hsl(270,70%,65%)] text-sm font-medium">
                <span>Impact:</span>
                <span className="text-white">45% DB load reduction</span>
              </div>
            </div>

            {/* gRPC Migration */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(320,80%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(320,80%,60%)]/10 rounded-lg">
                  <GitBranch className="text-[hsl(320,80%,60%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">grpc migration</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-4">
                migrated internal rest apis to grpc, leveraging http/2 and protocol buffers for faster binary communication. replaced text-based json with efficient binary serialization between microservices.
              </p>
              <div className="flex items-center gap-2 text-[hsl(320,80%,60%)] text-sm font-medium">
                <span>Impact:</span>
                <span className="text-white">18-25ms latency reduction per call</span>
              </div>
            </div>

            {/* PostgreSQL Optimization */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(270,70%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(270,70%,65%)]/10 rounded-lg">
                  <Database className="text-[hsl(270,70%,65%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">postgresql optimization</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-4">
                optimized slow queries, added strategic indexes to critical tables, improved query plans, and resolved n+1 query patterns from prisma orm. reduced i/o operations and improved overall database performance.
              </p>
              <div className="flex items-center gap-2 text-[hsl(270,70%,65%)] text-sm font-medium">
                <span>Impact:</span>
                <span className="text-white">100-150ms to optimized queries</span>
              </div>
            </div>

            {/* Observability */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(320,80%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(320,80%,60%)]/10 rounded-lg">
                  <BarChart3 className="text-[hsl(320,80%,60%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">opentelemetry observability</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-4">
                implemented opentelemetry for vendor-neutral observability across 10+ microservices. collected traces, metrics, and logs, exported to grafana and prometheus for monitoring and alerting.
              </p>
              <div className="flex items-center gap-2 text-[hsl(320,80%,60%)] text-sm font-medium">
                <span>Impact:</span>
                <span className="text-white">Full system visibility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kafka Architecture Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(270,70%,65%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                event-driven architecture
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(270,70%,65%)] to-[hsl(320,80%,60%)] mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(270,70%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase flex items-center gap-3">
                <GitBranch className="text-[hsl(270,70%,65%)]" size={28} />
                kafka-based workflow
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-8">
                implemented apache kafka for asynchronous communication between order, payment, billing, and notification microservices. ensures scalable, fault-tolerant, decoupled communication with event streaming.
              </p>
              
              <div className="space-y-4 pl-4 border-l-2 border-[hsl(270,70%,65%)]/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(270,70%,65%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">order service</p>
                    <p className="text-gray-400 text-sm lowercase">publishes order_created event</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(290,70%,65%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">payment service</p>
                    <p className="text-gray-400 text-sm lowercase">consumes order_created, processes payment, publishes payment_success</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(310,75%,62%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">billing service</p>
                    <p className="text-gray-400 text-sm lowercase">consumes payment_success, generates invoice</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(320,80%,60%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">notification service</p>
                    <p className="text-gray-400 text-sm lowercase">consumes invoice_generated, sends email/sms</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-800 rounded-xl bg-black/40">
                <h4 className="text-lg font-medium text-white mb-3 lowercase">kafka components</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(270,70%,65%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">producer:</span> sends messages to kafka topics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(270,70%,65%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">consumer:</span> reads messages from topics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(270,70%,65%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">topic:</span> logical channel for data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(270,70%,65%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">partition:</span> topic division for parallelism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(270,70%,65%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">broker:</span> kafka server storing topic data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(270,70%,65%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">offset:</span> message position in partition</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 border border-gray-800 rounded-xl bg-black/40">
                <h4 className="text-lg font-medium text-white mb-3 lowercase">communication patterns</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(320,80%,60%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">grpc:</span> synchronous low-latency calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(320,80%,60%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">kafka:</span> asynchronous event-driven flows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(320,80%,60%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">redis pub/sub:</span> real-time interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(320,80%,60%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">rest:</span> external api integrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(320,80%,60%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                technology stack
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(270,70%,65%)] to-[hsl(320,80%,60%)] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-800 rounded-xl bg-black/40 hover:border-[hsl(270,70%,65%)]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-[hsl(270,70%,65%)]" size={24} />
                <h4 className="text-xl font-medium text-white lowercase">backend</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="lowercase">• fastify - low-overhead routing</li>
                <li className="lowercase">• node.js - runtime environment</li>
                <li className="lowercase">• grpc - service communication</li>
                <li className="lowercase">• prisma - orm for postgresql</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-800 rounded-xl bg-black/40 hover:border-[hsl(290,70%,65%)]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-[hsl(290,70%,65%)]" size={24} />
                <h4 className="text-xl font-medium text-white lowercase">data layer</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="lowercase">• postgresql - primary database</li>
                <li className="lowercase">• redis - caching and pub/sub</li>
                <li className="lowercase">• kafka - event streaming</li>
                <li className="lowercase">• mongodb - document storage</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-800 rounded-xl bg-black/40 hover:border-[hsl(310,75%,62%)]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="text-[hsl(310,75%,62%)]" size={24} />
                <h4 className="text-xl font-medium text-white lowercase">observability</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="lowercase">• opentelemetry - tracing</li>
                <li className="lowercase">• prometheus - metrics</li>
                <li className="lowercase">• grafana - visualization</li>
                <li className="lowercase">• elk stack - log aggregation</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-800 rounded-xl bg-black/40 hover:border-[hsl(320,80%,60%)]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-[hsl(320,80%,60%)]" size={24} />
                <h4 className="text-xl font-medium text-white lowercase">infrastructure</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="lowercase">• kubernetes - orchestration</li>
                <li className="lowercase">• docker - containerization</li>
                <li className="lowercase">• hpa - autoscaling</li>
                <li className="lowercase">• nginx - load balancing</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-800 rounded-xl bg-black/40 hover:border-[hsl(270,70%,65%)]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="text-[hsl(270,70%,65%)]" size={24} />
                <h4 className="text-xl font-medium text-white lowercase">messaging</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="lowercase">• kafka - event streaming</li>
                <li className="lowercase">• rabbitmq - message queuing</li>
                <li className="lowercase">• redis pub/sub - real-time</li>
                <li className="lowercase">• websockets - bidirectional</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-800 rounded-xl bg-black/40 hover:border-[hsl(290,70%,65%)]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-[hsl(290,70%,65%)]" size={24} />
                <h4 className="text-xl font-medium text-white lowercase">performance</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="lowercase">• redis caching - 45% db reduction</li>
                <li className="lowercase">• grpc - binary serialization</li>
                <li className="lowercase">• http/2 - multiplexing</li>
                <li className="lowercase">• indexed queries - optimized i/o</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(270,70%,65%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                challenges and solutions
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(270,70%,65%)] to-[hsl(320,80%,60%)] mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(270,70%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-4 lowercase">
                challenge: high api latency (100-150ms)
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase">
                <p>
                  <span className="text-[hsl(270,70%,65%)] font-medium">problem:</span> api endpoints experiencing high latency with heavy join queries on large tables (users, orders, transactions) and frequent n+1 query patterns from prisma orm.
                </p>
                <p>
                  <span className="text-[hsl(320,80%,60%)] font-medium">solution:</span> implemented redis caching for hot data paths (45% db load reduction), added strategic indexes to critical tables, optimized query plans, and resolved n+1 patterns. reduced i/o operations significantly.
                </p>
              </div>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(320,80%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-4 lowercase">
                challenge: inter-service communication overhead
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase">
                <p>
                  <span className="text-[hsl(270,70%,65%)] font-medium">problem:</span> rest apis using http/1.1 and json causing slow binary communication between microservices with high network overhead.
                </p>
                <p>
                  <span className="text-[hsl(320,80%,60%)] font-medium">solution:</span> migrated internal rest apis to grpc, leveraging http/2 and protocol buffers for faster binary serialization. reduced inter-service latency by 18-25ms per call.
                </p>
              </div>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(270,70%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-4 lowercase">
                challenge: observability at scale (10+ microservices)
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase">
                <p>
                  <span className="text-[hsl(270,70%,65%)] font-medium">problem:</span> difficult to find traces and metrics when hitting 1m+ requests across 10+ microservices (authentication, notification, order, payment, etc).
                </p>
                <p>
                  <span className="text-[hsl(320,80%,60%)] font-medium">solution:</span> implemented opentelemetry for vendor-neutral observability. collected traces, metrics, and logs from distributed systems, exported to grafana and prometheus for monitoring and alerting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(320,80%,60%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                results achieved
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(270,70%,65%)] to-[hsl(320,80%,60%)] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-800 rounded-2xl bg-black/40">
              <h3 className="text-xl font-medium text-white mb-4 lowercase">performance improvements</h3>
              <ul className="space-y-3 text-gray-300 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[hsl(270,70%,65%)]">✓</span>
                  <span className="lowercase">38% overall request latency reduction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[hsl(270,70%,65%)]">✓</span>
                  <span className="lowercase">45% database load reduction via redis caching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[hsl(270,70%,65%)]">✓</span>
                  <span className="lowercase">18-25ms inter-service latency reduction with grpc</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[hsl(270,70%,65%)]">✓</span>
                  <span className="lowercase">100-150ms to optimized query execution</span>
                </li>
              </ul>
            </div>

            <div className="p-8 border border-gray-800 rounded-2xl bg-black/40">
              <h3 className="text-xl font-medium text-white mb-4 lowercase">scalability and reliability</h3>
              <ul className="space-y-3 text-gray-300 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-[hsl(320,80%,60%)]">✓</span>
                  <span className="lowercase">1m+ requests per day handled efficiently</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[hsl(320,80%,60%)]">✓</span>
                  <span className="lowercase">more scalable, resilient backend architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[hsl(320,80%,60%)]">✓</span>
                  <span className="lowercase">improved developer velocity with observability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[hsl(320,80%,60%)]">✓</span>
                  <span className="lowercase">fault-tolerant event-driven workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm md:text-base font-normal lowercase">
          <p>© 2025 jsi software solutions. all rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[hsl(270,70%,65%)] transition-colors">
              case studies
            </a>
            <a href="#" className="hover:text-[hsl(270,70%,65%)] transition-colors">
              architecture
            </a>
            <a href="#" className="hover:text-[hsl(270,70%,65%)] transition-colors">
              contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JSIExpertise;