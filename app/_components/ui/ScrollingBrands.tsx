import React from 'react';
import {VelocityText} from "@/components/magicui/constant-scroll-velocity";
// import Image from "next/image";

const ScrollingBrands = () => {
    return (
        <div
            className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-20">
            <VelocityText className={"text-white text-xs"}>
                <strong className={"drop-shadow-[-5px_10px_rgba(232,0,0,0.8)]"}>JR STUDIOS</strong>&nbsp;
                <strong className={"drop-shadow-[-5px_10px_rgba(255,255,255,0.8)]"}>FORBES</strong>
                {/*<Image alt={"audi logo"} className={"drop-shadow-[-5px_10px_rgba(255,255,255,0.8)]"} src={"/audi.svg"} width={500} height={250} />*/}
            </VelocityText>

        </div>
    );
};

export default ScrollingBrands;
