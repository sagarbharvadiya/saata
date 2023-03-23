import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
// import ReactHtmlParser from 'react-html-parser';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
// import news_letter_right_image from '../Images/think_tank.png'; 
import SideBar from '../Components/SideBar.jsx'
import News from "../Components/News.jsx";
// import { outside } from "semver";


const NewsLetter = () => {

  // const [modal, sertModal] = useState(false);
  // const newsdropdown = () => { sertModal(!modal) }

  // const [articlemodal, sertModalarticl] = useState(false);
  // const articlesdropdown = () => { sertModalarticl(!articlemodal) }

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
        <span>VOL: 1, ISSUE: 1 - Dec 2021</span>
        <a href="https://www.facebook.com/saataworld" target='_blank' rel='noreferrer'> <i className="fa-brands fa-facebook"></i></a>
        <div className="newsletter_banner_img">
          <img src="/Images/banner.png" alt="banner"></img>
        </div>
      </div>
      {

        entry.map((item) => {
          const { title, description, subTitle } = item.fields;
          const id = item.sys.id;
          // const entryRenderer = (node) => {
          //   if (node.data.target && node.data.target.sys.type === 'Entry') {
          //     return <News entry_id={node.data.target.sys.id} />;

          //   }
          // console.log('outside')
          //   return null;
          // };
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
                  <SideBar />
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
