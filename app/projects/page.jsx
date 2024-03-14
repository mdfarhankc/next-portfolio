'use client';

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
    {
        image: '/work/4.png',
        category: 'react-js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est magnam deleniti ipsa repellendus ex maxime! Numquam saepe aspernatur, repudiandae, sit unde quo totam sint sapiente facere voluptatum, excepturi perspiciatis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'next-js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est magnam deleniti ipsa repellendus ex maxime! Numquam saepe aspernatur, repudiandae, sit unde quo totam sint sapiente facere voluptatum, excepturi perspiciatis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'next-js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est magnam deleniti ipsa repellendus ex maxime! Numquam saepe aspernatur, repudiandae, sit unde quo totam sint sapiente facere voluptatum, excepturi perspiciatis.',
        link: '/',
        github: '/',
    },
];

const uniqueCategories = [
    'all projects',
    ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects');

    const filteredProjects = projectData.filter(project => {
        return category === 'all projects'
            ? project
            : project.category === category
    })

    return (
        <section className='min-h-screen pt-12'>
            <div className="container mx-auto">
                <h3 className="section-title mb-8 md:mb-16 text-center mx-auto">My Projects</h3>
                <Tabs defaultValue={category} className="mb-24 md:mb-48">
                    <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
                        {categories.map((category, index) => {
                            return <TabsTrigger onClick={() => setCategory(category)} key={index} value={category} className="capitalize w-[162px] md:w-auto">
                                {category}
                            </TabsTrigger>
                        })}
                    </TabsList>
                    <div className="text-lg md:mt-8 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
                        {filteredProjects.map((project, index) => {
                            return (
                                <TabsContent className='relative' value={category} key={index}>
                                    <ProjectCard project={project} />
                                </TabsContent>
                            )
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

export default Projects