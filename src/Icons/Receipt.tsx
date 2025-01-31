import { ComponentPropsWithoutRef } from "react";

export function Receipt({ ...props }: ComponentPropsWithoutRef<"svg">) {
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
                clipPath="url(#clip0_571_3196)"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M6.25 8.125h7.5M6.25 10.625h7.5M2.5 16.25V4.375a.625.625 0 01.625-.625h13.75a.625.625 0 01.625.625V16.25L15 15l-2.5 1.25L10 15l-2.5 1.25L5 15l-2.5 1.25z" />
            </g>
            <defs>
                <clipPath id="clip0_571_3196">
                    <path fill="#fff" d="M0 0H20V20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
