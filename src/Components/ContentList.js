import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import client from "../client";

const ContentList = (prop) => {
  const [toggleNews, SetToggleNews] = useState(false);
  const ToggleNews = () => { SetToggleNews(!toggleNews) }
  const { monthAndYear, type, title } = prop
  const [entry, setEntry] = useState([]);
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "news",
          "fields.monthAndYear": monthAndYear,
          "fields.type": type,
        });
        // console.log(response.items);
        // console.log(prop.monthAndYear);
        if (response.items.length) {
          setEntry(response.items.reverse());
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPage();
  }, []);

  return (
    <div>
      <div onClick={ToggleNews} className="news-field">
        {title} 
      </div>
      <ul className="news-drop_drown-menu">
        {entry.map((item) => {
          const { title, slug } = item.fields;
          return (
            <React.Fragment key={item.sys.id}>
              {toggleNews && (
                <li><NavLink to={`/content/${slug}`}>{title}</NavLink></li>
              )}
            </React.Fragment>
          );
        })}
       
      </ul>

    </div>
  );
};

export default ContentList;
