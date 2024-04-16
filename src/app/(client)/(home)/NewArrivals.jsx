import ArraivalCard from "@/components/card/ArraivalCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function NewArrivals() {
  return (
    <section>
      {/* Heading */}
      <h2>New Arraivals</h2>

      {/* Content Block */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mt-block">
        <CarouselContent>
          <CarouselItem><ArraivalCard /></CarouselItem>
          <CarouselItem><ArraivalCard /></CarouselItem>
          <CarouselItem><ArraivalCard /></CarouselItem>
        </CarouselContent>
      </Carousel>


    </section>
  )
}
