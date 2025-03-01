"use client"
import React from 'react';
import { motion } from 'framer-motion';
import About from "@/app/_components/AboutSection";
import ScrollingWords from "@/app/_components/ui/ScrollingWords";
import ProjectsSection from "@/app/_components/ProjectsSection";
import Footer from "@/app/_components/Footer";
import HorizontalScrollCarosuel from "@/app/_components/HorizontalScrollCarosuel";
import Hero from "@/app/_components/Hero";

const HomePage = () => {
    // const [email, setEmail] = useState('');

    // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     alert(`Thank you for subscribing with: ${email}`);
    //     setEmail('');
    // };

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


    return (
        <div className="min-h-screen bg-white text-black">

            {/* Hero Section */}
            <Hero/>

            <About/>
            <ScrollingWords />
            <HorizontalScrollCarosuel/>
            {/* the "Why" Section */}
            <ProjectsSection />

            {/* Process Section */}
            <section id="process" className="py-20 px-6 md:px-12 bg-black text-white">
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
            <Footer/>
        </div>
    );
};

export default HomePage;