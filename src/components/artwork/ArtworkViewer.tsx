import type { Artwork } from "../../types";
import ImageViewer from "./viewer/ImageViewer";
import VideoPlayer from "./viewer/VideoPlayer";
import ThreeJSViewer from "./viewer/ThreeJSViewer";

interface ArtworkViewerProps {
    artwork: Artwork;
}

export default function ArtworkViewer({ artwork }: ArtworkViewerProps) {
    switch (artwork.mediaType) {
        case "IMAGE":
            return <ImageViewer src={artwork.mediaUrl} alt={artwork.title} />;
        case "VIDEO":
            return <VideoPlayer src={artwork.mediaUrl} />;
        case "MODEL":
            return <ThreeJSViewer src={artwork.mediaUrl} />;
        default:
            return <div>Unsupported media type</div>;
    }
}
