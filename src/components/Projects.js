import React, { useState } from 'react';
import { Code, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';

function Projects() {
    const [expandedProject, setExpandedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [cardImageIndexes, setCardImageIndexes] = useState({});

    const projects = [
        {
            title: "Computer Vision Smart Curtains",
            description: "An automated, remote-controlled curtains project with web application and firmware developed for UC Irvine. Features computer vision capabilities for intelligent automation.",
            tech: ["Python", "Flask", "Raspberry Pi", "Computer Vision", "OpenCV", "JavaScript"],
            images: ["cv-curtains-2.gif", "/cv-curtains.gif"],
            githubUrl: "https://github.com/iankuys/cv_automated_curtains",
            liveUrl: null,
            period: "Mar 2022 - Jun 2022"
        },
        {
            title: "Online Poker Game",
            description: "A real-time, turn-based online poker game built in C using GTK for a sleek and responsive frontend. Features multiplayer functionality through sockets for seamless online play.",
            tech: ["C", "GTK+", "Game Programming", "Git", "Sockets"],
            images: ["/poker-game.png", "/poker-game-2.png"],
            githubUrl: "https://github.com/AJSmyth/poker",
            liveUrl: null,
            period: "Mar 2022 - Jun 2022"
        },
        {
            title: "Space Hell Game",
            description: "A classic bullet hell shooter game set in deep space. Players face increasingly difficult waves of enemies and projectiles, testing reflexes and strategic skills through countless obstacles.",
            tech: ["C++", "SFML", "Game Development", "GitHub", "Microsoft Visual Studio Code"],
            images: ["/spacehell.gif", "/spacehell-2.png"],
            githubUrl: "https://github.com/iankuys/Space-Hell",
            liveUrl: null,
            period: "Jan 2021 - Mar 2021"
        }
    ];

    const openGallery = (projectIndex) => {
        setExpandedProject(projectIndex);
        setCurrentImageIndex(cardImageIndexes[projectIndex] || 0);
    };

    const closeGallery = () => {
        setExpandedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (expandedProject !== null) {
            setCurrentImageIndex((prev) =>
                (prev + 1) % projects[expandedProject].images.length
            );
        }
    };

    const prevImage = () => {
        if (expandedProject !== null) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? projects[expandedProject].images.length - 1 : prev - 1
            );
        }
    };

    const nextCardImage = (projectIndex, e) => {
        e.stopPropagation();
        setCardImageIndexes(prev => ({
            ...prev,
            [projectIndex]: ((prev[projectIndex] || 0) + 1) % projects[projectIndex].images.length
        }));
    };

    const prevCardImage = (projectIndex, e) => {
        e.stopPropagation();
        setCardImageIndexes(prev => ({
            ...prev,
            [projectIndex]: (prev[projectIndex] || 0) === 0 ?
                projects[projectIndex].images.length - 1 :
                (prev[projectIndex] || 0) - 1
        }));
    };

    const getCurrentCardImage = (projectIndex) => {
        return cardImageIndexes[projectIndex] || 0;
    };

    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>

                <div className="flex flex-col lg:flex-row justify-center gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow transition-all duration-500 flex flex-col"
                            style={{
                                transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)',
                                boxShadow: hoveredProject === index ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '',
                                width: '400px',
                                height: '650px',
                                margin: '0 auto'
                            }}
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Image Container */}
                            <div
                                className="relative overflow-hidden"
                                onClick={() => openGallery(index)}
                                style={{
                                    position: 'relative',
                                    height: '60%',
                                    width: '100%',
                                    cursor: 'pointer'
                                }}
                            >
                                {/* Image or Placeholder */}
                                {project.images[getCurrentCardImage(index)].includes('/api/placeholder') ? (
                                    <div className="w-full h-full bg-gradient-to-br flex items-center justify-center"
                                        style={{ background: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6)' }}>
                                        <div className="text-white text-2xl font-bold opacity-30">
                                            {project.title.split(' ').map(word => word[0]).join('').substring(0, 3)}
                                        </div>
                                    </div>
                                ) : (
                                    <img
                                        src={project.images[getCurrentCardImage(index)]}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700"
                                        style={{ transform: hoveredProject === index ? 'scale(1.1)' : 'scale(1)' }}
                                    />
                                )}

                                {/* Hover Overlay */}
                                <div
                                    className="absolute transition-opacity duration-300"
                                    style={{
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                                        opacity: hoveredProject === index ? 0.3 : 0,
                                        zIndex: 5
                                    }}
                                />

                                {/* Carousel Navigation Buttons */}
                                {project.images.length > 1 && (
                                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 40 }}>
                                        <button
                                            onClick={(e) => prevCardImage(index, e)}
                                            className="absolute backdrop-blur-md text-white rounded-full p-3 transition-all"
                                            style={{
                                                left: '8px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                zIndex: 50,
                                                backgroundColor: 'rgba(0,0,0,0.3)'
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(75,85,99,0.8)'}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.3)'}
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                        <button
                                            onClick={(e) => nextCardImage(index, e)}
                                            className="absolute backdrop-blur-md text-white rounded-full p-3 transition-all"
                                            style={{
                                                right: '8px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                zIndex: 50,
                                                backgroundColor: 'rgba(0,0,0,0.3)'
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(75,85,99,0.8)'}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.3)'}
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                )}

                                {/* Image Counter */}
                                {project.images.length > 1 && (
                                    <div
                                        className="absolute text-white backdrop-blur-md text-sm px-4 py-2 rounded-full font-bold"
                                        style={{
                                            bottom: '12px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            zIndex: 60,
                                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                                        }}
                                    >
                                        {getCurrentCardImage(index) + 1} / {project.images.length}
                                    </div>
                                )}

                                {/* Gallery hint for single images */}
                                {hoveredProject === index && project.images.length === 1 && (
                                    <div
                                        className="absolute flex items-center justify-center"
                                        style={{
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            zIndex: 10
                                        }}
                                    >
                                        <div className="text-white text-sm font-medium px-3 py-1 rounded"
                                            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                            Click to view gallery
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Project Details */}
                            <div className="p-6" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <div className="mb-2">
                                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                                    <p className="text-gray-600 text-sm font-mono">{project.period}</p>
                                </div>
                                <p className="text-gray-600 mb-4" style={{ flexGrow: 1 }}>{project.description}</p>

                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.tech.map(tech => (
                                        <span
                                            key={tech}
                                            className="text-xs font-medium px-3 py-1 rounded-full border"
                                            style={{
                                                backgroundColor: '#dbeafe',
                                                color: '#1e40af',
                                                borderColor: '#93c5fd'
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6" style={{ marginTop: 'auto' }}>
                                    <a
                                        href={project.githubUrl}
                                        className="flex items-center text-gray-700 transition-colors duration-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#2563eb';
                                            e.target.style.transform = 'translateX(4px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#374151';
                                            e.target.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        <Code size={16} style={{ marginRight: '12px' }} />
                                        <span>View Code</span>
                                    </a>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            className="flex items-center text-gray-700 transition-colors duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: 'none' }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = '#2563eb';
                                                e.target.style.transform = 'translateX(4px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = '#374151';
                                                e.target.style.transform = 'translateX(0)';
                                            }}
                                        >
                                            <ExternalLink size={16} style={{ marginRight: '12px' }} />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gallery Modal */}
                {expandedProject !== null && (
                    <div className="fixed flex items-center justify-center p-4"
                        style={{
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.9)',
                            zIndex: 9999
                        }}>
                        <div className="relative w-full" style={{ maxWidth: '56rem' }}>
                            <button
                                onClick={closeGallery}
                                className="absolute text-white rounded-full p-2 transition-all"
                                style={{
                                    top: '16px',
                                    right: '16px',
                                    zIndex: 10,
                                    backgroundColor: 'rgba(0,0,0,0.5)'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#d1d5db'}
                                onMouseLeave={(e) => e.target.style.color = 'white'}
                            >
                                <X size={24} />
                            </button>

                            <div className="relative">
                                {projects[expandedProject].images[currentImageIndex].includes('/api/placeholder') ? (
                                    <div className="w-full rounded-lg flex items-center justify-center"
                                        style={{
                                            height: '24rem',
                                            background: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6)'
                                        }}>
                                        <div className="text-white font-bold opacity-30" style={{ fontSize: '3.75rem' }}>
                                            {projects[expandedProject].title.split(' ').map(word => word[0]).join('').substring(0, 3)}
                                        </div>
                                    </div>
                                ) : (
                                    <img
                                        src={projects[expandedProject].images[currentImageIndex]}
                                        alt={`${projects[expandedProject].title} screenshot ${currentImageIndex + 1}`}
                                        className="w-full rounded-lg"
                                        style={{
                                            height: 'auto',
                                            maxHeight: '24rem',
                                            objectFit: 'contain'
                                        }}
                                    />
                                )}

                                {projects[expandedProject].images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute text-white rounded-full p-2 transition-all"
                                            style={{
                                                left: '16px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                backgroundColor: 'rgba(0,0,0,0.5)'
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = '#d1d5db'}
                                            onMouseLeave={(e) => e.target.style.color = 'white'}
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute text-white rounded-full p-2 transition-all"
                                            style={{
                                                right: '16px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                backgroundColor: 'rgba(0,0,0,0.5)'
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = '#d1d5db'}
                                            onMouseLeave={(e) => e.target.style.color = 'white'}
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </>
                                )}
                            </div>

                            <div style={{ marginTop: '1.5rem' }} className="text-white">
                                <h3 className="text-2xl font-bold mb-2">{projects[expandedProject].title}</h3>
                                <p className="mb-4" style={{ color: '#d1d5db' }}>{projects[expandedProject].description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {projects[expandedProject].tech.map(tech => (
                                        <span
                                            key={tech}
                                            className="text-xs font-medium text-white px-3 py-1 rounded-full"
                                            style={{ backgroundColor: '#2563eb' }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="text-center text-sm" style={{ color: '#9ca3af' }}>
                                    Photo {currentImageIndex + 1} of {projects[expandedProject].images.length}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <p className="text-gray-600 mb-4">Interested in seeing more of my work?</p>
                    <a
                        href="https://github.com/iankuys"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-white font-medium rounded-lg transition-all duration-300"
                        style={{
                            display: 'inline-flex',
                            padding: '0.75rem 1.5rem',
                            color: '#2563eb',
                            border: '2px solid #2563eb',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#eff6ff'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                    >
                        <Code size={18} style={{ marginRight: '0.5rem' }} />
                        <span style={{ backgroundColor: "transparent" }}>
                            View All Projects on GitHub
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;