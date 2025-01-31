import { cx } from "cva";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { Link, type LinkProps } from "react-router-dom";

type RootProps = {
    active?: boolean;
} & LinkProps;

export const Root = ({ active, ...props }: RootProps) => (
    <Link
        className={cx([
            "text-sm text-regent-gray-600",
            "flex gap-2 items-center",
            "py-3",
            "duration-300 ease-in",
            "hover:text-white",
            {
                "!text-white": active,
            },
        ])}
        {...props}
    />
);

export const Text = ({ ...props }: ComponentPropsWithoutRef<"span">) => (
    <span className=" font-bold flex-1" {...props} />
);
export const Icon = ({ children }: PropsWithChildren) => <>{children} </>;
