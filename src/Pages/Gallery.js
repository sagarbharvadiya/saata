import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import { client } from "../client";
import itta_image1 from "../Images/itta-image1.png";
import itta_image2 from "../Images/itta-image1.png";
import itta_image3 from "../Images/itta-image1.png";
import itta_image4 from "../Images/itta-image1.png";
import south_asian_image1 from "../Images/itta-image1.png";
import south_asian_image2 from "../Images/itta-image1.png";
import south_asian_image3 from "../Images/itta-image1.png";
import south_asian_image4 from "../Images/itta-image1.png";

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

  const southsettings = {
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

  const [slides, setSlides] = useState([]);

  const cleanUpBannerApi = useCallback((rawdata) => {
    const cleanfields = rawdata.map((item, index) => {
      const { sys, fields } = item;
      const { id } = sys;
      
    });
    setSlides(cleanfields);
  }, []);

  const getBanners = useCallback(async () => {
    try {
      const response = await client.getEntries({ content_type: "gallery" });
      const responseData = response.items.reverse();
      console.log(responseData);
      // if (responseData) {
      //   cleanUpBannerApi(responseData);
      // } else {
      //   setSlides([]);
      // }
    } catch (error) {
      console.log(error);
    }
  }, [cleanUpBannerApi]);

  useEffect(() => {
    getBanners();
  }, [getBanners]);

  return (
    <>
      <div className="gallery-section">
        <div className="gallery-wrapper">
          <div className="gallery-slider-folder">
            <Slider {...settings}>
              <div>
                <div className="gallery-slider-image">
                  <iframe
                    src="https://www.youtube.com/embed/UfDkwAJ6rrU"
                    title="SAATA  - MLL 2023  -  Panel Discussion -  Professional Identity"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                    id="fitvid997884"
                  ></iframe>
                </div>
              </div>
              <div>
                <div className="gallery-slider-image">
                  <iframe
                    src="https://www.youtube.com/embed/YFqCDHXOMsY"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                    id="fitvid997884"
                  ></iframe>
                </div>
              </div>
            </Slider>
          </div>
          <div className="ITAA-The-Dance-of-Culture-container">
            <h2>ITAA - SAATA Conference 2018 - The Dance of Culture</h2>
            <div className="ITAA-The-Dance-of-Culture-folder">
              <Slider {...itaasettings}>
                <div>
                  <div className="ITAA-The-Dance-of-Culture-image">
                    <img src={itta_image1} alt={itta_image1} />
                  </div>
                </div>
                <div>
                  <div className="ITAA-The-Dance-of-Culture-image">
                    <img src={itta_image2} alt={itta_image2} />
                  </div>
                </div>
                <div>
                  <div className="ITAA-The-Dance-of-Culture-image">
                    <img src={itta_image3} alt={itta_image3} />
                  </div>
                </div>
                <div>
                  <div className="ITAA-The-Dance-of-Culture-image">
                    <img src={itta_image4} alt={itta_image4} />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="gallery-South-Asian-Association-container">
            <h2>
              South Asian Association of Transactional Analysts Conference
              September 2016
            </h2>
            <div className="gallery-South-Asian-Association-folder">
              <Slider {...southsettings}>
                <div>
                  <div className="gallery-South-Asian-Association-image">
                    <img src={south_asian_image1} alt={south_asian_image1} />
                  </div>
                </div>
                <div>
                  <div className="gallery-South-Asian-Association-image">
                    <img src={south_asian_image2} alt={south_asian_image2} />
                  </div>
                </div>
                <div>
                  <div className="gallery-South-Asian-Association-image">
                    <img src={south_asian_image3} alt={south_asian_image3} />
                  </div>
                </div>
                <div>
                  <div className="gallery-South-Asian-Association-image">
                    <img src={south_asian_image4} alt={south_asian_image4} />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;

