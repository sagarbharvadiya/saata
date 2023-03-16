import React, { useState, useEffect, useCallback } from "react";
import client from "../client";

const AboutUs = () => {
  const [aboutus, setAboutus] = useState([]);

  const cleanUpInfo = useCallback((rawdata) => {
    const cleaninfo = rawdata.map((item) => {
      const { sys, fields } = item;
      const { id } = sys;
      const aboutusTitle = fields.title;
      const aboutusDesc = fields.description;
      const aboutusImage = fields.aboutUsImg.fields.file.url;
      const updatedInfo = { id, aboutusTitle, aboutusImage, aboutusDesc};
      return updatedInfo;
    });
    setAboutus(cleaninfo);
  }, []);

  const getInfo = useCallback(async () => {
    try {
      const response = await client.getEntries({ content_type: "aboutUs" });
      const responseData = response.items;
      console.log(responseData);
      if (responseData) {
        cleanUpInfo(responseData);
      } else {
        setAboutus([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [cleanUpInfo]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <>
      {aboutus.map((item, index) => {
        return (
         
          <>
            <div className="about_us">
              <div className="about_us_wrapper">
              <h2>{item.aboutusTitle}</h2>
              </div>
              <div className="aboutus_parent">
              <div className="about_us_img">
                <img src={item.aboutusImage} alt={item.aboutusImage} />
              </div>
              <div className="about_us_content">
                <p>{item.aboutusDesc}</p>
              </div>
              </div>
             
            </div>
          </>
        );
      })}
    </>
  );
};

export default AboutUs;