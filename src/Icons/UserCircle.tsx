import { ComponentPropsWithoutRef } from "react";


export function UserCircle({...props}:ComponentPropsWithoutRef<'svg'>) {
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
        clipPath="url(#clip0_43_397)"
        stroke="#8B96A6"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z" />
        <path d="M16 20a5 5 0 100-10 5 5 0 000 10zM7.975 24.921a9.001 9.001 0 0116.05 0" />
      </g>
      <defs>
        <clipPath id="clip0_43_397">
          <path fill="currentColor" d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

