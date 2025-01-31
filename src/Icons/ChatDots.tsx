import { ComponentPropsWithoutRef } from "react";

export function ChatDots({ ...props }: ComponentPropsWithoutRef<"svg">) {
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
                clipPath="url(#clip0_568_707)"
                stroke="currentColor"
                strokeWidth={1.5}
            >
                <path
                    d="M3.527 17.977A.625.625 0 012.5 17.5V5a.625.625 0 01.625-.625h13.75A.625.625 0 0117.5 5v10a.624.624 0 01-.625.625H6.445a.625.625 0 00-.402.147l-2.516 2.205z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10.188 10a.187.187 0 11-.375 0 .187.187 0 01.374 0zM6.75 10a.187.187 0 11-.375 0 .187.187 0 01.375 0zM13.625 10a.187.187 0 11-.375 0 .187.187 0 01.375 0z"
                    fill="#8B96A6"
                />
            </g>
            <defs>
                <clipPath id="clip0_568_707">
                    <path fill="#fff" d="M0 0H20V20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
