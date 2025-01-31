import { ComponentPropsWithoutRef } from "react";

export function AppWindows({ ...props }: ComponentPropsWithoutRef<"svg">) {
    return (
        <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_571_989)">
                <path
                    d="M16.875 3.75H3.125a.625.625 0 00-.625.625v11.25c0 .345.28.625.625.625h13.75c.345 0 .625-.28.625-.625V4.375a.625.625 0 00-.625-.625z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M5.75 6.563a.438.438 0 11-.875 0 .438.438 0 01.875 0z"
                    stroke="currentColor"
                />
                <path
                    d="M8.438 7.5a.937.937 0 100-1.875.937.937 0 000 1.875z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_571_989">
                    <path fill="#fff" d="M0 0H20V20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
