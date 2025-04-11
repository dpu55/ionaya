import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence, motion, PanInfo, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const slides = [
  {
    type: "video",
    desktop: "/videos/video1.mp4",
    mobile: "/videos/video1-mobile.mp4",
  },
  {
    type: "video",
    desktop: "/videos/video2.mp4",
    mobile: "/videos/video2-mobile.mp4",
  },
  {
    type: "video",
    desktop: "/videos/video3.mp4",
    mobile: "/videos/video3-mobile.mp4",
  },
  /* {
    type: "image",
    desktop: "/images/slider1-desktop.jpg",
    mobile: "/images/slider1-mobile.jpg",
  }, */
];

const slideVariants: Variants = {
  initial: (dir: "left" | "right") => ({
    x: dir === "right" ? -300 : 300,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: "left" | "right") => ({
    x: dir === "right" ? 300 : -300,
    opacity: 0,
  }),
};

const VideoSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const { ref, inView } = useInView({ triggerOnce: false });

  const handlePrev = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleSwipe = (info: PanInfo) => {
    const swipe = info.offset.x;
    if (swipe < -50) {
      handleNext();
    } else if (swipe > 50) {
      handlePrev();
    }
  };

  const current = slides[currentIndex];

  return (
    <div id="hero-video" className="w-full relative bg-white">
      <div className="w-full min-h-screen relative overflow-hidden" ref={ref}>
        <AnimatePresence mode="wait" custom={direction}>
          {inView && (
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full absolute top-0 left-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => handleSwipe(info)}
            >
              {current.type === "video" ? (
                <>
                  {/* Desktop Video */}
                  <video
                    className="hidden md:block w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleNext}
                    preload="metadata"
                    onClick={(e) => {
                      const vid = e.currentTarget;
                      if (vid.paused) {
                        vid.play();
                      } else {
                        vid.pause();
                      }
                    }}
                    onContextMenu={(e) => e.preventDefault()}
                    disablePictureInPicture
                    controlsList="nodownload"
                    src={current.desktop}
                  />

                  {/* Mobile Video + Indicator (Wrapped) */}
                  <div className="block md:hidden w-full relative">
                    <video
                      className="w-full h-full object-contain"
                      autoPlay
                      muted
                      playsInline
                      preload="metadata"
                      onEnded={handleNext}
                      onClick={(e) => {
                        const vid = e.currentTarget;
                        if (vid.paused) {
                          vid.play();
                        } else {
                          vid.pause();
                        }
                      }}
                      onTouchStart={(e) => {
                        const vid = e.currentTarget;
                        vid.pause(); // ✅ function call
                      }}
                      onTouchEnd={(e) => {
                        const vid = e.currentTarget;
                        vid.play(); // ✅ function call
                      }}
                      onContextMenu={(e) => {
                        e.preventDefault(); // ✅ panggil fungsi
                      }}
                      disablePictureInPicture
                      controlsList="nodownload"
                      src={current.mobile}
                    />

                    {/* Mobile Indicator */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                      {slides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`transition-all duration-300 ease-in-out h-2 rounded-full ${idx === currentIndex
                              ? "w-8 bg-blue-200"
                              : "w-4 bg-gray-400 bg-opacity-50 hover:bg-opacity-80"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Desktop Image */}
                  <Image
                    src={current.desktop}
                    alt="Slide"
                    width={1920}
                    height={1080}
                    className="hidden md:block w-full h-full object-cover"
                  />

                  {/* Mobile Image */}
                  <div className="block md:hidden w-full h-full relative">
                    <Image
                      src={current.mobile}
                      alt="Slide"
                      width={720}
                      height={1280}
                      className="w-full h-full object-contain"
                    />
                    {/* Mobile Indicator */}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                      {slides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`transition-all duration-300 ease-in-out h-2 rounded-full ${idx === currentIndex
                              ? "w-8 bg-blue-200"
                              : "w-4 bg-gray-400 bg-opacity-50 hover:bg-opacity-80"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Arrows - desktop only */}
      <div className="hidden md:block">
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200 hover:text-gray-400 hover:scale-110 transition-all duration-300 ease-in-out z-10"
        >
          <FaChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-200 hover:text-gray-400 hover:scale-110 transition-all duration-300 ease-in-out z-10"
        >
          <FaChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default VideoSlider;
