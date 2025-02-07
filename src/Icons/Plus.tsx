import { ComponentPropsWithoutRef } from "react";

export function Plus({ ...props }: ComponentPropsWithoutRef<"svg">) {
    return (
        <svg
            width={12}
            height={13}
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.2.5H4.8v4.8H0v2.4h4.8v4.8h2.4V7.7H12V5.3H7.2V.5z"
                fill="#009CDF"
            />
        </svg>
    );
}
