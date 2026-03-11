import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { cn } from "@/lib/utils";

function processText(text: string): string {
    return text.replace(/(?<=^|\s)(\S{1,2}) /g, "$1\u00A0");
}

function processChildren(children: ReactNode): ReactNode {
    return Children.map(children, (child) => {
        if (typeof child === "string") {
            return processText(child);
        }
        if (isValidElement<{ children?: ReactNode }>(child) && child.props.children) {
            return cloneElement(child, {}, processChildren(child.props.children));
        }
        return child;
    });
}

const CleanerText = ({ className, children }: { className?: string; children: ReactNode }) => {
    return (
        <span className={cn("text-pretty", className)}>
            {processChildren(children)}
        </span>
    );
};

export default CleanerText;