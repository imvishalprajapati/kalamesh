import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Share } from "lucide-react";
import { Eye } from "lucide-react";
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
            <div className="mt-2 flex items-start justify-between gap-2">
                <div>
                    <h3 className="text-sm font-semibold text-slate-900 line-clamp-1 dark:text-slate-100">
                        {artwork.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 dark:text-slate-400">
                        {artwork.tags.slice(0, 3).join(" • ")}
                    </p>
                </div>
                <div className="flex flex-col items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        <span>{artwork.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Share className="h-3 w-3" />
                        <span>{artwork.shares}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{artwork.views}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
