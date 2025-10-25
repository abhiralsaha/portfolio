import { useEffect, useState } from 'react';
import { Zap, Github, BookOpen, ExternalLink, Shield, Activity, TrendingUp, Network, Server, Gauge } from 'lucide-react';

const CetpaExpertise = () => {
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
            cetpa infotech
          </h1>
        </div>
        
        <div className="flex items-center gap-3 mt-8">
          <div className="w-2 h-2 bg-[hsl(200,80%,60%)] rounded-full animate-pulse"></div>
          <span className="text-sm lowercase tracking-[0.2em] text-gray-400" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            loading expertise
          </span>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
          <div 
            className="h-full bg-gradient-to-r from-[hsl(200,80%,60%)] to-[hsl(260,75%,65%)] transition-all duration-300"
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
            className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(200,80%,60%)] opacity-20 blur-[120px] transition-transform duration-1000"
            style={{ 
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02 + scrollY * 0.3}px)` 
            }}
          ></div>
          <div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(260,75%,65%)] opacity-20 blur-[120px] transition-transform duration-1000" 
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
                className="text-gray-300 hover:text-[hsl(200,80%,60%)] transition-colors duration-300 flex items-center gap-2 text-base md:text-lg font-normal lowercase"
              >
                <span className="text-xl">←</span>
                <span>back to portfolio</span>
              </button>
            </div>

            {/* Main heading */}
            <div className="text-center space-y-4 md:space-y-6">
              <div className="overflow-hidden">
                <a 
                  href="https://www.cetpainfotech.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-block relative"
                  title="Visit Cetpa Infotech"
                >
                  <h1 
                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight lowercase transition-all duration-1000 ${
                      isVisible ? 'text-reveal' : 'opacity-0'
                    }`}
                    style={{ animationDelay: '0.1s' }}
                  >
                    {'cetpa'.split('').map((char, i) => (
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
                    <span className="text-sm text-[hsl(200,80%,60%)] lowercase tracking-wide">company website →</span>
                  </div>
                </a>
              </div>
              
              <div className="overflow-hidden">
                <a 
                  href="https://www.cetpainfotech.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-block relative"
                  title="Visit Cetpa Infotech"
                >
                  <h1 
                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal transition-all duration-1000 lowercase ${
                      isVisible ? 'text-reveal' : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: '0.5s',
                      background: 'linear-gradient(to right, hsl(200,80%,60%), hsl(260,75%,65%))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    infotech
                  </h1>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <span className="text-sm text-[hsl(260,75%,65%)] lowercase tracking-wide">company website →</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Subtitle */}
            <div className={`text-center transition-all duration-1000 ${
              isVisible ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.7s' }}>
              <p className="text-xl md:text-2xl text-gray-400 font-normal lowercase">
                web developer intern • noida • jun 2023 – dec 2023
              </p>
            </div>

            {/* Description */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.9s' }}>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed text-center font-normal lowercase">
                implemented scalable websocket gateways with sharding and backpressure, boosting throughput by 40%. added circuit breakers, rate-limiting, and health checks to ensure system resilience and reliability.
              </p>
            </div>

            {/* Action buttons */}
            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 ${
              isVisible ? 'scale-in' : 'opacity-0'
            }`} style={{ animationDelay: '1.1s' }}>
              <a 
                href="#" 
                className="group relative px-8 py-4 bg-gradient-to-r from-[hsl(200,80%,60%)] to-[hsl(260,75%,65%)] rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg shadow-[hsl(200,80%,60%)]/20"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="flex items-center gap-2 relative z-10 text-white lowercase">
                  <Zap size={20} />
                  <span className="font-medium text-base">view project</span>
                </div>
              </a>

              <a 
                href="#" 
                className="group px-8 py-4 border-2 border-[hsl(260,75%,65%)] rounded-full hover:bg-[hsl(260,75%,65%)]/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 text-white lowercase">
                  <BookOpen size={20} />
                  <span className="font-medium text-base">view certificate</span>
                </div>
              </a>

              <a 
                href="https://www.cetpainfotech.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 border-2 border-gray-600 rounded-full hover:border-[hsl(200,80%,60%)] hover:bg-[hsl(200,80%,60%)]/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 text-white lowercase">
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
            <span className="text-sm text-gray-300 lowercase tracking-wider font-normal">explore implementation</span>
            <div className="w-px h-16 bg-gray-500"></div>
          </div>
        </div>
      </section>

      {/* Performance Impact Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(200,80%,60%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                performance impact
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(200,80%,60%)] to-[hsl(260,75%,65%)] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(200,80%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[hsl(200,80%,60%)]/10 rounded-lg">
                  <TrendingUp className="text-[hsl(200,80%,60%)]" size={32} />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-normal text-white mb-4">40%</h3>
              <p className="text-gray-300 text-base md:text-lg font-normal lowercase">
                throughput increase
              </p>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(230,75%,62%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[hsl(230,75%,62%)]/10 rounded-lg">
                  <Network className="text-[hsl(230,75%,62%)]" size={32} />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-normal text-white mb-4">100%</h3>
              <p className="text-gray-300 text-base md:text-lg font-normal lowercase">
                system resilience
              </p>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(260,75%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[hsl(260,75%,65%)]/10 rounded-lg">
                  <Zap className="text-[hsl(260,75%,65%)]" size={32} />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-normal text-white mb-4">real-time</h3>
              <p className="text-gray-300 text-base md:text-lg font-normal lowercase">
                low-latency communication
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(260,75%,65%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                core technologies
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(200,80%,60%)] to-[hsl(260,75%,65%)] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(200,80%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(200,80%,60%)]/10 rounded-lg">
                  <Network className="text-[hsl(200,80%,60%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">websocket protocol</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-4">
                full-duplex communication protocol over single tcp connection. enables real-time, low-latency bidirectional communication for chat apps, live updates, and instant notifications.
              </p>
              <div className="flex items-center gap-2 text-[hsl(200,80%,60%)] text-sm font-medium">
                <span>Use case:</span>
                <span className="text-white">real-time chat, live feeds, notifications</span>
              </div>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(230,75%,62%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(230,75%,62%)]/10 rounded-lg">
                  <Server className="text-[hsl(230,75%,62%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">websocket gateways</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-4">
                server layer managing websocket connections with authentication, routing, and load balancing. sharding splits connections across servers for horizontal scaling and efficient client handling.
              </p>
              <div className="flex items-center gap-2 text-[hsl(230,75%,62%)] text-sm font-medium">
                <span>Feature:</span>
                <span className="text-white">horizontal scaling, load distribution</span>
              </div>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(260,75%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(260,75%,65%)]/10 rounded-lg">
                  <Gauge className="text-[hsl(260,75%,65%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">backpressure control</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-4">
                mechanism controlling data flow when server or client is overloaded. prevents message queues from growing indefinitely, avoiding crashes and memory issues in high-traffic scenarios.
              </p>
              <div className="flex items-center gap-2 text-[hsl(260,75%,65%)] text-sm font-medium">
                <span>Benefit:</span>
                <span className="text-white">prevents system crashes, manages load</span>
              </div>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(200,80%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(200,80%,60%)]/10 rounded-lg">
                  <Shield className="text-[hsl(200,80%,60%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">circuit breakers</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-4">
                resilience pattern stopping requests to failing services temporarily. protects system from cascading failures and allows recovery without downtime or service interruption.
              </p>
              <div className="flex items-center gap-2 text-[hsl(200,80%,60%)] text-sm font-medium">
                <span>Protection:</span>
                <span className="text-white">cascading failure prevention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(200,80%,60%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                system architecture
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(200,80%,60%)] to-[hsl(260,75%,65%)] mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(200,80%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase flex items-center gap-3">
                <Network className="text-[hsl(200,80%,60%)]" size={28} />
                connection flow
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-8">
                clients connect via websocket gateways which shard connections for load distribution. backpressure ensures slow clients or overloaded servers don't crash the system.
              </p>
              
              <div className="space-y-4 pl-4 border-l-2 border-[hsl(200,80%,60%)]/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(200,80%,60%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">client connection</p>
                    <p className="text-gray-400 text-sm lowercase">clients establish websocket connections to gateway</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(220,77%,63%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">gateway sharding</p>
                    <p className="text-gray-400 text-sm lowercase">connections distributed across multiple servers for load balancing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(240,75%,64%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">backpressure management</p>
                    <p className="text-gray-400 text-sm lowercase">flow control prevents overload and system crashes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-[hsl(260,75%,65%)] rounded-full -ml-[25px]"></div>
                  <div>
                    <p className="text-white font-medium lowercase">resilience layer</p>
                    <p className="text-gray-400 text-sm lowercase">circuit breakers and rate limiting protect system integrity</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-800 rounded-xl bg-black/40">
                <h4 className="text-lg font-medium text-white mb-3 lowercase">resilience features</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(200,80%,60%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">circuit breakers:</span> stop failing service requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(200,80%,60%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">rate limiting:</span> protect against abusive services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(200,80%,60%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">health checks:</span> monitor server status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(200,80%,60%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">auto-scaling:</span> automated failover support</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 border border-gray-800 rounded-xl bg-black/40">
                <h4 className="text-lg font-medium text-white mb-3 lowercase">scalability features</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(260,75%,65%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">sharding:</span> horizontal connection distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(260,75%,65%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">load balancing:</span> efficient resource utilization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(260,75%,65%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">backpressure:</span> flow control mechanism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(260,75%,65%)]">•</span>
                    <span className="lowercase"><span className="text-white font-medium">full-duplex:</span> bidirectional real-time data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Details Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(260,75%,65%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                implementation highlights
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(200,80%,60%)] to-[hsl(260,75%,65%)] mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(200,80%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase flex items-center gap-3">
                <Zap className="text-[hsl(200,80%,60%)]" size={28} />
                real-time communication
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-6">
                implemented websocket protocol for full-duplex communication enabling instant data exchange between clients and servers with minimal latency.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">key achievements</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(200,80%,60%)]">→</span>
                      <span className="lowercase">chat applications with instant messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(200,80%,60%)]">→</span>
                      <span className="lowercase">live data feeds and updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(200,80%,60%)]">→</span>
                      <span className="lowercase">real-time notification systems</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">technical benefits</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(200,80%,60%)]">→</span>
                      <span className="lowercase">single tcp connection efficiency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(200,80%,60%)]">→</span>
                      <span className="lowercase">bidirectional data flow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(200,80%,60%)]">→</span>
                      <span className="lowercase">low latency communication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(230,75%,62%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase flex items-center gap-3">
                <Server className="text-[hsl(230,75%,62%)]" size={28} />
                gateway sharding & load balancing
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-6">
                deployed websocket gateways with intelligent sharding to distribute connections across multiple servers, achieving horizontal scalability and efficient resource utilization.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">sharding strategy</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(230,75%,62%)]">→</span>
                      <span className="lowercase">consistent hash-based distribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(230,75%,62%)]">→</span>
                      <span className="lowercase">automatic rebalancing on scaling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(230,75%,62%)]">→</span>
                      <span className="lowercase">connection affinity maintenance</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">performance gains</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(230,75%,62%)]">→</span>
                      <span className="lowercase">40% throughput improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(230,75%,62%)]">→</span>
                      <span className="lowercase">reduced server overload incidents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(230,75%,62%)]">→</span>
                      <span className="lowercase">seamless horizontal scaling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(260,75%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase flex items-center gap-3">
                <Gauge className="text-[hsl(260,75%,65%)]" size={28} />
                backpressure & flow control
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-6">
                integrated backpressure mechanisms to manage data flow during high traffic, preventing memory exhaustion and ensuring system stability under load.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">control mechanisms</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(260,75%,65%)]">→</span>
                      <span className="lowercase">message queue throttling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(260,75%,65%)]">→</span>
                      <span className="lowercase">adaptive buffer management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(260,75%,65%)]">→</span>
                      <span className="lowercase">connection pause/resume logic</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">stability improvements</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(260,75%,65%)]">→</span>
                      <span className="lowercase">eliminated memory leaks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(260,75%,65%)]">→</span>
                      <span className="lowercase">prevented cascade failures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(260,75%,65%)]">→</span>
                      <span className="lowercase">graceful degradation support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(200,80%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase flex items-center gap-3">
                <Shield className="text-[hsl(200,80%,60%)]" size={28} />
                resilience patterns
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase mb-6">
                implemented circuit breakers, rate limiting, and health checks to protect system integrity and enable quick recovery from failures.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">circuit breakers</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(200,80%,60%)]">→</span>
                      <span className="lowercase">automatic trip detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(200,80%,60%)]">→</span>
                      <span className="lowercase">fallback mechanisms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(200,80%,60%)]">→</span>
                      <span className="lowercase">self-healing recovery</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">rate limiting</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(200,80%,60%)]">→</span>
                      <span className="lowercase">token bucket algorithm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(200,80%,60%)]">→</span>
                      <span className="lowercase">per-user quotas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(200,80%,60%)]">→</span>
                      <span className="lowercase">abuse prevention</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-black/60 rounded-lg border border-gray-700/50">
                  <p className="text-white font-medium text-sm mb-2 lowercase">health monitoring</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(200,80%,60%)]">→</span>
                      <span className="lowercase">continuous health checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(200,80%,60%)]">→</span>
                      <span className="lowercase">automated alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(200,80%,60%)]">→</span>
                      <span className="lowercase">failover orchestration</span>
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
          <p>© 2025 cetpa infotech internship showcase</p>
          <div className="flex gap-6">
            <a href="https://www.cetpainfotech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(200,80%,60%)] transition-colors">
              company website
            </a>
            <a href="#" className="hover:text-[hsl(200,80%,60%)] transition-colors">
              contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CetpaExpertise;