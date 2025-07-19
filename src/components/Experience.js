import { useState, useEffect, useRef } from 'react';

function Experience() {
    const [visibleItems, setVisibleItems] = useState([]);
    const experienceRefs = useRef([]);

    const experiences = [
        {
            title: "Software Engineer",
            company: "Ulendo Technologies",
            location: "Ann Arbor, Michigan",
            period: "April 2024 - June 2025",
            description: "Independently developed a comprehensive IoT device management dashboard using React.js, JavaScript, and AWS Amplify. Built a standalone desktop app and algorithm to optimize laser-based 3D printing paths using Python (OpenCV, NumPy, SciPy, Eel), JavaScript, HTML/CSS, and Electron.js.",
            icon: <img src="/icons/ulendo.png" alt="Ulendo Technologies" className="w-full h-full object-contain" />,
            skills: ["React.js", "JavaScript", "Python", "AWS Amplify", "Electron.js", "OpenCV"]
        },
        {
            title: "Software Programmer",
            company: "UCI MIND",
            location: "Irvine, California",
            period: "November 2022 - March 2024",
            description: "Developed a Dockerized patient statistics web application with Vue.js, JavaScript, Git, and Python Flask backend. Built and used tissue repository web application using R and Shiny and Git with our PostgreSQL database. Developed full-stack C2C video survey application in Bootstrap 5, JavaScript, and Python using FastAPI and Flask.",
            icon: <img src="/icons/ucimind.jpg" alt="UCI MIND" className="w-full h-full object-contain" />,
            skills: ["Vue.js", "Python Flask", "PostgreSQL", "Docker", "R", "Shiny", "FastAPI"]
        },
        {
            title: "Software Developer - Meshing Intern",
            company: "Ansys, Inc",
            location: "Remote, USA",
            period: "June 2023 - September 2023",
            description: "Independently implemented a 3D mesh solution for a PCB model provided by Apple using Python and Ansys Mechanical API. Developed GUI features in Ansys Mechanical utilizing C++, while adeptly managing version control via Git and Azure Ops. Optimized existing features and scripts for enhanced functionalities using C# and XML within the Ansys Mechanical framework.",
            icon: <img src="/icons/ansys.png" alt="Ansys Inc" className="w-full h-full object-contain" />,
            skills: ["Python", "C++", "C#", "Ansys Mechanical", "Git", "Azure DevOps"]
        },
        {
            title: "Full Stack Developer Researcher",
            company: "Kheradvar Research Group (KLAB)",
            location: "Irvine, California",
            period: "July 2022 - March 2023",
            description: "Developed focused features for our Cardiac MRI Segmentation and Analysis app (nysegapp.com) in TypeScript using Vue.js. Engineered 2D and 3D MRI image segmentation and visualization features using OpenCV, PyVista, AWS S3, and Python. Leveraged and built APIs to provide end-to-end functionalities using FastAPI.",
            icon: <img src="/icons/klab.png" alt="KLAB Research" className="w-full h-full object-contain" />,
            skills: ["TypeScript", "Vue.js", "OpenCV", "PyVista", "AWS S3", "FastAPI"]
        },
        {
            title: "Software Engineering Intern",
            company: "N2N Connect Berhad",
            location: "Kuala Lumpur, Malaysia",
            period: "August 2020 - October 2020",
            description: "Participated in developing portfolio management web applications using C#, ASP.NET Core, and Entity Framework. Built a new production microservice data database using PostgreSQL and bash with scripting using Docker. Wrote and iterated bash scripts to automate FTP data retrieval/upload process to populate the new database.",
            icon: <img src="/icons/n2n.png" alt="N2N Connect" className="w-full h-full object-contain" />,
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
        <section id="experience" className="py-24 bg-secondary safe-container">
            {/* Contained animated background elements */}
            <div className="safe-background">
                <div className="absolute top-20 left-20 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl float transform-gpu"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple opacity-5 rounded-full blur-3xl float transform-gpu" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-green opacity-3 rounded-full blur-2xl pulse-accent transform-gpu"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="safe-background opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 safe-content">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-muted text-md max-w-2xl mx-auto font-code">
                        {`// A journey through my professional growth and achievements`}
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Enhanced Timeline vertical line with gradient */}
                    <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-accent via-purple to-green opacity-30 hidden md:block rounded-full"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                ref={el => experienceRefs.current[index] = el}
                                className={`transition-all duration-700 transform ${visibleItems.includes(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="md:w-16 flex justify-center md:justify-start relative z-10">
                                        <div className={`w-16 h-16 liquid-glass hover-glow flex items-center justify-center p-3 transition-all duration-500 ${visibleItems.includes(index) ? 'scale-100' : 'scale-0'
                                            }`}>
                                            {exp.icon}
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className={`liquid-glass p-8 hover-glow transition-all duration-700 ${visibleItems.includes(index)
                                            ? 'opacity-100 translate-x-0'
                                            : 'opacity-0 -translate-x-6'
                                            }`}>
                                            <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                                                <div className="flex flex-col lg:items-start flex-1">
                                                    <h3 className="text-2xl font-bold text-primary mb-2 hover:text-accent transition-colors">
                                                        {exp.title}
                                                    </h3>
                                                    <h4 className="text-accent font-semibold mb-2 text-lg">
                                                        {exp.company}
                                                    </h4>
                                                </div>
                                                <div className='flex flex-row lg:flex-col justify-center items-center lg:items-end gap-3'>
                                                    {exp.location && (
                                                        <p className="text-muted text-sm font-code flex items-center">
                                                            <span className="text-purple mr-2">📍</span>
                                                            {exp.location}
                                                        </p>
                                                    )}
                                                    <span className="bg-glass text-accent text-sm font-code px-4 py-2 rounded-full whitespace-nowrap border border-accent/20 hover:border-accent/40 transition-all">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-secondary leading-relaxed mb-6 text-base">
                                                {exp.description}
                                            </p>

                                            {exp.skills && (
                                                <div className="flex flex-wrap gap-3">
                                                    {exp.skills.map((skill, skillIndex) => (
                                                        <span
                                                            key={skillIndex}
                                                            className="text-xs font-medium px-3 py-2 rounded-full bg-accent-soft text-accent border border-accent/20 hover:border-accent/40 hover:scale-105 transition-all cursor-default"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary stats section */}
                    <div className="mt-16 grid md:grid-cols-3 gap-6">
                        <div className="liquid-glass p-6 text-center hover-glow">
                            <div className="text-3xl font-bold text-accent mb-2">3+</div>
                            <div className="text-muted font-code text-sm">Years Experience</div>
                        </div>
                        <div className="liquid-glass p-6 text-center hover-glow">
                            <div className="text-3xl font-bold text-purple mb-2">15+</div>
                            <div className="text-muted font-code text-sm">Technologies Mastered</div>
                        </div>
                        <div className="liquid-glass p-6 text-center hover-glow">
                            <div className="text-3xl font-bold text-green mb-2">10+</div>
                            <div className="text-muted font-code text-sm">Projects Delivered</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;