'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2, FiPlay } from 'react-icons/fi';
import { GalleryItem } from '@/types';
import Image from 'next/image';

interface ProjectGalleryProps {
  items: GalleryItem[];
}

export default function ProjectGallery({ items }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % items.length);
    }
  };

  const goToPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer zen-card-hover"
            onClick={() => openLightbox(index)}
          >
            {item.type === 'image' ? (
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="relative w-full h-full">
                <video
                  src={item.url}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiPlay className="w-12 h-12 text-white" />
                </div>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                {item.description && (
                  <p className="text-white/80 text-xs line-clamp-2">{item.description}</p>
                )}
              </div>
            </div>

            {/* Expand Icon */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-zen-900/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <FiMaximize2 className="w-4 h-4 text-zen-900 dark:text-zen-50" />
            </div>

            {/* Type Badge */}
            <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm">
              <span className="text-white text-xs font-mono uppercase tracking-wider">
                {item.type}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Close lightbox"
            >
              <FiX className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            {items.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                  aria-label="Previous item"
                >
                  <FiChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                  aria-label="Next item"
                >
                  <FiChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Content */}
            <div
              className="max-w-7xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={selectedIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="relative"
              >
                {items[selectedIndex].type === 'image' ? (
                  <img
                    src={items[selectedIndex].url}
                    alt={items[selectedIndex].title}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                ) : (
                  <video
                    src={items[selectedIndex].url}
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[80vh] rounded-lg"
                  />
                )}

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white font-display font-bold text-xl mb-2">
                    {items[selectedIndex].title}
                  </h3>
                  {items[selectedIndex].description && (
                    <p className="text-white/80 text-sm">
                      {items[selectedIndex].description}
                    </p>
                  )}
                  <div className="mt-2 text-white/60 text-xs font-mono">
                    {selectedIndex + 1} / {items.length}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
