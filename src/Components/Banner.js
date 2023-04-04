import React, { useState, useEffect, useCallback } from "react";
import Slider from "react-slick";
import  client from "../client";

const Banner = () => {
  const [slides, setSlides] = useState([]);

  const cleanUpBannerApi = useCallback((rawdata) => {
    const cleanfields = rawdata.map((item) => {
      const { sys, fields } = item;
      const { id } = sys;
      const bannerurl = fields.bannerImg.fields.file.url;
      const updatedfields = { id, bannerurl };
      return updatedfields;
    });
    setSlides(cleanfields);
  }, []);

  const getBanners = useCallback(async () => {
    try {
      const response = await client.getEntries({ content_type: "banner" });
      const responseData = response.items.reverse();
      if (responseData) {
        cleanUpBannerApi(responseData);
      } else {
        setSlides([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [cleanUpBannerApi]);

  useEffect(() => {
    getBanners();
  }, [getBanners]);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="banner-section">
        <div className="banner-wrapper">
          <div className="banner-slider-folder">
            <Slider {...settings}>
              {slides.map((slide, index) => {
                return (
                  <div key={index}>
                    <div className="banner-slider-image">
                      <img src={slide.bannerurl} alt="banner"/>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
