"use client";

import { useState, useRef, useEffect } from "react";

const videos = [
  { src: "/videos/revievv_3d.mp4", label: "3D Model" },
  { src: "/videos/revievv-pdf.mp4", label: "PDF" },
  { src: "/videos/revievv-image.mp4", label: "Image" },
];

export function HeroVideo() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    video.play();

    const handleEnded = () => {
      setActive((prev) => (prev + 1) % videos.length);
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [active]);

  return (
    <div className="mx-auto mt-16 max-w-4xl">
      <div className="rounded-xl border bg-muted/50 p-2 sm:p-3">
        <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
            muted
            playsInline
            autoPlay
          >
            <source src={videos[active].src} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {videos.map((video, i) => (
          <button
            key={video.label}
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              i === active
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {video.label}
          </button>
        ))}
      </div>
    </div>
  );
}
