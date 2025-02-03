import { cx } from "cva";
import {
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
    forwardRef,
} from "react";
import { Carent } from "../Icons";

export const Root = ({
    className,
    ...props
}: ComponentPropsWithoutRef<"fieldset">) => (
    <fieldset className={cx(["flex flex-col gap-2", className])} {...props} />
);

export const Label = ({ ...props }: ComponentPropsWithoutRef<"label">) => (
    <label className="text-shuttle-gray-600 font-semibold" {...props} />
);
type SelectProps = {
    classNameIcon?: string;
} & ComponentPropsWithRef<"select">;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ classNameIcon, ...props }, ref) => (
        <fieldset className="w-full relative">
            <select
                ref={ref}
                className={cx([
                    "px-6 py-4 w-full",
                    "outline-none appearance-none cursor-pointer peer",
                    "border rounded-xl border-loblolly-600 bg-white",
                    "text-loblolly-600",
                    "duration-300 ease-in",
                    "hover:border-picton-blue-800 hover:bg-iron-50",
                ])}
                {...props}
            />
            <div
                className={cx([
                    "absolute top-1/2 -translate-y-1/2 right-6 pointer-events-none",
                    "transition-all rotate-90",
                    "peer-active:-rotate-90 text-loblolly-600",
                    classNameIcon,
                ])}
            >
                <Carent width={20} height={20} strokeWidth={1} />
            </div>
        </fieldset>
    )
);

export const Option = ({ ...props }: ComponentPropsWithoutRef<"option">) => (
    <option className="appearance-none p-3" {...props} />
);
