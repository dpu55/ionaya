import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const videos = [
  {
    desktop: "/videos/video1.mp4",
    mobile: "/videos/video1-mobile.mp4",
  },
  {
    desktop: "/videos/video2.mp4",
    mobile: "/videos/video2-mobile.mp4",
  },
];

const VideoSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const handleSwipe = (info: any) => {
    const swipe = info.offset.x;

    if (swipe < -50) {
      handleNext();
    } else if (swipe > 50) {
      handlePrev();
    }
  };

  return (
    <div id="hero-video" className="w-full h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => handleSwipe(info)}
        >
          {/* Desktop Video */}
          <video
            className="hidden md:block w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            onEnded={handleNext}
            src={videos[currentIndex].desktop}
          />

          {/* Mobile Video */}
          <video
            className="block md:hidden w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            onEnded={handleNext}
            src={videos[currentIndex].mobile}
          />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200 hover:text-gray-400 hover:scale-120 transition-all duration-300 ease-in-out z-10"
      >
        <FaChevronLeft size={32} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-200 hover:text-gray-400 hover:scale-120 transition-all duration-300 ease-in-out z-10"
      >
        <FaChevronRight size={32} />
      </button>


      {/* Slider Indicators (pill style) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 ease-in-out h-2 rounded-full ${idx === currentIndex
                ? "w-8 bg-white"
                : "w-4 bg-gray-400 bg-opacity-50 hover:bg-opacity-80"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
