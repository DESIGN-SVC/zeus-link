import { ComponentPropsWithoutRef } from "react";

export function Play({ ...props }: ComponentPropsWithoutRef<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={11}
            height={13}
            viewBox="0 0 11 13"
            fill="none"
            {...props}
        >
            <path
                d="M11 6.5a.983.983 0 01-.475.844l-9.005 5.51A1 1 0 010 12.007V.992A.991.991 0 01.507.128 1 1 0 011.52.147l9.005 5.509A.983.983 0 0111 6.5z"
                fill="currentColor"
            />
        </svg>
    );
}
