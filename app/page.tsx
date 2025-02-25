"use client"
import React, {FormEvent, useState} from 'react';
import { ArrowRight, Layout, Mail, Layers, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Thank you for subscribing with: ${email}`);
        setEmail('');
    };

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const slideIn = {
        hidden: { x: -60, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const popUp = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        }
    };

    return (
        <div className="min-h-screen bg-white text-black font-sans overflow-hidden">

            {/* Hero Section */}
            <section className="relative py-20 px-6 md:px-12 bg-black text-white overflow-hidden">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold mb-6"
                            variants={fadeIn}
                        >
                            Stunning <span className="text-[#FF3B30]">Web Design</span> That Converts
                        </motion.h1>
                        <motion.p
                            className="text-lg mb-8 text-gray-300"
                            variants={fadeIn}
                        >
                            We create beautiful, functional websites that elevate your brand and drive results. From simple landing pages to complex e-commerce stores.
                        </motion.p>
                        <motion.form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-4"
                            variants={fadeIn}
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-black"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <motion.button
                                type="submit"
                                className="bg-[#FF3B30] hover:bg-red-600 px-6 py-3 rounded-md transition-colors whitespace-nowrap"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Free Consultation
                            </motion.button>
                        </motion.form>
                    </motion.div>
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <motion.div
                            className="bg-gray-800 rounded-lg w-full aspect-video flex items-center justify-center overflow-hidden"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img src="/api/placeholder/600/400" alt="Website Design Preview" className="rounded-lg" />
                        </motion.div>
                        <motion.div
                            className="absolute -bottom-6 -right-6 bg-[#FF3B30] p-4 rounded-md text-white"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0 10px 25px rgba(255, 59, 48, 0.5)"
                            }}
                        >
                            <span className="block text-2xl font-bold">100+</span>
                            <span className="text-sm">Happy Clients</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeIn}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-4"
                            variants={fadeIn}
                        >
                            Our Web Design Services
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 max-w-2xl mx-auto"
                            variants={fadeIn}
                        >
                            Comprehensive web design solutions tailored to your business needs and goals.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        {[
                            {
                                icon: <Layout className="w-12 h-12 text-[#FF3B30]" />,
                                title: 'Responsive Web Design',
                                description: 'Beautiful websites that work flawlessly on all devices, from desktop to mobile.'
                            },
                            {
                                icon: <Code className="w-12 h-12 text-[#FF3B30]" />,
                                title: 'Custom Development',
                                description: 'Tailor-made solutions with clean code and cutting-edge technologies.'
                            },
                            {
                                icon: <Layers className="w-12 h-12 text-[#FF3B30]" />,
                                title: 'E-commerce Design',
                                description: 'Convert visitors into customers with intuitive and engaging shopping experiences.'
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:border-[#FF3B30] transition-all hover:shadow-xl"
                                variants={popUp}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
                                    borderColor: "#FF3B30"
                                }}
                            >
                                <motion.div
                                    className="mb-4"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {service.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                                <motion.a
                                    href="#contact"
                                    className="inline-flex items-center mt-4 text-[#FF3B30] font-medium"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                                </motion.a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-20 px-6 md:px-12 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeIn}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-4"
                            variants={fadeIn}
                        >
                            Our Latest Projects
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 max-w-2xl mx-auto"
                            variants={fadeIn}
                        >
                            See how we&#39;ve helped businesses transform their digital presence with stunning designs.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        {[1, 2, 3, 4].map((item) => (
                            <motion.div
                                key={item}
                                className="group relative overflow-hidden rounded-lg aspect-video bg-gray-800"
                                variants={popUp}
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)"
                                }}
                            >
                                <img src={`/api/placeholder/600/${400 + item * 10}`} alt={`Project ${item}`} className="w-full h-full object-cover" />
                                <motion.div
                                    className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-6"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.h3
                                        className="text-white text-xl font-bold"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileHover={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        Project Title {item}
                                    </motion.h3>
                                    <motion.p
                                        className="text-gray-300 mb-4"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileHover={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        E-commerce / Branding
                                    </motion.p>
                                    <motion.a
                                        href="#"
                                        className="inline-flex items-center text-[#FF3B30] font-medium"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileHover={{ y: 0, opacity: 1, x: 5 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        View Project <ArrowRight className="ml-2 w-4 h-4" />
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <motion.a
                            href="#"
                            className="inline-flex items-center text-[#FF3B30] font-medium"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="py-20 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeIn}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-4"
                            variants={fadeIn}
                        >
                            Our Design Process
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 max-w-2xl mx-auto"
                            variants={fadeIn}
                        >
                            We follow a proven methodology to ensure your web design project is completed successfully.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="space-y-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        {[
                            {
                                number: '01',
                                title: 'Discovery & Research',
                                description: 'We start by understanding your business, goals, and target audience to create a strategic foundation.'
                            },
                            {
                                number: '02',
                                title: 'Planning & Wireframing',
                                description: 'Creating the blueprint for your website with information architecture and wireframes.'
                            },
                            {
                                number: '03',
                                title: 'Design & Development',
                                description: 'Crafting beautiful visuals and translating them into functional, responsive websites.'
                            },
                            {
                                number: '04',
                                title: 'Testing & Launch',
                                description: 'Rigorous quality assurance ensures everything works perfectly before going live.'
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col md:flex-row gap-8 items-start"
                                variants={slideIn}
                                whileHover={{ x: 10 }}
                            >
                                <motion.div
                                    className="flex-shrink-0"
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-16 h-16 rounded-full bg-[#FF3B30] text-white flex items-center justify-center text-2xl font-bold">
                                        {step.number}
                                    </div>
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 md:px-12 bg-black text-white overflow-hidden">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Ready to Transform Your Website?
                    </motion.h2>
                    <motion.p
                        className="text-lg mb-8 text-gray-300"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Let&#39;s create a website that not only looks great but drives real business results.
                    </motion.p>
                    <motion.button
                        className="bg-[#FF3B30] hover:bg-red-600 text-white px-8 py-4 rounded-md transition-colors text-lg font-medium"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 25px rgba(255, 59, 48, 0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Schedule a Free Consultation
                    </motion.button>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12 px-6 md:px-12">
                <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <motion.div
                            className="text-xl font-bold mb-4"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            DESIGN<span className="text-[#FF3B30]">STUDIO</span>
                        </motion.div>
                        <p className="text-gray-400 mb-4">Creating stunning websites that drive business growth.</p>
                        <div className="flex space-x-4">
                            {['facebook', 'twitter', 'instagram', 'dribbble'].map((social, index) => (
                                <motion.a
                                    key={social}
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                                        <span className="sr-only">{social}</span>
                                        <div className="w-4 h-4" />
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {[
                        {
                            title: 'Services',
                            links: ['Web Design', 'Web Development', 'E-commerce', 'UI/UX Design']
                        },
                        {
                            title: 'Company',
                            links: ['About Us', 'Our Work', 'Testimonials', 'Blog']
                        }
                    ].map((column, colIndex) => (
                        <motion.div
                            key={column.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (colIndex * 0.1) }}
                        >
                            <h3 className="font-bold text-lg mb-4">{column.title}</h3>
                            <ul className="space-y-2 text-gray-400">
                                {column.links.map((link, index) => (
                                    <motion.li
                                        key={link}
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (index * 0.05) + (colIndex * 0.1) }}
                                    >
                                        <motion.a
                                            href="#"
                                            className="hover:text-[#FF3B30]"
                                            whileHover={{ x: 5, color: '#FF3B30' }}
                                        >
                                            {link}
                                        </motion.a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                        <div className="space-y-4 text-gray-400">
                            <motion.p
                                className="flex items-start gap-2"
                                whileHover={{ x: 5 }}
                            >
                                <Mail className="w-5 h-5 text-[#FF3B30] mt-1" />
                                hello@designstudio.com
                            </motion.p>
                            <motion.p whileHover={{ x: 5 }}>
                                123 Design Avenue<br />Creative City, CC 12345
                            </motion.p>
                            <motion.p whileHover={{ x: 5 }}>
                                +1 (555) 123-4567
                            </motion.p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="max-w-5xl mx-auto mt-12 pt-8 border-t border-gray-800 text-gray-500 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p>© 2025 DesignStudio. All rights reserved.</p>
                </motion.div>
            </footer>
        </div>
    );
};

export default HomePage;