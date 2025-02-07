import { ComponentPropsWithoutRef } from "react";

export function Clock({ ...props }: ComponentPropsWithoutRef<"svg">) {
    return (
        <svg
            width={12}
            height={13}
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                clipPath="url(#clip0_623_576)"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M6 11a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
                <path d="M6 3.875V6.5h2.625" />
            </g>
            <defs>
                <clipPath id="clip0_623_576">
                    <path
                        fill="#fff"
                        transform="translate(0 .5)"
                        d="M0 0H12V12H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}
