import { useParams, Link } from "react-router-dom";
import { MOCK_ARTWORKS } from "../lib/mock-data";
import ArtworkViewer from "../components/artwork/ArtworkViewer";
import { ArrowLeft, Calendar, Wrench } from "lucide-react";

export default function ArtworkDetailPage() {
    const { artworkId } = useParams<{ artworkId: string }>();

    // Mock fetch
    const artwork = MOCK_ARTWORKS.find((a) => a.id === artworkId);

    if (!artwork) {
        return (
            <div className="flex flex-col items-center justify-center h-[50vh]">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Artwork not found
                </h2>
                <Link
                    to="/"
                    className="mt-4 text-blue-600 hover:text-blue-500 font-medium"
                >
                    Go back home
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full mx-auto space-y-8">
            <div className="artwork-container grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="artwork-viewer lg:col-span-4">
                    <Link
                        to={`/profile/${artwork.creator.username}`}
                        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors mb-4"
                    >
                        <ArrowLeft size={16} className="mr-1" />
                        Back to Profile
                    </Link>
                    <ArtworkViewer artwork={artwork} />
                </div>
                <div className="artwork-info lg:col-span-1 space-y-8">
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                            {artwork.title}
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            {artwork.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                                {artwork.description}
                            </p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                    <Calendar size={16} /> Created
                                </span>
                                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                    {new Date(artwork.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2 mb-3">
                                    <Wrench size={16} /> Software Used
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {artwork.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="inline-block rounded bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={artwork.creator.avatarUrl}
                                        alt={artwork.creator.displayName}
                                        className="h-10 w-10 rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                            {artwork.creator.displayName}
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            @{artwork.creator.username}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
