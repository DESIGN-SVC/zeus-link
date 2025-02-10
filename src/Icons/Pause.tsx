import { ComponentPropsWithoutRef } from "react";

export function Pause({ ...props }: ComponentPropsWithoutRef<"svg">) {
    return (
        <svg
            width={11}
            height={13}
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.66 1.615a.09.09 0 00-.092.091v11.818c0 .05.041.091.091.091h2.66c.05 0 .09-.04.09-.09V1.705a.09.09 0 00-.09-.09h-2.66zm-1.092.091c0-.602.489-1.09 1.091-1.09h2.66c.602 0 1.09.488 1.09 1.09v11.818a1.09 1.09 0 01-1.09 1.091h-2.66a1.09 1.09 0 01-1.09-1.09V1.705zM1.682 1.615a.09.09 0 00-.091.091v11.818c0 .05.04.091.09.091h2.66c.05 0 .09-.04.09-.09V1.705a.09.09 0 00-.09-.09H1.68zM.59 1.706c0-.602.488-1.09 1.09-1.09h2.66c.602 0 1.09.488 1.09 1.09v11.818a1.09 1.09 0 01-1.09 1.091H1.68a1.09 1.09 0 01-1.09-1.09V1.705z"
                fill="currentColor"
            />
        </svg>
    );
}
