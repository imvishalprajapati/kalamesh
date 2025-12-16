import type { User } from "../../types";

interface ProfileHeaderProps {
    user: User;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
    return (
        <div className="flex flex-col items-center space-y-4 pt-8 text-center sm:items-start sm:text-left sm:flex-row sm:space-y-0 sm:space-x-8">
            <div className="relative">
                <img
                    src={user.avatarUrl}
                    alt={user.displayName}
                    className="h-32 w-32 rounded-full object-cover ring-4 ring-white dark:ring-slate-900"
                />
            </div>
            <div className="flex-1 space-y-2">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                    {user.displayName}
                </h1>
                <p className="text-lg font-medium text-slate-500 dark:text-slate-400">
                    @{user.username}
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
                    {user.skills.map((skill) => (
                        <span
                            key={skill}
                            className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
                <p className="max-w-2xl pt-2 text-slate-600 dark:text-slate-300">
                    {user.bio}
                </p>
            </div>
        </div>
    );
}
