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
    description: "A game designed to empower children digitally through a fun and educational experience, where they use critical thinking to decide the fate of Legoria.",
    image: "/images/projects/Legoria.png",
    tag: ["All", "Projects"],
    previewUrl: "https://youtu.be/JlKYkf6bF30?si=uVN4ldL24aGqfX62",
  },
  {
    id: 2,
    title: "Besat af Livet | Moesgaard Museum",
    description: "The game encouraged kids to explore the exhibition about the Egyptian mythology, by assigning short tasks to guide them through the exhibition.",
    image: "/images/projects/RejsenTilDetEvigeLiv.png",
    tag: ["All", "Projects"],
    previewUrl: "https://youtu.be/6tctAC3cPnU?si=NAsF8OU0KlQc-wAU",
  },
  {
    id: 3,
    title: "VR Training | PDP",
    description: "Designed a VR training system for a pharmaceutical company to efficiently train new operators to 60% proficiency without material waste. Under NDAs, no preview available.",
    image: "/images/projects/VRPDP.jpg",
    tag: ["All", "Projects"],
    previewUrl: "/#projects",
  },
  {
    id: 4,
    title: "Exoplaneten | SDU",
    description: "A game developed with the aim of giving children an insight into the five faculties at SDU, through an entertaining and educational game.",
    image: "/images/projects/exoplaneten.jpeg",
    tag: ["All", "Projects"],
    previewUrl: "https://www.sdu.dk/da/forskning/forskningsformidling/forskningensdoegn/tidligere/forsk2021/isaer-for-boern/onlinespil",
  },
  {
    id: 5,
    title: "Under Overfladen | Fjord & Bælt",
    description: "Game developed to unite the exhibitions in Fjord & Bælt, and convey information at children's level with interactive games, animations and tasks that the family can solve together.",
    image: "/images/projects/UnderOverfladen.jpg",
    tag: ["All", "Projects"],
    previewUrl: "https://tinyurl.com/5fpedth8",
  },
  {
    id: 6,
    title: "Digitalt Museumsdesign 101 | Moesgaard Museum",
    description: "This e-book serves as a guide for developers who desire to develop digital museum experiences.",
    image: "/images/projects/MuseumsDesign.jpg",
    tag: ["All", "Publications"],
    previewUrl: "https://lnkd.in/eSNRnQp6",
  },
  {
    id: 7,
    title: "Mobile Robot Interaction | HanDiRob",
    description: "The Impact of Speech and Movement on the Interaction with a Mobile Hand Disinfection Robot.",
    image: "/images/projects/HanDiRob.jpg",
    tag: ["All", "Publications"],
    previewUrl: "https://dl.acm.org/doi/abs/10.1145/3568294.3580109",
  },
  {
    id: 8,
    title: "Legoria | LEGO Games",
    description: "Usability Test of POC",
    image: "/images/gallery/Legoria4.JPG",
    tag: ["Gallery"],
    previewUrl: "https://youtu.be/JlKYkf6bF30?si=uVN4ldL24aGqfX62",
  },
  {
    id: 9,
    title: "Legoria | LEGO Games",
    description: "Usability Test of digital prototype",
    image: "/images/gallery/Legoria1.JPG",
    tag: ["Gallery"],
    previewUrl: "https://youtu.be/JlKYkf6bF30?si=uVN4ldL24aGqfX62",
  },
  {
    id: 10,
    title: "Legoria | LEGO Games",
    description: "Usability Test of digital prototype",
    image: "/images/gallery/Legoria3.JPG",
    tag: ["Gallery"],
    previewUrl: "https://youtu.be/JlKYkf6bF30?si=uVN4ldL24aGqfX62",
  },
  {
    id: 11,
    title: "Besat af Livet | Moesgaard Museum",
    description: "Usability Test in exhibition",
    image: "/images/gallery/Momu1.jpg",
    tag: ["Gallery"],
    previewUrl: "https://youtu.be/6tctAC3cPnU?si=NAsF8OU0KlQc-wAU",
  },
  {
    id: 12,
    title: "Besat af Livet | Moesgaard Museum",
    description: "Usability Test of digital prototype",
    image: "/images/gallery/Momu2.jpg",
    tag: ["Gallery"],
    previewUrl: "https://youtu.be/6tctAC3cPnU?si=NAsF8OU0KlQc-wAU",
  },
  {
    id: 13,
    title: "Besat af Livet | Moesgaard Museum",
    description: "Development Team",
    image: "/images/gallery/Momu3.jpg",
    tag: ["Gallery"],
    previewUrl: "https://youtu.be/6tctAC3cPnU?si=NAsF8OU0KlQc-wAU",
  },
  {
    id: 14,
    title: "VR Training | PDP",
    description: "POC",
    image: "/images/gallery/VR2.png",
    tag: ["Gallery"],
    previewUrl: "/#projects",
  },
  {
    id: 15,
    title: "VR Training | PDP",
    description: "Usability Test of digital prototype",
    image: "/images/gallery/VR1.png",
    tag: ["Gallery"],
    previewUrl: "/#projects",
  },
  {
    id: 16,
    title: "VR Training | PDP",
    description: "Simulation Room",
    image: "/images/gallery/VR4.png",
    tag: ["Gallery"],
    previewUrl: "/#projects",
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
        <div className="text-white md:flex md:flex-row grid grid-cols-2 gap-2 py-2 justify-center items-center md:gap-2 md:py-6">
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