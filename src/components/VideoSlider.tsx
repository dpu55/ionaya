import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence, motion, PanInfo, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const slides = [
  {
    type: "video",
    desktop: "a5282f80e6c88b0429f9a3f58c49c8e5",
    mobile: "fb8f0b321ef95968348f1840141fdd21",
  },
  {
    type: "video",
    desktop: "079bf5a6b7cf357e97b8af1e2dd72473",
    mobile: "039517e93340d355de42b3566414dcb3",
  },
  {
    type: "video",
    desktop: "859c5a3ffc1f4a88ef77e943041f0155",
    mobile: "1a5f2ddb966286c788141450bb59d4b1",
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
  animate: { x: 0, opacity: 1 },
  exit: (dir: "left" | "right") => ({
    x: dir === "right" ? 300 : -300,
    opacity: 0,
  }),
};

declare global {
  interface Window {
    Stream?: (iframe: HTMLIFrameElement) => CloudflarePlayer;
  }
}

interface CloudflarePlayer {
  addEventListener: (event: string, handler: () => void) => void;
  removeEventListener: (event: string, handler: () => void) => void;
}

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
    if (info.offset.x < -50) handleNext();
    else if (info.offset.x > 50) handlePrev();
  };

  const current = slides[currentIndex];
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    let player: CloudflarePlayer | undefined;

    const setupPlayer = () => {
      if (current.type === "video" && iframeRef.current && window.Stream) {
        player = window.Stream(iframeRef.current);
        player.addEventListener("ended", handleNext);
      }
    };

    const timer = setTimeout(setupPlayer, 1000);

    return () => {
      clearTimeout(timer);
      if (player) player.removeEventListener("ended", handleNext);
    };
  }, [currentIndex, current.type]);

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
                  <div className="hidden md:block absolute top-0 -left-0 w-full h-full overflow-hidden">
                    <iframe
                      key={`desktop-${currentIndex}`}
                      ref={iframeRef}
                      src={`https://customer-cd95u9cxbeh5szoe.cloudflarestream.com/${current.desktop}/iframe?autoplay=true&controls=false&muted=true`}
                      style={{
                        border: "none", position: "absolute", top: "50%", left: "50%",
                        width: "177.77vh", // (16/9 aspect ratio dalam persen vertikal tinggi layar)
                        height: "56.25vw", // (16/9 aspect ratio dalam persen horizontal lebar layar)
                        transform: "translate(-50%, -50%)",
                        minHeight: "100%",
                        minWidth: "100%",
                      }}
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Mobile Video + Indicator (Wrapped) */}
                  <div className="block md:hidden w-full relative aspect-[9/16] overflow-hidden">
                    <iframe
                      ref={iframeRef}
                      src={`https://customer-cd95u9cxbeh5szoe.cloudflarestream.com/${current.mobile}/iframe?autoplay=true&controls=false&muted=true`}
                      className="absolute top-0 left-0 w-full h-full"
                      loading="lazy"
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      allowFullScreen
                    ></iframe>

                    {/* Mobile Indicator */}
                    {/* <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
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
                    </div> */}
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
                  <Image
                    src={current.mobile}
                    alt="Slide"
                    width={720}
                    height={1280}
                    className="block md:hidden w-full h-full object-contain"
                  />
                </>
              )}

              {/* Slide Indicators */}
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="hidden md:block">
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200 hover:text-gray-400 hover:scale-110 transition z-10"
          >
            <FaChevronLeft size={32} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-200 hover:text-gray-400 hover:scale-110 transition z-10"
          >
            <FaChevronRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
