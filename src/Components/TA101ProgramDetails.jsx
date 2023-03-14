import React, { useState, useEffect, useCallback } from "react";
import { client } from "../client";

const TA101ProgramDetails = () => {
  const [pageData, setPageData] = useState([]);

  const cleanUpPageData = useCallback((rawData) => {
    const cleanedData = rawData.map(({ sys: { id }, fields: { title, description } }) => ({
      id,
      title,
      description:description?.content[0]?.content[0]?.value,
    }));
    setPageData(cleanedData);
  }, []);

  const getPageData = useCallback(async () => {
    try {
      const response = await client.getEntries({ content_type: "basicPage" });
      const responseData = response.items;
      if (responseData) {
        cleanUpPageData(responseData);
        console.log(responseData)
      } else {
        setPageData([]);
      }
    } catch (error) {
      console.log("Error fetching page data:", error.message);
      setPageData([]);
    }
  }, [cleanUpPageData]);

  useEffect(() => {
    getPageData();
  }, [getPageData]);
  return (
    <div className="TA101ProgramDetails">
      {pageData.map((item) => (
        <div key={item.id}>
          <div className="title">
            <h2>{item.title}</h2>
          </div>
          <div>{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default TA101ProgramDetails;
