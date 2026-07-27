export interface GalleryItem {
  id: string;
  category: "before-after" | "hair-colour" | "hair-botox" | "keratin" | "bridal" | "salon" | "video";
  image: string;
  alt: string;
  isVideo?: boolean;
}
