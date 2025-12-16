
# KALAMESH — PORTFOLIO FEATURE
## FRONTEND DEVELOPMENT DOCUMENT (v1.0)

---

## 1. PURPOSE

This document defines the **frontend-first development specification** for the Portfolio feature of Kalamesh.
It is written to be used directly by frontend engineers while staying fully compatible with future features such as marketplace, jobs, certifications, competitions, and monetization.

---

## 2. PRODUCT GOAL

The Portfolio feature enables creators to:
- Create a professional public profile
- Upload and manage artworks (2D, video, limited 3D)
- Showcase work with industry-ready presentation
- Share a public portfolio link
- Act as the foundation for future monetization and hiring features

---

## 3. SUPPORTED MEDIA (PHASE 1)

| Media Type | Support |
|----------|--------|
| Images (JPG, PNG, WEBP) | Yes |
| Videos (MP4) | Yes |
| 3D Models (GLB) | View-only |
| Multiple media per artwork | No (Phase 2) |

---

## 4. FRONTEND STACK (LOCKED)

- React + Vite
- TypeScript
- Tailwind CSS
- TanStack Query
- Zustand
- React Router
- Three.js (viewer only)

---

## 5. ROUTES & INFORMATION ARCHITECTURE

/login  
/register  
/upload  
/profile/:username  
/artwork/:artworkId  
/settings/profile  

---

## 6. USER FLOWS

### New User Flow
Register → Create Profile → Upload Artwork → View Public Portfolio → Share Link

### Returning User Flow
Login → Profile Dashboard → Add / Edit Artwork → Track Processing Status

---

## 7. PAGE SPECIFICATIONS

### 7.1 Profile Page (/profile/:username)

**Purpose:** Public-facing portfolio

**Sections**
- Profile Header
- Bio
- Skills / Tools
- Portfolio Grid
- Future CTAs (Hire, Buy, Compete)

**Components**
- ProfileHeader
- ProfileBio
- SkillTags
- PortfolioGrid
- ArtworkCard

---

### 7.2 Upload Page (/upload)

**Purpose:** Upload new artwork

**Steps**
1. Select media
2. Enter details
3. Upload progress
4. Processing state
5. Confirmation

**Fields**
- Title (required)
- Description
- Tags
- Tools used
- Visibility (public/private)

---

### 7.3 Artwork Detail Page (/artwork/:id)

**Purpose:** Single artwork showcase

**Viewer Logic**
- Image → ImageViewer
- Video → VideoPlayer
- 3D → ThreeJSViewer

---

## 8. COMPONENT STRUCTURE

components/
- profile/
- artwork/
- upload/
- media/

---

## 9. STATE MANAGEMENT

**Server State**
- TanStack Query
- Cached queries
- Background refetch

**Client State**
- Auth
- Upload progress
- UI toggles

---

## 10. DATA CONTRACT (ARTWORK)

```ts
{
  id: string
  title: string
  description: string
  mediaType: "IMAGE" | "VIDEO" | "MODEL"
  mediaUrl: string
  thumbnailUrl: string
  status: "UPLOADING" | "PROCESSING" | "READY"
  tags: string[]
  tools: string[]
  createdAt: string
}
```

---

## 11. UPLOAD UX RULES

- Always show progress
- Allow navigation during processing
- Show processing placeholders
- Never block the UI

---

## 12. PERFORMANCE RULES

- Lazy loading
- Skeleton loaders
- Responsive grid
- No blocking loaders

---

## 13. FUTURE COMPATIBILITY RULES

UI must support:
- Paid content
- Badges & certifications
- Job CTAs
- Marketplace overlays
- Competition ribbons

---

## 14. ERROR HANDLING

| Scenario | Action |
|-------|--------|
| Upload failed | Retry |
| Processing failed | Warning state |
| Unsupported media | Block upload |
| Network error | Toast + retry |

---

## 15. NON-GOALS (PHASE 1)

- Messaging
- Payments
- Analytics
- WebSockets
- AI moderation

---

## 16. DELIVERY CHECKLIST

- Public portfolio page
- Upload workflow
- Artwork viewer
- Profile editing
- Shareable links

---

## 17. FINAL NOTE

The portfolio feature is the **core foundation of Kalamesh**.
All future features must extend this without refactoring the base architecture.
