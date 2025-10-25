import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate sending email (you can integrate with your backend here)
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You'll be notified when Welder Framework launches",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[hsl(280,60%,70%)] opacity-10 blur-[120px] animate-float animate-morph"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[hsl(330,85%,65%)] opacity-10 blur-[120px] animate-float animate-morph" style={{ animationDelay: '3s' }}></div>

      {/* Back button */}
      <Link 
        to="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        <span>Back to Home</span>
      </Link>

      <div className="max-w-2xl w-full space-y-8 text-center relative z-10">
        {/* Heading */}
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-foreground">
            Coming <span className="bg-gradient-to-r from-[hsl(280,60%,70%)] to-[hsl(330,85%,65%)] bg-clip-text text-transparent">Soon</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Welder Framework is launching soon. Be the first to know when we go live.
          </p>
        </div>

        {/* Email signup form */}
        <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-foreground/5 border-border focus:border-[hsl(280,60%,70%)] transition-colors"
                disabled={isSubmitting}
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-[hsl(280,60%,70%)] to-[hsl(330,85%,65%)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105"
            >
              {isSubmitting ? 'Subscribing...' : 'Notify Me'}
            </Button>
          </div>
        </form>

        {/* Features preview */}
        <div className="grid md:grid-cols-2 gap-6 pt-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
          {[
            'AI-Native Architecture',
            'Self-Healing Systems',
            'Zero-Config Setup',
            'Production Ready'
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-foreground/5 to-foreground/0 border border-border rounded-lg hover:border-[hsl(280,60%,70%)]/50 transition-all duration-500"
            >
              <p className="text-foreground/90">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
