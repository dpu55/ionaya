import React from "react";

const VideoSlider: React.FC = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="hidden md:block w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/video1.mp4" // ✅ Show only one video
      />
      {/* Video for Mobile */}
      <video
        className="block md:hidden w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/video1-mobile.mp4" // ✅ 9:16 Video for Mobile
      />  

    </div>
  );
};

export default VideoSlider;
