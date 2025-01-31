import { ComponentPropsWithoutRef } from "react";

export function EnvelopeSimple({ ...props }: ComponentPropsWithoutRef<"svg">) {
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
          clipPath="url(#clip0_43_399)"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 7h24v17a1 1 0 01-1 1H5a1 1 0 01-1-1V7z" />
          <path d="M28 7L16 18 4 7" />
        </g>
        <defs>
          <clipPath id="clip0_43_399">
            <path fill="#fff" d="M0 0H32V32H0z" />
          </clipPath>
        </defs>
      </svg>
    );
}
