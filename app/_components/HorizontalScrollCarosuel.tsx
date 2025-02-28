"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import ProjectCard from "@/app/_components/ui/ProjectCard";

export default function HorizontalScrollCarousel() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);

        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    const xMobile = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    const xDesktop = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900 snap-center" id="portfolio">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <MotionCard x={isMobile ? xMobile : xDesktop} />
            </div>
        </section>
    );
}

function MotionCard({ x }: { x: MotionValue<string> }) {
    return (
        <motion.div style={{ x }} className="flex gap-6 pl-6">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <div key={i} className="flex-shrink-0 snap-proximity">
                    <ProjectCard />
                </div>
            ))}
        </motion.div>
    );
}
