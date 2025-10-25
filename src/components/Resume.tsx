import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Download, GraduationCap, Award, Briefcase, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  const handleDownload = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume.pdf to the public folder
    link.download = 'Abhiral_Saha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    // Open resume in a new tab
    window.open('/resume.pdf', '_blank');
  };

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Teerthanker mahaveer university",
      year: "2020 - 2024",
      description: "Focused on Backend Development, Distributed Systems, and Cloud Computing"
    }
  ];

  const upcomingProjects = [
    {
      title: "Welder Framework",
      status: "In Development",
      description: "An AI-native, modular backend framework built with Node.js and TypeScript, designed for high-performance, self-healing, and cloud-native systems. It features automatic runtime error detection and resolution, secure plugin architecture, built-in and AI-generated middleware, WebSocket and API support, and observability tools. The framework emphasizes scalability, security, and developer productivity, enabling teams to build resilient, production-ready backends with minimal manual intervention.",
      highlights: [
        "Automatic runtime error detection & resolution",
        "Secure plugin architecture with AI-generated middleware",
        "WebSocket and API support with observability tools",
        "Self-healing, cloud-native infrastructure"
      ]
    }
  ];

  const expertise = [
    "Backend Architecture & System Design",
    "Event-Driven Architectures",
    "Microservices & API Development",
    "Database Optimization & Scaling",
    "Cloud Infrastructure (AWS, GCP)",
    "DevOps & CI/CD Pipeline"
  ];

  return (
    <section 
      id="resume" 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-32 bg-black overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[hsl(280,60%,70%)] opacity-10 blur-[120px] animate-float animate-morph"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[hsl(330,85%,65%)] opacity-10 blur-[120px] animate-float animate-morph" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-6xl w-full space-y-16 relative z-10">
        {/* Header with View and Download Buttons */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="overflow-hidden">
            <h2 className={`text-display text-foreground transition-all duration-1500 ${
              isVisible ? 'translate-y-0 opacity-100 animate-clip-reveal' : 'translate-y-full opacity-0'
            }`}>
              Resume
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={handleViewResume}
              className="group bg-gradient-to-r from-[hsl(330,85%,65%)] to-[hsl(280,60%,70%)] hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              View Resume
            </Button>
            
            <Button 
              onClick={handleDownload}
              className="group bg-gradient-to-r from-[hsl(280,60%,70%)] to-[hsl(330,85%,65%)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Education Section */}
        <div className={`space-y-8 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-[hsl(280,60%,70%)]" />
            <h3 className="text-3xl font-light text-foreground">Education</h3>
          </div>
          
          {education.map((edu, index) => (
            <div 
              key={index}
              className="border-l-2 border-[hsl(280,60%,70%)] pl-6 py-4 hover:border-[hsl(330,85%,65%)] transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <h4 className="text-xl font-medium text-foreground group-hover:text-[hsl(280,60%,70%)] transition-colors duration-300">
                  {edu.degree}
                </h4>
                <span className="text-sm text-muted-foreground">{edu.year}</span>
              </div>
              <p className="text-lg text-muted-foreground mb-2">{edu.institution}</p>
              <p className="text-foreground/80">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Upcoming Projects Section */}
        <div className={`space-y-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-[hsl(330,85%,65%)]" />
            <h3 className="text-3xl font-light text-foreground">Upcoming Projects</h3>
          </div>
          
          {upcomingProjects.map((project, index) => (
            <Link
              to="/coming-soon"
              key={index}
              className="block p-8 border border-border rounded-lg hover:border-[hsl(280,60%,70%)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <h4 className="text-2xl font-medium text-foreground group-hover:text-[hsl(280,60%,70%)] transition-colors duration-300">
                  {project.title}
                </h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[hsl(280,60%,70%)]/10 text-[hsl(280,60%,70%)] border border-[hsl(280,60%,70%)]/20">
                  {project.status}
                </span>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">{project.description}</p>
              <div className="grid md:grid-cols-2 gap-3">
                {project.highlights.map((highlight, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-2 p-3 bg-gradient-to-br from-foreground/5 to-foreground/0 rounded-lg"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(330,85%,65%)] mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground/90">{highlight}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Core Expertise Section */}
        <div className={`space-y-8 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-[hsl(280,60%,70%)]" />
            <h3 className="text-3xl font-light text-foreground">Core Expertise</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {expertise.map((skill, index) => (
              <div 
                key={index}
                className="p-4 bg-gradient-to-br from-foreground/5 to-foreground/0 border border-border rounded-lg hover:border-[hsl(330,85%,65%)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] group"
              >
                <p className="text-foreground/90 group-hover:text-[hsl(330,85%,65%)] transition-colors duration-300">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;