// Hero Section
function Hero({ isLoaded }) {
    return (
        <section id="home" className="pt-32 pb-24 gradient-primary overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className={`md:w-1/2 mb-12 md:mb-0 ${isLoaded ? 'animate-slideInLeft' : 'opacity-0'}`}>
                    <div className="mb-6">
                        <span className="text-accent font-mono text-sm font-medium tracking-wide">
                            Hello, I'm
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-primary leading-tight">
                        Ian Ku<span className="text-accent">.</span>
                    </h1>
                    <h2 className={`text-xl md:text-2xl text-secondary mb-8 leading-relaxed ${isLoaded ? 'animate-fadeIn delay-200' : 'opacity-0'}`}>
                        <span className="font-medium">Software Engineer</span> & <br />
                        <span className="font-medium">DevOps Engineer</span>
                    </h2>
                    <p className={`text-lg text-muted mb-10 leading-relaxed ${isLoaded ? 'animate-fadeIn delay-400' : 'opacity-0'}`}>
                        I craft exceptional digital experiences with clean, efficient code.
                        Passionate about building scalable solutions and beautiful user interfaces.
                    </p>
                    <div className={`flex flex-col sm:flex-row gap-4 ${isLoaded ? 'animate-fadeIn delay-600' : 'opacity-0'}`}>
                        <a
                            href="#contact"
                            className="btn-primary hover-lift text-center"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="#projects"
                            className="btn-secondary hover-lift text-center"
                        >
                            View My Work
                        </a>
                    </div>
                </div>
                <div className={`md:w-1/2 flex justify-center ${isLoaded ? 'animate-slideInRight' : 'opacity-0'}`}>
                    <div className="relative">
                        <div className="w-72 h-72 rounded-2xl bg-accent-soft flex items-center justify-center overflow-hidden hover-lift">
                            <div className="w-64 h-64 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                                <img src="/Ian_KU_hs.jpg" alt="Ian Ku" className="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full opacity-30"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;