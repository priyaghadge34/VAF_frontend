import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ImageWithFallback } from "../image/ImageWithFallback";

import img1 from "../../components/image/IMG_7397.jpg.jpeg";
import img2 from "../../components/image/IMG_7419.jpg.jpeg";
import img3 from "../../components/image/laal-bindi2.jpeg";
import img4 from "../../components/image/IMG_7442.jpg.jpeg";
import img5 from "../../components/image/IMG_7428.jpg.jpeg";
import img6 from "../../components/image/IMG_7426.jpg.jpeg";

export function EventGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const eventPhotos = [
    { src: img1, caption: "Women Leading the Change" },
    { src: img2, caption: "Breaking Silence Through Education" },
    { src: img3, caption: "Conversations That Spark Courage" },
    { src: img4, caption: "Empowering Young Voices" },
    { src: img5, caption: "Reaching Communities with Dignity" },
    { src: img6, caption: "Building Confidence, One Session at a Time" }
  ];

  return (
    <>
      <section
        ref={ref}
        className="min-h-screen flex items-center justify-center px-6 md:px-12 py-14 md:py-18 bg-[#E8E4DF]"
      >
        <div className="max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-14"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#2B2826] mb-5 leading-tight">
              Moments of{" "}
              <span className="italic text-[#8B3A3A]">Impact</span>
            </h2>
            <p className="text-lg md:text-xl text-[#736D6A] max-w-xl mx-auto">
              Glimpses from our awareness sessions and community workshops.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {eventPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => setSelectedImage(index)}
                className="group cursor-pointer relative overflow-hidden rounded-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-[260px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-400 flex items-end p-4">
                    <p className="text-white text-lg">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-[#736D6A] italic">
              Every image tells a story of courage and collective strength.
            </p>
          </motion.div>
        </div>
      </section>

      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 md:p-6"
        >
          <motion.div
            initial={{ scale: 0.92 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <ImageWithFallback
              src={eventPhotos[selectedImage].src}
              alt={eventPhotos[selectedImage].caption}
              className="w-full max-h-[85vh] object-contain rounded-md"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-5">
              <p className="text-white text-xl">
                {eventPhotos[selectedImage].caption}
              </p>
            </div>

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white text-xl transition"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}