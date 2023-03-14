import React, { useState, useEffect, useCallback } from "react";
import { client } from "../client";
import MyComponent from "./computer";
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { BLOCKS, MARKS } from '@contentful/rich-text-types';


const MembershipDetails = () => {
    const [info, setInfo] = useState([]);

    const cleanUpInfo = useCallback((rawdata) => {
        const cleaninfo = rawdata.map((item) => {
            const { sys, fields } = item;
            const { id } = sys;
            const Title = fields.title;
            const description = fields.description.content.content;
            const updateInfo = { id, Title, description };
            return updateInfo;
        });
        setInfo(cleaninfo);
    }, []);

    const getInfo = useCallback(async () => {
        try {
            const response = await client.getEntries({ content_type: "basicPage" });
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
            <div className="membership_details">
                {
                    info.map((item, index) => {
                        return (
                            <>
                                <div key={item.id}>
                                    <div className="title">
                                        <h2>{item.Title}</h2>
                                    </div>
                                    <MyComponent />
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MembershipDetails
