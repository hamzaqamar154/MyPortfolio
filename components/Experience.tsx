"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Company Inc.",
    location: "Remote",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    achievements: [
      "Built and deployed 10+ production applications",
      "Improved application performance by 40%",
      "Led a team of 5 developers",
    ],
  },
  {
    title: "AI Engineer",
    company: "AI Solutions Ltd.",
    location: "San Francisco, CA",
    period: "2020 - 2022",
    description: "Developed machine learning models and AI-powered features for enterprise clients. Worked with TensorFlow, PyTorch, and various NLP frameworks.",
    achievements: [
      "Developed 5+ ML models deployed to production",
      "Reduced model inference time by 60%",
      "Published 3 research papers",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    location: "New York, NY",
    period: "2018 - 2020",
    description: "Built end-to-end features for a fast-growing startup. Worked across the entire stack from database design to frontend implementation.",
    achievements: [
      "Shipped features used by 100K+ users",
      "Reduced page load time by 50%",
      "Implemented CI/CD pipelines",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-primary-secondary"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-text">Work </span>
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-text-muted text-lg max-w-3xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex relative z-10">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center border-2 border-accent">
                      <Briefcase className="text-accent w-6 h-6" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex-1 glass rounded-xl p-6 lg:p-8"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-text mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-accent mb-2">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-text-muted text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-text-muted mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-text-muted"
                        >
                          <span className="text-accent mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

