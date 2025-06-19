import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Users, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

// Training & Certification Section (collapsible, hover/click to show details)
const trainingData = [
	{
		title: "Business Intelligence Fundamentals",
		color: "blue",
		details: (
			<>
				<div className="text-gray-700 text-sm mb-1 flex items-center gap-2">
					<svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7V6a3 3 0 013-3h12a3 3 0 013 3v1M16 21v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 11v.01" /></svg>
					Organization: <span className="font-semibold">Simplilearn</span>
				</div>
				<div className="text-gray-700 text-sm mb-1 flex items-center gap-2">
					<svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
					Issued: April 2025
				</div>
				<div className="text-gray-700 text-sm mb-1 flex items-center gap-2">
					<svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.908-1.004L12 2.75l3.092 5.751L22 9.505l-5.007 4.617 1.179 6.873z" /></svg>
					Credential ID: 8160310
				</div>
				<div className="mt-2">
					<span className="font-semibold text-gray-800 flex items-center gap-2">
						<svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
						Skills Covered:
					</span>
					<div className="flex flex-col gap-1 mt-1 ml-2">
						{["Data Analysis","Microsoft Power BI","Microsoft Power Query","Data-driven Decision Making","Data Visualization","Dashboard Metrics"].map((skill, i) => (
							<span key={i} className="flex items-center gap-2 text-gray-700">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
								{skill}
							</span>
						))}
					</div>
				</div>
			</>
		),
	},
	{
		title: "Effective Leadership",
		color: "purple",
		details: (
			<>
				<div className="text-gray-700 text-sm mb-1 flex items-center gap-2">
					<svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7V6a3 3 0 013-3h12a3 3 0 013 3v1M16 21v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 11v.01" /></svg>
					Organization: <span className="font-semibold">HP LIFE</span>
				</div>
				<div className="text-gray-700 text-sm mb-1 flex items-center gap-2">
					<svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
					Issued: September 2024
				</div>
				<div className="text-gray-700 text-sm mb-1 flex items-center gap-2">
					<svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.908-1.004L12 2.75l3.092 5.751L22 9.505l-5.007 4.617 1.179 6.873z" /></svg>
					Credential ID: 0cc94625-88cc-4bdc-90e0-4d04647f3bb8
				</div>
				<div className="mt-2">
					<span className="font-semibold text-gray-800 flex items-center gap-2">
						<svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
						Skills Covered:
					</span>
					<div className="flex flex-col gap-1 mt-1 ml-2">
						{["Leadership","Team Leadership","Cross-functional Team Leadership","Leadership Development","Organizational Leadership"].map((skill, i) => (
							<span key={i} className="flex items-center gap-2 text-gray-700">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
								{skill}
							</span>
						))}
					</div>
				</div>
			</>
		),
	},
	{
		title: "BUS607: Data-Driven Decision-Making",
		color: "pink",
		details: (
			<>
				<div className="text-gray-700 text-sm mb-1 flex items-center gap-2">
					<svg className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7V6a3 3 0 013-3h12a3 3 0 013 3v1M16 21v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 11v.01" /></svg>
					Organization: <span className="font-semibold">Saylor Academy</span>
				</div>
				<div className="text-gray-700 text-sm mb-1 flex items-center gap-2">
					<svg className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
					Issued: July 2024
				</div>
				<div className="text-gray-700 text-sm mb-1 flex items-center gap-2">
					<svg className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.908-1.004L12 2.75l3.092 5.751L22 9.505l-5.007 4.617 1.179 6.873z" /></svg>
					Credential ID: 7819484550MU
				</div>
				<div className="mt-2">
					<span className="font-semibold text-gray-800 flex items-center gap-2">
						<svg className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
						Skills Covered:
					</span>
					<div className="flex flex-col gap-1 mt-1 ml-2">
						{["Data Analysis","Decision-Making","Data-driven Decision Making","Critical Thinking","Data Analytics"].map((skill, i) => (
							<span key={i} className="flex items-center gap-2 text-gray-700">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
								{skill}
							</span>
						))}
					</div>
				</div>
			</>
		),
	},
	{
		title: "Project Management",
		color: "green",
		details: (
			<>
				<div className="text-gray-700 text-sm mb-1 flex items-center gap-2">
					<svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7V6a3 3 0 013-3h12a3 3 0 013 3v1M16 21v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 11v.01" /></svg>
					Organization: <span className="font-semibold">Great Learning</span>
				</div>
				<div className="text-gray-700 text-sm mb-1 flex items-center gap-2">
					<svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
					Issued: June 2024
				</div>
				<div className="mt-2">
					<span className="font-semibold text-gray-800 flex items-center gap-2">
						<svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
						Skills Covered:
					</span>
					<div className="flex flex-col gap-1 mt-1 ml-2">
						{["Project Management","Project Planning","Project Evaluation"].map((skill, i) => (
							<span key={i} className="flex items-center gap-2 text-gray-700">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
								{skill}
							</span>
						))}
					</div>
				</div>
			</>
		),
	},
];

