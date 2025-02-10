import { ComponentPropsWithoutRef } from "react";

export function DownLoad({ ...props }: ComponentPropsWithoutRef<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <g
                clipPath="url(#clip0_476_4294)"
                stroke="#009CDF"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M8 9.5v-7M13.5 9.5V13a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V9.5" />
                <path d="M10.5 7L8 9.5 5.5 7" />
            </g>
            <defs>
                <clipPath id="clip0_476_4294">
                    <path fill="#fff" d="M0 0H16V16H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
