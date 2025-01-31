import { ComponentPropsWithoutRef } from "react";

export function PhoneCall({ ...props }: ComponentPropsWithoutRef<"svg">) {
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
                clipPath="url(#clip0_568_1504)"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12.5 3.125A6.141 6.141 0 0116.875 7.5M11.875 5.625c1.29.345 2.155 1.21 2.5 2.5M12.843 11.355a.625.625 0 01.593-.054l3.684 1.65a.624.624 0 01.375.649 3.775 3.775 0 01-3.745 3.275A10.625 10.625 0 013.125 6.25 3.776 3.776 0 016.4 2.505a.625.625 0 01.648.375L8.7 6.567a.625.625 0 01-.051.588l-1.67 1.986a.62.62 0 00-.042.61c.646 1.322 2.013 2.673 3.34 3.313a.62.62 0 00.611-.046l1.956-1.663z" />
            </g>
            <defs>
                <clipPath id="clip0_568_1504">
                    <path fill="#fff" d="M0 0H20V20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
