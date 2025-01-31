import { ComponentPropsWithoutRef } from "react";

export function Squares({ ...props }: ComponentPropsWithoutRef<"svg">) {
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
                clipPath="url(#clip0_568_4207)"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M8.125 3.75h-3.75a.625.625 0 00-.625.625v3.75c0 .345.28.625.625.625h3.75c.345 0 .625-.28.625-.625v-3.75a.625.625 0 00-.625-.625zM15.625 3.75h-3.75a.625.625 0 00-.625.625v3.75c0 .345.28.625.625.625h3.75c.345 0 .625-.28.625-.625v-3.75a.625.625 0 00-.625-.625zM8.125 11.25h-3.75a.625.625 0 00-.625.625v3.75c0 .345.28.625.625.625h3.75c.345 0 .625-.28.625-.625v-3.75a.625.625 0 00-.625-.625zM15.625 11.25h-3.75a.625.625 0 00-.625.625v3.75c0 .345.28.625.625.625h3.75c.345 0 .625-.28.625-.625v-3.75a.625.625 0 00-.625-.625z" />
            </g>
            <defs>
                <clipPath id="clip0_568_4207">
                    <path fill="#fff" d="M0 0H20V20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
