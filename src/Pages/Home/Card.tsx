import { cx } from "cva";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { Clock, Play, Plus, Warning } from "../../Icons";

const Root = ({ children, ...props }: ComponentPropsWithoutRef<"div">) => (
    <div className="flex gap-3 z-10" {...props}>
        <div
            className={cx([
                "h-8 w-8 mt-4",
                "bg-iron-200 rounded-full",
                "flex items-center justify-center",
                'text-regent-gray-600'
            ])}
        >
            <Play className="ml-1"/>
        </div>
        {children}
    </div>
);

const Content = ({ ...props }: ComponentPropsWithoutRef<"div">) => (
    <div
        className={cx([
            "px-4 py-3 w-full",
            "border border-loblolly-300 rounded-lg bg-iron-50",
        ])}
        {...props}
    />
);
type HeaderProps = {
    type: "PLAY" | "DECISION" | "START";
    code: number;
    onPlay: () => void;
    onPlus: () => void;
    time: string;
    blockDecision?: number;
    requestDecision?: string;
};

const Header = ({
    code,
    type,
    time,
    blockDecision,
    requestDecision,
    onPlay,
    onPlus,
}: HeaderProps) => {
    return (
        <header
            className={cx([
                "border-b border-regent-gray-600",
                "py-2",
                "flex justify-between items-center",
            ])}
        >
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    {type === "DECISION" ? (
                        <Warning className="text-regent-gray-600" />
                    ) : (
                        <Play className="text-regent-gray-600" />
                    )}
                    <span className="text-sm capitalize font-semibold text-shuttle-gray-600">
                        {type.toLocaleLowerCase()}
                    </span>
                </div>
                <span className="text-loblolly-900 text-xs">
                    componente executado
                </span>
                <span className="text-loblolly-900 text-xs">
                    código: <b className="font-semibold">{code}</b>
                </span>
                {type === "DECISION" && (
                    <div
                        className={cx([
                            "flex items-center gap-2 pl-2",
                            "border-l border-regent-gray-600",
                        ])}
                    >
                        <span className="text-xs text-loblolly-900">
                            Bloco
                            <b className="font-semibold"> {blockDecision}</b>
                        </span>
                        <p className="flex gap-1 items-center text-xs">
                            &#40;
                            <span className="text-[#007CB4]">
                                {requestDecision}
                            </span>
                            &#41;
                        </p>
                    </div>
                )}
            </div>
            <div className="flex items-center gap-2 text-loblolly-600">
                <button onClick={onPlay} className="cursor-pointer">
                    <Play width={8} height={8} />
                </button>
                <button onClick={onPlus} className="cursor-pointer">
                    <Plus />
                </button>
                <Clock />
                <span className="text-xs font-semibold">{time}</span>
            </div>
        </header>
    );
};

const Description = ({ children }: PropsWithChildren) => (
    <div className="text-xs text-loblolly-600 py-2">{children}</div>
);

type DebugProps = {
    type: "PLAY" | "DECISION" | "START";
    descriptionNoDecision?: {
        info: string;
        timer: string;
        component: string;
    };
    descriptionDecision?: React.ReactNode;
};

const Debug = ({
    type,
    descriptionNoDecision,
    descriptionDecision,
}: DebugProps) => {
    return (
        <div className="flex flex-col gap-2">
            <h6 className="text-xs font-semibold text-[#007380] py-1.5 border-b">
                Debug
            </h6>
            {type !== "DECISION" && (
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                    <span className="text-xs text-loblolly-600 w-full">
                        <b className="uppercase font-semibold">info: </b>
                        {descriptionNoDecision?.info}
                    </span>
                    <span className="text-xs text-loblolly-600 ">
                        <b className="uppercase font-semibold">timer:</b>{" "}
                        {descriptionNoDecision?.timer}
                    </span>
                    <span className="text-xs text-loblolly-600">
                        <b className="uppercase font-semibold">componente:</b>{" "}
                        {descriptionNoDecision?.component}
                    </span>
                </div>
            )}
            {type === "DECISION" && (
                <div className="text-xs text-loblolly-600">
                    {descriptionDecision}{" "}
                </div>
            )}
        </div>
    );
};

export const Card = {
    Root,
    Content,
    Header,
    Description,
    Debug,
};
