"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Rocket, Target } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building scalable web applications with modern technologies",
  },
  {
    icon: Brain,
    title: "AI Engineering",
    description: "Creating intelligent solutions with machine learning and AI",
  },
  {
    icon: Rocket,
    title: "Performance Focused",
    description: "Optimizing applications for speed and efficiency",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant solutions",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-text">About </span>
            <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-text-muted text-lg max-w-3xl mx-auto">
            I&apos;m a passionate Full-Stack Developer and AI Engineer with a deep love for creating innovative solutions. With expertise spanning from frontend frameworks to machine learning models, I bring a unique perspective to every project. My journey in tech has been driven by curiosity and a commitment to continuous learning, always staying at the forefront of emerging technologies. I specialize in building scalable applications, implementing AI-powered features, and crafting exceptional user experiences that combine functionality with aesthetic appeal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass rounded-xl p-6 hover:glow-orange transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Icon className="text-accent w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-muted text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

