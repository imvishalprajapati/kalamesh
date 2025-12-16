import type { Artwork } from "../../types";
import ArtworkCard from "../artwork/ArtworkCard";

interface PortfolioGridProps {
    artworks: Artwork[];
}

export default function PortfolioGrid({ artworks }: PortfolioGridProps) {
    if (artworks.length === 0) {
        return (
            <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700">
                <p className="text-slate-500 dark:text-slate-400">No artworks yet</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
        </div>
    );
}
