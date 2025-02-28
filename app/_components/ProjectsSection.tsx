import {motion, Variants} from "framer-motion";
import {ArrowRight} from "lucide-react";
import React from "react";
interface AnimationProps {
    fadeIn: Variants,
    staggerContainer: Variants,
    popUp: Variants,
}
export default function ProjectsSection({fadeIn, staggerContainer, popUp}: AnimationProps) {

    return (
        <section id="portfolio" className="py-20 px-6 md:px-12 bg-black text-white">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
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
                    viewport={{once: true, amount: 0.1}}
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
                            <img src={`/api/placeholder/600/${400 + item * 10}`} alt={`Project ${item}`}
                                 className="w-full h-full object-cover"/>
                            <motion.div
                                className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-6"
                                initial={{opacity: 0}}
                                whileHover={{opacity: 1}}
                                transition={{duration: 0.3}}
                            >
                                <motion.h3
                                    className="text-white text-xl font-bold"
                                    initial={{y: 20, opacity: 0}}
                                    whileHover={{y: 0, opacity: 1}}
                                    transition={{delay: 0.1}}
                                >
                                    Project Title {item}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-300 mb-4"
                                    initial={{y: 20, opacity: 0}}
                                    whileHover={{y: 0, opacity: 1}}
                                    transition={{delay: 0.2}}
                                >
                                    E-commerce / Branding
                                </motion.p>
                                <motion.a
                                    href="#"
                                    className="inline-flex items-center text-[#FF3B30] font-medium"
                                    initial={{y: 20, opacity: 0}}
                                    whileHover={{y: 0, opacity: 1, x: 5}}
                                    transition={{delay: 0.3}}
                                >
                                    View Project <ArrowRight className="ml-2 w-4 h-4"/>
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center mt-12"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.4}}
                >
                    <motion.a
                        href="#"
                        className="inline-flex items-center text-[#FF3B30] font-medium"
                        whileHover={{x: 5}}
                        transition={{type: "spring", stiffness: 300}}
                    >
                        View All Projects <ArrowRight className="ml-2 w-4 h-4"/>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}