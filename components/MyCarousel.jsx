import productPhotos from "@/pages/api/productPhotos";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function MyCarousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel]);

  return (
    <>
      <motion.div ref={carousel} className="mt-14 carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          {productPhotos.map((productPhoto) => {
            return (
              <motion.div key={productPhoto.id} className="item">
                <Image
                  src={productPhoto.imgLink}
                  alt={productPhoto.alt}
                  width={700}
                  height={700}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}
