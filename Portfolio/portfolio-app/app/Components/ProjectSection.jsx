"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "Legoria | LEGO Games",
    description: "Project 1 description",
    image: "/images/projects/RejsenTilDetEvigeLiv.png",
    tag: ["All", "Projects"],
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Besat af Livet | Moesgaard Museum",
    description: "Project 2 description",
    image: "/images/projects/RejsenTilDetEvigeLiv.png",
    tag: ["All", "Projects"],
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Exoplaneten | SDU",
    description: "Project 3 description",
    image: "/images/projects/exoplaneten.jpeg",
    tag: ["All", "Projects"],
    previewUrl: "https://www.sdu.dk/da/forskning/forskningsformidling/forskningensdoegn/tidligere/forsk2021/isaer-for-boern/onlinespil",
  },
  {
    id: 4,
    title: "Under Overfladen | Fjord & Bælt",
    description: "Project 4 description",
    image: "/images/projects/UnderOverfladen.jpg",
    tag: ["All", "Projects"],
    previewUrl: "https://tinyurl.com/5fpedth8",
  },
  {
    id: 5,
    title: "Digitalt Museumsdesign 101",
    description: "This e-book serves as a guide for developers who desire to develop digital museum experiences",
    image: "/images/projects/MuseumsDesign.jpg",
    tag: ["All", "Publications"],
    previewUrl: "https://lnkd.in/eSNRnQp6",
  },
  {
    id: 6,
    title: "Mobile Robot Interaction",
    description: "The Impact of Speech and Movement on the Interaction with a Mobile Hand Disinfection Robot",
    image: "/images/projects/HanDiRob.jpg",
    tag: ["All", "Publications"],
    previewUrl: "https://dl.acm.org/doi/abs/10.1145/3568294.3580109",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref}>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Projects"
          isSelected={tag === "Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Publications"
          isSelected={tag === "Publications"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Gallery"
          isSelected={tag === "Gallery"}
        />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    
    </section>
  );
};

export default ProjectsSection;