// Hero Section
function Hero({ isLoaded }) {
    return (
        <section id="home" className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className={`md:w-1/2 mb-10 md:mb-0 ${isLoaded ? 'animate-slideInLeft' : 'opacity-0'}`}>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Hi, I'm <span className="text-blue-600">Ian Ku</span>
                    </h1>
                    <h2 className={`text-xl md:text-2xl text-gray-700 mb-6 ${isLoaded ? 'animate-fadeIn delay-200' : 'opacity-0'}`}>
                        Software Engineer <br />
                        <span className='text-lg text-alt-blue font-bold'>&</span> <br />
                        Full-Stack Developer <br />
                        <span className='text-lg text-alt-blue font-bold'>&</span> <br />
                        DevOps Engineer <br />
                    </h2>
                    <p className={`text-lg text-gray-600 mb-8 ${isLoaded ? 'animate-fadeIn delay-400' : 'opacity-0'}`}>
                        I build exceptional digital experiences with clean, efficient code.
                        Specializing in frontend development and UI/UX design.
                    </p>
                    <div className={`flex space-x-4 ${isLoaded ? 'animate-fadeIn delay-600' : 'opacity-0'}`}>
                        <a
                            href="#contact"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition hover:scale-105"
                        >
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-6 rounded-md border border-blue-600 transition hover:scale-105"
                        >
                            See My Work
                        </a>
                    </div>
                </div>
                <div className={`md:w-1/2 flex justify-center ${isLoaded ? 'animate-slideInRight' : 'opacity-0'}`}>
                    <div className="w-64 h-64 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden animate-pulse">
                        <img
                            src="/api/placeholder/400/400"
                            alt="John Doe"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;