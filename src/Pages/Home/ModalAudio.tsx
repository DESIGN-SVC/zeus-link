import { ComponentProps, useRef } from "react";
import { Pause, Play } from "../../Icons";
import audio from "/audio/audio.mp3";
import { useWavesurfer } from "@wavesurfer/react";

type ModalAudioProps = {
    onClose: () => void;
};

export const ModalAudio = ({ onClose }: ModalAudioProps) => {
    const containerRef = useRef(null);
    const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
        container: containerRef,
        url: audio,
        waveColor: "#6D7588",
        height: 100,
        cursorWidth: 0,
        normalize: true,
    });

    const handlePlayAudio = () => {
        if (isPlaying) {
            wavesurfer?.pause();
            return;
        }
        wavesurfer?.play();
        return;
    };

    return (
        <div className="flex items-center gap-8 relative">
            <div className="flex gap-2 w-[110px]">
                <button onClick={handlePlayAudio} className="cursor-pointer">
                    {isPlaying && <Pause color="#009CDF" />}
                    {!isPlaying && <Play color="#009CDF" />}
                </button>
                <div className="text-sm font-semibold text-loblolly-900 w-[87px]">
                    <span>{convertTimeToMinutes(currentTime)}</span>/
                    <span>
                        {convertTimeToMinutes(
                            (wavesurfer?.getDuration() as number) ?? "0"
                        )}
                    </span>
                </div>
            </div>
            <div ref={containerRef} className="w-full" />
            <button className="cursor-pointer mb-auto" onClick={onClose}>
                <X />
            </button>
        </div>
    );
};

const convertTimeToMinutes = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${minutes < 10 ? "0" + minutes : minutes}:${formattedSeconds}`;
};

const X = ({ ...props }: ComponentProps<"svg">) => (
    <svg
        width={10}
        height={10}
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M9.5.5l-9 9M9.5 9.5l-9-9"
            stroke="#009CDF"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
