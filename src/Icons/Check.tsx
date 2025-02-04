import { ComponentPropsWithoutRef } from "react";

export function Check({ ...props }: ComponentPropsWithoutRef<"svg">) {
    return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_114_7481)">
        <path
          d="M3.125 11.25L7.5 15.625l10-10"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_114_7481">
          <path fill="currentColor" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
    );
}
