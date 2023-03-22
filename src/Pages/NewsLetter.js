import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import client from "../client";
// import ReactHtmlParser from 'react-html-parser';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';



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
        console.log("Slug:", slug);
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
        <a href="https://www.facebook.com/saataworld" target='_blank' rel='noreferrer'> <i className="fa-brands fa-facebook"></i></a>
        {/* <div className="newsletter_top">
          <img className="saata-logo" src="/Images/saata-logo.png" alt="logo"></img>
        </div> */}
        <div className="newsletter_banner_img">
          <img src="/Images/banner.png" alt="banner"></img>
        </div>
      </div>
      {

        entry.map((item) => {
          const { title ,description, subTitle } = item.fields;
          const id = item.sys.id;
          const richTextContent = documentToReactComponents(description, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <img
                  src={`https:${node.data.target.fields.file.url}`}
                  alt={node.data.target.fields.description}
                />
              ),
            },
          });
          const richTextContents = documentToReactComponents(subTitle, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <img
                  src={`https:${node.data.target.fields.file.url}`}
                  alt={node.data.target.fields.description}
                />
              ),
            },
          });
          return (
            <React.Fragment key={id}>
              <div className="news-main">
                  <h1>{title}</h1>
                <div className="news-letter-subtitle">
                  {richTextContents}
                </div>
                <div className="newsletter-description">
                  {richTextContent}
                </div>
              </div>
              <NavLink to='/ta-news'>ta news</NavLink>
            </React.Fragment>
          );
        })
      }
    </div>
  )
}

export default NewsLetter
