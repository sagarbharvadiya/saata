import React, { useState, useEffect, useCallback } from "react";
import { client } from "../client";

const HistoryOrigin = () => {
  const [info, setInfo] = useState([]);

  const cleanUpInfo = useCallback((rawdata) => {
    const cleaninfo = rawdata.map((item) => {
      const { sys, fields } = item;
      const { id } = sys;
      const Title = fields.title;
      const description = fields.description;
      const updateInfo = {id, Title, description};
      return updateInfo;
    });
    setInfo(cleaninfo);
  }, []);

  const getInfo = useCallback(async () => {
    try {
      const response = await client.getEntries({ content_type: "historyOfSatta" });
      const responseData = response.items;
      console.log(responseData)
      if (responseData) {
        cleanUpInfo(responseData);
      } else {
        setInfo([]);
      }
    } catch (error) {
      console.log(error);
    }
  },[cleanUpInfo]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);
  return (
    <>
     {info.map((item, index) => {
        return (
          <>
            <div className="about_us history_origin">
              <div className="about_us_wrapper">
              <h2>{item.Title}</h2>
              </div>
              <div className="aboutus_parent">
              {/* <div className="about_us_img">
                <h3>{item.subTitle}</h3>
              </div> */}
              <div className="about_us_content">
               
                <p>{item.description}</p>
              </div>
              </div>
             
            </div>
          </>
        );
      })}
      
    </>
  )
}

export default HistoryOrigin