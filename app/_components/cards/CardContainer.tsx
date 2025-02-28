import React, {JSX, ReactNode} from 'react';
import Card from "@/app/_components/Card";

interface ChildrenProps {
    children: ReactNode | (() => JSX.Element | typeof Card);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CardContainer: React.FC<ChildrenProps> = ({children}: ChildrenProps) => {
    return (
        <div className={"relative flex flex-col items-center justify-center"}>
            {/*{typeof children === "function" ? children() : children}*/}
        </div>
    );
};

export default CardContainer;
