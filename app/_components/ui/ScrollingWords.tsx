import {VelocityScroll} from "@/components/magicui/scroll-based-velocity";


export default function ScrollingWords() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-20 border-t-8 border-b-8 border-white ">
            <VelocityScroll className={"text-white"}><strong>BOLD</strong> <strong className={"font-thin"}>CREATIVE</strong> <strong>ORIGINAL</strong> <strong className={"font-thin text-red-400"}>UNIQUE</strong></VelocityScroll>

        </div>
    );
}
