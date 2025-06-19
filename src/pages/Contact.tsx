import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    "Career Consultancy",
    "CV Review Service",
    "LinkedIn Profile Optimization",
    "Interview Preparation Coaching",
    "General Inquiry"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.service) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send form data to your email using EmailJS (client-side) or a backend API
      const response = await fetch("https://formspree.io/f/mkgbzedz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          service: formData.service,
          message: formData.message
        })
      });
      if (response.ok) {
        toast({
          title: "Thank You!",
          description: (
            <span className="flex flex-col items-center gap-2 text-base text-gray-800 mt-2" style={{ fontFamily: "'Jost', sans-serif" }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500 animate-bounce mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span className="font-bold text-green-700">Your message was sent successfully.</span>
              <span className="text-green-600 font-semibold">I'll get back to you within 24 hours.</span>
              <span className="text-xs text-gray-500">(In the meantime, feel free to explore the rest of the site!)</span>
            </span>
          ),
          duration: 6000,
        });
        setFormData({ name: "", email: "", subject: "", service: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mahbub@onnorokom.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "01315145368",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dhaka, Bangladesh",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
    }
  ];

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

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
      <ScrollFadeIn>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16">
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
                  GET IN TOUCH
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to take your career to the next level? Let's discuss how I can help you
                achieve your professional goals and unlock new opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-lg rounded-3xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-blue-900" style={{ fontFamily: "'Jost', sans-serif" }}>Send Me a Message</CardTitle>
                    <CardDescription className="text-base text-gray-700">Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-blue-900 font-semibold">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Your full name"
                            required
                            className="rounded-xl border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white/90 shadow-sm px-4 py-3 text-lg"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-blue-900 font-semibold">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your.email@example.com"
                            required
                            className="rounded-xl border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white/90 shadow-sm px-4 py-3 text-lg"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-blue-900 font-semibold">Subject *</Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => handleInputChange("subject", e.target.value)}
                            placeholder="Brief subject of your inquiry"
                            required
                            className="rounded-xl border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white/90 shadow-sm px-4 py-3 text-lg"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service" className="text-blue-900 font-semibold">Service Interested In *</Label>
                          <Select onValueChange={(value) => handleInputChange("service", value)} required>
                            <SelectTrigger className="rounded-xl border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white/90 shadow-sm px-4 py-3 text-lg">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service} className="text-blue-900">
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-blue-900 font-semibold">Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell me more about your goals, challenges, or questions..."
                          className="min-h-[120px] rounded-xl border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white/90 shadow-sm px-4 py-3 text-lg"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg py-3 rounded-xl shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all border-0"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-lg rounded-3xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-purple-900 mb-2" style={{ fontFamily: "'Jost', sans-serif", letterSpacing: 1 }}>
                      Contact Information
                    </CardTitle>
                    <CardDescription className="text-base text-gray-700" style={{ fontFamily: "'Jost', sans-serif" }}>
                      Multiple ways to reach me for your convenience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center gap-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-4 shadow-md">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-blue-900 text-lg" style={{ fontFamily: "'Jost', sans-serif" }}>{info.title}</h3>
                          <p className="text-base text-gray-900 font-medium" style={{ fontFamily: "'Jost', sans-serif" }}>{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollProgress />
    </div>
  );
};

export default Contact;
