import { cva, VariantProps } from "cva";
import { ComponentPropsWithRef, forwardRef } from "react";
const tw = cva(
    [
        "w-full px-6 py-4",
        "rounded-lg cursor-pointer",
        "flex items-center justify-center gap-2",
        "text-base/[19.2px] font-bold",
        'duration-300 ease-in'
    ],
    {
        variants: {
            appearance: {
                primary: [
                    "bg-picton-blue-500",
                    "text-white",
                    "hover:bg-picton-blue-600",
                ],
                secondary: [
                    "bg-iron-100 border border-shuttle-gray-600",
                    "text-shuttle-gray-600",
                    'hover:bg-iron-200'
                ],
            },
        },
        defaultVariants: {
            appearance: "primary",
        },
    }
);

type RootProps = ComponentPropsWithRef<"button"> & VariantProps<typeof tw>;
export const Button = forwardRef<HTMLButtonElement, RootProps>(
    ({ appearance, className, ...props }, ref) => (
        <button
            ref={ref}
            className={tw({ appearance, className })}
            {...props}
        ></button>
    )
);
