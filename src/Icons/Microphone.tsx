import { ComponentPropsWithoutRef } from "react";

export function Microphone({ ...props }: ComponentPropsWithoutRef<"svg">) {
    return (
        <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                clipPath="url(#clip0_568_127)"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M13.125 5a3.125 3.125 0 10-6.25 0v5a3.125 3.125 0 106.25 0V5zM10 15.625v2.5M15.625 10a5.625 5.625 0 11-11.25 0" />
            </g>
            <defs>
                <clipPath id="clip0_568_127">
                    <path fill="#fff" d="M0 0H20V20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
