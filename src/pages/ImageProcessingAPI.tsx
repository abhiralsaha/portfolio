import { useEffect, useState } from 'react';
import { Image, Github, BookOpen, ExternalLink, Zap, Cloud, Layers, TrendingUp } from 'lucide-react';

const ImageProcessingAPI = () => {
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
            image processing
          </h1>
        </div>
        
        <div className="flex items-center gap-3 mt-8">
          <div className="w-2 h-2 bg-[hsl(30,90%,65%)] rounded-full animate-pulse"></div>
          <span className="text-sm lowercase tracking-[0.2em] text-gray-400" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            loading api service
          </span>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
          <div 
            className="h-full bg-gradient-to-r from-[hsl(30,90%,65%)] to-[hsl(340,75%,60%)] transition-all duration-300"
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
            className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(30,90%,65%)] opacity-20 blur-[120px] transition-transform duration-1000"
            style={{ 
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02 + scrollY * 0.3}px)` 
            }}
          ></div>
          <div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(340,75%,60%)] opacity-20 blur-[120px] transition-transform duration-1000" 
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
                className="text-gray-300 hover:text-[hsl(30,90%,65%)] transition-colors duration-300 flex items-center gap-2 text-base md:text-lg font-normal lowercase"
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
                  {'image processing'.split('').map((char, i) => (
                    <span 
                      key={i} 
                      className="char-reveal inline-block"
                      style={{ animationDelay: `${0.1 + i * 0.03}s` }}
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
                    background: 'linear-gradient(to right, hsl(30,90%,65%), hsl(340,75%,60%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  api
                </h1>
              </div>
            </div>

            {/* Description - Centered with fade in */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.9s' }}>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed text-center font-normal lowercase">
                a fastify-based node.js service that streams images to aws s3 for scalable storage. achieves low-latency uploads/downloads (p95=120ms at 1k rps) using optimized node streams and automatically scales via keda + kubernetes hpa, ensuring high throughput, reliability, and efficient resource usage.
              </p>
            </div>

            {/* Action buttons - Centered with scale in animation */}
            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 ${
              isVisible ? 'scale-in' : 'opacity-0'
            }`} style={{ animationDelay: '1.1s' }}>
              <a 
                href="#" 
                className="group relative px-8 py-4 bg-gradient-to-r from-[hsl(30,90%,65%)] to-[hsl(340,75%,60%)] rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg shadow-[hsl(30,90%,65%)]/20"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="flex items-center gap-2 relative z-10 text-white lowercase">
                  <ExternalLink size={20} />
                  <span className="font-medium text-base">view demo</span>
                </div>
              </a>

              <a 
                href="#" 
                className="group px-8 py-4 border-2 border-[hsl(30,90%,65%)] rounded-full hover:bg-[hsl(30,90%,65%)]/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 text-white lowercase">
                  <Github size={20} />
                  <span className="font-medium text-base">github</span>
                </div>
              </a>

              <a 
                href="#" 
                className="group px-8 py-4 border-2 border-gray-600 rounded-full hover:border-[hsl(340,75%,60%)] hover:bg-[hsl(340,75%,60%)]/10 transition-all duration-300 hover:scale-105"
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
            <span className="text-sm text-gray-300 lowercase tracking-wider font-normal">explore performance</span>
            <div className="w-px h-16 bg-gray-500"></div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(30,90%,65%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                performance metrics
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(30,90%,65%)] to-[hsl(340,75%,60%)] mx-auto"></div>
          </div>

          {/* Metrics Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Low Latency */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(30,90%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[hsl(30,90%,65%)]/10 rounded-lg">
                  <Zap className="text-[hsl(30,90%,65%)]" size={32} />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-normal text-white mb-4">120ms</h3>
              <p className="text-gray-300 text-base md:text-lg font-normal lowercase">
                p95 latency at 1k rps
              </p>
            </div>

            {/* High Throughput */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(340,75%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[hsl(340,75%,60%)]/10 rounded-lg">
                  <TrendingUp className="text-[hsl(340,75%,60%)]" size={32} />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-normal text-white mb-4">1k+ rps</h3>
              <p className="text-gray-300 text-base md:text-lg font-normal lowercase">
                sustained throughput
              </p>
            </div>

            {/* Auto Scaling */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(30,90%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[hsl(30,90%,65%)]/10 rounded-lg">
                  <Layers className="text-[hsl(30,90%,65%)]" size={32} />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-normal text-white mb-4">auto</h3>
              <p className="text-gray-300 text-base md:text-lg font-normal lowercase">
                keda + kubernetes hpa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(340,75%,60%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                technical architecture
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(30,90%,65%)] to-[hsl(340,75%,60%)] mx-auto"></div>
          </div>

          {/* Architecture Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fastify Framework */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(30,90%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(30,90%,65%)]/10 rounded-lg">
                  <Zap className="text-[hsl(30,90%,65%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">fastify framework</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase">
                built on fastify for maximum performance and low overhead. leverages schema-based validation and serialization for optimized request handling and minimal response times.
              </p>
            </div>

            {/* Node Streams */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(340,75%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(340,75%,60%)]/10 rounded-lg">
                  <TrendingUp className="text-[hsl(340,75%,60%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">optimized streams</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase">
                uses node.js streams for memory-efficient processing of large images. enables direct streaming to s3 without buffering entire files in memory, reducing latency and resource usage.
              </p>
            </div>

            {/* AWS S3 Integration */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(30,90%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(30,90%,65%)]/10 rounded-lg">
                  <Cloud className="text-[hsl(30,90%,65%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">aws s3 storage</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase">
                scalable object storage with s3's 99.999999999% durability. supports multipart uploads for large files and intelligent tiering for cost optimization based on access patterns.
              </p>
            </div>

            {/* Auto Scaling */}
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(340,75%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[hsl(340,75%,60%)]/10 rounded-lg">
                  <Layers className="text-[hsl(340,75%,60%)]" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-white lowercase">keda + kubernetes</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal lowercase">
                event-driven autoscaling with keda monitors queue depth and cpu metrics. horizontal pod autoscaler ensures optimal resource utilization and handles traffic spikes automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(30,90%,65%)] opacity-10 blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <div className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight fade-in-up lowercase">
                key features
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(30,90%,65%)] to-[hsl(340,75%,60%)] mx-auto"></div>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(30,90%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase flex items-center gap-3">
                <Image className="text-[hsl(30,90%,65%)]" size={28} />
                image operations
              </h3>
              <ul className="space-y-4 text-gray-300 text-base md:text-lg font-normal">
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(30,90%,65%)] mt-1 text-xl">•</span>
                  <span className="lowercase">fast upload with streaming multipart support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(30,90%,65%)] mt-1 text-xl">•</span>
                  <span className="lowercase">low-latency downloads with cdn integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(30,90%,65%)] mt-1 text-xl">•</span>
                  <span className="lowercase">metadata extraction and validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(30,90%,65%)] mt-1 text-xl">•</span>
                  <span className="lowercase">automatic format conversion and optimization</span>
                </li>
              </ul>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(340,75%,60%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase">reliability & scaling</h3>
              <ul className="space-y-4 text-gray-300 text-base md:text-lg font-normal">
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(340,75%,60%)] mt-1 text-xl">•</span>
                  <span className="lowercase">automatic retry logic with exponential backoff</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(340,75%,60%)] mt-1 text-xl">•</span>
                  <span className="lowercase">circuit breaker pattern for fault tolerance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(340,75%,60%)] mt-1 text-xl">•</span>
                  <span className="lowercase">horizontal scaling via kubernetes hpa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(340,75%,60%)] mt-1 text-xl">•</span>
                  <span className="lowercase">event-driven autoscaling with keda metrics</span>
                </li>
              </ul>
            </div>

            <div className="group p-8 md:p-10 border border-gray-800 rounded-2xl hover:border-[hsl(30,90%,65%)]/50 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-6 lowercase">monitoring & optimization</h3>
              <ul className="space-y-4 text-gray-300 text-base md:text-lg font-normal">
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(30,90%,65%)] mt-1 text-xl">•</span>
                  <span className="lowercase">real-time metrics with prometheus integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(30,90%,65%)] mt-1 text-xl">•</span>
                  <span className="lowercase">distributed tracing for request analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(30,90%,65%)] mt-1 text-xl">•</span>
                  <span className="lowercase">memory-efficient processing with streams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(30,90%,65%)] mt-1 text-xl">•</span>
                  <span className="lowercase">optimized connection pooling for s3 requests</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Section */}
      <section className="relative px-6 md:px-12 py-32 overflow-hidden border-t border-gray-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[hsl(30,90%,65%)] to-[hsl(340,75%,60%)] opacity-10 blur-[150px]"></div>
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
                    const stars = document.querySelectorAll('.star-btn-img');
                    const submitBtn = document.getElementById('submit-rating-btn-img');
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
                  className="star-btn-img star-empty group transition-all duration-300 hover:scale-125"
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
              id="submit-rating-btn-img"
              disabled
              data-rating="0"
              onClick={(e) => {
                const rating = e.target.getAttribute('data-rating');
                const messageEl = document.getElementById('rating-message-img');
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
              className="px-10 py-4 bg-gradient-to-r from-[hsl(30,90%,65%)] to-[hsl(340,75%,60%)] rounded-full text-white font-medium text-base lowercase hover:scale-105 transition-all duration-300 shadow-lg shadow-[hsl(30,90%,65%)]/20 opacity-50 cursor-not-allowed"
            >
              submit rating
            </button>

            <p
              id="rating-message-img"
              className="text-[hsl(30,90%,65%)] text-lg font-normal lowercase opacity-0 transition-opacity duration-300"
            >
            </p>
          </div>

          <style>{`
            .star-empty {
              color: hsl(0, 0%, 40%);
            }
            .star-empty:hover {
              color: hsl(30, 90%, 65%);
            }
            .star-filled {
              color: hsl(30, 90%, 65%);
            }
            .star-filled svg {
              fill: hsl(30, 90%, 65%);
            }
            .star-empty:hover svg {
              fill: hsl(30, 90%, 65%);
            }
          `}</style>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm md:text-base font-normal lowercase">
          <p>© 2025 abhiral saha. all rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/abhiralsaha" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(30,90%,65%)] transition-colors">
              github
            </a>
            <a href="https://linkedin.com/in/abhiralsaha" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(30,90%,65%)] transition-colors">
              linkedin
            </a>
            <a href="mailto:contact@abhiralsaha.dev" className="hover:text-[hsl(30,90%,65%)] transition-colors">
              contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ImageProcessingAPI;