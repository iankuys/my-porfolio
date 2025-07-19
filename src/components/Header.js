// Header Component
function Header({ activeSection, isMenuOpen, setIsMenuOpen }) {
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-blue-600">
                    <a href="#home">John Doe</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
                    <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
                    <div className="w-6 h-0.5 bg-gray-600"></div>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex">
                    <ul className="flex space-x-8">
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`hover:text-blue-600 transition ${activeSection === link.href.slice(1) ? 'text-blue-600 font-semibold' : ''}`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white py-4 px-4 shadow-lg">
                    <ul className="flex flex-col space-y-4">
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`block py-2 hover:text-blue-600 transition ${activeSection === link.href.slice(1) ? 'text-blue-600 font-semibold' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;