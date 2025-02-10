import { cx } from "cva";
import { useRef } from "react";
import { DownLoad, Pause, Play } from "../../Icons";
import audio from "/audio/audio.mp3";
import { useWavesurfer } from "@wavesurfer/react";

export const ModalAudio = () => {
    const containerRef = useRef(null);
    const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
        container: containerRef,
        url: audio,
        waveColor: "#6D7588",
        height: 100,
        cursorWidth: 0,
        normalize:true
        
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
        <div className={cx(["flex items-center gap-8"])}>
            <div className="flex gap-2 w-[110px]">
                <button onClick={handlePlayAudio} className="cursor-pointer">
                    {isPlaying && <Pause color="#009CDF" />}
                    {!isPlaying && <Play color="#009CDF" />}
                </button>
                <div className="text-sm font-semibold text-loblolly-900">
                    <span>{convertTimeToMinutes(currentTime)}</span>/
                    <span>
                        {convertTimeToMinutes(
                            (wavesurfer?.getDuration() as number) ?? "0"
                        )}
                    </span>
                </div>
            </div>
            <div ref={containerRef} className="w-full" />

            <a href={audio} download>
                <DownLoad />
            </a>
        </div>
    );
};

const convertTimeToMinutes = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${minutes < 10 ? "0" + minutes : minutes}:${formattedSeconds}`;
};
