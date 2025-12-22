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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

                {/* Photo Gallery Grid */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">Fan Moments</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-100">Photo 1</div>
                        </div>
                        <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden relative group md:col-span-2 md:row-span-2">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-100">Featured Photo</div>
                        </div>
                        <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-100">Photo 2</div>
                        </div>
                        <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-100">Photo 3</div>
                        </div>
                        <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-100">Photo 4</div>
                        </div>
                    </div>
                </div>

                {/* Customer Stories */}
                <div className="bg-brand-yellow/10 rounded-3xl p-8 md:p-16 text-center">
                    <h2 className="text-3xl font-bold text-brand-dark mb-8">Stories from the Streets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="font-bold text-xl mb-3 text-brand-red">"The Wedding Saver"</h3>
                            <p className="text-gray-700 mb-4">
                                "We had a last-minute cancellation for our dessert stall at my brother's mehndi. Kuch Theek Ho Jae stepped in with their live setup within 24 hours. Honestly, it was a bigger hit than the dessert would have been!"
                            </p>
                            <p className="text-sm font-bold text-gray-500">- Mariam K.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="font-bold text-xl mb-3 text-brand-red">"Pregnancy Craving Fixed"</h3>
                            <p className="text-gray-700 mb-4">
                                "I was craving Golgappas at 1 AM but was scared of hygiene issues. My husband found this page, and the frozen packs are a lifesaver. Now I make them fresh whenever I want!"
                            </p>
                            <p className="text-sm font-bold text-gray-500">- Hina T.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
