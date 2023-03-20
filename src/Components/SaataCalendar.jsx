import React, { useState, useEffect } from "react";
import client from "../client";
import { useParams } from "react-router-dom";

const SaataCalendar = () => {
  const [entry, setEntry] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "basicPage",
          "fields.slug": slug,
        });
        console.log(slug);
        console.log(response);
        if (response.items.length) {
          setEntry(response.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPage();
  }, [slug]);

  return (
    <>
      {entry &&
        entry.map((item) => {
          const { title} = item.fields;
          return (
            <div key={item.fields.slug}>
              <h1>{title}</h1>
            </div>
          );
        })}
    </>
  );
};

export default SaataCalendar;
