import { ComponentPropsWithoutRef } from "react";

export function ThreeStructure({ ...props }: ComponentPropsWithoutRef<"svg">) {
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
                clipPath="url(#clip0_568_3790)"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M5 8.125H2.5a.625.625 0 00-.625.625v2.5c0 .345.28.625.625.625H5c.345 0 .625-.28.625-.625v-2.5A.625.625 0 005 8.125zM16.875 3.125h-3.75a.625.625 0 00-.625.625V7.5c0 .345.28.625.625.625h3.75c.345 0 .625-.28.625-.625V3.75a.625.625 0 00-.625-.625zM16.875 11.875h-3.75a.625.625 0 00-.625.625v3.75c0 .345.28.625.625.625h3.75c.345 0 .625-.28.625-.625V12.5a.625.625 0 00-.625-.625zM5.625 10h3.75M12.5 14.375h-1.25A1.875 1.875 0 019.375 12.5v-5a1.875 1.875 0 011.875-1.875h1.25" />
            </g>
            <defs>
                <clipPath id="clip0_568_3790">
                    <path fill="#fff" d="M0 0H20V20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
