import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, DollarSign, Users, TrendingUp, Brain, FileText, Linkedin, MessageSquare, ArrowRight, Award } from "lucide-react";
import React from "react";
import { ChevronUp } from "lucide-react";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

const Services = () => {
  const services = [
    {
      id: "career-consultancy",
      title: "Career Consultancy",
      description: "Strategic career guidance and professional development planning to accelerate your career growth.",
      longDescription: "Comprehensive career consultation service that includes career assessment, goal setting, strategic planning, and ongoing support. I help professionals identify their strengths, overcome challenges, and create actionable plans for career advancement.",
      duration: "4-8 weeks",
      pricing: "Contact for pricing",
      features: [
        "Comprehensive career assessment",
        "Personalized career roadmap",
        "Industry insights and trends analysis",
        "Networking strategy development",
        "Ongoing support and follow-up",
        "Goal tracking and accountability"
      ],
      benefits: [
        "Clear career direction and purpose",
        "Increased confidence in career decisions",
        "Strategic approach to career growth",
        "Enhanced professional network",
        "Better salary negotiation skills"
      ]
    },
    {
      id: "cv-review",
      title: "CV Review Service",
      description: "Professional CV optimization and enhancement to make you stand out in competitive job markets.",
      longDescription: "Expert CV review and optimization service that transforms your resume into a powerful marketing tool. I analyze your current CV, identify improvement areas, and create a compelling document that highlights your unique value proposition.",
      duration: "1-2 weeks",
      pricing: "Starting from $50",
      features: [
        "Comprehensive CV analysis",
        "Content optimization and restructuring",
        "ATS-friendly formatting",
        "Industry-specific customization",
        "Keywords optimization",
        "Multiple format versions"
      ],
      benefits: [
        "Higher interview callback rates",
        "Professional presentation",
        "ATS compatibility",
        "Tailored for your industry",
        "Competitive advantage"
      ]
    },
    {
      id: "linkedin-optimization",
      title: "LinkedIn Profile Optimization",
      description: "Complete LinkedIn profile makeover for maximum visibility and professional networking success.",
      longDescription: "Comprehensive LinkedIn optimization service that enhances your professional online presence. I optimize every section of your profile to increase visibility, attract opportunities, and build meaningful professional connections.",
      duration: "1-2 weeks",
      pricing: "Starting from $75",
      features: [
        "Profile headline optimization",
        "Compelling summary writing",
        "Experience section enhancement",
        "Skills and endorsements strategy",
        "Content strategy development",
        "Connection building guidance"
      ],
      benefits: [
        "Increased profile visibility",
        "More connection requests",
        "Enhanced professional credibility",
        "Better networking opportunities",
        "Improved search rankings"
      ]
    },
    {
      id: "interview-coaching",
      title: "Interview Preparation Coaching",
      description: "Comprehensive interview coaching and preparation sessions to boost your confidence and success rate.",
      longDescription: "Intensive interview coaching program that prepares you for all types of interviews. I provide personalized coaching, mock interview sessions, and feedback to help you present your best self to potential employers.",
      duration: "2-4 weeks",
      pricing: "Starting from $100",
      features: [
        "Mock interview sessions",
        "Behavioral question preparation",
        "Technical interview coaching",
        "Body language and presentation",
        "Salary negotiation training",
        "Follow-up strategies"
      ],
      benefits: [
        "Increased interview success rate",
        "Enhanced confidence",
        "Better communication skills",
        "Improved salary negotiation",
        "Reduced interview anxiety"
      ]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your goals, challenges, and current situation to understand your needs."
    },
    {
      step: "2",
      title: "Assessment & Analysis",
      description: "Comprehensive evaluation of your current status and identification of improvement areas."
    },
    {
      step: "3",
      title: "Strategy Development",
      description: "Creation of a personalized action plan tailored to your specific goals and timeline."
    },
    {
      step: "4",
      title: "Implementation",
      description: "Execution of the strategy with ongoing support, guidance, and regular check-ins."
    },
    {
      step: "5",
      title: "Follow-up & Support",
      description: "Continued support and adjustments to ensure long-term success and goal achievement."
    }
  ];

  const iconMap = [
    <Users className="text-blue-500" />, <FileText className="text-purple-500" />, <Linkedin className="text-blue-700" />, <MessageSquare className="text-green-500" />
  ];

  // Set all services to free
  const updatedServices = services.map((service, idx) => ({
    ...service,
    pricing: "Free",
    icon: iconMap[idx % iconMap.length],
  }));

  // Icon maps for features and benefits
  const featureIcons = {
    'Comprehensive career assessment': <Brain className="h-5 w-5 text-blue-500" />, // Career Consultancy
    'Personalized career roadmap': <TrendingUp className="h-5 w-5 text-blue-500" />,
    'Industry insights and trends analysis': <FileText className="h-5 w-5 text-blue-500" />,
    'Networking strategy development': <Users className="h-5 w-5 text-blue-500" />,
    'Ongoing support and follow-up': <MessageSquare className="h-5 w-5 text-blue-500" />,
    'Goal tracking and accountability': <Award className="h-5 w-5 text-blue-500" />,
    'Comprehensive CV analysis': <FileText className="h-5 w-5 text-purple-500" />,
    'Content optimization and restructuring': <Brain className="h-5 w-5 text-purple-500" />,
    'ATS-friendly formatting': <TrendingUp className="h-5 w-5 text-purple-500" />,
    'Industry-specific customization': <Users className="h-5 w-5 text-purple-500" />,
    'Keywords optimization': <MessageSquare className="h-5 w-5 text-purple-500" />,
    'Multiple format versions': <Award className="h-5 w-5 text-purple-500" />,
    'Profile headline optimization': <TrendingUp className="h-5 w-5 text-blue-700" />,
    'Compelling summary writing': <FileText className="h-5 w-5 text-blue-700" />,
    'Experience section enhancement': <Users className="h-5 w-5 text-blue-700" />,
    'Skills and endorsements strategy': <Award className="h-5 w-5 text-blue-700" />,
    'Content strategy development': <Brain className="h-5 w-5 text-blue-700" />,
    'Connection building guidance': <MessageSquare className="h-5 w-5 text-blue-700" />,
    'Mock interview sessions': <MessageSquare className="h-5 w-5 text-green-500" />,
    'Behavioral question preparation': <Brain className="h-5 w-5 text-green-500" />,
    'Technical interview coaching': <TrendingUp className="h-5 w-5 text-green-500" />,
    'Body language and presentation': <Users className="h-5 w-5 text-green-500" />,
    'Salary negotiation training': <DollarSign className="h-5 w-5 text-green-500" />,
    'Follow-up strategies': <Award className="h-5 w-5 text-green-500" />,
  };
  const benefitIcons = {
    'Clear career direction and purpose': <TrendingUp className="h-5 w-5 text-purple-500" />,
    'Increased confidence in career decisions': <Award className="h-5 w-5 text-purple-500" />,
    'Strategic approach to career growth': <Brain className="h-5 w-5 text-purple-500" />,
    'Enhanced professional network': <Users className="h-5 w-5 text-purple-500" />,
    'Better salary negotiation skills': <DollarSign className="h-5 w-5 text-purple-500" />,
    'Higher interview callback rates': <TrendingUp className="h-5 w-5 text-blue-700" />,
    'Professional presentation': <Award className="h-5 w-5 text-blue-700" />,
    'ATS compatibility': <FileText className="h-5 w-5 text-blue-700" />,
    'Tailored for your industry': <Users className="h-5 w-5 text-blue-700" />,
    'Competitive advantage': <Brain className="h-5 w-5 text-blue-700" />,
    'Increased profile visibility': <TrendingUp className="h-5 w-5 text-green-500" />,
    'More connection requests': <Users className="h-5 w-5 text-green-500" />,
    'Enhanced professional credibility': <Award className="h-5 w-5 text-green-500" />,
    'Better networking opportunities': <MessageSquare className="h-5 w-5 text-green-500" />,
    'Improved search rankings': <Brain className="h-5 w-5 text-green-500" />,
    'Increased interview success rate': <Award className="h-5 w-5 text-blue-500" />,
    'Enhanced confidence': <TrendingUp className="h-5 w-5 text-blue-500" />,
    'Better communication skills': <MessageSquare className="h-5 w-5 text-blue-500" />,
    'Improved salary negotiation': <DollarSign className="h-5 w-5 text-blue-500" />,
    'Reduced interview anxiety': <Brain className="h-5 w-5 text-blue-500" />,
  };

  // AI insights for each service
  const aiInsights = {
    'career-consultancy': 'AI can help you analyze your career path, identify your unique strengths, and suggest new opportunities based on your skills and interests. Try using AI-powered career assessment tools to discover your next big move!',
    'cv-review': 'AI-driven resume scanners can instantly check your CV for keywords, formatting, and ATS compatibility, helping you stand out to recruiters. Use these tools to optimize your CV for every job application!',
    'linkedin-optimization': 'AI can analyze your LinkedIn profile and suggest improvements to boost your visibility and attract more opportunities. Leverage AI to craft compelling summaries and connect with the right professionals!',
    'interview-coaching': 'AI-powered mock interview platforms can simulate real interview scenarios, provide instant feedback, and help you practice your answers for maximum confidence. Use them to ace your next interview!'
  };

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
                  SERVICES
                </span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Accelerate your career growth with personalized consulting services designed to help you
                achieve your professional goals and unlock your full potential.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {updatedServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl p-10 shadow-2xl border border-blue-100 hover:scale-[1.02] transition-transform duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl text-gray-900 tracking-tight mb-1" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700 }}>
                            {service.title}
                          </h3>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge variant="outline">
                              <Clock className="h-4 w-4 mr-1" />
                              {service.duration}
                            </Badge>
                            <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {service.pricing}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-blue-400 pl-4 bg-blue-50/50 py-2">{service.longDescription}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-3 flex items-center gap-2"><TrendingUp className="h-5 w-5" /> What's Included</h4>
                          <div className="flex flex-col gap-3">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-3 text-blue-900 font-medium bg-blue-100/60 rounded-lg px-3 py-2 shadow-sm">
                                {featureIcons[feature] || <Brain className="h-5 w-5 text-blue-500" />} 
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-700 mb-3 flex items-center gap-2"><Award className="h-5 w-5" /> Key Benefits</h4>
                          <div className="flex flex-col gap-3">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-3 text-purple-900 font-medium bg-purple-100/60 rounded-lg px-3 py-2 shadow-sm">
                                {benefitIcons[benefit] || <Award className="h-5 w-5 text-purple-500" />} 
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8">
                      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 shadow-inner flex flex-col items-center">
                        <Brain className="h-10 w-10 text-blue-500 mb-2 animate-pulse" />
                        <p className="text-lg font-semibold text-blue-900 text-center">Insight</p>
                        <p className="text-gray-700 text-center text-sm mt-2">
                          {aiInsights[service.id]}
                        </p>
                      </div>
                      <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg py-3 rounded-xl shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all border-0" size="lg">
                        <Link to="/contact">
                          Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1
                className="font-extrabold uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-12"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 700,
                  fontSize: "36px"
                }}
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  How It Works
                </span>
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                My structured approach ensures maximum value and successful outcomes
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center bg-white rounded-2xl shadow-xl px-8 py-10 w-full max-w-xs border-t-4 border-blue-400 transition-all duration-300 min-h-[340px] h-[340px] hover:scale-105 hover:shadow-2xl hover:border-purple-500 cursor-pointer">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg mb-4 z-10 border-4 border-white aspect-square">
                    <span className="text-3xl font-bold text-white drop-shadow-lg" style={{ fontFamily: "'Jost', sans-serif" }}>{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center" style={{ fontFamily: "'Jost', sans-serif" }}>{step.title}</h3>
                  <p className="text-gray-600 text-base text-center flex-1">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-[-2.5rem] transform -translate-y-1/2">
                      <ArrowRight className="h-8 w-8 text-blue-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 opacity-90">
              Choose the service that best fits your needs and let's start your journey to success
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Schedule Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollProgress />
    </div>
  );
};

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

export default Services;
