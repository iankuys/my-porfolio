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
        <section id="about" className="py-24 bg-primary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4 reveal">About Me</h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto font-code">
                        // Passionate about creating digital solutions that make a difference
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    <div className="lg:w-1/2 reveal">
                        <div className="card-modern p-8 h-full">
                            <h3 className="text-muted text-lg max-w-2xl mx-auto font-code mb-6">Who I Am</h3>
                            <div className="space-y-4 text-secondary leading-relaxed">
                                <p>
                                    I'm a passionate software engineer with 5+ years of experience building web applications.
                                    I love solving complex problems and creating intuitive, user-friendly interfaces.
                                </p>
                                <p>
                                    My journey began with a Computer Science degree, but my curiosity and love for learning
                                    have led me to continuously expand my skills across various technologies and frameworks.
                                </p>
                                <p>
                                    When I'm not coding, you can find me hiking, reading tech blogs, or contributing to
                                    open-source projects. I believe in creating software that makes a positive impact.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="skills-section" className="lg:w-1/2 reveal">
                        <div className="card-modern p-8 h-full">
                            <h3 className="text-muted text-lg max-w-2xl mx-auto font-code mb-6">Technical Skills</h3>
                            <div className="space-y-6">
                                {skills.map((skill, index) => (
                                    <div key={skill.name} className={`transition-all duration-500 ${index > 0 ? 'delay-' + (index * 200) : ''}`}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium text-secondary">{skill.name}</span>
                                            <span className="text-muted font-mono text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-border-light rounded-full h-2 overflow-hidden">
                                            <div
                                                className="bg-gradient-to-r from-accent to-accent-light h-2 rounded-full transition-all duration-1000 ease-out"
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
            </div>
        </section>
    );
}

export default About;