import {motion, useTransform} from "framer-motion";
import {Magnet} from "lucide-react";
import React, {useRef, useState} from "react";
import {useScroll} from "motion/react";

export default function ProjectsSection() {
    // const [targetElement, setTargetElement] = React.useState<React.ReactNode | null>(null);
    // function changeTargetElement(e: React.MouseEvent<HTMLDivElement>) {
    //     setTargetElement(e.target as React.ReactNode);
    // }
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    const rotate = useTransform(scrollYProgress, [0, 1], [180, -90]); // Rotates from 0° to 180°
    return (
        <section id="why" className="py-20 px-6 md:px-12 bg-black text-white">
            <div className="max-w-5xl mx-auto ">
                <div className={"flex items-start"}>
                    <h1 className={"text-white text-center text-5xl flex flex-col mx-auto items-center justify-center py-20 md:pt-0 px-0 "}> <span className={""}>Convey <span className={"font-fancy text-7xl"}>emotion</span></span><span>that hooks</span>
                        <motion.div
                            ref={ref}
                        >
                            <motion.div

                                style={{
                                    width: 200,
                                    height: 200,

                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 20,
                                    rotate,
                                }}
                            ><Magnet className={"w-20 h-20"}/></motion.div>
                        </motion.div>
                    </h1>
                    <div className="flex justify-center items-center flex-col"></div>

                </div>
                    <Element>
                        <>
                            <ElementHeading>More Awareness</ElementHeading>
                            <ElementSubheading>
                                Our modern websites merge cutting-edge design, intuitive navigation, and immersive content to elevate your brand’s visibility, engaging audiences and fostering a memorable online presence that drives trust and growth.
                            </ElementSubheading>
                        </>
                    </Element>

                    <Element>
                        <>
                            <ElementHeading>Stunning Design</ElementHeading>
                            <ElementSubheading>
                                Captivate your audience with visually striking designs that blend creativity and technology, leaving a lasting impression from the very first glance.
                            </ElementSubheading>
                        </>
                    </Element>

                    <Element>
                        <>
                            <ElementHeading>User-Centered Experience</ElementHeading>
                            <ElementSubheading>
                                Every interaction is crafted with your user in mind—ensuring seamless navigation, intuitive layouts, and engaging journeys across all devices.
                            </ElementSubheading>
                        </>
                    </Element>

                    <Element>
                        <>
                            <ElementHeading>SEO Optimized</ElementHeading>
                            <ElementSubheading>
                                Amplify your online reach with websites built on SEO best practices, driving organic traffic and strengthening your brand’s authority in a crowded digital landscape.
                            </ElementSubheading>
                        </>
                    </Element>

            </div>
        </section>
    )
}
function Element({children, onMouseOver}: { children: React.ReactNode, onMouseOver?: () => void }) {
    const [tapped, setTapped] = useState(false)

    return <motion.div
        onMouseOver={onMouseOver}
        initial={{backgroundColor: "rgba(0, 0, 0, 1)", color: "rgba(255, 255, 255, 1)", transform: "translateY(70px)", opacity: 0}}
        whileHover={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            color: "rgba(0, 0, 0, 1)",
            transition: {duration: 0.5}
        }}
        onTap={()=>setTapped(!tapped)}
        whileInView={{
            transform: "translateY(0)",
            opacity: 1,
        }}

        transition={{duration: 0.5}}

        animate={{
            backgroundColor: tapped ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)",
            color: tapped ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)",
            transition: {ease: "easeInOut", duration: 0.5},
        }}
        className={"flex flex-col md:flex-row justify-between items-center max-w-7xl xl p-16 rounded-3xl my-5 border-white border-4"}>

        {children}
    </motion.div>
}
function ElementHeading({children}: {children: React.ReactNode}) {
    return <div className={"text-3xl pb-10"}>{children}</div>
}
function ElementSubheading({children}: {children: React.ReactNode}) {
    return <div className={"text-lg text-thin max-w-xl"}>{children}</div>
}
