"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Calendar, MapPin, ChevronRight } from "lucide-react";

interface Achievement {
  id: number;
  text: string;
  icon: string;
}

interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  department: string;
  description: string;
  linkedIn: string;
  logoSrc: string;
  achievements: Achievement[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Intervue.io",
    role: "SDE (Software Development Engineer)",
    duration: "3 month",
    department: "Engineering",
    description:
      "Spearheaded the frontend architecture and payment infrastructure for a high-traffic dashboard. Focused on optimizing rendering performance for large datasets and securing financial transactions via Stripe, directly impacting revenue conversion rates.",
    linkedIn: "https://www.linkedin.com/company/carboncompete",
    logoSrc: "intervue.png",
    achievements: [
      {
        id: 1,
        text: "Engineered a high-performance React dashboard, utilizing virtualization to render 10,000+ data points with zero lag, increasing user session time by 25%.",
        icon: "📈",
      },
      {
        id: 2,
        text: "Architected a secure payment microservice using Stripe Connect, processing $50k+ in transactions with automated reconciliation and error handling.",
        icon: "💳",
      },
      {
        id: 3,
        text: "Developed a Real-time Notification Service using WebSockets and Redis, delivering instant alerts to 500+ concurrent users.",
        icon: "📧",
      },
      {
        id: 4,
        text: "Built a dynamic 'Admin Analytics Suite' with export capabilities (PDF/CSV), reducing manual reporting time for the operations team by 80%.",
        icon: "📝",
      },
      {
        id: 5,
        text: "Implemented Recharts for complex data visualization, enabling users to track performance metrics through interactive heatmaps and trend lines.",
        icon: "📊",
      },
      {
        id: 6,
        text: "Optimized PostgreSQL queries by implementing compound indexing, reducing average API response time from 300ms to 85ms.",
        icon: "⚡",
      },
    ],
    skills: [
      "React",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Docker",
      "WebSocket",
      "Jest",
      "CI/CD",
    ],
  },
  {
    id: 2,
    company: "Mycorr",
    role: "Full Stack Developer",
    duration: "3 month",
    department: "Engineering",
    description:
      "Led full-stack development for a scalable SaaS solution. Focused on backend stability, efficient data modeling, and creating a seamless user experience through optimistic UI updates and robust API design.",
    linkedIn: "https://www.linkedin.com/company/carboncompete",
    logoSrc: "mycorrhizas_logo.svg",
    achievements: [
      {
        id: 1,
        text: "Revamped the client-facing portal using TypeScript and React, resulting in a 30% increase in daily active user engagement.",
        icon: "📈",
      },
      {
        id: 2,
        text: "Integrated a custom subscription billing module via Stripe, supporting multi-tier pricing plans and automated invoicing.",
        icon: "💳",
      },
      {
        id: 3,
        text: "Designed an event-driven email architecture (using BullMQ) to handle bulk dispatching without blocking the main event loop.",
        icon: "📧",
      },
      {
        id: 4,
        text: "Developed a 'Dynamic Reporting Engine' allowing clients to generate custom analytics views based on 15+ filterable parameters.",
        icon: "📝",
      },
      {
        id: 5,
        text: "Constructed an interactive data playground allowing users to visualize complex dataset relationships in real-time.",
        icon: "📊",
      },
      {
        id: 6,
        text: "Refactored legacy Node.js endpoints to use distinct service layers, improving code maintainability and test coverage by 40%.",
        icon: "⚡",
      },
    ],
    skills: [
      "React",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Docker",
      "WebSocket",
      "Jest",
      "CI/CD",
    ],
  },
  {
    id: 3,
    company: "CarbonCompete",
    role: "Full Stack Developer",
    duration: "3 month",
    department: "Engineering",
    description:
      "Owned the Life Cycle Assessment (LCA) module architecture. Designed scalable microservices to calculate environmental impact in real-time and led the integration of complex sustainability datasets.",
    linkedIn: "https://www.linkedin.com/company/carboncompete",
    logoSrc: "carboncompete.svg",
    achievements: [
      {
        id: 1,
        text: "Designed and containerized the LCA Calculation Microservice using Node.js and Docker, ensuring consistent deployment across dev and prod environments.",
        icon: "🚀",
      },
      {
        id: 2,
        text: "Built the 'Live Carbon Monitor' dashboard, utilizing WebSockets to push sub-second emission updates to client interfaces.",
        icon: "📊",
      },
      {
        id: 3,
        text: "Optimized complex SQL aggregation queries for carbon data, achieving 40% faster retrieval times for historical reports.",
        icon: "⚡",
      },
      {
        id: 4,
        text: "Led the integration of 3rd-party Sustainability APIs, creating a unified data pipeline that normalized external data for internal use.",
        icon: "🔄",
      },
    ],
    skills: [
      "React",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Docker",
      "WebSocket",
      "Jest",
      "CI/CD",
    ],
  },
  {
    id: 4,
    company: "DataMingle Analytics",
    role: "Web Development Intern",
    duration: "4-month Internship",
    department: "Web Development",
    description:
      "Contributed to the zero-to-one build of a data supply chain platform. Owned the frontend implementation of data visualization modules and optimized API consumption patterns for high-volume datasets.",
    linkedIn:
      "https://www.linkedin.com/company/datamingle-analytics-private-limited/",
    logoSrc: "dataMingle.svg",
    achievements: [
      {
        id: 1,
        text: "Developed reusable React UI components with TypeScript, reducing technical debt and standardizing the design system across the app.",
        icon: "💻",
      },
      {
        id: 2,
        text: "Built RESTful APIs using Node.js and Sequelize, implementing efficient pagination to handle datasets exceeding 100k rows.",
        icon: "🔧",
      },
      {
        id: 3,
        text: "Created interactive Sankey diagrams and Heatmaps using D3.js to visualize complex data supply chain flows.",
        icon: "📊",
      },
      {
        id: 4,
        text: "Implemented React Query for server state management, introducing caching and background refetching to reduce API load by 50%.",
        icon: "⚡",
      },
      {
        id: 5,
        text: "Refactored the UI with Tailwind CSS, achieving a 100% Mobile Responsiveness score and improving Google Lighthouse accessibility metrics.",
        icon: "🎨",
      },
    ],
    skills: [
      "React",
      "Redux",
      "TypeScript",
      "Node.js",
      "Sequelize ORM",
      "PostgreSQL",
      "D3.js",
      "React Query",
      "Formik",
      "Tailwind CSS",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
} as const;

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-gray-200">My </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Experience
          </span>
        </h2>

        <div className="space-y-8">
          {experiences.map((experience,index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-700"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <Image 
                    src={experience.logoSrc}
                    alt={experience.company}
                    width={80}
                    height={80}
                    className={`shadow-lg ${index==1 && 'bg-white'}`}
                    priority
                  />
                  <div className="absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-200">
                      {experience.company}
                    </h3>
                    <a
                      href={experience.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      aria-label={`Visit ${experience.company} LinkedIn`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.department}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-gray-300 leading-relaxed">
                  {experience.description}
                </p>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-8 space-y-4"
                >
                  {experience.achievements.map((achievement) => (
                    <motion.div
                      key={achievement.id}
                      variants={item}
                      className="flex items-start gap-3 group"
                    >
                      <span className="text-xl" aria-hidden="true">
                        {achievement.icon}
                      </span>
                      <div className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <p className="text-gray-300">{achievement.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-8">
                  <h4 className="text-gray-200 font-semibold mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1 bg-gray-700/50 text-blue-300 rounded-full text-sm hover:bg-gray-700 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
