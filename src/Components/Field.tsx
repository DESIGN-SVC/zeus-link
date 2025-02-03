import { cx } from "cva";
import {
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
    forwardRef,
} from "react";

export const Root = ({
    className,
    ...props
}: ComponentPropsWithoutRef<"fieldset">) => (
    <fieldset className={cx(["flex flex-col gap-2", className])} {...props} />
);

export const Label = ({ ...props }: ComponentPropsWithoutRef<"label">) => (
    <label className="text-shuttle-gray-600 font-semibold" {...props} />
);

export const Input = forwardRef<
    HTMLInputElement,
    ComponentPropsWithRef<"input">
>(({ ...props }, ref) => (
    <input
        ref={ref}
        className={cx([
            "px-6 py-4 w-full",
            "outline-none appearance-none",
            "border rounded-xl border-loblolly-600 bg-white",
            "text-loblolly-600",
            "duration-300 ease-in",
            "hover:border-picton-blue-800 hover:bg-iron-50",
        ])}
        {...props}
    />
));

export const Textarea = forwardRef<
    HTMLTextAreaElement,
    ComponentPropsWithRef<"textarea">
>(({ ...props }, ref) => (
    <textarea
        ref={ref}
        className={cx([
            "px-6 py-4 w-full h-[7.813rem]",
            "outline-none appearance-none resize-none",
            "border rounded-xl border-loblolly-600 bg-white",
            "text-loblolly-600",
            "duration-300 ease-in",
            "hover:border-picton-blue-800 hover:bg-iron-50",
        ])}
        {...props}
    />
));
