import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import client from "../client";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';


const InfoSection = () => {
  const [info, setInfo] = useState([]);

  const cleanUpInfo = useCallback((rawdata) => {
    const cleaninfo = rawdata.map((item) => {
      const { sys, fields } = item;
      const { id } = sys;
      const infoTitle = fields.title;
      const link = fields.link;
      const linkLabel = fields.linkLabel;
      const infoDesc = fields.decription;
      const updatedInfo = { id, infoTitle, infoDesc, link, linkLabel };
      return updatedInfo;
    });
    setInfo(cleaninfo);
  }, []);

  const getInfo = useCallback(async () => {
    try {
      const response = await client.getEntries({
        content_type: "infoSection",
        order: "fields.order"
      });
      const responseData = response.items;
      if (responseData) {
        cleanUpInfo(responseData);
      } else {
        setInfo([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [cleanUpInfo]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);
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
    <div className="main-container">
      {/* <h2 className="main_title">Multi Level Learning, Chennai 6th-7th January, 2024</h2> */}
      {/* <h2 className="main_title">7th Biennial SAATA Conference, Bangalore 23-24 September, 2023.</h2> */}
      {info.map((item, index) => {
  const richTextContent = documentToReactComponents(item.infoDesc, {
    renderNode: {
      ...renderNode,
      [INLINES.ASSET_HYPERLINK]: (node) => {
        const url = `https://${node.data.target.fields.file.url}`;
        return (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {node.data.target.fields.title}
          </a>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;
        const url = file.url;
        const isPDF = file.contentType === 'application/pdf';

        if (isPDF) {
          return (
            <div>
              <iframe src={url} title={title} style={{ width: '100%', height: '100vh' }}></iframe>
            {description}
            </div>
          );
        }

        return null;
      },
    },
  });

  const linkProps = item.link.endsWith('.pdf') ? { target: '_blank' } : {};

  return (
    <div className="info-container" key={index}>
      <div className="info-body">
        <h2 className="info-title">{item.infoTitle}</h2>
        <p className="info-desc">{richTextContent}</p>
        <Link to={item.link} {...linkProps}>
          <button className="read-more">{item.linkLabel}</button>
        </Link>
      </div>
    </div>
  );
})}
    </div>
  );
};

export default InfoSection;
