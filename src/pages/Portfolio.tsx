import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react";
import { ChevronUp } from "lucide-react";
import React from "react";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

function ScrollProgress() {
  const [scroll, setScroll] = React.useState(0);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
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

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Technical Skills",
    "Analytical Skills",
    "Organization Development",
    "Marketing & Branding Skills",
    "Interpersonal Skills",
    "Consulting"
  ];

  const projects = [
    {
      title: "Excel Credit Card Information Management System",
      description: "A system for managing credit card information using Excel, developed by a 2-member team under the technical category.",
      longDescription: "Designed and implemented a credit card information management system using Microsoft Excel and VBA. The project focused on secure data entry, automated calculations, and reporting features for efficient credit card data management. Collaborated as a 2-member team to ensure data integrity and user-friendly operation.",
      category: "Technical Skills",
      duration: "3 months",
      team: "2 members",
      impact: "Streamlined credit card data management and improved reporting accuracy.",
      technologies: ["Excel", "VBA", "Data Management"],
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop",
      results: [
        "Automated credit card data entry and validation",
        "Improved data security and accuracy",
        "Custom reporting and analytics",
        "User-friendly interface for non-technical users"
      ]
    },
    {
      title: "OPL Facebook & LinkedIn Page Optimization and Content Management",
      description: "Ongoing optimization and management of OPL's Facebook and LinkedIn pages, including regular content updates and audience engagement.",
      longDescription: "Continuously optimize and manage the official Facebook and LinkedIn pages for OnnoRokom Projukti Limited (OPL). Responsibilities include page setup, branding, SEO optimization, content planning, regular posting, and community engagement. The project is ongoing, with two team members collaborating to ensure consistent brand presence and audience growth on both platforms.",
      category: "Marketing & Branding Skills",
      duration: "Ongoing",
      team: "2 members",
      impact: "Strengthened OPL's digital presence and increased audience engagement on social platforms.",
      technologies: ["Social Media Optimization", "Content Planning", "Branding", "Facebook", "LinkedIn", "Community Management"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      results: [
        "Consistent brand presence on Facebook & LinkedIn",
        "Regular, high-quality content updates",
        "Increased followers and engagement rates",
        "Improved page SEO and discoverability"
      ]
    },
    {
      title: "Integrated Social Media Campaign for Product Launch",
      description: "Developed and executed a multi-channel social media marketing campaign to launch a new product, driving brand awareness and customer engagement.",
      longDescription: "Planned and managed an integrated marketing campaign across Facebook, Instagram, and LinkedIn for a major product launch. Responsibilities included campaign strategy, content creation, paid advertising, influencer partnerships, and analytics tracking. The campaign resulted in significant increases in brand reach, engagement, and sales conversions.",
      category: "Marketing & Branding Skills",
      duration: "2 months",
      team: "4 members",
      impact: "Boosted brand visibility and sales through targeted digital marketing.",
      technologies: ["Social Media Marketing", "Content Creation", "Paid Advertising", "Analytics", "Influencer Marketing"],
      image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=600&h=400&fit=crop",
      results: [
        "Increased brand reach by 250%",
        "Doubled social media engagement rates",
        "Achieved 40% sales growth during campaign",
        "Built strong influencer partnerships"
      ]
    },
    {
      title: "OPL Team Together & OPL Day Townhall Meeting Planning",
      description: "Planned and managed a series of corporate events, including the OPL Day Townhall, to foster team collaboration and organizational engagement.",
      longDescription: "Led the end-to-end planning and management of multiple events for OnnoRokom Projukti Limited (OPL), including the flagship OPL Day Townhall meeting. Responsibilities included event concept development, logistics coordination, agenda setting, team engagement activities, and on-site management. Successfully brought together all OPL teams, enhanced cross-departmental collaboration, and created a vibrant, inclusive corporate culture through well-executed events.",
      category: "Organization Development",
      duration: "1 month",
      team: "6 members",
      impact: "Strengthened team spirit, improved communication, and increased employee engagement across the organization.",
      technologies: ["Event Planning", "Team Management", "Logistics Coordination", "Corporate Communication"],
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&h=400&fit=crop",
      results: [
        "Successful OPL Day Townhall with high participation",
        "Seamless event execution and logistics",
        "Boosted team morale and collaboration",
        "Positive feedback from all departments"
      ]
    },
    {
      title: "DUNS Number Certification for OnnoRokom Group Branches",
      description: "Successfully obtained DUNS Number certification for multiple OnnoRokom Group branches, streamlining global business identity and compliance.",
      longDescription: "Managed the end-to-end process of acquiring DUNS Number certification for OnnoRokom Projukti Limited (OPL), Udvash Unmesh, Online Care, Uttoron, Rokomari, and OnnoRokom Software. Responsibilities included gathering and verifying legal and business documentation, coordinating with D&B, and ensuring accurate data submission for each branch. Overcame unique challenges for each entity and delivered all certifications within a tight deadline, enabling the group to participate in international business and digital platforms.",
      category: "Organization Development",
      duration: "1 month",
      team: "Solo project",
      impact: "Enabled global business opportunities and improved compliance for all branches.",
      technologies: ["Business Documentation", "Compliance Management", "Process Coordination", "Data Verification"],
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=400&fit=crop",
      results: [
        "DUNS Number certification obtained for 6 branches",
        "Improved international business credibility",
        "Streamlined compliance documentation",
        "Faster onboarding to global platforms"
      ]
    },
    {
      title: "Executive Coaching Program",
      description: "Provided executive coaching services to C-level executives, resulting in enhanced leadership effectiveness and strategic decision-making.",
      longDescription: "Delivered personalized coaching to senior executives focusing on leadership development, strategic thinking, and organizational impact. The program included 360-degree feedback, goal setting, and ongoing support.",
      category: "Consulting",
      duration: "12 months",
      team: "3 members",
      impact: "95% satisfaction rate",
      technologies: ["Executive Assessment", "Leadership Development", "360 Feedback"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      results: [
        "95% client satisfaction",
        "80% achievement of leadership goals",
        "100% client retention",
        "Significant organizational impact"
      ]
    },
    {
      title: "Career Development Program",
      description: "Designed and executed comprehensive career development framework for 500+ employees across multiple departments.",
      longDescription: "Created a structured career development program including skills assessment, personalized learning paths, mentorship matching, and performance tracking. The program addressed individual career goals while aligning with organizational objectives.",
      category: "Interpersonal Skills",
      duration: "6 months",
      team: "12 members",
      impact: "85% participation rate",
      technologies: ["Learning Management System", "Skills Assessment", "Mentorship Platform"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      results: [
        "85% employee participation",
        "92% satisfaction rating",
        "45% internal promotion rate",
        "30% reduction in turnover"
      ]
    },
    {
      title: "E-commerce Growth Strategy",
      description: "Developed and implemented digital marketing strategy for e-commerce startup, achieving 300% revenue growth in 18 months.",
      longDescription: "Comprehensive digital strategy including SEO optimization, social media marketing, influencer partnerships, and conversion rate optimization. Focused on building brand awareness and driving sustainable growth.",
      category: "Marketing & Branding Skills",
      duration: "18 months",
      team: "6 members",
      impact: "300% revenue growth",
      technologies: ["SEO", "Social Media Marketing", "PPC", "Analytics"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      results: [
        "300% revenue increase",
        "250% website traffic growth",
        "180% social media engagement",
        "120% customer retention improvement"
      ]
    },
    {
      title: "Digital Transformation Strategy",
      description: "Led comprehensive digital transformation initiative for a leading manufacturing company, resulting in 40% operational efficiency improvement.",
      longDescription: "This project involved analyzing existing processes, identifying digital opportunities, and implementing a phased transformation plan. Key achievements included automation of 15 manual processes, implementation of data analytics dashboard, and training 200+ employees on new digital tools.",
      category: "Organization Development",
      duration: "12 months",
      team: "15 members",
      impact: "40% efficiency increase",
      technologies: ["Process Automation", "Data Analytics", "Change Management"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      results: [
        "Reduced processing time by 40%",
        "Increased employee satisfaction by 25%",
        "Saved $150K annually in operational costs",
        "Improved data accuracy by 60%"
      ]
    },
    {
      title: "Data-Driven Market Research",
      description: "Conducted comprehensive market research and analysis for a new product launch.",
      longDescription: "Utilized advanced data analysis techniques to identify market trends, customer preferences, and competitive landscape. Delivered actionable insights that shaped the product strategy and go-to-market plan.",
      category: "Analytical Skills",
      duration: "3 months",
      team: "4 members",
      impact: "Successful product launch",
      technologies: ["Data Analysis", "Research", "Excel", "Power BI"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
      results: [
        "Identified key market opportunities",
        "Improved product positioning",
        "Increased launch success rate"
      ]
    },
    {
      title: "Power BI Business Dashboard",
      description: "Developed an interactive Power BI dashboard for real-time business analytics and reporting.",
      longDescription: "Designed and implemented a Power BI dashboard integrating multiple data sources, providing actionable insights for management. Automated reporting reduced manual work and improved decision-making.",
      category: "Technical Skills",
      duration: "4 months",
      team: "5 members",
      impact: "Improved decision-making",
      technologies: ["Power BI", "Data Visualization", "Automation"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      results: [
        "Automated reporting",
        "Faster business decisions",
        "Increased data accuracy"
      ]
    },
    {
      title: "OnnoRokom Projukti Limited Website Structure",
      description: "Planned, structured, and prepared all content for the official website of OnnoRokom Projukti Limited, focusing on user experience, information architecture, and analytics integration.",
      longDescription: "Led the planning, structure, and content development for the OnnoRokom Projukti Limited website. Responsibilities included requirements analysis, site mapping, wireframing, content writing for all pages, and integrating analytics tools to monitor user behavior and optimize content strategy. The project resulted in a modern, user-friendly, and data-driven website with high-quality, SEO-friendly content.",
      category: "Analytical Skills",
      duration: "2 months",
      team: "6 members",
      impact: "Enhanced user experience, content quality, and analytics-driven content strategy",
      technologies: ["Website Structure Planning", "Content Writing", "Content Strategy", "Google Analytics", "UX Design", "Information Architecture"],
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&h=400&fit=crop",
      results: [
        "Improved user navigation",
        "Increased engagement",
        "Actionable analytics insights",
        "Enhanced content discoverability",
        "High-quality, SEO-friendly website content"
      ],
      link: "https://onnorokomprojukti.com/"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
      <ScrollFadeIn>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-200 via-white to-purple-200 pt-20 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1
                className="font-extrabold uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-12"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 700,
                  fontSize: "36px",
                }}
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MY PORTFOLIO
                </span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Showcasing impactful projects and successful implementations across
                organization development, digital marketing, and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    (selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md font-semibold"
                      : "border-2 border-blue-200 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:text-white transition-all font-semibold")
                  + " transform transition-transform duration-300 hover:scale-105 focus:scale-105"
                  }
                  style={selectedCategory !== category ? { WebkitTextFillColor: 'transparent' } : {}}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-0 bg-white overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-lg border-0">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{project.team}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-sm">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-600">{project.impact}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs border-gray-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Project Detail Modal Popup */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-lg shadow-2xl max-w-4xl w-full mx-4 overflow-y-auto max-h-[90vh] relative animate-fadeIn"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                onClick={() => setSelectedProject(null)}
                aria-label="Close"
              >
                ×
              </button>
              <div className="px-6 py-8">
                <div className="text-center mb-8">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedProject(null)}
                    className="mb-4"
                  >
                    ← Back to Portfolio
                  </Button>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                  <Badge variant="secondary" className="mb-4">{selectedProject.category}</Badge>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
                      <p className="text-gray-600">{selectedProject.longDescription}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                        <p className="font-medium">{selectedProject.duration}</p>
                        <p className="text-sm text-gray-600">Duration</p>
                      </div>
                      <div>
                        <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                        <p className="font-medium">{selectedProject.team}</p>
                        <p className="text-sm text-gray-600">Team Size</p>
                      </div>
                      <div>
                        <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
                        <p className="font-medium">{selectedProject.impact}</p>
                        <p className="text-sm text-gray-600">Impact</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                    <ul className="space-y-2">
                      {selectedProject.results.map((result, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          {/* Replace bullet with TrendingUp icon */}
                          <TrendingUp className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </ScrollFadeIn>
      <ScrollProgress />
    </div>
  );
};

export default Portfolio;
