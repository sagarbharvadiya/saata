import React, { useState, useEffect } from "react";
import client from "../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const Faq = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "faqCollapse",
        });
        if (response.items.length) {
          const sortedEntries = response.items.sort((a, b) => {
            return a.fields.number - b.fields.number;
          });
          setEntries(
            sortedEntries.map((item) => ({ ...item, isExpanded: false }))
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPage();
  }, []);

  const renderNode = (node, children) => {
    if (
      node.nodeType === "embedded-asset-block" &&
      node.data.target.sys.contentType.sys.id === "pdf"
    ) {
      const { title, file } = node.data.target.fields;
      const url = file.url;
      return (
        <div style={{ width: "100%", height: "100vh" }}>
          <iframe
            src={url}
            title={title}
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </div>
      );
    }

    return null;
  };

  const handleToggle = (id) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.sys.id === id
          ? { ...entry, isExpanded: !entry.isExpanded }
          : entry
      )
    );
  };

  return (
    <div>
      <div className="container">
        {entries.map((item) => {
          const { title, description, number } = item.fields;
          const id = item.sys.id;
          const imageUrl = item?.fields?.image?.fields?.file?.url
            ? item?.fields?.image?.fields?.file?.url
            : "";
          const richTextContent = documentToReactComponents(description, {
            renderNode: {
              ...renderNode,
              [INLINES.ASSET_HYPERLINK]: (node) => (
                <a
                  href={`https://` + node.data.target.fields.file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {node.data.target.fields.title}
                </a>
              ),
              [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { file } = node.data.target.fields;
                if (file.details?.image) {
                  const { title, description, file, number } =
                    node.data.target.fields;
                  const imageUrl = file.url;
                  const altText = description || title || "Image";
                  return (
                    <div className="custom-rich-text-image">
                      <img src={imageUrl} alt={altText} />
                    </div>
                  );
                }
                return null;
              },
            },
          });
          return (
            <div key={id} className="collapsible">
              <button className="button" onClick={() => handleToggle(id)}>
                <div className="title">
                  <h3>
                    {number}.{title}
                  </h3>
                  <span>{item.isExpanded ? "-" : "+"}</span>
                </div>
              </button>
              {item.isExpanded && (
                <div className="Content">
                  <div>{richTextContent}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
