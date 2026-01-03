export interface Artwork {
    id: string;
    title: string;
    description: string;
    mediaType: "IMAGE" | "VIDEO" | "MODEL";
    mediaUrl: string;
    thumbnailUrl: string;
    status: "UPLOADING" | "PROCESSING" | "READY";
    tags: string[];
    tools: string[];
    createdAt: string;
    creator: User;
    likes: number;
    shares: number;
    views: number;
}

export interface User {
    id: string;
    username: string;
    displayName: string;
    bio: string;
    avatarUrl: string;
    skills: string[];
}
