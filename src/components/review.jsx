import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import review from "../json/review.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

// import "../css/swip.css";

// import required modules
import { Autoplay, FreeMode, Thumbs, Navigation, Pagination } from "swiper";

function Review(props) {
  function f(stars) {
    let starsDom = [];
    let free = 0;
    while (stars > 0) {
      if (stars >= 1) {
        starsDom.push(<i className="fas fa-star" key={`star${free + 1}`}></i>);
        stars--;
        free++;
      } else {
        starsDom.push(
          <i className="fas fa-star-half-alt" key={`star${free + 1}`}></i>
        );
        stars--;
        free++;
      }
    }
    for (free; free < 5; free++) {
      starsDom.push(
        <i className="fa-regular fa-star" key={`star${free + 1}`}></i>
      );
    }
    return starsDom;
  }
  const [thumbsSwiper] = useState(null);
  let reviewData = [...review];
  let slides = [];
  for (let i = 0; i < reviewData.length; i++) {
    slides.push(
      <SwiperSlide tag="li" key={`review-${i}`}>
        <i className="fas fa-quote-right"></i>
        <div className="user">
          <img
            src={`/images/${reviewData[i]["img"]}`}
            key={`image-review-${reviewData[i]["idour_dishes"]}`}
            alt=""
          />
          <div className="user-info">
            <h3>{reviewData[i]["name"]}</h3>
            <div className="stars">{f(reviewData[i]["stars"])}</div>
          </div>
        </div>
        <p>{reviewData[i]["p"]}</p>
      </SwiperSlide>
    );
  }
  return (
    <section className="review" id="review">
      <div className="section-header">
        <h3 className="sub-heading">Customers Review</h3>
        <h1 className="heading">What They Say?</h1>
      </div>
      <Swiper
        loop={true}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        slidesPerView={"auto"}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Thumbs, Pagination, Navigation]}
        className="mySwiper2"
      >
        {slides}
      </Swiper>
    </section>
  );
}

export default Review;
