"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "@/app/_components/ui/ProjectCard";

export default function HorizontalScrollCarousel() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Adjust the transform values for better scrolling
    // The first array [0, 1] represents the scroll progress from start to end
    // The second array represents the horizontal position from start to end position
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden ">
                <motion.div style={{ x }} className="flex gap-6 pl-6">
                    {[1, 2, 3, 4, 5, 6].map((_, i) => (
                        <div key={i} className="flex-shrink-0">
                            <ProjectCard />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}