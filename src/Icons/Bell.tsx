import { ComponentPropsWithoutRef } from "react";

export function Bell({ ...props }: ComponentPropsWithoutRef<"svg">) {
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
                clipPath="url(#clip0_43_398)"
                stroke="#8B96A6"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 24a4 4 0 108 0M7 13a9 9 0 0118 0c0 4.477 1.038 8.075 1.863 9.5A1 1 0 0126 24H6a1 1 0 01-.86-1.5C5.964 21.075 7 17.476 7 13z" />
            </g>
            <defs>
                <clipPath id="clip0_43_398">
                    <path fill="currentColor" d="M0 0H32V32H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
