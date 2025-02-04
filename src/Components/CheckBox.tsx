import { cx } from "cva";
import {
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
    forwardRef,
} from "react";
import { Check } from "../Icons";

export const Root = ({
    className,
    ...props
}: ComponentPropsWithoutRef<"fieldset">) => (
    <fieldset className={cx(["flex gap-2", className])} {...props} />
);

export const Label = ({ ...props }: ComponentPropsWithoutRef<"label">) => (
    <label className="select-none text-shuttle-gray-600" {...props} />
);

export const Checkbox = forwardRef<
    HTMLInputElement,
    ComponentPropsWithRef<"input">
>(({ ...props }, ref) => (
    <div
        className={cx(
            "relative h-5 w-5",
            "inline-flex items-center justify-center"
        )}
    >
        <input
            className={cx([
                "h-full w-full",
                "border-2 border-gray-400 bg-white peer appearance-none rounded-md",
                "duration-300 ease-in",
                "checked:border-picton-blue-950 checked:bg-picton-blue-950",
                "hover:border-picton-blue-950 hover:bg-picton-blue-50 checked:hover:bg-picton-blue-950",
                "disabled:border-gray-400 disabled:bg-gray-100",
                "checked:disabled:border-gray-400 checked:disabled:bg-gray-100 checked:disabled:text-gray-400",
            ])}
            type="checkbox"
            ref={ref}
            {...props}
        />
        <Check className="pointer-events-none absolute hidden h-3 w-3 text-white peer-checked:block " />
    </div>
));
