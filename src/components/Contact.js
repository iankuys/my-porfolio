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

                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                        <p className="text-gray-700 mb-8">
                            Feel free to reach out if you're looking for a developer, have a question,
                            or just want to connect.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:johndoe@example.com" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                                <Mail size={20} className="mr-3" />
                                <span>johndoe@example.com</span>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                                <Code size={20} className="mr-3" />
                                <span>github.com/johndoe</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                                <User size={20} className="mr-3" />
                                <span>linkedin.com/in/johndoe</span>
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;