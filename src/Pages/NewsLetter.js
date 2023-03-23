import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import client from "../client";
// import ReactHtmlParser from 'react-html-parser';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import news_letter_right_image from '../Images/think_tank.png'; 
import SideBar from '../Components/SideBar.jsx'


const NewsLetter = () => {

  const [modal, sertModal] = useState(false);
  const newsdropdown = () => { sertModal(!modal) }
  
  const [articlemodal, sertModalarticl] = useState(false);
  const articlesdropdown = () => { sertModalarticl(!articlemodal) }

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
          const { title, description, subTitle } = item.fields;
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
                <div className="news-letter-container">
                    <div className="news-letter-folder1">
                      <div className="news-letter-subtitle">
                        {richTextContents}
                      </div>
                      <div className="newsletter-description">
                        {richTextContent}
                      </div>
                    </div>
                    <div className="news-letter-folder2">
                      <div className="news-latter-right-field-folder">
                          <div className="news-letter-right-field">
                            <a href="#">From the Editorial Desk</a>
                          </div>
                          <div className="news-letter-dropdown-field">
                            <div onClick={newsdropdown} className="news-letter-right-field">
                              <a href="#">TA NEWS</a>
                            </div>
                            {modal &&(
                              <ul onClick={newsdropdown} className="TA-NEWS-dropdown-menu">
                                <li><a href="#">SAATA Conference Updates</a></li>
                                <li><a href="#">News from the Research and Publications Team</a></li>
                                <li><a href="#">Operations Team</a></li>
                                <li><a href="#">Dev Team Updates</a></li>
                                <li><a href="#">Miscellaneous News</a></li>
                            </ul>
                            )}
                          </div>
                          <div className="news-letter-right-field">
                            <a href="#">Experiences</a>
                          </div>
                          <div className="news-letter-dropdown-field">
                            <div onClick={articlesdropdown} className="news-letter-right-field">
                              <a href="#">ARTICLES</a>
                            </div>
                            {articlemodal &&(
                              <ul onClick={articlesdropdown} className="TA-NEWS-dropdown-menu">
                                <li><a href="#">Where There’s a Will There’s a Way</a></li>
                                <li><a href="#">Unmute Please</a></li>
                            </ul>
                            )}
                          </div>
                          <div className="news-letter-right-field">
                            <a href="#">Creative Corner</a>
                          </div>
                          <a href="#" className="news-letter-right-field-image">
                            <img src={news_letter_right_image}/>
                          </a>
                          <div className="news-letter-right-field">
                            <a href="#">Copyright policy</a>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <NavLink to='/newsletter/ta-news'>ta news</NavLink>
            </React.Fragment>
          );
        })
      }
    <SideBar/>
    </div>
  )
}

export default NewsLetter
