import { Pagination } from "swiper"; // Import the required modules

const HeroCarousel = () => {
  // ...
  
  return (
    <div className="th-hero-wrapper hero-1" id="hero">
      <Swiper
        modules={[Pagination]} // Add the Pagination module here
        effect="fade"
        pagination={{
          clickable: true,
        }}
        className="th-slider hero-slider-1"
      >
        {/* SwiperSlide components go here */}
      </Swiper>
    </div>
  );
};
