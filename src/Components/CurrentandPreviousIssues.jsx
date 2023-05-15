import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import { Link } from "react-router-dom";
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const CurrentandPreviousIssues = () => {
  const { slug } = useParams();
  const [entry, setEntry] = useState([]);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "newslettter",
          "sys.id": "5wdrEkl0pFnmo906VKoB8B",
          "fields.slug": slug,
        });
        console.log("Response:", response);
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
      <div className="news-latter-cpnews-section">
        <h2>Current and Previous Issues</h2>
        {entry.map((item) => {
          const { description } = item.fields;
          const richTextContent = documentToReactComponents(description, {
            renderNode: {
              [INLINES.ASSET_HYPERLINK]: (node) => (
                <a href={`https://`+ node.data.target.fields.file.url} target="_blank" rel="noopener noreferrer">{node.data.target.fields.title}</a>
                ),
                [BLOCKS.EMBEDDED_ASSET]: (node) => (
                  <img
                    src={`https:${node.data.target.fields.file.url}`}
                    alt={node.data.target.fields.description}
                  />
  
                ),
            },
        });
          return <div key={item.sys.id}>{richTextContent}</div>;
        })}
      </div>
    </>
  );
};

export default CurrentandPreviousIssues;
