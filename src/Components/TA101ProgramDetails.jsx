import React, { useState, useEffect } from "react";
import client from "../client";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const TA101ProgramDetails = () => {
  const { slug } = useParams();
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "basicPage",
          "fields.slug": slug,
        });
        console.log(slug)
        console.log(response)
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
          const { title } = item.fields;
          const { description } = item.fields;
          const richTextContent = documentToReactComponents(description);
          return (
              <div className="TaProgram_details">
                <h1 className="title">{title}</h1>
                <div className="description TaProgram_details_description">
                  {richTextContent}
                </div>
              </div>
          );
        })}
    </>
  );
};

export default TA101ProgramDetails;