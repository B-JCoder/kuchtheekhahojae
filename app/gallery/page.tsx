import { PlayCircle } from "lucide-react";
import { Metadata } from "next";
import PageHero from "@/components/sections/Pageshero";

export const metadata: Metadata = {
  title: "Gallery | Hygienic Golgappe & Pani Puri Karachi",
  description:
    "View our hygienic golgappe, mineral water pani puri & live stalls in Karachi. Premium packaging & authentic taste.",
};

export default function GalleryPage() {
  const videos = [
    "/videos/btsvideo.mp4",
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video4.mp4",
  ];

  return (
    <div className="min-h-screen bg-brand-offwhite pb-20">
      <PageHero
        badge="Our Delicious Moments"
        title="Food"
        highlighted="Gallery"
        description="Explore our hygienic golgappas, premium packaging, happy customers, and behind-the-scenes preparation moments."
        image="/bgremoveimages/4.png"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {videos.map((vid, idx) => (
            <div
              key={idx}
              className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[9/16] bg-black rounded-xl overflow-hidden group">
                <video
                  controls
                  className="w-full h-full object-cover"
                  playsInline
                  preload="metadata"
                >
                  <source src={vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="font-bold text-base text-brand-dark">
                  Moment #{idx + 1}
                </h3>
                <div className="flex items-center text-brand-red text-xs font-medium">
                  <PlayCircle className="w-3 h-3 mr-1" />
                  Watch
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Stories */}
      </div>
    </div>
  );
}
