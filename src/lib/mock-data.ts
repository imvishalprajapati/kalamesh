import type { Artwork, User } from "../types";

export const MOCK_USER: User = {
    id: "u1",
    username: "kalamesh_artist",
    displayName: "Kalamesh Artist",
    bio: "Digital artist exploring the boundaries of 3D and motion graphics. Creating immersive experiences.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kalamesh",
    skills: ["Blender", "Three.js", "React", "Motion Graphics", "UI/UX"],
};

export const MOCK_ARTWORKS: Artwork[] = [
    {
        id: "a1",
        title: "Neon City",
        description: "A cyberpunk inspired city street at night.",
        mediaType: "IMAGE",
        mediaUrl: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop",
        thumbnailUrl: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop",
        status: "READY",
        tags: ["Cyberpunk", "City", "Night", "Neon"],
        tools: ["Blender", "Photoshop"],
        createdAt: new Date().toISOString(),
        creator: MOCK_USER,
        likes: 124,
        shares: 200,
        views: 900
    },
    {
        id: "a2",
        title: "Abstract Flow",
        description: "Procedural generation test.",
        mediaType: "VIDEO",
        mediaUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        status: "READY",
        tags: ["Abstract", "Procedural", "Motion"],
        tools: ["After Effects"],
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        creator: MOCK_USER,
        likes: 89,
        shares: 200,
        views: 2100
    },
    {
        id: "a3",
        title: "Robot Head",
        description: "Hard surface modeling practice.",
        mediaType: "MODEL",
        mediaUrl: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb",
        thumbnailUrl: "https://github.com/KhronosGroup/glTF-Sample-Models/raw/master/2.0/DamagedHelmet/screenshot/screenshot_large.jpg",
        status: "READY",
        tags: ["3D", "Robot", "Hard Surface"],
        tools: ["Maya", "Substance"],
        createdAt: new Date(Date.now() - 172800000).toISOString(),
        creator: MOCK_USER,
        likes: 45,
        shares: 200,
        views: 15000
    },
];
