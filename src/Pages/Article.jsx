import React, { useState, useEffect, useCallback } from "react";
import  client from "../client";
import { NavLink } from "react-router-dom";

const Article = () => {
    const [info, setInfo] = useState([]);

    const cleanUpInfo = useCallback((rawdata) => {
      const cleaninfo = rawdata.map((item) => {
        const { sys, fields } = item;
        const { id } = sys;
        const Title = fields.title;
        const image = fields.articleImage.fields.file.url;
        const description = fields.description;
        const Time = fields.time;
        const Link = fields.link;
        const updateInfo = {id, Title, image, description, Time, Link };
        return updateInfo;
      });
      setInfo(cleaninfo);
    }, []);
  
    const getInfo = useCallback(async () => {
      try {
        const response = await client.getEntries({ content_type: "article" });
        const responseData = response.items
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
    
    <div className="Artical-section">
                <div className="Artical-wrapper">
                        <h2 className="artical-text">Category Archives: TA Articles</h2>
                    <div className="artical-blog-folder">
                        {
                            info.map((item, index) => {
                                return <div className="artical-blog-box-section">
                                            <div className="artical-image">
                                                <img src={item.image} alt={item.image}/>
                                            </div>
                                            <h2>{item.Title}</h2>
                                            <p className="artical-des">{item.description}</p>
                                            <div className="artical-date-folder">
                                                <p className="artical-date">{item.Time}</p>
                                                <NavLink to={item.Link}>Read More</NavLink>
                                            </div>
                                        </div>
                            })
                        }
                    </div>
                </div>
            </div>
    
    </>
  )
}

export default Article