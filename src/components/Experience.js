import { useState, useEffect, useRef } from 'react';
import { Code, Briefcase, Database, Cloud, Cpu } from 'lucide-react';

function Experience() {
    const [visibleItems, setVisibleItems] = useState([]);
    const experienceRefs = useRef([]);

    const experiences = [
        {
            title: "Software Engineer",
            company: "Uendo Technologies",
            location: "Ann Arbor, Michigan",
            period: "April 2024 - June 2025",
            description: "Independently developed a comprehensive IoT device management dashboard using React.js, JavaScript, and AWS Amplify. Built a standalone desktop app and algorithm to optimize laser-based 3D printing paths using Python (OpenCV, NumPy, SciPy, Eel), JavaScript, HTML/CSS, and Electron.js.",
            icon: <Code className="text-accent" size={20} />,
            skills: ["React.js", "JavaScript", "Python", "AWS Amplify", "Electron.js", "OpenCV"]
        },
        {
            title: "Software Programmer",
            company: "UCI MIND (UC Irvine Institute for Memory Impairments and Neurological Disorders)",
            location: "Irvine, California",
            period: "November 2022 - March 2024",
            description: "Developed a Dockerized patient statistics web application with Vue.js, JavaScript, Git, and Python Flask backend. Built and used tissue repository web application using R and Shiny and Git with our PostgreSQL database. Developed full-stack C2C video survey application in Bootstrap 5, JavaScript, and Python using FastAPI and Flask.",
            icon: <Database className="text-accent" size={20} />,
            skills: ["Vue.js", "Python Flask", "PostgreSQL", "Docker", "R", "Shiny", "FastAPI"]
        },
        {
            title: "Software Developer - Meshing Intern",
            company: "Ansys, Inc",
            location: "Remote, USA",
            period: "June 2023 - September 2023",
            description: "Independently implemented a 3D mesh solution for a PCB model provided by Apple using Python and Ansys Mechanical API. Developed GUI features in Ansys Mechanical utilizing C++, while adeptly managing version control via Git and Azure Ops. Optimized existing features and scripts for enhanced functionalities using C# and XML within the Ansys Mechanical framework.",
            icon: <Cpu className="text-accent" size={20} />,
            skills: ["Python", "C++", "C#", "Ansys Mechanical", "Git", "Azure DevOps"]
        },
        {
            title: "Full Stack Developer Researcher",
            company: "Kheradvar Research Group (KLAB)",
            location: "Irvine, California",
            period: "July 2022 - March 2023",
            description: "Developed focused features for our Cardiac MRI Segmentation and Analysis app (nysegapp.com) in TypeScript using Vue.js. Engineered 2D and 3D MRI image segmentation and visualization features using OpenCV, PyVista, AWS S3, and Python. Leveraged and built APIs to provide end-to-end functionalities using FastAPI.",
            icon: <Cloud className="text-accent" size={20} />,
            skills: ["TypeScript", "Vue.js", "OpenCV", "PyVista", "AWS S3", "FastAPI"]
        },
        {
            title: "Software Engineering Intern",
            company: "N2N Connect Berhad",
            location: "Kuala Lumpur, Malaysia",
            period: "August 2020 - October 2020",
            description: "Participated in developing portfolio management web applications using C#, ASP.NET Core, and Entity Framework. Built a new production microservice data database using PostgreSQL and bash with scripting using Docker. Wrote and iterated bash scripts to automate FTP data retrieval/upload process to populate the new database.",
            icon: <Briefcase className="text-accent" size={20} />,
            skills: ["C#", "ASP.NET Core", "PostgreSQL", "Docker", "Bash"]
        }
    ];

    useEffect(() => {
        experienceRefs.current = experienceRefs.current.slice(0, experiences.length);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = experienceRefs.current.findIndex(ref => ref === entry.target);
                        if (index !== -1 && !visibleItems.includes(index)) {
                            setVisibleItems(prev => [...prev, index]);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        experienceRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            experienceRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [experienceRefs, experiences.length, visibleItems]);

    return (
        <section id="experience" className="py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">Work Experience</h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        A journey through my professional growth and achievements in software development
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline vertical line */}
                    <div className="absolute left-8 top-8 bottom-8 w-px bg-border hidden md:block"></div>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                ref={el => experienceRefs.current[index] = el}
                                className={`flex flex-col md:flex-row gap-6 transition-all duration-700 transform ${visibleItems.includes(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                    }`}
                            >
                                <div className="md:w-16 flex justify-center md:justify-start relative z-10">
                                    <div className={`w-16 h-16 bg-primary rounded-xl flex items-center justify-center transition-all duration-500 ${visibleItems.includes(index) ? 'scale-100' : 'scale-0'
                                        }`}>
                                        {exp.icon}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className={`card-modern p-8 hover-lift transition-all duration-700 ${visibleItems.includes(index)
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-6'
                                        }`}>
                                        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-primary mb-2">{exp.title}</h3>
                                                <h4 className="text-accent font-medium mb-2">{exp.company}</h4>
                                                {exp.location && (
                                                    <p className="text-muted text-sm mb-2">{exp.location}</p>
                                                )}
                                            </div>
                                            <span className="text-muted text-sm font-mono bg-accent-soft px-4 py-2 rounded-full mt-2 lg:mt-0 self-start whitespace-nowrap">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <p className="text-secondary leading-relaxed mb-6">{exp.description}</p>

                                        {exp.skills && (
                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="text-xs font-medium px-3 py-1 rounded-full border"
                                                        style={{
                                                            backgroundColor: '#dbeafe',
                                                            color: '#1e40af',
                                                            borderColor: '#93c5fd'
                                                        }}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;