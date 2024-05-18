"use client";
import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Unity</li>
          <li>C#</li>
          <li>Scrum</li>
          <li>Design Thinking</li>
          <li>Usability Testing</li>
          <li>Front End</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Game Development & Learning Experience</li>
          <li>M.Sc.Eng @ University of Southern Denmark</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul className="list-disc pl-2">
          <li>Game Development</li>
          <li>User Experience Design</li>
          <li>Agile Development</li>
          <li>Product Managment</li>
          <li>User Testing</li>
          <li>Play & Educational Theory and Practice</li>
        </ul>
      ),
    },
  ];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    });
}

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/images/about-image.png' alt='about' width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Dynamic and forward-thinking professional with a Master’s degree in Game Development and Learning
                        Technology Engineering, showcasing a proven track record of creating innovative play and learning experiences. 
                        Possessing a multidisciplinary skill set that merges technology, play, and education, I excel in tackling
                        complex challenges at the intersection of these domains. With a strong foundation in game development,
                        coupled with practical experiences spanning from developing VR training systems to collaborating on digital
                        games for educational purposes, I am passionate about leveraging interactive play as a tool for education
                        and empowerment. Eager to contribute to teams dedicated to creating immersive and impactful play experiences for diverse audiences
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton 
                            selectTab = {()=> handleTabChange('skills')} 
                            active={tab === 'skills'}
                        >
                            {""}
                            Skills {""}
                        </TabButton>
                        <TabButton 
                            selectTab = {()=> handleTabChange('experience')} 
                            active={tab === 'experience'}
                        >
                            {""}
                            Experience {""}
                        </TabButton>
                        <TabButton 
                            selectTab = {()=> handleTabChange('education')} 
                            active={tab === 'education'}
                        >
                            {""}
                            Education {""}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default AboutSection
