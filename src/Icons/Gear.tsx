import { ComponentPropsWithoutRef } from "react";

export function Gear({ ...props }: ComponentPropsWithoutRef<"svg">) {
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
                clipPath="url(#clip0_571_2421)"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M10 13.125a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25z" />
                <path d="M10.16 16.102h-.312L7.344 17.5A8.173 8.173 0 014.679 16l-.01-2.813a4.167 4.167 0 01-.156-.266l-2.49-1.418a7.746 7.746 0 010-3.005l2.488-1.414c.05-.09.103-.179.156-.266l.013-2.813A8.17 8.17 0 017.344 2.5l2.5 1.398h.312l2.5-1.398A8.173 8.173 0 0115.321 4l.01 2.813c.055.087.107.175.156.266l2.488 1.417a7.747 7.747 0 010 3.005l-2.488 1.414c-.05.09-.103.179-.156.266l-.012 2.813a8.17 8.17 0 01-2.663 1.506l-2.496-1.398z" />
            </g>
            <defs>
                <clipPath id="clip0_571_2421">
                    <path fill="#fff" d="M0 0H20V20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
