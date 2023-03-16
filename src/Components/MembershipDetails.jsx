import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
// import { createClient } from "contentful";
import client from "../client";

// const client = createClient({
//   space: "your_space_id",
//   accessToken: "your_access_token",
// });

const MembershipDetails = () => {
  const { slug } = useParams();
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "basicPage",
          "fields.your_slug_field_name": slug,
        });
        if (response.items.length) {
          const entry = response.items[1];
          setEntry(entry);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPage();
  }, [slug]);

  const title = entry?.fields?.title;
  const description = entry?.fields?.description;
  const htmlObj = documentToHtmlString(description);

  return (
    <>
      <div className="membership_details">
        <h1 className="title">{title}</h1>
        <div className="description" dangerouslySetInnerHTML={{ __html: htmlObj }} />
      </div>
    </>
  );
};

export default MembershipDetails;