import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const AboutUs = () => {
  const { slug } = useParams();
  const [entry, setEntry] = useState([]);

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
      {
        entry.map((item) => {
          const { title, description } = item.fields;
          // const imageUrl =item.fields.image.fields.file.url;
          const richTextContent = documentToReactComponents(description);
          return (
            <>
              <div className="about_us">
                <div className="about_us_wrapper">
                  <h2>{title}</h2>
                </div>
                <div className="aboutus_parent">
                  <div className="about_us_img">
                    {/* <img src={imageUrl} alt={imageUrl.title} /> */}
                  </div>
                  <div className="about_us_content">
                    <p>{richTextContent}</p>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }
    </>
  );
};

export default AboutUs;
