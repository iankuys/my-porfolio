import { Code, Mail, User } from 'lucide-react';

// Footer Component
function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-lg font-semibold">John Doe</p>
                        <p className="text-gray-400">Software Engineer</p>
                    </div>

                    <div className="flex space-x-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                            <Code size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                            <User size={20} />
                        </a>
                        <a href="mailto:johndoe@example.com" className="hover:text-blue-400 transition">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p>&copy; {currentYear} John Doe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;