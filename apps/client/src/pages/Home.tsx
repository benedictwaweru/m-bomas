/**---------------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License.
 * See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------*/

import { Flame } from 'lucide-react';

import { DisplayPropertyCard } from '@/components/common/DisplayCard';

import { Header } from '@/components/common/Header';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Home() {
  return (
    <>
      <Header />
      <main className='m-32'>
        <section className="flex justify-between items-center w-full p-2">
          <h4 className="text-orange-500 flex items-center p-2">
            <Flame />
            HOT DEALS
          </h4>
        </section>
        <section className='w-full'>
          <Carousel
            opts={{
              align: 'start',
            }}
            className=""
          >
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <DisplayPropertyCard image="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <DisplayPropertyCard image="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <DisplayPropertyCard image="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <DisplayPropertyCard image="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section className="flex justify-between items-center w-full p-2">
          <h4>Recommended for you</h4>
        </section>
      </main>
    </>
  );
}
