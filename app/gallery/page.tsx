import { PlayCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Gallery | Kuch Theek Ho Jae",
    description: "See the crunch in action! Watch videos of our hygienic Golgappa preparation and happy customer reviews.",
};

export default function GalleryPage() {
    const videos = [
        '/videos/btsvideo.mp4',
        '/videos/video1.mp4',
        '/videos/video2.mp4',
        '/videos/video4.mp4',
    ];

    return (
        <div className="min-h-screen bg-brand-offwhite pb-20">
            <div className="bg-brand-dark py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Gallery</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        See the crunch in action! Check out our behind-the-scenes and customer moments.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.map((vid, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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
                                <h3 className="font-bold text-base text-brand-dark">Moment #{idx + 1}</h3>
                                <div className="flex items-center text-brand-red text-xs font-medium">
                                    <PlayCircle className="w-3 h-3 mr-1" />
                                    Watch
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
