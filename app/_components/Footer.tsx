import {motion} from "framer-motion";
import {FacebookIcon, InstagramIcon, Mail, TwitterIcon} from "lucide-react";
import React from "react";

export default function Footer() {
    const socials = [
        {
            label: "Instagram",
            icon: InstagramIcon,
        },
        {
            label: "Facebook",
            icon: FacebookIcon,
        },
        {
            label: "Twitter",
            icon: TwitterIcon,
        },
    ]

    return <footer className="bg-black text-white py-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: 0.1}}
            >
                <motion.div
                    className="text-xl font-bold mb-4"
                    whileHover={{scale: 1.05}}
                    transition={{type: "spring", stiffness: 400}}
                >
                    CR8V<span className="text-[#FF3B30]">AGENCY</span>
                </motion.div>
                <p className="text-gray-400 mb-4">Creating stunning websites that drive business growth.</p>
                <div className="flex space-x-4">
                    {socials.map((social, index) => {
                        const Icon = social.icon;
                        return <motion.a
                            key={index}
                            href="#"
                            className="text-gray-400 hover:text-white"
                            whileHover={{scale: 1.2, y: -5}}
                            transition={{delay: index * 0.05}}
                        >
                            <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center">
                                <span className="sr-only">{social.label}</span>
                                    <Icon/>
                            </div>
                        </motion.a>

                    })}
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
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.2 + (colIndex * 0.1)}}
                >
                    <h3 className="font-bold text-lg mb-4">{column.title}</h3>
                    <ul className="space-y-2 text-gray-400">
                        {column.links.map((link, index) => (
                            <motion.li
                                key={link}
                                initial={{x: -20, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{delay: 0.3 + (index * 0.05) + (colIndex * 0.1)}}
                            >
                                <motion.a
                                    href="#"
                                    className="hover:text-[#FF3B30]"
                                    whileHover={{x: 5, color: '#FF3B30'}}
                                >
                                    {link}
                                </motion.a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            ))}

            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: 0.4}}
            >
                <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                <div className="space-y-4 text-gray-400">
                    <motion.p
                        className="flex items-start gap-2"
                        whileHover={{x: 5}}
                    >
                        <Mail className="w-5 h-5 text-[#FF3B30] mt-1"/>
                        hello@designstudio.com
                    </motion.p>
                    <motion.p whileHover={{x: 5}}>
                        1161 Lynch Cir<br/>Warminster, PA, 18974
                    </motion.p>
                    <motion.p whileHover={{x: 5}}>
                        +1 (267) 123-4567
                    </motion.p>
                </div>
            </motion.div>
        </div>

        <motion.div
            className="max-w-5xl mx-auto mt-12 pt-8 border-t border-gray-800 text-gray-500 text-sm"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{delay: 0.5}}
        >
            <p>© {new Date().getFullYear()} CR8VSTUDIOS. All rights reserved.</p>
        </motion.div>
    </footer>
}