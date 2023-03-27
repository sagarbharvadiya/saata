import React, { useState, useEffect } from "react";
import client from "../client";

const News = ({entry_id }) => {
  const [entry, setEntry] = useState(null);
  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await client.getEntry(entry_id);
        setEntry(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEntry();
  }, [entry_id]);

  if (!entry) {
    return <div>Loading...</div>;
  }

  const { title, description } = entry.fields;
  

  return (
    <div>
     <h2>{title}</h2>
     {/* <div>{description}</div> */}
    </div>
  );
};

export default News;
