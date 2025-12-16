import { useState } from "react";
import { Upload as UploadIcon, X, Check } from "lucide-react";

type UploadStep = "SELECT" | "DETAILS" | "UPLOADING" | "COMPLETE";

export default function UploadPage() {
    const [step, setStep] = useState<UploadStep>("SELECT");
    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setStep("DETAILS");
        }
    };

    const handleUpload = () => {
        setStep("UPLOADING");
        // Simulate upload
        setTimeout(() => {
            setStep("COMPLETE");
        }, 2000);
    };

    return (
        <div className="max-w-2xl mx-auto py-8">
            <h1 className="text-2xl font-bold mb-8 text-slate-900 dark:text-slate-100">
                Upload Artwork
            </h1>

            {step === "SELECT" && (
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-12 text-center hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                    <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        accept="image/*,video/*,.glb"
                        onChange={handleFileSelect}
                    />
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer flex flex-col items-center gap-4"
                    >
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400">
                            <UploadIcon size={32} />
                        </div>
                        <div>
                            <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                                Click to upload or drag and drop
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                Images, Videos, or 3D Models
                            </p>
                        </div>
                    </label>
                </div>
            )}

            {step === "DETAILS" && file && (
                <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                        <div className="h-16 w-16 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-slate-500">
                            {file.type.startsWith("image") ? "IMG" : "FILE"}
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-slate-900 dark:text-slate-100">
                                {file.name}
                            </p>
                            <p className="text-sm text-slate-500">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                setFile(null);
                                setStep("SELECT");
                            }}
                            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full"
                        >
                            <X size={20} className="text-slate-500" />
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 dark:text-white"
                                placeholder="Artwork title"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Description
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={4}
                                className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 dark:text-white"
                                placeholder="Tell us about your work..."
                            />
                        </div>
                        <div className="pt-4">
                            <button
                                onClick={handleUpload}
                                disabled={!title}
                                className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-2.5 rounded-md font-medium hover:bg-slate-800 dark:hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Upload Artwork
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {step === "UPLOADING" && (
                <div className="text-center py-12">
                    <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                        Uploading...
                    </h3>
                    <p className="text-slate-500 mt-2">Please wait while we process your artwork</p>
                </div>
            )}

            {step === "COMPLETE" && (
                <div className="text-center py-12">
                    <div className="h-16 w-16 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                        Upload Complete!
                    </h3>
                    <p className="text-slate-500 mt-2 mb-8">
                        Your artwork is now live on your profile.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => {
                                setFile(null);
                                setTitle("");
                                setDescription("");
                                setStep("SELECT");
                            }}
                            className="px-6 py-2 rounded-md border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors dark:text-white"
                        >
                            Upload Another
                        </button>
                        <button className="px-6 py-2 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
                            View Artwork
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
