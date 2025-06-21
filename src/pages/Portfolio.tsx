import React from "react";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

const projects = [
	{
		id: 1,
		image:
			"https://i.ibb.co/qw7J09L/How-to-write-a-report-pptx.png",
		category: "Consulting",
		title: "Business Report Writing Training",
		description:
			"I successfully conducted a training session titled “How to Write a Business Report?” for the Business Development team of OnnoRokom Projukti Limited. The goal was to enhance their ability to write structured, professional, and purpose-driven business reports.",
		tags: [
			"Report Writing",
			"Business Communication",
			"Training & Development",
			"Capacity Building",
		],
		results: [
			" Team can now prepare formal reports (status reports, proposal reports, analysis reports)",
			" Boosted clarity and confidence in team communication",
      " Enhanced overall report quality and professionalism",
		],
		timeline: "May 2024 - Jun 2024",
		buttonLabel: "View Detailes",
		buttonUrl: "https://docs.google.com/presentation/d/1gMy-gVuziMZuwya_sQ9XyKrdethr7AtS/edit?usp=sharing&ouid=100745213181824909947&rtpof=true&sd=true",
	},

	{
		id: 2,
		image:
			"https://i.ibb.co/99NDgmG7/Aman-Banner-for-blogs-Website-2-1.jpg",
		category: "Organization Development",
		title: "DUNS Number Procurement for OnnoRokom Group",
		description:
			"Led the end-to-end process to acquire DUNS numbers for OnnoRokom Group concerns including OnnoRokom Software Ltd, OnnoRokom Projukti Ltd, Udvash, Unmesh Online Care, Uttoron, and Rokomari. Managed requirement analysis, vendor coordination, pricing negotiation, and successful delivery within the targeted timeframe.",
		tags: [
			"Process Analysis",
			"Vendor Communication",
			"Pricing Negotiation",
			"Documentation",
		],
		results: [
			"DUNS numbers secured for 5 business units within 1 month",
			"Achieved optimal pricing via negotiation with Dun & Bradstreet",
		],
		timeline: "Nov 2023 - Dec 2023",
		buttonLabel: "View Detailes",
		buttonUrl: "#",
	},


	{
    id: 3,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    category: "Technical", 
    title: "Tag Manager Setup for OPL Website",
    description: "Configured Google Tag Manager for the OPL website to enable advanced analytics, conversion tracking, and marketing integrations.",
    tags: ["Google Tag Manager", "OPL Website", "Analytics", "Conversion Tracking"],
    results: ["All key site events tracked", "Enhanced marketing data accuracy"],
    timeline: "May 2025",
    buttonLabel: "View Detailes",
    buttonUrl: "#",
  },
  
{
    id: 4,
    image: "https://i.ibb.co/5ZQ475G/Screenshot-2025-06-21-162853.png",
    category: "Marketing & Branding Skills",
    title: "OPL Social Media Management",
    description: "Managed OPL's social media content, regularly posting updates and job circulars on the OPL website's social media pages. Achieved 4,300+ organic followers on LinkedIn and 700+ on Facebook. This is an ongoing project.",
    tags: ["Social Media", "Content Management", "LinkedIn", "Facebook", "Branding"],
    results: [
      "LinkedIn page: 4,300+ organic followers",
      "Facebook page: 700+ organic followers",
      "Consistent content and job circular posting"
    ],
    timeline: "Ongoing",
    buttonLabel: "View Case Study",
    buttonUrl: "https://bd.linkedin.com/company/onnorokom-projukti-limited",
  },
  {
    id: 5,
    image: "https://i.ibb.co/wN4R7jwD/Screenshot-2025-06-21-153049.png",
    category: "Analytical",
    title: "Onnorokom Projukti Website Launch",
    description: "Researched software company websites for inspiration, developed the website structure for OPL, prepared all text content, and successfully launched the Onnorokom Projukti website on January 1, 2025.",
    tags: ["Website Structure", "Content Writing", "Market Research", "Launch"],
    results: [
      "Completed competitive research",
      "Developed site structure and all content",
      "Website launched on January 1, 2025"
    ],
    timeline: "Jan 2025",
    buttonLabel: "View Case Study",
    buttonUrl: "#",
  },
  {
    id: 6,
    image: "https://i.ibb.co/Txg3hcvS/basis-3.jpg",
    category: "Organization Development",
    title: "BASIS Membership Process for OPL",
    description: "Completed the BASIS membership process for OPL by preparing the company profile, director profiles, and managing all required documentation for the application.",
    tags: ["BASIS Membership", "Company Profile", "Director Profile", "Documentation"],
    results: [
      "Prepared OPL company profile",
      "Prepared director profiles",
      "Managed and submitted all required documents for BASIS application"
    ],
    timeline: "Feb 2025",
    buttonLabel: "View Case Study",
    buttonUrl: "#",
  },
  {
    id: 7,
    image: "https://i.ibb.co/jtDCnsr/DSC06204.jpg",
    category: "Organization Development",
    title: "TeamTogether 2025 Event for OPL",
    description: "Conducted the TeamTogether 2025 program for OPL: planned the event, prepared presentations and food menu, managed the event execution, and supported team members. The event was attended by 150 employees, including the MD and Chairman, on February 27, 2025.",
    tags: ["Event Management", "Program Planning", "Presentation", "Team Support"],
    results: [
      "Successfully managed TeamTogether 2025 event",
      "Planned and executed program, presentations, and food menu",
      "150 employees attended, including MD and Chairman"
    ],
    timeline: "Feb 27, 2025",
    buttonLabel: "View Case Study",
    buttonUrl: "#",
  },
  {
    id: 8,
    image: "https://i.ibb.co/PvJRpRD4/Whats-App-Image-2025-05-27-at-15-09-26-1.jpg",
    category: "Organization Development",
    title: "OPL Day Townhall Meeting 2025",
    description: "Planned and managed the OPL Day Townhall Meeting 2025: created the program plan with teammates, prepared presentations and a video presentation for all teams, and assisted other teams in preparing their presentations. The event was held on May 27, 2025.",
    tags: ["Event Management", "Program Planning", "Presentation", "Video Presentation", "Team Collaboration"],
    results: [
      "Successfully executed OPL Day Townhall Meeting 2025",
      "Prepared and supported all team presentations and video content",
      "Strengthened cross-team collaboration"
    ],
    timeline: "May 27, 2025",
    buttonLabel: "View Case Study",
    buttonUrl: "#",
  },
];

