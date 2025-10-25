import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}>
      {/* Main text */}
      <div className="overflow-hidden">
        <h1 className="text-huge text-foreground tracking-tighter animate-text-reveal">
          ABHIRAL SAHA
        </h1>
      </div>
      
      {/* Loading indicator */}
      <div className="flex items-center gap-3 mt-8">
        <div className="w-2 h-2 bg-[hsl(280,60%,70%)] rounded-full animate-pulse"></div>
        <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Loading
        </span>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-border">
        <div 
          className="h-full bg-gradient-to-r from-[hsl(280,60%,70%)] to-[hsl(330,85%,65%)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Preloader;
