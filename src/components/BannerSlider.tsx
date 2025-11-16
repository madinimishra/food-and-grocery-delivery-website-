import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay@8.6.0';
import { useEffect, useState } from 'react';

const banners = [
  {
    id: 1,
    title: '50% OFF',
    subtitle: 'On your first order',
    image: 'https://images.unsplash.com/photo-1761157995805-619e86af7861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBkaXNjb3VudHxlbnwxfHx8fDE3NjIxNzc5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-[#FF8A00] to-[#FF6B00]',
  },
  {
    id: 2,
    title: 'Free Delivery',
    subtitle: 'Above ₹199',
    image: 'https://images.unsplash.com/photo-1604742763104-86a0cf0aa1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBiYXNrZXR8ZW58MXx8fHwxNzYyMTQ3OTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-[#32C96E] to-[#28A55F]',
  },
  {
    id: 3,
    title: 'Fresh Groceries',
    subtitle: 'Get 30% cashback',
    image: 'https://images.unsplash.com/photo-1670680901600-8b2b1856ce3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBncm9jZXJ5fGVufDF8fHx8MTc2MjE2MjQyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-[#6C5CE7] to-[#5849C9]',
  },
];

export function BannerSlider() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {banners.map((banner) => (
              <CarouselItem key={banner.id}>
                <div className={`relative h-72 rounded-3xl overflow-hidden bg-gradient-to-r ${banner.gradient} shadow-xl hover:shadow-2xl transition-shadow duration-300`}>
                  <div className="absolute inset-0 flex items-center justify-between px-12">
                    <div className="text-white z-10 max-w-md">
                      <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4 text-sm">
                        Limited Time Offer
                      </div>
                      <h3 className="text-6xl mb-3 drop-shadow-lg">{banner.title}</h3>
                      <p className="text-2xl opacity-95 mb-6">{banner.subtitle}</p>
                      <button className="px-8 py-3 bg-white text-gray-800 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                        Order Now
                      </button>
                    </div>
                    <div className="w-56 h-56 rounded-3xl overflow-hidden shadow-2xl opacity-50 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                      <ImageWithFallback
                        src={banner.image}
                        alt={banner.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Dots indicator */}
        <div className="flex justify-center gap-2.5 mt-6">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index ? 'bg-gradient-to-r from-[#FF8A00] to-[#32C96E] w-10' : 'bg-gray-300 w-2.5 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
