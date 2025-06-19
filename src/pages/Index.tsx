import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Users, TrendingUp, Brain, Code, Building2, BarChart3, Briefcase } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { useInView } from "@/hooks/useInView";

// Scroll Progress Indicator with Back-to-Top Button
function ScrollProgress() {
  const [scroll, setScroll] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(scrolled);
      setShow(scrollTop > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const size = 56;
  const stroke = 5;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scroll / 100) * circumference;

  return (
    <button
      onClick={handleBackToTop}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 50,
        background: "rgba(255,255,255,0.95)",
        borderRadius: "50%",
        boxShadow: "0 4px 24px 0 rgba(91,33,182,0.13)",
        border: "none",
        padding: 0,
        width: size,
        height: size,
        display: show ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.3s",
      }}
      className="group hover:scale-110 focus:outline-none"
    >
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e0e7ef"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#scroll-gradient)"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.2s" }}
        />
        <defs>
          <linearGradient id="scroll-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
      </svg>
      <span style={{ position: "absolute" }}>
        <ChevronUp className="text-blue-600 group-hover:text-purple-600" size={28} />
      </span>
    </button>
  );
}

const Index = () => {
  const skills = [
    "Organization Development",
    "Digital Marketing",
    "Technology Strategy",
    "Career Consulting",
    "Data Analytics",
    "Project Management"
  ];

  const services = [
    {
      title: "Professional Profile Creation",
      description: "Craft a compelling professional profile to showcase your strengths and achievements.",
      icon: Briefcase // Using Briefcase icon for profile creation
    },
    {
      title: "CV Review",
      description: "Get expert feedback and optimization for your CV to stand out in the job market.",
      icon: BarChart3 // Using BarChart3 icon for CV review
    },
    {
      title: "LinkedIn Profile Optimization",
      description: "Enhance your LinkedIn presence for better visibility and networking opportunities.",
      icon: Users // Using Users icon for LinkedIn optimization
    }
  ];

  const projects = [
    {
      title: "OPL Team Together Program",
      description: "A team-building and engagement event designed to foster collaboration and unity within OnnoRokom Group.",
      category: "Organization Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      title: "OPL Social Media Page Optimization",
      description: "Optimized and managed OPL's social media presence for greater engagement and brand awareness.",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      title: "Career Development Program",
      description: "Designed and executed career development framework",
      category: "HR & Development",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    }
  ];

  const skillProgress = [
    { name: "Research", percent: 92 },
    { name: "Documentation & Reporting", percent: 95 },
    { name: "Digital Marketing", percent: 82 },
    { name: "Product Development", percent: 85 },
    { name: "Data Analytics", percent: 75 },
    { name: "Excel & Data Management", percent: 90 }
  ];

  // Carousel state
  const [currentProject, setCurrentProject] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleProjectClick = (index: number) => {
    // Navigate to project details page (replace with your actual route)
    window.location.href = `/projects/${index}`;
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
      {/* Hero Section */}
      <ScrollFadeIn>
      <section className="relative bg-gradient-to-br from-blue-200 via-white to-purple-200 pt-20 pb-32" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700 }}>
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Md Mahbub Ul Islam
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Organization Development (OD) Specialist, Digital Marketer & Tech Enthusiast
                passionate about driving growth and innovation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link to="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://drive.google.com/file/d/1gDNOfFpCihjUbiHfOxc0vnoL8WbKvvvv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </ScrollFadeIn>

      {/* About Preview */}
      <ScrollFadeIn direction="up">
      <section className="py-24 bg-white" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-extrabold uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-12"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: "36px" }}
          >
           <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ABOUT ME</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Video Section */}
            <div className="flex-1 flex justify-center mb-10 md:mb-0">
              <div className="w-full max-w-md aspect-video rounded-3xl overflow-hidden shadow-xl border-4 border-blue-100 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/WQwCgVuJZ7E"
                  title="About Me Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ border: 0, width: "100%", height: "100%" }}
                />
              </div>
            </div>
            {/* Right: Text */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-xl">
                I am passionate about helping people and organizations grow. With a background in <span className="font-semibold text-blue-700">Organization Development</span>, <span className="font-semibold text-purple-700">Digital Marketing</span>, and <span className="font-semibold text-blue-700">Technology</span>, I focus on delivering results through strategic planning and innovative solutions.
              </p>
              <ul className="space-y-4 mb-8 w-full">
                <li
                  className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
                  style={{
                    background: "#F4F4F6",
                    borderRadius: "12px",
                    padding: "16px",
                    color: "#1F2937",
                    boxShadow: "0 2px 8px 0 rgba(91,33,182,0.06)"
                  }}
                >
                  <Building2 className="text-blue-600 w-7 h-7 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Organization Development</span>
                    <span className="block text-gray-700 text-sm font-medium">
                      Assistant Executive, OnnoRokom Group
                    </span>
                    <span className="block text-gray-600 text-sm">
                      Oct 2023 - Present
                    </span>
                  </div>
                </li>
                <li
                  className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
                  style={{
                    background: "#F4F4F6",
                    borderRadius: "12px",
                    padding: "16px",
                    color: "#1F2937",
                    boxShadow: "0 2px 8px 0 rgba(91,33,182,0.06)"
                  }}
                >
                  <Briefcase className="text-purple-600 w-7 h-7 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Career Consulting</span>
                    <span className="block text-gray-600 text-sm">Freelance &mdash; 2021 - Present</span>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <Link to="/about">
                  Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </ScrollFadeIn>

      {/* Skills Section */}
      <ScrollFadeIn direction="up">
      <section className="py-20 bg-gradient-to-br from-blue-100 via-white to-purple-100" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2
            className="text-4xl font-extrabold uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 text-center"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: "36px" }}
          >
            MY SKILLS
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl text-center" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
            I am always learning new tools and concepts to stay updated and add value to my work.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center w-full">
            {skillProgress.map((skill, idx) => (
              <CircularSkill key={skill.name} percent={skill.percent} name={skill.name} />
            ))}
          </div>
        </div>
      </section>
      </ScrollFadeIn>

      {/* Services Section */}
      <ScrollFadeIn direction="up">
      <section className="py-20 bg-white" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="font-extrabold uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: "36px" }}
            >
              MY SERVICES
            </h2>
            <p className="text-lg text-gray-600">
              Professional services to accelerate your career and business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative group text-center border-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in-up p-6"
                style={{
                  minHeight: 260,
                  animationDelay: `${index * 0.15 + 0.1}s`,
                  animationDuration: "0.7s",
                  animationFillMode: "both"
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-100/60 to-purple-100/60 pointer-events-none" />
                <CardHeader className="pb-4 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle
                    className="text-lg font-bold group-hover:text-blue-700 transition-colors tracking-wide mb-2 uppercase"
                    style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600 }}
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-lg px-2 font-medium" style={{fontFamily: "'Jost', sans-serif"}}>
                    {service.description}
                  </CardDescription>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-purple-600 opacity-70 rounded-b-3xl group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
            >
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </ScrollFadeIn>

      {/* Featured Projects */}
      <ScrollFadeIn direction="up">
      <section className="py-20 bg-gray-50" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="font-bold uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: "36px" }}
            >
              FEATURED PROJECTS
            </h2>
            <p className="text-lg text-gray-600">
              Showcasing impactful work and successful implementations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-lg">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
            >
              <Link to="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </ScrollFadeIn>

      {/* Contact CTA */}
      <ScrollFadeIn direction="up">
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold uppercase mb-4" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700 }}>
            READY TO TRANSFORM YOUR CAREER?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how I can help you achieve your professional goals
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      </ScrollFadeIn>
      <ScrollProgress />
    </div>
  );
};

export default Index;

// CircularSkill component
function CircularSkill({ percent, name }: { percent: number; name: string }) {
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView(0.3);

  useEffect(() => {
    if (inView && !hasAnimated) {
      let start = 0;
      const step = () => {
        start += 2;
        if (start <= percent) {
          setProgress(start);
          requestAnimationFrame(step);
        } else {
          setProgress(percent);
          setHasAnimated(true);
        }
      };
      step();
    }
    if (!inView && hasAnimated) {
      setProgress(0);
      setHasAnimated(false);
    }
  }, [inView, percent, hasAnimated]);

  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center" ref={ref}>
      <svg height={radius * 2} width={radius * 2} className="mb-2">
        <circle
          stroke="#e0e7ef"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="url(#skill-gradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset: offset, transition: "stroke-dashoffset 1s" }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <defs>
          <linearGradient id="skill-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="1.6rem"
          fill="#2563eb"
          fontWeight="bold"
        >
          {progress}%
        </text>
      </svg>
      <span className="text-base font-medium text-gray-700 text-center">{name}</span>
    </div>
  );
}

/* Add animation CSS (can be placed in a global CSS file or in a <style> tag if using CSS-in-JS)
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation-name: fade-in-up;
}
*/
