import { cx } from "cva";
import { ComponentPropsWithoutRef, useEffect } from "react";

type RootProps = {
    onClose: () => void;
    isOpen: boolean;
} & ComponentPropsWithoutRef<"div">;

export const Root = ({ onClose, isOpen, ...props }: RootProps) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    return (
        <div
            onClick={onClose}
            className={cx([
                "fixed inset-0 z-50",
                "bg-black/20",
                "flex justify-center items-center",
            ])}
            {...props}
        />
    );
};

export const Content = ({ ...props }: ComponentPropsWithoutRef<"div">) => (
    <div
        onClick={(e) => e.stopPropagation()}
        className={cx(["bg-white", "w-full max-w-5xl p-12",'overflow-y-auto'])}
        {...props}
    />
);


