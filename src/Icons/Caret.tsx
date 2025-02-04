import { ComponentPropsWithoutRef } from "react";

export const Caret = ({ ...props }: ComponentPropsWithoutRef<"svg">) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="none"
        {...props}
    >
        <g clipPath="url(#clip0_43_440)">
            <path
                d="M4.5 2.25L8.25 6 4.5 9.75"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_43_440">
                <path fill="currentColor" d="M0 0H12V12H0z" />
            </clipPath>
        </defs>
    </svg>
);
