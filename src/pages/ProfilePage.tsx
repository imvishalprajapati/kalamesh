import { useParams } from "react-router-dom";
import ProfileHeader from "../components/profile/ProfileHeader";
import PortfolioGrid from "../components/profile/PortfolioGrid";
import { MOCK_USER, MOCK_ARTWORKS } from "../lib/mock-data";
import { Select } from "../components/ui/Select";

export default function ProfilePage() {
    const { username } = useParams<{ username: string }>();

    // In a real app, we would fetch user data by username
    // For now, we mock it. If username doesn't match default mock, we could show 404 or just show mock
    const user = MOCK_USER;
    const artworks = MOCK_ARTWORKS;

    if (!username) return null;

    return (
        <div className="space-y-12">
            <ProfileHeader user={user} />

            <div className="space-y-6">
                <div className="flex items-center justify-between  bg-gray-900 border-b border-slate-200 dark:border-slate-800 p-2">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                        Portfolio
                    </h2>
                    <div className="flex items-center gap-6 justify-end">
                        <div className="focus:outline-none focus:ring-2 focus:ring-red-600">
                            <Select options={[
                                { value: "all", label: "All" },
                                { value: "images", label: "Images" },
                                { value: "videos", label: "Videos" },
                                { value: "models", label: "Models" },
                            ]}>
                            </Select>
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                            {artworks.length} artworks
                        </div>
                    </div>
                </div>

                <PortfolioGrid artworks={artworks} />
            </div>
        </div>
    );
}
