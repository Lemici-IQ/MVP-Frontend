import { IKImage } from "imagekitio-react";

const Hero = ({ data }) => {
  const logos = data?.topBrandLogos || [];
  const totalLogos = logos.length;
  const middleIndex = Math.floor(totalLogos / 2);

  return (
    <div className="flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-3 lg:gap-4 flex-wrap px-2">
      {logos.map((brand, i) => {
        const distanceFromMiddle = Math.abs(i - middleIndex);

        const sizes = {
          0: "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20",
          1: "w-11 h-11 sm:w-14 sm:h-14 lg:w-18 lg:h-18",
          2: "w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16",
          3: "w-9 h-9 sm:w-10 sm:h-10 lg:w-14 lg:h-14",
        };

        const sizeClass =
          sizes[distanceFromMiddle] ||
          "w-9 h-9 sm:w-10 sm:h-10 lg:w-14 lg:h-14";

        return (
          <div
            key={brand.brandId}
            className={`${sizeClass} rounded-full bg-white shadow-md flex items-center justify-center p-2 sm:p-3 hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95`}
            title={brand.name}
          >
            <IKImage
              urlEndpoint="https://ik.imagekit.io/lemici"
              src={brand.logo.url}
              alt={brand.logo.alt}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
