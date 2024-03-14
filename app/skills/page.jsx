'use client';

import SkillCard from '@/components/SkillCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from 'react';
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiFlask, SiFastapi, SiExpress, SiMysql, SiMongodb, SiPowerbi } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaSquareGitlab, FaSquareGithub } from "react-icons/fa6";


const skillsData = [
    {
        icon: <FaHtml5 color='orange' size={100} />,
        title: 'HTML',
        category: 'frontend',
    },
    {
        icon: <FaCss3Alt color='orange' size={100} />,
        title: 'CSS',
        category: 'frontend',
    },
    {
        icon: <IoLogoJavascript color='orange' size={100} />,
        title: 'JAVASCRIPT',
        category: 'frontend',
    },
    {
        icon: <FaReact color='orange' size={100} />,
        title: 'REACTJS',
        category: 'frontend',
    },
    {
        icon: <TbBrandNextjs color='orange' size={100} />,
        title: 'NEXTJS',
        category: 'frontend',
    },
    {
        icon: <SiTailwindcss color='orange' size={100} />,
        title: 'TAILWINDCSS',
        category: 'frontend',
    },
    {
        icon: <FaBootstrap color='orange' size={100} />,
        title: 'BOOTSTRAP',
        category: 'frontend',
    },
    {
        icon: <FaPython color='orange' size={100} />,
        title: 'PYTHON',
        category: 'backend',
    },
    {
        icon: <DiDjango color='orange' size={100} />,
        title: 'DJANGO',
        category: 'backend',
    },
    {
        icon: <h4 className='text-[orange] text-[60px] font-semibold font-mono-'>Odoo</h4>,
        title: 'ODOO',
        category: 'backend',
    },
    {
        icon: <SiFlask color='orange' size={100} />,
        title: 'FLASK',
        category: 'backend',
    },
    {
        icon: <SiFastapi color='orange' size={100} />,
        title: 'FASTAPI',
        category: 'backend',
    },
    {
        icon: <FaNodeJs color='orange' size={100} />,
        title: 'NODEJS',
        category: 'backend',
    },
    {
        icon: <SiExpress color='orange' size={100} />,
        title: 'EXPRESSJS',
        category: 'backend',
    },
    {
        icon: <BiLogoPostgresql color='orange' size={100} />,
        title: 'POSTGRESQL',
        category: 'database',
    },
    {
        icon: <SiMysql color='orange' size={100} />,
        title: 'MYSQL',
        category: 'database',
    },
    {
        icon: <SiMongodb color='orange' size={100} />,
        title: 'MONGODB',
        category: 'database',
    },
    {
        icon: <FaGitAlt color='orange' size={100} />,
        title: 'GIT',
        category: 'others',
    },
    {
        icon: <FaSquareGithub color='orange' size={100} />,
        title: 'GITHUB',
        category: 'others',
    },
    {
        icon: <FaSquareGitlab color='orange' size={100} />,
        title: 'GITLAB',
        category: 'others',
    },
    {
        icon: <SiPowerbi color='orange' size={100} />,
        title: 'POWERBI',
        category: 'others',
    },
];

const uniqueCategories = [
    'fullstack',
    ...new Set(skillsData.map((item) => item.category)),
];

const Skills = () => {

    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('fullstack');

    const filteredSkills = skillsData.filter(skill => {
        return category === 'fullstack'
            ? skill
            : skill.category === category
    })

    return (
        <section className='min-h-screen pt-12'>
            <div className='container mx-auto'>
                <h3 className="section-title mb-8 md:mb-16 text-center mx-auto">My Skills</h3>
                <Tabs defaultValue={category} className="mb-24 md:mb-48">
                    <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
                        {categories.map((category, index) => {
                            return <TabsTrigger onClick={() => setCategory(category)} key={index} value={category} className="capitalize w-[162px] md:w-auto">
                                {category}
                            </TabsTrigger>
                        })}
                    </TabsList>
                    <div className="text-lg md:mt-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 place-items-center">
                        {filteredSkills.map((skill, index) => {
                            return (
                                <TabsContent className='relative' value={category} key={index}>
                                    <SkillCard skill={skill} />
                                </TabsContent>
                            )
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

export default Skills