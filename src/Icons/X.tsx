import { ComponentPropsWithoutRef } from "react";

export function X({ ...props }: ComponentPropsWithoutRef<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            {...props}
        >
            <g
                clipPath="url(#clip0_114_7712)"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M25 7L7 25M25 25L7 7" />
            </g>
            <defs>
                <clipPath id="clip0_114_7712">
                    <path fill="currentColor" d="M0 0H32V32H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
