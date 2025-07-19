import { useState, useEffect } from 'react';

// About Section
function About() {
    const skills = [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'SQL', level: 75 }
    ];

    const [animated, setAnimated] = useState({});

    // Animation for skill bars
    useEffect(() => {
        const handleSkillAnimation = () => {
            const skillSection = document.getElementById('skills-section');
            if (!skillSection) return;

            const position = skillSection.getBoundingClientRect();

            // If skills section is in view
            if (position.top < window.innerHeight && position.bottom >= 0) {
                // Animate each skill bar sequentially
                skills.forEach((skill, index) => {
                    setTimeout(() => {
                        setAnimated(prev => ({
                            ...prev,
                            [skill.name]: true
                        }));
                    }, index * 200); // Stagger effect
                });
            }
        };

        window.addEventListener('scroll', handleSkillAnimation);
        // Initial check
        handleSkillAnimation();

        return () => {
            window.removeEventListener('scroll', handleSkillAnimation);
        };
    }, []);

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center reveal">About Me</h2>

                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2 reveal">
                        <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
                        <p className="text-gray-700 mb-4">
                            I'm a passionate software engineer with 5+ years of experience building web applications.
                            I love solving complex problems and creating intuitive, user-friendly interfaces.
                        </p>
                        <p className="text-gray-700 mb-4">
                            My journey began with a Computer Science degree, but my curiosity and love for learning
                            have led me to continuously expand my skills across various technologies and frameworks.
                        </p>
                        <p className="text-gray-700">
                            When I'm not coding, you can find me hiking, reading tech blogs, or contributing to
                            open-source projects. I believe in creating software that makes a positive impact.
                        </p>
                    </div>

                    <div id="skills-section" className="md:w-1/2 reveal">
                        <h3 className="text-xl font-semibold mb-6">My Skills</h3>
                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <div key={skill.name} className={`transition-all duration-500 ${index > 0 ? 'delay-' + (index * 200) : ''}`}>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-gray-500">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                            style={{
                                                width: animated[skill.name] ? `${skill.level}%` : '0%',
                                                transitionDelay: `${index * 100}ms`
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;