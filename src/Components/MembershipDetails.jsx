import React, { useState, useEffect, useCallback } from "react";
import  client  from "../client";
import MyComponent from "./computer";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
// import { BLOCKS, MARKS } from '@contentful/rich-text-types';


const MembershipDetails = () => {
    const [info, setInfo] = useState([]);
/**    const cleanUpInfo = useCallback((rawdata) => {
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
**/
    const getInfo = useCallback(async () => {
        try {
            const response = await client.getEntry('5OwsNAw0EAg1EOgGW1UT4J');
            console.log(response);
            const responseData = response.fields.description
            setInfo(responseData);
            console.log(responseData)
            if (responseData) {
            //    cleanUpInfo(responseData);
            } else {
              //  setInfo([]);
            }
        } catch (error) {
            console.log(error);
        }
        
    }, []);

    useEffect(() => {
        getInfo();
    }, [getInfo]);
    const htmlObj = documentToHtmlString(info);
    return (
        <div dangerouslySetInnerHTML={{ __html: htmlObj }} />
      );

}

export default MembershipDetails
