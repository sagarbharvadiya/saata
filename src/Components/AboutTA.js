import React, { useState, useEffect, useCallback } from "react";
import { client } from "../client";

const AboutTA = () => {
  const [info, setInfo] = useState([]);

  const cleanUpInfo = useCallback((rawdata) => {
    const cleaninfo = rawdata.map((item) => {
      const { sys, fields } = item;
      const { id } = sys;
      const Title = fields.title;
      const subTitle = fields.subTitle;
      const description = fields.description;
      const updateInfo = {id, Title, subTitle, description};
      return updateInfo;
    });
    setInfo(cleaninfo);
  }, []);

  const getInfo = useCallback(async () => {
    try {
      const response = await client.getEntries({ content_type: "aboutTa" });
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
    <div>
      
    </div>
  )
}

export default AboutTA