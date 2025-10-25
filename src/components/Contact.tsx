import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen flex items-center justify-center px-6 md:px-12 py-32 bg-black">
      <div className="max-w-6xl w-full space-y-24">
        <div className="overflow-hidden">
          <h2 
            className={`text-display text-foreground transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            Let's work together.
          </h2>
        </div>

        <div className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="space-y-12">
            {[
              { icon: Mail, label: 'Email', value: 'abhiralsaha568@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 6397674637' },
              { icon: MapPin, label: 'Location', value: 'Noida , Up' },
            ].map((contact, index) => (
              <div 
                key={contact.label}
                className={`group border-t border-border pt-6 transition-all duration-1000 hover:border-[hsl(280,60%,70%)] hover:translate-x-2 ${
                  isVisible ? 'opacity-100 translate-y-0 animate-reveal-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <contact.icon className="w-5 h-5 text-muted-foreground mt-1 group-hover:text-[hsl(280,60%,70%)] transition-colors duration-500" />
                  <div>
                    <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-500">
                      {contact.label}
                    </div>
                    <a 
                      href={contact.label === 'Email' ? `mailto:${contact.value}` : contact.label === 'Phone' ? `tel:${contact.value}` : '#'}
                      className="text-xl md:text-2xl text-foreground hover:bg-gradient-to-r hover:from-[hsl(280,60%,70%)] hover:to-[hsl(330,85%,65%)] hover:bg-clip-text hover:text-transparent hover:scale-105 inline-block transition-all duration-500 border-b border-transparent hover:border-[hsl(280,60%,70%)]"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0 animate-clip-reveal' : 'opacity-0 translate-y-8'
          }`}>
            <div className="border-t border-border pt-6">
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Education</div>
              <div className="space-y-3">
                <div>
                  <div className="text-lg text-foreground">Bachelor of Technology</div>
                  <div className="text-muted-foreground">Computer Science Engineering</div>
                  <div className="text-sm text-muted-foreground mt-1">Teerthanker mahaveer university</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
