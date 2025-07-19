import { Mail, Github, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';

// Contact Section
function Contact() {
    return (
        <section id="contact" className="py-24 bg-primary safe-container">
            {/* Animated background elements */}
            <div className="safe-background">
                <div className="absolute top-20 right-20 w-64 h-64 bg-purple opacity-5 rounded-full blur-3xl float transform-gpu"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl float transform-gpu" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-green opacity-3 rounded-full blur-2xl pulse-accent transform-gpu"></div>
            </div>
            
            {/* Grid pattern overlay */}
            <div className="safe-background opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 safe-content">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto font-code">
                        {`// Ready to build something amazing together?`}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Information */}
                    <div className="liquid-glass p-12 hover-glow mb-12">
                        <h3 className="text-3xl font-bold text-primary mb-8 flex items-center justify-center">
                            <MessageCircle className="mr-3 text-accent" size={28} />
                            Get In Touch
                        </h3>
                        <p className="text-secondary leading-relaxed mb-12 text-center text-lg max-w-3xl mx-auto">
                            I'm always interested in new opportunities, collaborations, and exciting projects. 
                            Whether you have a project in mind or just want to say hi, I'd love to hear from you!
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <a 
                                href="mailto:iankuyisien@gmail.com" 
                                className="group liquid-glass p-6 hover-glow text-center transition-all duration-300 hover:scale-105"
                            >
                                <div className="w-16 h-16 bg-glass rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-glass-hover transition-all">
                                    <Mail size={24} className="text-accent" />
                                </div>
                                <h4 className="font-semibold text-primary mb-2">Email</h4>
                                <p className="text-sm font-code text-secondary group-hover:text-accent transition-colors">
                                    iankuyisien@gmail.com
                                </p>
                            </a>
                            
                            <a 
                                href="https://github.com/iankuys" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group liquid-glass p-6 hover-glow text-center transition-all duration-300 hover:scale-105"
                            >
                                <div className="w-16 h-16 bg-glass rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-glass-hover transition-all relative">
                                    <Github size={24} className="text-accent" />
                                    <ExternalLink size={12} className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                                </div>
                                <h4 className="font-semibold text-primary mb-2">GitHub</h4>
                                <p className="text-sm font-code text-secondary group-hover:text-accent transition-colors">
                                    github.com/iankuys
                                </p>
                            </a>
                            
                            <a 
                                href="https://linkedin.com/in/ian-ku-yi-sien" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group liquid-glass p-6 hover-glow text-center transition-all duration-300 hover:scale-105"
                            >
                                <div className="w-16 h-16 bg-glass rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-glass-hover transition-all relative">
                                    <Linkedin size={24} className="text-accent" />
                                    <ExternalLink size={12} className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                                </div>
                                <h4 className="font-semibold text-primary mb-2">LinkedIn</h4>
                                <p className="text-sm font-code text-secondary group-hover:text-accent transition-colors">
                                    ian-ku-yi-sien
                                </p>
                            </a>
                        </div>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="liquid-glass p-8 hover-glow text-center">
                            <h4 className="text-lg font-semibold text-primary mb-6 font-code">
                                {`// Response Time`}
                            </h4>
                            <div className="text-4xl font-bold text-accent mb-2">24h</div>
                            <div className="text-muted">Average response time</div>
                        </div>
                        
                        <div className="liquid-glass p-8 hover-glow text-center">
                            <h4 className="text-lg font-semibold text-primary mb-6 font-code">
                                {`// Commitment Level`}
                            </h4>
                            <div className="text-4xl font-bold text-purple mb-2">100%</div>
                            <div className="text-muted">Dedication to projects</div>
                        </div>
                    </div>
                </div>
                
                {/* Call to Action */}
                <div className="text-center mt-16">
                    <p className="text-muted mb-8 font-code text-lg">
                        {`// Let's create something extraordinary together`}
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a 
                            href="mailto:iankuyisien@gmail.com"
                            className="btn-primary hover-lift hover-glow"
                        >
                            Send Email
                        </a>
                        <a 
                            href="https://github.com/iankuys" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-secondary hover-lift hover-glass"
                        >
                            View GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;