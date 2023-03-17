import React, { useState, useEffect } from "react";
import client from "../client";
import { useParams } from "react-router-dom";
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
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
        if (response.items.length) {
          // const [entry] = response.items.reverse();
          setEntry (response.items[0]);
        }

      } catch (error) {
        console.error(error);
      }
    };

    fetchPage();
  }, [slug]);

  const title = entry?.fields?.title;
  const description = entry?.fields?.description;
  const richTextContent = documentToReactComponents(description);

  // const htmlObj = documentToHtmlString(description);

  return (
    <>
      <div className="TaProgram_details">
        <h1 className="title">{title}</h1>
        <div className="description TaProgram_details_description">
          {richTextContent}

        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: htmlObj }} /> */}

      </div>

    </>
  );
};

export default TA101ProgramDetails;