import { useState, useEffect } from 'react';
import { Code, Mail, User } from 'lucide-react';

// Contact Section
function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        // Show success message
        alert('Thanks for your message! I will get back to you soon.');
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

                <div className="flex flex-col md:flex-row gap-12 align-center justify-center">
                    <div className="md:w-1/2">
                        <p className="text-gray-700 mb-8">
                            Feel free to reach out if you're looking for a developer, have a question,
                            or just want to connect.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:iankuyisien@gmail.com" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                                <Mail size={20} className="mr-3" />
                                <span>iankuyisien@gmail.com</span>
                            </a>
                            <a href="https://github.com/iankuys" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                                <Code size={20} className="mr-3" />
                                <span>github.com/iankuys</span>
                            </a>
                            <a href="https://linkedin.com/ian-ku-yi-sien" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                                <User size={20} className="mr-3" />
                                <span>linkedin.com/in/ian-ku-yi-sien</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;