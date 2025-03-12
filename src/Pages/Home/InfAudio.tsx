import { cx } from "cva";

type InfoAudioProps = {
    onClickAudio: () => void;
};

export const InfAudio = ({ onClickAudio }: InfoAudioProps) => {
    return (
        <article className={cx(["px-6 py-3", "flex flex-col gap-2.5"])}>
            <div className="flex justify-between">
                <button
                    className={cx([
                        "text-white font-bold",
                        "px-3 py-2 w-fit",
                        "bg-[#0072B7] rounded-lg cursor-pointer",
                    ])}
                    onClick={onClickAudio}
                >
                    Tocar áudio
                </button>
                <ul className="flex items-center gap-3">
                    {["Mostrar tudo", "Básico", "Check points"].map((el) => (
                        <li
                            key={el}
                            className={cx([
                                "text-sm font-semibold text-regent-gray-600",
                                "border-2 rounded-lg bg-iron-100",
                                "px-3 py-1",
                            ])}
                        >
                            {el}
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className={cx([
                    "text-white font-bold",
                    "px-3 py-2 w-fit",
                    "bg-[#00A559] rounded-lg",
                ])}
            >
                2024-05-24 15:35:06
            </div>
        </article>
    );
};
