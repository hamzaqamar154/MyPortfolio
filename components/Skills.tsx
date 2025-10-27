"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "REST APIs", level: 93 },
    ],
  },
  {
    category: "AI/ML",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "Keras", level: 85 },
      { name: "PyTorch", level: 78 },
      { name: "CNN", level: 82 },
      { name: "OpenAI API", level: 85 },
      { name: "LangChain", level: 82 },
      { name: "NLP", level: 80 },
    ],
  },
  {
    category: "Data Science",
    skills: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 88 },
      { name: "scikit-learn", level: 85 },
      { name: "Matplotlib", level: 85 },
      { name: "Data Analysis", level: 88 },
      { name: "Data Visualization", level: 85 },
    ],
  },
 
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
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
            <span className="text-text">My </span>
            <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-text-muted text-lg max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }
              }
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              className="glass rounded-xl p-6 lg:p-8"
            >
              <h3 className="text-2xl font-bold text-text mb-6 flex items-center">
                <span className="w-1 h-8 bg-accent mr-3" />
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      duration: 0.5,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-text font-medium">{skill.name}</span>
                      <span className="text-accent font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-primary-panel rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-accent to-accent-hover rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

