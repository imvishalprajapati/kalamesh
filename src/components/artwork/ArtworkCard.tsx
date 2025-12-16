import { Link } from "react-router-dom";
import type { Artwork } from "../../types";

interface ArtworkCardProps {
    artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
    return (
        <Link to={`/artwork/${artwork.id}`} className="group block h-full">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                <img
                    src={artwork.thumbnailUrl}
                    alt={artwork.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {artwork.mediaType === "VIDEO" && (
                    <div className="absolute top-2 right-2 rounded bg-black/50 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        Video
                    </div>
                )}
                {artwork.mediaType === "MODEL" && (
                    <div className="absolute top-2 right-2 rounded bg-blue-600/90 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        3D
                    </div>
                )}
            </div>
            <div className="mt-2">
                <h3 className="text-sm font-semibold text-slate-900 line-clamp-1 dark:text-slate-100">
                    {artwork.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1 dark:text-slate-400">
                    {artwork.tags.slice(0, 3).join(" • ")}
                </p>
            </div>
        </Link>
    );
}
