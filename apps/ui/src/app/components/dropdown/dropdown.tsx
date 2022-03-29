import { ReactElement, ReactNode, useState } from "react";

interface DropdownProps {
    toggleElement: ReactElement;
    children?: ReactNode;
}
const Dropdown = ({ toggleElement, children }: DropdownProps) => {
    return (
        <>
            {toggleElement}
            {children}
        </>
    );
};

export default Dropdown;
