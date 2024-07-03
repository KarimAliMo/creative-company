import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { featuresSlide } from "@/lib/interface";
import Autoplay from "embla-carousel-autoplay";
import SVG from "react-inlinesvg";

const SliderFeatures = (props: [{}]) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {props.map((item: any, index) => {
          return (
            <CarouselItem key={index}>
              <div>
                <SVG src={item.svg} />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SliderFeatures;
