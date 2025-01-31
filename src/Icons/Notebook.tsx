import { ComponentPropsWithoutRef } from "react";

export function NoteBook({ ...props }: ComponentPropsWithoutRef<"svg">) {
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
                clipPath="url(#clip0_562_298)"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M8.75 8.75h5M8.75 11.25h5M16.25 3.125H3.75a.625.625 0 00-.625.625v12.5c0 .345.28.625.625.625h12.5c.345 0 .625-.28.625-.625V3.75a.625.625 0 00-.625-.625zM6.25 3.125v13.75" />
            </g>
            <defs>
                <clipPath id="clip0_562_298">
                    <path fill="#fff" d="M0 0H20V20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
