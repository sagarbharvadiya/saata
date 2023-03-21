import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import ReactHtmlParser from 'react-html-parser';

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
        <div className="newsletter_top">
          <img className="saata-logo" src="/Images/saata-logo.png" alt="logo"></img>
        </div>
        <div className="newsletter_banner_img">
          <img src="/Images/banner.png" alt="banner"></img>
        </div>
        <a href="https://www.facebook.com/saataworld" target='_blank' rel='noreferrer'> <i className="fa-brands fa-facebook"></i></a>
      </div>
      {entry.map((item) => {
        const id = item.sys.id;
        const newTitle = item.fields.subTitle;

        return (
          <div key={id}>
            {ReactHtmlParser(newTitle)}
            {item.fields.image && (
              <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} />
            )}
            {item.fields.description && (
              // console.log(item.fields.description)
              <div>{ReactHtmlParser(item.fields.description)}</div>
            )}
          </div>
        );
      })}
    </div>
  )
}

export default NewsLetter
