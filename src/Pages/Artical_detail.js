import React, { useState, useEffect, useCallback } from "react";
import  client  from "../client";

function Articles() {
    const [info, setInfo] = useState([]);

    const cleanUpInfo = useCallback((rawdata) => {
        const cleaninfo = rawdata.map((item) => {
            const { sys, fields } = item;
            const { id } = sys;
            const Title = fields.title;
            const author = fields.author;
            const icon = fields.icon.fields.file.url;
            const image = fields.image.fields.file.url;
            const description = fields.description;
            const Time = fields.time;
            const subTitle = fields.subTitle;
            const updateInfo = { id, Title, image, description, Time, subTitle, icon, author };
            return updateInfo;
        });
        setInfo(cleaninfo);
    }, []);

    const getInfo = useCallback(async () => {
        try {
            const response = await client.getEntries({ content_type: "articleDetials" });
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
    }, [cleanUpInfo]);

    useEffect(() => {
        getInfo();
    }, [getInfo]);

    return (
        <>
            <div className="Articles-section">
                <div className="Articles-wrapper">
                    <div className="Articles-folder">
                        <div className="Articles-blog-section">
                            {
                                info.map((item, index) => {
                                    return (
                                        <>

                                            <div className="artical-author-folder">
                                                <div className="artical-author-image">
                                                    <img src={item.icon} alt={item.icon} />
                                                </div>
                                                <div className="artical-author-text-folder">
                                                    <h2>{item.Title}</h2>
                                                    <p className="Articles-date">{item.subTitle}</p>
                                                </div>
                                            </div>
                                            <div className="Articles-image">
                                                <img src={item.image} alt={item.image} />
                                            </div>
                                            <p className="Articles-Author"><span>{item.author}</span>
                                                {item.description}
                                            </p>
                                        </>

                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Articles;
