"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const navItems = ['Services', 'Portfolio', 'Process', 'Contact'];

    return (
        <nav className="flex justify-between items-center px-6 py-4 md:px-12 bg-black sticky top-0 z-50">
            {/* Logo */}
            <div className="text-xl font-bold text-white">
                CRE8V<span className="text-[#FF3B30]">AGENCY</span>
            </div>

            {/* Navigation Items */}
            <div className="hidden md:flex space-x-8 items-center">
                {navItems.map((item) => (
                    <div
                        key={item}
                        className="relative group"
                    >
                        <a href={`#${item.toLowerCase()}`} className="relative block px-2 py-1">
                            {/* This is the fully visible white text that appears by default */}
                            <span className="relative z-10 text-white group-hover:text-transparent transition-colors duration-300">
                                {item}
                            </span>

                            {/* This is the colored radial gradient background that appears on hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-radial from-[#FF3B30] to-transparent rounded-full"
                                initial={{ scale: 0, opacity: 0 }}
                                whileHover={{
                                    scale: 4,
                                    opacity: 1,
                                    transition: { duration: 0.6, ease: "easeOut" }
                                }}
                                style={{
                                    originX: 0.5,
                                    originY: 0.5,
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '10px',
                                    height: '10px',
                                    zIndex: 0
                                }}
                            />

                            {/* This is the colored text that appears on hover */}
                            <span className="absolute inset-0 flex items-center justify-center text-[#FF3B30] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                {item}
                            </span>
                        </a>
                    </div>
                ))}
            </div>

            {/* Start Project Button */}
            <button className="bg-[#FF3B30] hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors flex items-center">
                Start Project <ArrowRight className="ml-2 w-4 h-4" />
            </button>

            <style jsx global>{`
                .bg-gradient-radial {
                    background: radial-gradient(circle, rgba(255, 59, 48, 0.9) 0%, rgba(255, 59, 48, 0.5) 50%, rgba(255, 59, 48, 0) 90%);
                }
            `}</style>
        </nav>
    );
};

export default Navbar;