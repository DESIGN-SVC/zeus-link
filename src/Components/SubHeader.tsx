import { cx } from "cva";
import { Carent } from "../Icons";

type SubHeaderProps = {
    title: string;
    description: string;
    breadcrumbs: string[];
};

export const SubHeader = ({
    description,
    title,
    breadcrumbs,
}: SubHeaderProps) => {
    return (
        <div className="w-full bg-big-stone-950">
            <div className="container px-6 py-4 flex items-center justify-between gap-20">
                <h6 className="text-gray-300">Menu principal</h6>
                <div className="flex items-center justify-between pl-6 flex-1">
                    <div className="flex items-center gap-3 justify-center">
                        <h3 className="text-white font-semibold text-2xl">
                            {title}
                        </h3>
                        <p className="text-loblolly-300">{description}</p>
                    </div>
                    <ul className="flex items-center gap-3">
                        {breadcrumbs?.map((el, index) => {
                            return (
                                <li
                                    key={el + index}
                                    className={cx([
                                        "text-loblolly-300",
                                        "flex gap-2.5 items-center",
                                        {
                                            "!text-iron-200 font-semibold":
                                                breadcrumbs.length - 1 ===
                                                index,
                                        },
                                    ])}
                                >
                                    <span>{el}</span>
                                    <Carent
                                        className={
                                            breadcrumbs.length - 1 === index
                                                ? "hidden"
                                                : "block"
                                        }
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
