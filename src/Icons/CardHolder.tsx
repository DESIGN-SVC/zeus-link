import { ComponentPropsWithoutRef } from "react";

export function CardHolder({ ...props }: ComponentPropsWithoutRef<"svg">) {
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
                clipPath="url(#clip0_568_651)"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M16.25 4.375H3.75c-.69 0-1.25.56-1.25 1.25v8.75c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-8.75c0-.69-.56-1.25-1.25-1.25z" />
                <path d="M2.5 9.375h4.438a.625.625 0 01.612.5 2.5 2.5 0 004.9 0 .625.625 0 01.612-.5H17.5M2.5 6.875h15" />
            </g>
            <defs>
                <clipPath id="clip0_568_651">
                    <path fill="#fff" d="M0 0H20V20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
