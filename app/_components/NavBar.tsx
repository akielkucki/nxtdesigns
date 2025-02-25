"use client";
import React from 'react';
import {motion} from "framer-motion";
import {ArrowRight} from "lucide-react";

const NavBar = () => {
    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{type: "spring", stiffness: 100}}
            className="flex justify-between items-center px-6 py-4 md:px-12 bg-black text-white sticky top-0 z-50"
        >
            <motion.div
                className="text-xl font-bold"
                whileHover={{scale: 1.05}}
                transition={{type: "spring", stiffness: 400}}
            >
                NXT<span className="text-[#FF3B30]">STUDIOS</span>
            </motion.div>
            <div className="hidden md:flex space-x-8 items-center">
                {['Services', 'Portfolio', 'Process', 'Contact'].map((item, index) => (
                    <motion.div
                        key={item}
                        className="relative group"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: index * 0.1}}
                    >
                        <a
                            href={`#${item.toLowerCase()}`}
                            className="relative z-10 transition-colors"
                        >
                <span className="relative inline-block">
                  {/* Background gradient that will be revealed on hover */}
                    <span
                        className="absolute inset-0 w-full h-full group-hover:bg-[length:200%_200%]"
                        style={{
                            background: `radial-gradient(circle, #FF3B30 0%, #FF3B30 50%, transparent 50.1%)`,
                            backgroundSize: '0% 0%',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            transition: 'all 0.6s ease-out',
                        }}

                    >
                    {item}
                  </span>

                    {/* Text outline that will remain visible */}
                    <span
                        className="relative group-hover:text-transparent transition-colors duration-300"
                        style={{
                            WebkitTextStroke: '1px white'
                        }}
                    >
                    {item}
                  </span>
                </span>
                        </a>

                        {/* Animated gradient background */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            initial={{scale: 0, x: '50%', y: '50%'}}
                            whileHover={{
                                scale: 5,
                                transition: {duration: 0.5}
                            }}
                            style={{
                                background: 'radial-gradient(circle, #FF3B30 0%, transparent 70%)',
                                width: '10px',
                                height: '10px',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                opacity: 0.3,
                                pointerEvents: 'none'
                            }}
                        />
                    </motion.div>
                ))}
            </div>
            <motion.button
                className="bg-[#FF3B30] hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors flex items-center"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
            >
                Start Project <ArrowRight className="ml-2 w-4 h-4"/>
            </motion.button>
        </motion.nav>
    );
};

export default NavBar;