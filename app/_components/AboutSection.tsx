import React, { useEffect, useRef } from 'react';
import { motion, useAnimate, stagger, useInView } from 'framer-motion';

const About = () => {
    const [scope, animate] = useAnimate();
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.3 });

    // Text with underscore markers for keywords
    const text = "At _CRE8V, we believe in more than just design—we believe in transformation. " +
        "Our vision is to take your ideas and push them beyond expectations, creating _bold, " +
        "_innovative, and _impactful digital experiences.\n\n" +
        "We treat every project as an opportunity for excellence, ensuring that your vision " +
        "is not just realized, but elevated. From concept to execution, we craft designs " +
        "that are _striking, _functional, and _unforgettable.";

    // Function to animate keywords only when in view
    useEffect(() => {
        // Only trigger animation when element comes into view
        if (isInView) {
            const animateKeywords = async () => {
                // Reset all keywords to initial state first
                await animate(".keyword",
                    {
                        scale: 1,
                        color: "#000000"
                    },
                    { duration: 0 }
                );

                // Then animate each keyword in sequence
                await animate(".keyword",
                    {
                        scale: [1, 1.2, 1],
                        color: ["#874a4a", "#FF5C5C", "#FF3B30"]
                    },
                    {
                        duration: 0.75,
                        delay: stagger(0.15),
                        ease: "easeInOut",
                    }
                );
            };

            animateKeywords();
        }
    }, [animate, isInView]);

    // Process the text to find keywords and apply the keyword class
    const processedText = text.split(/\n/).map((line, lineIndex, linesArray) => {
        // Split text to preserve underscored words
        const parts = line.split(/(\b_[a-zA-Z0-9-]+\b)/g);

        const lineWithBold = parts.map((part, index) => {
            // Check if this part is an underscored word
            if (part.startsWith('_')) {
                return (
                    <motion.span
                        key={`${lineIndex}-${index}`}
                        className="keyword font-bold"
                    >
                        {part.substring(1)}
                    </motion.span>
                );
            }
            return part;
        });

        return (
            <React.Fragment key={lineIndex}>
                {lineWithBold}
                {lineIndex < linesArray.length - 1 && <br />}
            </React.Fragment>
        );
    });

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6" ref={scope}>
            <div
                className="max-w-5xl"
                ref={containerRef}
            >
                <div className="text-xl md:text-xl lg:text-3xl leading-relaxed text-white">
                    {processedText}
                </div>
            </div>
        </div>
    );
};

export default About;