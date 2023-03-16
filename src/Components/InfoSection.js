import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import  client  from "../client";
// import AboutUs from "./AboutUs";

const InfoSection = () => {
  const [info, setInfo] = useState([]);

  const cleanUpInfo = useCallback((rawdata) => {
    const cleaninfo = rawdata.map((item) => {
      const { sys, fields } = item;
      const { id } = sys;
      const infoTitle = fields.title;
      const link = fields.link;
      const infoDesc = fields.description;
      const updatedInfo = { id, infoTitle, infoDesc, link };
      return updatedInfo;
    });
    setInfo(cleaninfo);
  }, []);

  const getInfo = useCallback(async () => {
    try {
      const response = await client.getEntries({ content_type: "infoSection" });
      const responseData = response.items.reverse();
      // console.log(response)
      if (responseData) {
        cleanUpInfo(responseData);
      } else {
        setInfo([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [cleanUpInfo]);

  //loads the data upon reload
  useEffect(() => {
    getInfo();
  }, [getInfo]);

  // console.log(info);

  return (
    <div className="main-container">
      {info.map((item, index) => {
        return (
          <div className="info-container" key={index}>
            <div className="info-body">
              <h2 className="info-title">{item.infoTitle}</h2>
              <p className="info-desc">{item.infoDesc}</p>
             <Link to={item.link}> <button className="read-more">Read More</button></Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InfoSection;
