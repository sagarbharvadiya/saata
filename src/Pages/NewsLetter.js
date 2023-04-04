import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import SideBar from '../Components/SideBar.jsx'
import News from "../Components/News.jsx";

const NewsLetter = () => {
  const { slug } = useParams();
  const [entry, setEntry] = useState([]);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "newslettter",
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
    <div>
      <div className="newsletter">
        <span>VOL: 1, ISSUE: 1 - Dec 2021</span>
        <div className="newsletter_banner_img">
          <img src="/Images/banner-logo.jpg" alt="banner"></img>
        </div>
      </div>
      {
        entry.map((item) => {
          const { title, description, subTitle, monthAndYear } = item.fields;
          const id = item.sys.id;
          const descriptionContent = documentToReactComponents(description, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <img
                  src={`https:${node.data.target.fields.file.url}`}
                  alt={node.data.target.fields.description}
                />

              ),
              [BLOCKS.EMBEDDED_ENTRY]: (node) => (
                <News entry_id={node.data.target.sys.id} />
              ),
            },
          });
          const subTitleContents = documentToReactComponents(subTitle, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <img
                  src={`https:${node.data.target.fields.file.url}`}
                  alt={node.data.target.fields.description}
                />
              ),
              [BLOCKS.EMBEDDED_ENTRY]: (node) => (
                <News entry_id={node.data.target.sys.id} />
              ),
            },
          });
          return (
            <React.Fragment key={id}>
              <div className="news-main">
                <h1>{title}</h1>
                <div className="news-letter-container">
                  <div className="news-letter-folder1">
                    <div className="news-letter-subtitle">
                      {subTitleContents}
                    </div>
                    <div className="newsletter-description">
                      {descriptionContent}
                    </div>
                  </div>
                  <SideBar monthAndYear={monthAndYear} />
                </div>
              </div>
            </React.Fragment>
          );
        })
      }
    </div>
  )
}

export default NewsLetter
