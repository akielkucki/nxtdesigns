import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TechButton = ({children}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex ">
            <motion.button
                className="relative group"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileTap={{ scale: 0.95 }}
            >
                {/* Glow effect */}
                <motion.div
                    className="absolute inset-0 bg-blue-500 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                    animate={{
                        scale: isHovered ? 1.1 : 1,
                    }}
                />

                {/* Main button container */}
                <motion.div
                    className="relative min-w-full flex items-center px-8 py-4 bg-gray-900 border border-blue-500 rounded-lg overflow-hidden w-full text-center justify-center"
                    animate={{
                        borderColor: isHovered ? "#60A5FA" : "#3B82F6",
                    }}
                >
                    {/* Button content */}
                    <div className="flex items-center space-x-2">
                        {/* Animated dots */}


                        {/* Button text */}
                        <motion.span
                            className="text-blue-500 font-semibold text-lg"
                            animate={{
                                color: isHovered ? "#60A5FA" : "#3B82F6"
                            }}
                        >
                            {children}
                        </motion.span>
                    </div>

                    {/* Corner accents */}
                    <motion.div
                        className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-500"
                        animate={{
                            opacity: isHovered ? 1 : 0.5
                        }}
                    />
                    <motion.div
                        className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-blue-500"
                        animate={{
                            opacity: isHovered ? 1 : 0.5
                        }}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-blue-500"
                        animate={{
                            opacity: isHovered ? 1 : 0.5
                        }}
                    />
                    <motion.div
                        className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-blue-500"
                        animate={{
                            opacity: isHovered ? 1 : 0.5
                        }}
                    />
                </motion.div>
            </motion.button>
        </div>
    );
};

export default TechButton;