"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const socialLinks = [
  { icon: Github, href: "https://github.com/hamzaqamar154", label: "GitHub" },
 
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Disable opacity fade on mobile to prevent disappearing on swipe
  // On desktop, fade only at the very end of scroll
  const opacity = isMobile 
    ? useTransform(scrollYProgress, [0, 1], [1, 1])
    : useTransform(scrollYProgress, [0, 0.95, 1], [1, 1, 0.3]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "Hamza_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8 text-left"
          >
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-accent text-lg font-semibold mb-2"
              >
                Hello, I&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-bold mb-4"
              >
                <span className="text-text">Mirza Noor </span>
                <span className="text-gradient">Hamza</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl text-text-muted mb-6"
              >
                Full-Stack Developer & AI Engineer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base sm:text-lg text-text-dark max-w-xl leading-relaxed"
              >
                Passionate about building innovative web applications and AI solutions that make a difference. I transform complex ideas into elegant, user-friendly experiences.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-text hover:text-accent hover:glow-orange transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="px-4 py-2 rounded-lg glass text-text hover:text-accent hover:glow-orange transition-all duration-300 flex items-center gap-2 text-sm font-medium"
                aria-label="Download CV"
              >
                <Download size={18} />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <AnchorLink href="#contact" offset="80" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3 bg-accent text-white rounded-lg font-semibold glow-orange hover:glow-orange-strong transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </AnchorLink>
              <AnchorLink href="#projects" offset="80" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3 glass text-text rounded-lg font-semibold hover:border-accent transition-all duration-300"
                >
                  View My Work
                </motion.button>
              </AnchorLink>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center lg:justify-end items-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-4 border-accent/30 glow-orange">
                <img
                  src="/profile.jpg"
                  alt="MY PROFILE PIC"
                  className="w-full h-full object-cover object-center profile-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/20 to-transparent rounded-full" />
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <AnchorLink href="#about" offset="80">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cursor-pointer"
            >
              <ArrowDown className="text-accent w-6 h-6" />
            </motion.div>
          </AnchorLink>
        </motion.div>
      </motion.div>
    </section>
  );
}

