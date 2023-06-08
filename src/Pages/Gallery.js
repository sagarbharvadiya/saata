import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import client from "../client";

function Gallery() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: false,
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

  const itaasettings = {
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "2px",
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToShow: 3,
          slidesToScroll: 3,
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

  const [slides, setSlides] = useState([]);

  const cleanUpGalleryApi = useCallback((rawdata) => {
    const cleanfields = rawdata.map((item) => {
      const { fields } = item;
      
      const galleryImages = fields.galleryImages;
      const images = galleryImages.map((image) => {
        const imageurl = image.fields.file.url;
        return imageurl;
      });
      return images;
    });
    setSlides(cleanfields.flat());
  }, []);

  const getGallery = useCallback(async () => {
    try {
      const response = await client.getEntries({ content_type: "gallery" });
      const responseData = response.items;
      if (responseData) {
        cleanUpGalleryApi(responseData);
      } else {
        setSlides([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [cleanUpGalleryApi]);

  useEffect(() => {
    getGallery();
  }, [getGallery]);

  return (
    <div className="gallery-section">
      <div className="gallery-wrapper">
        <div className="ITAA-The-Dance-of-Culture-container">
          <h2>ITAA - SAATA Conference 2018 - The Dance of Culture</h2>
          <div className="ITAA-The-Dance-of-Culture-folder">
            <Slider {...itaasettings}>
              {slides.map((url, index) => (
                <div className="ITAA-The-Dance-of-Culture-image" key={index}>
                  <img src={url} alt={`Slide ${index}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="gallery-South-Asian-Association-container">
          <h2>
            South Asian Association of Transactional Analysts Conference
            September 2016
          </h2>
          <Slider {...itaasettings}>
            {slides.map((url, index) => (
              <div className="ITAA-The-Dance-of-Culture-image" key={index}>
                <img src={url} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
