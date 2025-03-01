import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import {Button} from "@/components/ui/button";

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const backgroundControls = useAnimation();

    // Track mouse position for parallax effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const moveX = clientX / window.innerWidth - 0.5;
            const moveY = clientY / window.innerHeight - 0.5;
            setMousePosition({ x: moveX, y: moveY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Animate background based on mouse movement
    useEffect(() => {
        backgroundControls.start({
            backgroundPosition: `${mousePosition.x * 40}px ${mousePosition.y * 40}px`,
            transition: { type: 'spring', stiffness: 50 }
        });
    }, [mousePosition, backgroundControls]);

    // Staggered animation for text elements
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    // Hovering animation for buttons
    const buttonVariants = {
        rest: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 }
        }
    };

    // Floating animation for graphics
    const floatVariants = {
        initial: { y: 0 },
        float: {
            y: [-10, 10, -10],
            transition: {
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
            }
        }
    };

    // Circle animation variants
    const circleVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 0.7,
            transition: { type: "spring", stiffness: 100, delay: 0.8 }
        }
    };

    return (
        <div className="relative w-full overflow-hidden bg-black">
            {/* Animated background patterns */}
            <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: "radial-gradient(circle at 20% 30%, rgba(220, 38, 38, 0.4) 0%, transparent 30%), radial-gradient(circle at 80% 70%, rgba(220, 38, 38, 0.3) 0%, transparent 30%)",
                    backgroundSize: "180% 180%"
                }}
                animate={backgroundControls}
            />

            {/* Animated background circles */}
            <motion.div
                className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-red-600 blur-3xl"
                variants={circleVariants}
                initial="hidden"
                animate="visible"
            />

            <motion.div
                className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-red-800 blur-3xl"
                variants={circleVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2 }}
            />

            {/* Hero content container */}
            <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center relative z-10">
                {/* Left side text content */}
                <motion.div
                    className="w-full md:w-1/2 text-white space-y-6 mb-10 md:mb-0 pr-0 md:pr-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold tracking-tight"
                        variants={itemVariants}
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Transform</span> Your Digital Experience
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-slate-200 font-light"
                        variants={itemVariants}
                    >
                        Elevate your presence with cutting-edge solutions that drive real results.
                    </motion.p>

                    <motion.div
                        className="space-y-4"
                        variants={itemVariants}
                    >
                        <div className="flex items-center space-x-2">
                            <Zap className="h-5 w-5 text-red-500" />
                            <p className="text-white">3x faster performance than competitors</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Shield className="h-5 w-5 text-red-500" />
                            <p className="text-white">Enterprise-grade security built in</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Sparkles className="h-5 w-5 text-red-500" />
                            <p className="text-white">Seamless integration with your workflow</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="pt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                        variants={itemVariants}
                    >
                        <motion.div
                            variants={buttonVariants}
                            initial="rest"
                            whileHover="hover"
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-medium px-8 py-6 rounded-lg shadow-lg">
                                <span>Get Started</span>
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>

                        <motion.div
                            variants={buttonVariants}
                            initial="rest"
                            whileHover="hover"
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-medium px-8 py-6 rounded-lg">
                                See Demo
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right side visual content */}
                <motion.div
                    className="w-full md:w-1/2 relative"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {/* Main floating device mockup */}
                    <motion.div
                        className="relative z-20"
                        variants={floatVariants}
                        initial="initial"
                        animate="float"
                    >
                        <div className="relative mx-auto w-full max-w-md bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl overflow-hidden border border-red-800/30">
                            <div className="h-6 bg-gradient-to-r from-black to-gray-900 flex items-center px-4">
                                <div className="flex space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-red-300"></div>
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                </div>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-red-500/5 to-red-700/5">
                                <div className="rounded-lg bg-white/5 p-4 h-64 flex items-center justify-center border border-red-800/20">
                                    <div className="text-center">
                                        <Sparkles className="h-12 w-12 text-red-500 mx-auto mb-4" />
                                        <p className="text-white text-sm">Let&#39;s put your website on the big screens</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Animated floating elements */}
                    <motion.div
                        className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50, rotate: -10 }}
                        animate={{ opacity: 0.8, y: 0, rotate: -10 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        style={{ zIndex: 10 }}
                    />

                    <motion.div
                        className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-white to-gray-300 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: -30, rotate: 15 }}
                        animate={{ opacity: 0.8, y: 0, rotate: 15 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        style={{ zIndex: 10 }}
                    />

                    {/* Animated data points around the device */}
                    <motion.div
                        className="absolute top-1/4 -right-4 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                    >
                        <span className="text-xs font-mono text-white">01</span>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-1/4 -left-4 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ delay: 1.6, duration: 0.5 }}
                    >
                        <span className="text-xs font-mono text-white">02</span>
                    </motion.div>

                    {/* Connecting lines */}
                    <svg className="absolute inset-0 w-full h-full z-0 opacity-30" width="100%" height="100%">
                        <motion.path
                            d="M100,100 C150,50 200,150 250,100"
                            stroke="url(#gradient1)"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1.5 }}
                        />
                        <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#DC2626" />
                                <stop offset="100%" stopColor="#7F1D1D" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </div>


        </div>
    );
};

export default Hero;