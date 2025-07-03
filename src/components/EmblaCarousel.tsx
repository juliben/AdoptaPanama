import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

type Props = {
  slides: string[];
};

export function EmblaCarousel({ slides }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  if (!slides) {
    return null;
  }

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(); // Initialize on mount
  }, [emblaApi]);

  return (
    <>
      <div
        className="overflow-hidden sm:w-[90vh] sm:rounded-3xl"
        ref={emblaRef}
      >
        <div className="flex h-[54vh] sm:h-[70vh] w-screen sm:w-[100%]">
          {slides.map((slide, index) => (
            <div className="min-w-full min-h-full flex-center" key={index}>
              <img
                src={slide}
                alt={`Slide ${index}`}
                className="min-w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === selectedIndex ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
}
