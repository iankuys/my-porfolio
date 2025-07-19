import { useState } from 'react';
import { Code, ExternalLink } from 'lucide-react';

// Projects Section
function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB", "Stripe API"],
            image: "/api/placeholder/600/400",
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            title: "Task Management App",
            description: "A collaborative project management tool with real-time updates and analytics.",
            tech: ["React", "Firebase", "Redux", "Material UI"],
            image: "/api/placeholder/600/400",
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            title: "AI Content Generator",
            description: "An application that generates content using machine learning algorithms.",
            tech: ["Python", "TensorFlow", "Flask", "React"],
            image: "/api/placeholder/600/400",
            githubUrl: "#",
            liveUrl: "#"
        }
    ];

    // Hover animation state
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center reveal">My Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 reveal ${index % 3 === 0 ? 'delay-200' : index % 3 === 1 ? 'delay-400' : 'delay-600'}`}
                            style={{
                                transform: hoveredProject === index ? 'translateY(-10px)' : 'translateY(0)',
                                boxShadow: hoveredProject === index ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : ''
                            }}
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-700"
                                    style={{ transform: hoveredProject === index ? 'scale(1.1)' : 'scale(1)' }}
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300"
                                    style={{ opacity: hoveredProject === index ? 1 : 0 }}
                                ></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.tech.map(tech => (
                                        <span
                                            key={tech}
                                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded transition-all duration-300 hover:bg-blue-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-3">
                                    <a
                                        href={project.githubUrl}
                                        className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Code size={16} className="mr-1" />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink size={16} className="mr-1" />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;