const About = () => {
	const education = [
		{
			degree: "MSS in Public Administration",
			institution: "Pabna University of Science and Technology",
			year: "2023",
			description: "CGPA: 3.43",
		},
		{
			degree: "BSS in Public Administration",
			institution: "Pabna University of Science and Technology",
			year: "2022",
			description: "CGPA: 3.33",
		},
		{
			degree: "HSC in Science",
			institution: "Bhurungamari Govt College, Bhurungamari",
			year: "2016",
			description: "GPA: 4.50",
		},
		{
			degree: "SSC in Science",
			institution: "Andharijhar Al Haj Mahmud Ali High School, Andharijhar",
			year: "2014",
			description: "GPA: 5.00",
		},
	];

	const experience = [
		{
			title: "Assistant Executive — Organization Development",
			company: "Onnorokom Group",
			duration: "October 2023 – Present",
			location: "Kawran Bazar, Dhaka",
			responsibilities: [
				"Actively engaged in organizational development initiatives, supporting internal process improvement and team coordination.",
				"Collaborating with the Digital Marketing Team for content planning, campaign coordination, and promotional strategy execution.",
				"Involved in Functional Requirement System (FRS) preparation for various internal and client-based software projects.",
				"Website structure planning, collaborating with UI/UX and technical teams to finalize page hierarchy, content flow, and navigation.",
				"Managing content writing, editing, and updating for organizational digital platforms including websites, promotional materials, and social media.",
				"Conducting research and analysis on industry trends, competitor benchmarking, and internal process optimization.",
				"Organizing and supporting internal events and programs, including staff training, employee engagement activities, and corporate celebrations.",
				"Preparing official documents, proposals, and management reports to support decision-making and project documentation.",
			],
		},
	];

	const skills = {
		"Technical Skills": [
			"Microsoft Office Expert",
			"Power BI",
			"HTML5",
			"CSS3",
			"VS Code",
			"WordPress",
			"Adobe Photoshop & Illustrator",
			"Elementor",
			"Google Analytics 4",
			"Google Tag Manager",
			"Facebook Pixels",
		],
		"Analytical Skills": [
			"Data Analysis",
			"FRS & Website Structure Planning",
			"Requirements Analysis",
			"Business Analysis",
			"Business Model Development",
			"Data-driven Decision Making",
			"Research and Development (R&D)",
		],
		"Organization Development": [
			"Project Management & Planning",
			"Business Planning",
			"Performance Management",
			"Leadership Development",
			"Culture Transformation",
			"Event Management & Planning",
			"Human Resource Management",
			"Policy Analysis",
			"Labor Law",
		],
		"Marketing & Branding Skills": [
			"Digital Marketing",
			"Social Media Marketing",
			"Mata Ads",
			"Google Ads",
			"Social Media Strategy",
			"Branding & Identity",
			"Social Media Optimization",
			"SEO",
			"Content Writing",
			"Social Media Design",
		],
		"Interpersonal Skills": [
			"Leadership",
			"Teamwork",
			"Team Building",
			"Communication",
			"Negotiation",
			"Presentation Skills",
			"Decision-Making",
			"Problem Solving",
			"Creative Problem Solving",
			"Adaptability & Time Management",
			"Creativity & Analytical Skills",
		],
		Consulting: [
			"Career Coaching",
			"CV Writing",
			"Interview Preparation",
			"LinkedIn Optimization",
			"Profile Creation",
			"Profile Optimization",
		],
	};

	const activities = [
		{
			title: "TEDx Speaker",
			description: "Delivered talk on 'Digital Transformation in Organizations'",
			year: "2023",
		},
		{
			title: "Career Mentoring Program",
			description: "Volunteer mentor for young professionals at Dhaka University",
			year: "2022 - Present",
		},
		{
			title: "Digital Marketing Workshop",
			description: "Conducted workshops for SMEs on digital marketing strategies",
			year: "2021 - 2022",
		},
		{
			title: "Professional Development Club",
			description: "Co-founder and president of PD Club at BRAC University",
			year: "2017 - 2018",
		},
	];

	const hobbies = [
		"Technology Trends Research",
		"Professional Photography",
		"Reading Business & Psychology Books",
		"Travel & Cultural Exploration",
		"Fitness & Wellness",
		"Community Volunteering",
	];

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
									ABOUT ME
								</span>
							</h1>
							<p className="text-xl text-gray-700 max-w-3xl mx-auto">
								Passionate about empowering individuals and organizations through
								strategic development, digital innovation, and transformational
								leadership.
							</p>
						</div>
					</div>
				</section>

				{/* Biography */}
				<section className="py-16 bg-white">
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center uppercase">
							<span
								className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
								style={{
									fontFamily: "'Jost', sans-serif",
									fontWeight: 700,
									fontSize: "36px",
								}}
							>
								{" "}
								MY STORY
							</span>
						</h2>
						<div className="prose prose-lg max-w-none text-gray-600 space-y-6 text-center">
							<p>
								My journey began with a deep fascination for technology and its
								ability to transform how we work, communicate, and live. Although I
								Hold a degree in Public Administration from Pabna University of
								Science and Technology, my true passion lies in technology, digital
								marketing research, product analysis, and digital solution
								development. Through my professional experiences, I’ve discovered
								the value of combining tech-driven strategies with structured,
								people-focused approaches to solve real-world challenges. This has
								allowed me to build skills in market research, product development,
								functional requirement specification (FRS) writing, data management,
								and video content creation.
							</p>
							<p>
								Today, I focus on bridging the gap between technology, market
								insights, and product strategy. From drafting FRS documents and
								conducting product research to managing data systems and producing
								engaging video content, I approach every project with a vision for
								creating practical, scalable solutions.
								Beyond work, I’m passionate about exploring emerging tech trends,
								digital tools, and business models, and actively participating in
								community learning initiatives. I believe continuous learning,
								innovation, and knowledge-sharing are essential for lasting
								professional and personal growth.
							</p>
						</div>
					</div>
				</section>

				{/* Education */}
				<section className="py-16 bg-gray-50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold text-gray-900 mb-12 text-center uppercase">
							<span
								className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
								style={{
									fontFamily: "'Jost', sans-serif",
									fontWeight: 700,
									fontSize: "36px",
								}}
							>
								EDUCATION
							</span>
						</h2>
						<div
							className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-8 md:gap-y-16"
							style={{ fontFamily: "'Jost', sans-serif" }}
						>
							{education.map((edu, index) => (
								<Card
									key={index}
									className="relative overflow-visible rounded-3xl border-0 bg-white/95 shadow-[0_8px_32px_0_rgba(31,38,135,0.18)] hover:shadow-[0_12px_48px_0_rgba(80,0,200,0.18)] hover:scale-105 transition-all duration-300 backdrop-blur-xl p-0 group"
								>
									<div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
										<div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 p-1 rounded-full shadow-xl animate-[pulse_2s_infinite]">
											<div className="bg-white p-1.5 rounded-full flex items-center justify-center shadow-md">
												<Calendar className="w-6 h-6 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
											</div>
										</div>
									</div>
									<CardHeader className="pt-12 pb-4 px-6 text-center">
										<CardTitle className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-1">
											{edu.degree}
										</CardTitle>
										<CardDescription className="flex flex-col items-center gap-1 text-sm text-gray-500 font-medium">
											<span className="font-semibold text-blue-700">
												{edu.institution}
											</span>
											<span className="text-gray-700">{edu.description}</span>
											<span className="text-purple-600 font-bold">
												{edu.year}
											</span>
										</CardDescription>
									</CardHeader>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Experience */}
				<section className="py-16 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold text-gray-900 mb-12 text-center uppercase">
							<span
								className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
								style={{
									fontFamily: "'Jost', sans-serif",
									fontWeight: 700,
									fontSize: "36px",
								}}
						>
							PROFESSIONAL EXPERIENCE
						</span>
						</h2>
						<div className="space-y-10">
							{experience.map((exp, index) => (
								<div
									key={index}
									className="px-2 md:px-8 py-4 md:py-6 border-l-4 border-gradient-to-b from-blue-600 to-purple-600 bg-white/60 backdrop-blur-sm rounded-none md:rounded-xl shadow-none md:shadow-sm transition-all duration-300"
									style={{ fontFamily: "'Jost', sans-serif" }}
								>
									<h3 className="text-2xl font-bold text-black uppercase tracking-wide mb-1 flex items-center gap-2">
										{exp.title}
									</h3>
									<div className="flex flex-col gap-1 mb-2">
										<span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-base">
											{exp.company}
										</span>
										<span className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
											<span className="flex items-center gap-1">
												<Calendar className="h-4 w-4 text-blue-500" />
												{exp.duration}
											</span>
											<span className="flex items-center gap-1">
												<MapPin className="h-4 w-4 text-purple-500" />
												{exp.location}
											</span>
										</span>
									</div>
									<ul className="space-y-2 pl-2 text-gray-700 text-base">
										{exp.responsibilities.map((responsibility, idx) => (
											<li
												key={idx}
												className="flex items-start gap-2 leading-relaxed"
											>
												<span className="mt-1 text-blue-600">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-4 w-4"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth="2"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M5 13l4 4L19 7"
														/>
													</svg>
												</span>
												<span>{responsibility}</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Skills */}
				<section className="py-16 bg-gradient-to-br from-blue-200 via-white to-purple-200">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold text-gray-900 mb-12 text-center uppercase">
							<span
								className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
								style={{
									fontFamily: "'Jost', sans-serif",
									fontWeight: 700,
									fontSize: "36px",
								}}
							>
								SKILLS & EXPERTISE
							</span>
						</h2>
						<div
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-8 md:gap-y-12"
							style={{ fontFamily: "'Jost', sans-serif" }}
						>
							{Object.entries(skills).map(([category, skillList], index) => (
								<div
									key={index}
									className="relative group rounded-2xl bg-white/90 shadow-xl border-0 p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-500 animate-fade-in"
									style={{ minHeight: "320px" }}
								>
									<h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-3 mt-2 text-center">
										{category}
									</h3>
									<div className="flex flex-wrap justify-center gap-2 mt-2">
										{skillList.map((skill, idx) => (
											<span
												key={idx}
												className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900 font-medium px-3 py-1 rounded-full shadow-sm hover:scale-105 transition-transform duration-300"
											>
												{skill}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Training & Certification */}
				<section className="py-16 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold text-gray-900 mb-12 text-center uppercase">
											<span
							className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
							style={{
								fontFamily: "'Jost', sans-serif",
								fontWeight: 700,
								fontSize: "36px",
							}}
						>
              TRAINING & CERTIFICATION
            </span>
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{trainingData.map((item, idx) => {
							const [open, setOpen] = React.useState(false);
							const handleToggle = (e) => {
								e.stopPropagation();
								setOpen((prev) => !prev);
							};
							const handleButtonClick = (e) => {
								e.stopPropagation();
								setOpen((prev) => !prev);
							};
							return (
								<div
									key={idx}
									className={`rounded-2xl bg-white/90 shadow-lg p-6 flex flex-col gap-2 border-l-4 border-${item.color}-500 cursor-pointer transition-all duration-300 group relative`}
									tabIndex={0}
									onClick={handleToggle}
									onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleToggle(e)}
									onMouseEnter={() => setOpen(true)}
									onMouseLeave={() => setOpen(false)}
									aria-expanded={open}
									role="button"
								>
									<div className="flex items-center justify-between">
										<h3 className="text-xl font-bold mb-1 text-gray-900 group-hover:text-blue-700 transition-colors duration-300 select-none">
											{item.title}
										</h3>
										<button
											className="ml-2 px-2 py-1 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
											onClick={handleButtonClick}
											tabIndex={-1}
											aria-label={open ? 'Hide details' : 'Show details'}
										>
											{open ? 'Hide' : 'Show'}
										</button>
									</div>
									{open && <div className="animate-fade-in mt-2">{item.details}</div>}
								</div>
							);
						})}
						</div>
					</div>
				</section>

				{/* Hobbies */}
				<section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center uppercase">
      <span
        className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: "36px" }}
      >
        PERSONAL INTERESTS
      </span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {hobbies.map((hobby, index) => {
        // Icon mapping for each hobby
        const icons = {
          "Technology Trends Research": (
            <svg className="h-8 w-8 text-blue-500 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 4h1a2 2 0 002-2v-5a2 2 0 00-2-2h-1V7a2 2 0 00-2-2h-2a2 2 0 00-2 2v1H7a2 2 0 00-2 2v5a2 2 0 002 2h1" /></svg>
          ),
          "Professional Photography": (
            <svg className="h-8 w-8 text-yellow-500 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="13" r="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 7h2l2-3h8l2 3h2a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z" /></svg>
          ),
          "Reading Business & Psychology Books": (
            <svg className="h-8 w-8 text-purple-500 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5zm0 0v-8" /></svg>
          ),
          "Travel & Cultural Exploration": (
            <svg className="h-8 w-8 text-green-500 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          ),
          "Fitness & Wellness": (
            <svg className="h-8 w-8 text-pink-500 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87m9-7.13a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ),
          "Community Volunteering": (
            <svg className="h-8 w-8 text-orange-500 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-7.13a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ),
        };
        const icon = icons[hobby] || (
          <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /></svg>
        );
        return (
          <div
            key={index}
            className="rounded-3xl bg-white/70 backdrop-blur-lg shadow-2xl border-0 p-8 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-3xl group relative animate-fade-in"
            style={{ minHeight: "180px", border: "1.5px solid #e0e7ff", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
          >
            <div className="mb-4 flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-full p-4 shadow-md">
              {icon}
            </div>
            <span className="text-lg font-bold text-gray-800 text-center tracking-wide group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.02em" }}>
              {hobby}
            </span>
          </div>
        );
      })}
    </div>
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

export default About;
