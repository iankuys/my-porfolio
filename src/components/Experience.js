import { useState, useEffect, useRef } from 'react';
import { Code, Briefcase, Users } from 'lucide-react';

function Experience() {
    const [visibleItems, setVisibleItems] = useState([]);
    const experienceRefs = useRef([]);
    
    const experiences = [
        {
            title: "Senior Frontend Developer",
            company: "Tech Innovations Inc.",
            period: "2022 - Present",
            description: "Led the development of the company's flagship product, improving performance by 40%. Mentored junior developers and implemented modern frontend architecture.",
            icon: <Code className="text-blue-600" size={24} />
        },
        {
            title: "Full-Stack Developer",
            company: "Digital Solutions Group",
            period: "2019 - 2022",
            description: "Developed and maintained multiple client websites and applications. Implemented CI/CD pipelines and improved code quality through automated testing.",
            icon: <Briefcase className="text-blue-600" size={24} />
        },
        {
            title: "Junior Web Developer",
            company: "StartUp Ventures",
            period: "2017 - 2019",
            description: "Created responsive web applications using React and Node.js. Collaborated with designers to implement pixel-perfect UIs.",
            icon: <Users className="text-blue-600" size={24} />
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
        <section id="experience" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
                
                <div className="relative">
                    {/* Timeline vertical line */}
                    <div className="absolute left-6 top-6 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
                    
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div 
                                key={index} 
                                ref={el => experienceRefs.current[index] = el}
                                className={`flex flex-col md:flex-row gap-4 transition-all duration-700 transform ${
                                    visibleItems.includes(index) 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-10'
                                }`}
                            >
                                <div className="md:w-1/12 flex justify-center relative z-10">
                                    <div className={`w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center transition-all duration-500 ${
                                        visibleItems.includes(index) ? 'scale-100' : 'scale-0'
                                    }`}>
                                        {exp.icon}
                                    </div>
                                </div>
                                
                                <div className="md:w-11/12">
                                    <div className={`bg-gray-50 p-6 rounded-lg shadow transition-all duration-700 ${
                                        visibleItems.includes(index) 
                                            ? 'opacity-100 translate-x-0' 
                                            : 'opacity-0 -translate-x-10'
                                    }`}>
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold">{exp.title}</h3>
                                            <span className="text-gray-500 text-sm mt-1 md:mt-0">{exp.period}</span>
                                        </div>
                                        <h4 className="text-blue-600 font-medium mb-3">{exp.company}</h4>
                                        <p className="text-gray-700">{exp.description}</p>
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