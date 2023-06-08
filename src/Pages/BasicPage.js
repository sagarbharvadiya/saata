import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const BasicPage = () => {
  const { slug } = useParams();
  const [entry, setEntry] = useState([]);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "basicPage",
          "fields.slug": slug,
        });
        if (response.items.length) {
          setEntry(response.items);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPage();
  }, [slug]);

  const renderNode = (node, children) => {
    if (node.nodeType === 'embedded-asset-block' && node.data.target.sys.contentType.sys.id === 'pdf') {
      const { title, file } = node.data.target.fields;
      const url = file.url;
      return (
        <div style={{ width: '100%', height: '100vh' }}>
          <iframe src={url} title={title} style={{ width: '100%', height: '100%' }}></iframe>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {
        entry.map((item) => {
          const { title, description, subTitle } = item.fields;
          const id = item.sys.id;
          const imageUrl = (item?.fields?.image?.fields?.file?.url) ? item?.fields?.image?.fields?.file?.url : '';
          const richTextContent = documentToReactComponents(description, {
            renderNode: {
              ...renderNode,
              [INLINES.ASSET_HYPERLINK]: (node) => (
                <a href={`https://`+ node.data.target.fields.file.url} target="_blank" rel="noopener noreferrer">{node.data.target.fields.title}</a>
                ),
              [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { title, description, file } = node.data.target.fields;
                const url = file.url;
                const isPDF = file.contentType === 'application/pdf';

                if (isPDF) {
                  return (
                    <div>
                      <iframe src={url} title={title} style={{ width: '100%', height: '100vh' }}></iframe>
                      <p>{description}</p>
                    </div>
                  );
                }

                return null;
              },
            },
          });

          return (
            <React.Fragment key={id}>
              <div className="about_us about_ta">
                <div className="about_us_wrapper">
                  <h2>{title}</h2>
                </div>
                <div className="aboutus_parent">
                  <div className="about_us_img">
                    <img src={imageUrl} alt={imageUrl.title} />
                    <h3>{subTitle}</h3>
                  </div>
                  <div className="about_us_content">
                    {richTextContent}
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        })
      }
    </>
  )
}

export default BasicPage;
