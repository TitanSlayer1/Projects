"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Slider() {
  const imgUrl = ["/slider1.jpg", "/slider2.jpg", "/slider3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgUrl.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [imgUrl.length]);

  return (
    <Carousel>
      <CarouselContent>
        {imgUrl.map((url, index) => (
          <CarouselItem
            key={index}
            className={index === currentIndex ? "active" : "hidden"}
          >
            <Image
              src={url}
              alt="sliders"
              width={1000}
              height={400}
              className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious onClick={() => setCurrentIndex((currentIndex - 1 + imgUrl.length) % imgUrl.length)} />
      <CarouselNext onClick={() => setCurrentIndex((currentIndex + 1) % imgUrl.length)} />
    </Carousel>
  );
}

export default Slider;