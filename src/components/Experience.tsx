// app/components/Experience.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Calendar, MapPin, ChevronRight } from "lucide-react";

interface Achievement {
  id: number;
  text: string;
  icon: string;
}

const skills = [
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
] as const;

const achievements: Achievement[] = [
  {
    id: 1,
    text: "Developed and implemented new features using React, Redux, TypeScript",
    icon: "💻",
  },
  {
    id: 2,
    text: "Built and integrated APIs using Node.js, Sequelize ORM, and PostgreSQL",
    icon: "🔧",
  },
  {
    id: 3,
    text: "Created interactive data visualizations with D3.js",
    icon: "📊",
  },
  {
    id: 4,
    text: "Implemented efficient data handling with React Query and form management with Formik",
    icon: "⚡",
  },
  {
    id: 5,
    text: "Optimized UI design with Tailwind CSS for better responsiveness",
    icon: "🎨",
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
    <section id="experience" className="w-full py-20 ">
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} className="relative group">
              <Image
                src="dataMingle.svg"
                alt="DataMingle Analytics"
                width={80}
                height={80}
                className="rounded-lg shadow-lg"
                priority
              />
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-gray-200">
                  DataMingle Analytics
                </h3>
                <a
                  href="https://www.linkedin.com/company/datamingle-analytics-private-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  aria-label="Visit DataMingle Analytics LinkedIn"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>3-month Internship</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Web Development</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-300 leading-relaxed">
              During my 3-month internship at <strong>DataMingle</strong>, I
              played a key role in building their platform from the ground up.
              Working with modern technologies, I contributed to creating a
              robust data supply chain platform while focusing on performance
              optimization and exceptional user experience.
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-8 space-y-4"
            >
              {achievements.map((achievement) => (
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
                {skills.map((skill, index) => (
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
      </motion.div>
    </section>
  );
}
