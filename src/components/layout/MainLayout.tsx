import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/75 dark:bg-slate-950/75 backdrop-blur-sm">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="font-bold text-xl tracking-tight">
                        KALAMESH
                    </Link>
                    <nav className="flex items-center gap-6">
                        <Link to="/upload" className="text-sm font-medium hover:text-blue-600 transition-colors">
                            Upload
                        </Link>
                        <Link to="/profile/me" className="text-sm font-medium hover:text-blue-600 transition-colors">
                            Profile
                        </Link>
                        <Link to="/settings/profile" className="text-sm font-medium hover:text-blue-600 transition-colors">
                            Settings
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="mx-auto px-4 py-8">
                <div className="container mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
