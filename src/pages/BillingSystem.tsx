import { useEffect, useState } from 'react';
import { Zap, Github, BookOpen, ExternalLink, Database, GitBranch, Shield, RefreshCw } from 'lucide-react';

const BillingSystem = () => {
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
            event-driven
          </h1>
        </div>
        
        <div className="flex items-center gap-3 mt-8">
          <div className="w-2 h-2 bg-[hsl(160,60%,60%)] rounded-full animate-pulse"></div>
          <span className="text-sm lowercase tracking-[0.2em] text-gray-400" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            initializing billing system
          </span>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
          <div 
            className="h-full bg-gradient-to-r from-[hsl(160,60%,60%)] to-[hsl(200,70%,55%)] transition-all duration-300"
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
            className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(160,60%,60%)] opacity-20 blur-[120px] transition-transform duration-1000"
            style={{ 
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02 + scrollY * 0.3}px)` 
            }}
          ></div>
          <div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(200,70%,55%)] opacity-20 blur-[120px] transition-transform duration-1000" 
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
                className="text-gray-300 hover:text-[hsl(160,60%,60%)] transition-colors duration-300 flex items-center gap-2 text-base md:text-lg font-normal lowercase"
              >
                <span className="text-xl">←</span>
                <span>back to portfolio</span>
              </button>
            </div>

            {/* Main heading - Centered with character-by-character reveal */}
            <div className="text-center space-y-4 md:space-y-6">
              <div className="overflow-hidden">
                <h1 
                  className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight lowercase transition-all duration-1000 ${
                    isVisible ? 'text-reveal' : 'opacity-0'
                  }`}
                  style={{ animationDelay: '0.1s' }}
                >
                  {'event-driven'.split('').map((char, i) => (
                    <span 
                      key={i} 
                      className="char-reveal inline-block"
                      style={{ animationDelay: `${0.1 + i * 0.04}s` }}
                    >
                      {char}
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
                    animationDelay: '0.6s',
                    background: 'linear-gradient(to right, hsl(160,60%,60%), hsl(200,70%,55%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  billing system
                </h1>
              </div>
            </div>

            {/* Description - Centered with fade in */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.9s' }}>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed text-center font-normal lowercase">
                a microservices-based billing system built with kafka, saga, and outbox/inbox patterns to ensure reliable, exactly-once transaction processing across distributed services. manages billing workflows with automated compensation logic for failed steps, decouples services via kafka event streaming, and guarantees data consistency and fault tolerance.
              </p>
            </div>

            {/* Action buttons - Centered with scale in animation */}
            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 ${
              isVisible ? 'scale-in' : 'opacity-0'
            }`} style={{ animationDelay: '1.1s' }}>
              <a 
                href="#" 
                className="group relative px-8 py-4 bg-gradient-to-r from-[hsl(160,60%,60%)] to-[hsl(200,70%,55%)] rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg shadow-[hsl(160,60%,60%)]/20"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="flex items-center gap-2 relative z-10 text-white lowercase">
                  <ExternalLink size={20} />
                  <span className="font-medium text-base">view demo</span>
                </div>
              </a>

              <a 
                href="#" 
                className="group px-8 py-4 border-2 border-[hsl(160,60%,60%)] rounded-full hover:bg-[hsl(160,60%,60%)]/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 text-white lowercase">
                  <Github size={20} />
                  <span className="font-medium text-base">github</span>
                </div>
              </a>

              <a 
                href="#" 
                className="group px-8 py-4 border-2 border-gray-600 rounded-full hover:border-[hsl(200,70%,55%)] hover:bg-[hsl(200,70%,55%)]/10 transition-all duration-300 hover:scale-105"
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
            <span className="text-sm text-gray-300 lowercase tracking-wider font-normal">explore features</span>
            <div className="w-px h-16 bg-gray-500"></div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(160,60%,60%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                core architecture
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(160,60%,60%)] to-[hsl(200,70%,55%)] mx-auto"></div>
          </div>

          {/* Architecture Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Kafka Event Streaming */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(160,60%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(160,60%,60%)]/10 rounded-lg">
                  <Zap className="text-[hsl(160,60%,60%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">kafka event streaming</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase">
                decouples services through asynchronous event-driven communication. ensures high-throughput, real-time event processing with guaranteed message delivery and ordering across distributed billing workflows.
              </p>
            </div>

            {/* SAGA Pattern */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(200,70%,55%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(200,70%,55%)]/10 rounded-lg">
                  <GitBranch className="text-[hsl(200,70%,55%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">saga orchestration</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase">
                manages distributed transactions across multiple microservices with automated compensation logic. ensures data consistency and handles complex billing workflows with rollback capabilities for failed steps.
              </p>
            </div>

            {/* Outbox/Inbox Pattern */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(160,60%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(160,60%,60%)]/10 rounded-lg">
                  <Database className="text-[hsl(160,60%,60%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">outbox/inbox patterns</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase">
                guarantees exactly-once message processing and prevents data inconsistencies. stores events in the database alongside business data, ensuring reliable event publishing and consumption.
              </p>
            </div>

            {/* Fault Tolerance */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(200,70%,55%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(200,70%,55%)]/10 rounded-lg">
                  <Shield className="text-[hsl(200,70%,55%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">fault tolerance</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase">
                built-in resilience with automatic retries, circuit breakers, and fallback mechanisms. maintains system stability during partial failures and ensures graceful degradation of services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(200,70%,55%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                key features
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(160,60%,60%)] to-[hsl(200,70%,55%)] mx-auto"></div>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(160,60%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase flex items-center gap-3">
                <RefreshCw className="text-[hsl(160,60%,60%)]" size={28} />
                billing workflows
              </h3>
              <ul className="space-y-4 text-gray-300 text-base md:text-lg font-normal">
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(160,60%,60%)] mt-1 text-xl">•</span>
                  <span className="lowercase">invoice processing with automated generation and validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(160,60%,60%)] mt-1 text-xl">•</span>
                  <span className="lowercase">payment handling with multiple gateway integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(160,60%,60%)] mt-1 text-xl">•</span>
                  <span className="lowercase">subscription management with prorated billing and upgrades</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(160,60%,60%)] mt-1 text-xl">•</span>
                  <span className="lowercase">notification delivery across email, sms, and webhooks</span>
                </li>
              </ul>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(200,70%,55%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase">reliability guarantees</h3>
              <ul className="space-y-4 text-gray-300 text-base md:text-lg font-normal">
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(200,70%,55%)] mt-1 text-xl">•</span>
                  <span className="lowercase">exactly-once transaction processing across all services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(200,70%,55%)] mt-1 text-xl">•</span>
                  <span className="lowercase">automated compensation for failed workflow steps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(200,70%,55%)] mt-1 text-xl">•</span>
                  <span className="lowercase">guaranteed data consistency through event sourcing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(200,70%,55%)] mt-1 text-xl">•</span>
                  <span className="lowercase">comprehensive audit trails for compliance and debugging</span>
                </li>
              </ul>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(160,60%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase">scalability & performance</h3>
              <ul className="space-y-4 text-gray-300 text-base md:text-lg font-normal">
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(160,60%,60%)] mt-1 text-xl">•</span>
                  <span className="lowercase">horizontal scaling for high-throughput event processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(160,60%,60%)] mt-1 text-xl">•</span>
                  <span className="lowercase">partition-based kafka topics for parallel processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(160,60%,60%)] mt-1 text-xl">•</span>
                  <span className="lowercase">optimized database queries with read replicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(160,60%,60%)] mt-1 text-xl">•</span>
                  <span className="lowercase">caching strategies for frequently accessed data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Rating Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[hsl(160,60%,60%)] to-[hsl(200,70%,55%)] opacity-10 blur-[150px]"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
          <div className="overflow-hidden">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
              rate this project
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-300 font-normal lowercase">
            your feedback helps improve the project
          </p>
          
          <div className="space-y-8">
            <div className="flex justify-center gap-4 pt-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => {
                    const stars = document.querySelectorAll('.star-btn');
                    const submitBtn = document.getElementById('submit-rating-btn');
                    stars.forEach((s, i) => {
                      if (i < star) {
                        s.classList.add('star-filled');
                        s.classList.remove('star-empty');
                      } else {
                        s.classList.add('star-empty');
                        s.classList.remove('star-filled');
                      }
                    });
                    submitBtn.setAttribute('data-rating', star);
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                  }}
                  className="star-btn star-empty group transition-all duration-300 hover:scale-125"
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </button>
              ))}
            </div>

            <button
              id="submit-rating-btn"
              disabled
              data-rating="0"
              onClick={(e) => {
                const rating = e.target.getAttribute('data-rating');
                const messageEl = document.getElementById('rating-message');
                messageEl.textContent = `thank you for rating ${rating} star${rating > 1 ? 's' : ''}!`;
                messageEl.classList.remove('opacity-0');
                messageEl.classList.add('opacity-100');
                e.target.disabled = true;
                e.target.classList.add('opacity-50', 'cursor-not-allowed');
                setTimeout(() => {
                  messageEl.classList.remove('opacity-100');
                  messageEl.classList.add('opacity-0');
                }, 3000);
              }}
              className="px-10 py-4 bg-gradient-to-r from-[hsl(160,60%,60%)] to-[hsl(200,70%,55%)] rounded-full text-white font-medium text-base lowercase hover:scale-105 transition-all duration-300 shadow-lg shadow-[hsl(160,60%,60%)]/20 opacity-50 cursor-not-allowed"
            >
              submit rating
            </button>

            <p
              id="rating-message"
              className="text-[hsl(160,60%,60%)] text-lg font-normal lowercase opacity-0 transition-opacity duration-300"
            >
            </p>
          </div>

          <style>{`
            .star-empty {
              color: hsl(0, 0%, 40%);
            }
            .star-empty:hover {
              color: hsl(160, 60%, 60%);
            }
            .star-filled {
              color: hsl(160, 60%, 60%);
            }
            .star-filled svg {
              fill: hsl(160, 60%, 60%);
            }
            .star-empty:hover svg {
              fill: hsl(160, 60%, 60%);
            }
          `}</style>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm md:text-base font-normal lowercase">
          <p>© 2025 abhiral saha. all rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/abhiralsaha" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(160,60%,60%)] transition-colors">
              github
            </a>
            <a href="https://linkedin.com/in/abhiralsaha" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(160,60%,60%)] transition-colors">
              linkedin
            </a>
            <a href="mailto:contact@abhiralsaha.dev" className="hover:text-[hsl(160,60%,60%)] transition-colors">
              contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BillingSystem;