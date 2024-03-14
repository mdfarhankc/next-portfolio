import React from "react";
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


const Projects = () => {

    return (
        <section className='min-h-screen pt-12'>
            <div className="container mx-auto">
                <h3 className="section-title mb-8 md:mb-16 text-center mx-auto">My Projects</h3>
                <div className="text-lg md:mt-8 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
                    {projectData.map((project, index) => {
                        return (
                            <ProjectCard key={index} project={project} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects