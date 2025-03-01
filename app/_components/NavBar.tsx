"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState('Portfolio'); // Default to Portfolio

    const navItems = [
        { name: 'Services', icon: '⚡' },
        { name: 'Portfolio', icon: '🔥' },
        { name: 'Process', icon: '🛠️' },
        { name: 'Contact', icon: '📱' }
    ];

    // Handle scroll events to change navbar appearance
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // let currentPositionAtNavItem = navItems.filter((item) => item.name===hoveredItem)
    // console.log(currentPositionAtNavItem);
    return (
        <>
            <motion.nav
                className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                    scrolled ? 'py-2 backdrop-blur-md bg-black/90 shadow-lg shadow-red-900/20' : 'py-4 bg-black'
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo Section with Animated Element */}
                        <motion.div
                            className="relative flex items-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                            {/* Animated background slash */}
                            <motion.div
                                className="absolute -inset-1 bg-red-600 blur-sm"
                                animate={{
                                    rotate: [0, 5, 0, -5, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 5,
                                    ease: "easeInOut"
                                }}
                            />

                            {/* Logo text */}
                            <a href="#" className="relative text-2xl font-black tracking-tighter z-10">
                                <span className="text-white">CRE</span>
                                <span className="text-black">8V</span>
                                <motion.span
                                    className="text-white"
                                    animate={{ color: ['#FFFFFF', '#FF3B30', '#FFFFFF'] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    AGENCY
                                </motion.span>
                            </a>
                        </motion.div>

                        {/* Desktop Navigation with Persistent Dot Indicator */}
                        <div className="hidden md:flex space-x-1 items-center relative">
                            {/* The moving dot that follows hover */}
                            <motion.div
                                className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-red-600 z-0"
                                animate={{
                                    x: navItems.findIndex(item => item.name === hoveredItem), // Approximate center of each nav item
                                    y: [0, -3, 0]
                                }}
                                transition={{
                                    x: { type: 'spring', stiffness: 300, damping: 30 },
                                    y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                                }}
                            />

                            {navItems.map((item) => (
                                <motion.div
                                    key={item.name}
                                    className="relative"
                                    onHoverStart={() => setHoveredItem(item.name)}
                                    whileHover={{scale: 1.1}}
                                    transition={{type: 'spring', stiffness: 400, damping: 15}}
                                >
                                    <motion.a
                                        whileHover="hover"
                                        initial="initial"
                                        href={`#${item.name.toLowerCase()}`}
                                        className="relative z-10 px-3 py-2 mx-1 font-medium text-white flex items-center"
                                        variants={{
                                            initial: {},
                                            hover: {}, // This allows child animations to trigger when the parent is hovered
                                        }}
                                    >
                                        {/* Nav item with interactive underline */}
                                        <span className="relative overflow-hidden group flex">
                                            {item.name}
                                            <motion.span
                                                className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform-gpu"
                                                variants={{
                                                    initial: {scaleX: 0, originX: 0},
                                                    hover: {scaleX: 1},
                                                }}
                                                transition={{duration: 0.3}}
                                            />
                                        </span>

                                        {/* Animated icon */}
                                        <motion.span
                                            variants={{
                                                initial: {opacity: 0, x: -10, scale: 0.5},
                                                hover: {opacity: 1, x: 0, scale: 1},
                                            }}
                                            transition={{duration: 0.2}}
                                            className="ml-1"
                                        >
                                            {item.icon}
                                        </motion.span>
                                    </motion.a>
                                </motion.div>
                            ))}
                        </div>

                        {/* Start Project Button */}
                        <motion.button
                            className="relative overflow-hidden group bg-black text-white border border-red-600 px-5 py-2 rounded-md flex items-center"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            {/* Animated background fill */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800"
                                initial={{x: '-100%'}}
                                whileHover={{x: 0}}
                                transition={{type: 'tween', ease: 'easeInOut', duration: 0.3}}
                            />

                            {/* Button text and icon */}
                            <span className="relative z-10 font-bold">Start Project</span>
                            <motion.div
                                className="relative z-10 ml-2"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </motion.button>

                        {/* Mobile menu button */}
                        <div className="flex md:hidden">
                            <motion.button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                whileTap={{ scale: 0.9 }}
                                className="text-white p-1"
                            >
                                {mobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black z-40 pt-20"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-4 py-8 space-y-6">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={`#${item.name.toLowerCase()}`}
                                    className="block text-2xl font-bold text-white border-b border-red-800/30 pb-4 flex justify-between items-center"
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setHoveredItem(item.name); // Update the active item when clicked in mobile menu
                                    }}
                                >
                                    <div className="flex items-center">
                                        <span className="text-red-600 mr-3">{item.icon}</span>
                                        {item.name}
                                    </div>
                                    <ChevronRight className="h-5 w-5 text-red-600" />
                                </motion.a>
                            ))}

                            <motion.button
                                className="w-full bg-red-600 text-white py-4 rounded-md mt-8 flex justify-center items-center font-bold"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Start Project <ArrowRight className="ml-2 w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;