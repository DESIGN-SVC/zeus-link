import { ComponentPropsWithoutRef } from "react";

export function UserCircle({ ...props }: ComponentPropsWithoutRef<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <g
                clipPath="url(#clip0_568_7)"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M10 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
                <path d="M10 12.5a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25zM4.984 15.576a5.625 5.625 0 0110.032 0" />
            </g>
            <defs>
                <clipPath id="clip0_568_7">
                    <path fill="#fff" d="M0 0H20V20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
