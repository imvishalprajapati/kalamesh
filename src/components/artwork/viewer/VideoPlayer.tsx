interface VideoPlayerProps {
    src: string;
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
    return (
        <div className="w-full h-full flex items-center justify-center bg-black">
            <video
                src={src}
                controls
                loop
                className="max-h-[80vh] w-auto max-w-full rounded-lg"
            />
        </div>
    );
}
