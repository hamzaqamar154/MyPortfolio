"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    name: "Covid-19 Data Analysis and Prediction",
    description: "A web app I built to analyze Covid-19 data and make predictions. It's pretty straightforward - you can either use live data from an API or upload your own CSV file, and it automatically shows you graphs, stats, and predictions.",
    image: "/Covid19.png",
    technologies: ["Python", "FastAPI", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/hamzaqamar154/Covid19-analysis.git",
    live: "https://covid19-analysis-predictions.streamlit.app/",
  },
  {
    name: "Zeno AI - UX/UI Design Assistant",
    description: "UX/UI Design Assistant project. It's a tool I built that helps analyze design screenshots and gives you feedback on layout, colors, spacing, and overall design quality. Pretty useful when you want a second opinion on your designs or need quick insights.",
    image: "/UIASSISTANT.png",
    technologies: ["OpenCV", "scikit-learn", "ReportLab", "python", "Streamlit"],
    github: "https://github.com/hamzaqamar154/Zeno-AI.git",
    live: "https://zeno-ai-ui-assistant.streamlit.app/",
  },
  {
    name: "HandX-Digit Recognition",
    description: " A deep learning project to recognize handwritten digits using CNN. It's a complete end-to-end solution with a CNN model, training pipeline, API, and a simple web interface.",
    image: "/handX.png",
    technologies: ["TensorFlow/Keras", "FastAPI", "Pillow", "NumPy", "MNIST Dataset", "CNN"],
    github: "https://github.com/hamzaqamar154/HandX-Digit-Recognition.git",
    live: "https://handx-digit-recognition-9ncf9tdd6cx56wa4n2inil.streamlit.app/",
  },
  {
    name: "Cara AI - Document Assistant",
    description: "RAG system for querying PDF documents. Extracts text, generates embeddings, stores them in FAISS, and answers questions using Groq's LLM API",
    image: "/cara.png",
    technologies: ["Python", "FastAPI", "SentenceTransformers", "FAISS", "PyPDF2", "Groq API"],
    github: "https://github.com/hamzaqamar154/Cara-AI.git",
    live: "https://cara-ai.streamlit.app/",
  },
  
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
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
            <span className="text-text">Featured </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-text-muted text-lg max-w-3xl mx-auto">
            A collection of projects showcasing my skills and creativity
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            grabCursor={true}
            speed={600}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={projects.length > 1}
            className="projects-swiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="project-card glass rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:glow-orange">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-text mb-2">
                      {project.name}
                    </h3>
                    <p className="text-text-muted text-sm mb-4 flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-accent/20 text-accent rounded border border-accent/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text hover:text-accent transition-colors text-sm"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text hover:text-accent transition-colors text-sm"
                      >
                        <ExternalLink size={18} />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

    </section>
  );
}

