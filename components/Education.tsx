"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "University of Lahore",
    location: "Gujrat, Pakistan",
    period: "2019 - 2024",
    description: "Comprehensive program covering software development, database systems, web technologies, and software engineering principles.",
    achievements: [
      "Best Table Tennis Player",
      "Led student software development team project",
      "Weightlifting Champion",
    ],
  },
  {
    degree: "Intermediate of Computer Science (ICS)",
    institution: "Punjab Group of Colleges",
    location: "Gujrat, Pakistan",
    period: "2017 - 2019",
    description: "Focused on mathematics, science, and computer programming. ",
    achievements: [
      "Best Cricketer in the college",
      "Quiz Winner",
    ],
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
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
            <span className="text-text">Education & </span>
            <span className="text-gradient">Qualifications</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-text-muted text-lg max-w-3xl mx-auto">
            My academic journey and educational achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative flex items-start gap-6"
                >
                  <div className="hidden md:flex relative z-10">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center border-2 border-accent">
                      <GraduationCap className="text-accent w-6 h-6" />
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex-1 glass rounded-xl p-6 lg:p-8"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-text mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-xl text-accent mb-2">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-text-muted text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-text-muted mb-4">{edu.description}</p>

                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
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

