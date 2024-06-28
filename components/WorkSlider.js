import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Unity',
          path: '/pro1.png',
          githubLink: 'https://github.com/Jhonystein/unity-flappybird.git', // Tautan ke repositori GitHub proyek pertama
        },
        {
          title: 'AndroidStudio-Kotlin',
          path: '/pro2.png',
          githubLink: 'https://github.com/Jhonystein/androidstudio-kotlin-pemesananprewedding.git', // Tautan ke repositori GitHub proyek kedua
        },
        {
          title: 'Flutter',
          path: '/pro3.png',
          githubLink: 'https://github.com/Jhonystein/Cuaca.git', // Tautan ke repositori GitHub proyek ketiga
        },
        {
          title: 'Nextjs',
          path: '/pro4.png',
          githubLink: 'https://jhonystein.vercel.app/', // Tautan ke repositori GitHub proyek keempat
        },
        {
          title: 'Jajanan-Nextjs14',
          path: '/jajanan.png',
          githubLink: 'https://jajanan-store.vercel.app/', // Tautan ke repositori GitHub proyek kelima
        },
        {
          title: 'Admin-Nextjs14',
          path: '/admin.png',
          githubLink: 'https://jajanan-admin.vercel.app/', // Tautan ke repositori GitHub proyek keenam
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='overflow-y-auto h-full'>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => (
                <div
                  className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                  key={index}
                >
                  <a href={image.githubLink} target="_blank" rel="noopener noreferrer"> {/* Tautan ke repositori GitHub */}
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* Gambar */}
                      <Image src={image.path} width={500} height={300} alt='' />
                      {/* Gradasi lapisan atas */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#838cc7] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-[700ms]'></div>
                      {/* Judul */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* Bagian judul 1 */}
                          <div className='delay-100'>{image.title}</div>
                          {/* Bagian judul 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            PROJECT
                          </div>
                          {/* Ikon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