const filterCategories = [
	"Technical",
	"Analytical",
	"Organization Development",
	"Marketing & Branding",
	"Consulting",
];

const Portfolio = () => {
	const [selectedCategory, setSelectedCategory] = React.useState("All");
	// Sort projects by id descending (latest first)
	const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
	// Filter projects based on selected category
	const filteredProjects =
		selectedCategory === "All"
			? sortedProjects
			: sortedProjects.filter(
					(project) => project.category === selectedCategory
			  );
	return (
		<div
			className="min-h-screen bg-gray-50"
			style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
		>
			<ScrollFadeIn>
				{/* Hero Section */}
				<section className="relative bg-gradient-to-br from-blue-200 via-white to-purple-200 pt-20 pb-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h1
								className="font-extrabold uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-8"
								style={{
									fontFamily: "'Jost', sans-serif",
									fontWeight: 700,
									fontSize: "32px",
								}}
							>
								<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
									MY PORTFOLIO
								</span>
							</h1>
							<p className="text-lg text-gray-700 max-w-2xl mx-auto">
								Showcasing impactful projects and successful implementations
								across organization development, digital marketing, and
								technology.
							</p>
						</div>
					</div>
				</section>
			</ScrollFadeIn>

			{/* Modern Filter Buttons */}
			<div
				className="w-full px-0 flex flex-wrap gap-3 justify-center border-b"
				style={{
					background: "#F9FAFB",
					borderBottomColor: "rgba(0,0,0,0.08)",
					paddingTop: "2.5rem",
					paddingBottom: "2.5rem",
				}}
			>
				<button
					className={`px-5 py-2 rounded-md font-semibold shadow-sm border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm tracking-wide backdrop-blur-md ${
						selectedCategory === "All"
							? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 scale-105 shadow-lg"
							: "bg-[#F9FAFB] text-blue-700 border-blue-200 hover:bg-blue-50 hover:scale-105"
					}`}
					style={{ minWidth: "120px" }}
					onClick={() => setSelectedCategory("All")}
				>
					All
				</button>
				{filterCategories.map((cat) => (
					<button
						key={cat}
						className={`px-5 py-2 rounded-md font-semibold shadow-sm border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm tracking-wide backdrop-blur-md ${
							selectedCategory === cat
								? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 scale-105 shadow-lg"
								: "bg-[#F9FAFB] text-blue-700 border-blue-200 hover:bg-blue-50 hover:scale-105"
						}`}
						style={{ minWidth: "120px" }}
						onClick={() => setSelectedCategory(cat)}
					>
						{cat}
					</button>
				))}
			</div>

			{/* Portfolio Case Study Cards */}
			<section className="py-8">
				<div className="max-w-5xl mx-auto flex flex-col gap-8 px-4">
					{filteredProjects.map((project) => (
						<div
							key={project.id}
							className="bg-white rounded-md shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col md:flex-row w-full"
						>
							{/* Left: Image */}
							<div className="md:w-2/5 w-full flex-shrink-0">
								<img
									src={project.image}
									alt={project.title}
									className="object-cover w-full h-44 md:h-full rounded-t-md md:rounded-l-md md:rounded-tr-none"
								/>
							</div>
							{/* Right: Content */}
							<div className="md:w-3/5 w-full flex flex-col p-4">
								<span className="text-[15px] font-semibold text-green-600 uppercase mb-1 tracking-wide">
									{project.category}
								</span>
								<h2
									className="font-bold text-blue-800 mb-1"
									style={{ fontSize: "22px" }}
								>
									{project.title}
								</h2>
								<p className="text-[15px] text-gray-700 mb-2">
									{project.description}
								</p>
								{/* Tags */}
								<div className="flex flex-wrap gap-2 mb-2">
									{project.tags.map((tag, idx) => (
										<span
											key={idx}
											className="bg-blue-100 text-blue-700 text-[15px] px-2 py-0.5 rounded font-medium"
										>
											{tag}
										</span>
									))}
								</div>
								{/* Results */}
								<div className="bg-green-50 border-l-4 border-green-400 text-green-800 p-2 rounded mb-2">
									{project.results.map((result, idx) => (
										<div key={idx} className="flex items-start gap-2">
											<span className="text-green-500 font-bold text-[15px]">
												✔
											</span>
											<span className="text-[15px]">{result}</span>
										</div>
									))}
								</div>
								{/* Timeline */}
								<div className="text-[15px] text-gray-500 mb-3 flex items-center gap-2">
									<svg
										className="w-4 h-4 text-blue-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
									<span className="font-semibold text-gray-700">
										Timeline:
									</span>{" "}
									{project.timeline}
								</div>
								{/* Action Button */}
								<div className="mt-auto">
									<a
										href={project.buttonUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-5 rounded-md shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm tracking-wide"
										style={{ minWidth: "120px" }}
									>
										{project.buttonLabel}
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Portfolio;