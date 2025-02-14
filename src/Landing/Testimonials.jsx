import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Vyshnavi',
    role: 'Student',
    image: 'https://res.cloudinary.com/dmdiia2yv/image/upload/v1738604473/vyshnavi_isfb0c.jpg',
    content: 'The AI course has been an eye-opener for me. The interactive sessions and real-world projects helped me gain practical knowledge that I could apply directly in my career.',
    rating: 5, 
  },
  {
    name: 'Siri Chandana',
    role: 'Student',
    image: 'https://res.cloudinary.com/dmdiia2yv/image/upload/v1738604454/siri_chandana_hu24n7.jpg',
    content: 'EduWedo’s partnership program has revolutionized the way we approach technology education. It has bridged the gap between theory and practice, leading to more engaged and prepared students.',
    rating: 5, 
  },
  {
    name: 'Pranavi',
    role: 'Student',
    image: 'https://res.cloudinary.com/dzymyjltu/image/upload/v1738604827/WhatsApp_Image_2025-02-03_at_23.16.45_88a860de_pgp8in.jpg',
    content: 'Being a student on this platform has been a fantastic experience. The support system for learners is amazing, and the resources available for studying have helped me engage with the material in more innovative ways.',
    rating: 4, 
  },
  {
    name: 'Sahithi',
    role: 'Student',
    image: 'https://res.cloudinary.com/dmdiia2yv/image/upload/v1738604440/sahithi_vszraa.jpg',
    content: 'I’ve learned so much through the mentorship and peer feedback provided here. It’s not just about the lessons, but the community and growth opportunities that have made the biggest difference in my learning journey.',
    rating: 5, 
  },
  {
    name: 'Afsha Naaz',
    role: 'Student',
    image: 'https://res.cloudinary.com/dmdiia2yv/image/upload/v1738604728/afsha_kf1cz0.jpg',
    content: 'The hands-on approach in this course was crucial to my development. I was able to apply theoretical concepts to real-world problems, and this boosted my confidence and skill set immensely.',
    rating: 4, 
  },
  {
    name: 'Srujana',
    role: 'Student',
    image: 'https://res.cloudinary.com/dmdiia2yv/image/upload/v1738604735/srujana_kvtynj.jpg',
    content: 'The flexibility of the platform allowed me to balance work and studies seamlessly. I’ve gained new skills and advanced my career thanks to the opportunities EduWedo provided. Highly recommend!',
    rating: 4, 
  },
];


const loopedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What Our Community Says
        </h2>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (320 + 32)}px)`,
              width: `${loopedTestimonials.length * (320 + 32)}px`,
            }}
          >
            {loopedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="w-80 flex-shrink-0 mx-4"
              >
                <div className="bg-gray-50 p-6 rounded-lg h-[400px] relative">
                  {/* Dynamically generate stars based on rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i + 10} className="h-5 w-5 text-gray-300" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-16">{testimonial.content}</p>
                  <div className="absolute bottom-14 left-6 right-6">
                    <div className="flex items-center space-x-3 border-t pt-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}