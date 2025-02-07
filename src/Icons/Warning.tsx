import { ComponentPropsWithoutRef } from "react";

export function Warning({ ...props }: ComponentPropsWithoutRef<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={17}
            viewBox="0 0 18 17"
            fill="none"
            {...props}
        >
            <path
                d="M10.247 1.304l7.57 13.045c.53.919-.155 2.053-1.247 2.053H1.43c-1.092 0-1.777-1.134-1.247-2.053l7.57-13.045c.545-.942 1.949-.942 2.494 0z"
                fill="currentColor"
            />
            <path
                d="M7.902 4.988h2.635v5.707H7.902V4.988zM10.537 12.012v2.195H7.902v-1.914l.172-.28h2.463z"
                fill="#F6F7F8"
            />
        </svg>
    );
}
