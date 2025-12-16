interface ImageViewerProps {
    src: string;
    alt: string;
}

export default function ImageViewer({ src, alt }: ImageViewerProps) {
    return (
        <div className="w-full h-full flex items-center justify-center bg-black/5 dark:bg-black/20">
            <img
                src={src}
                alt={alt}
                className="max-h-[100vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
            />
        </div>
    );
}
