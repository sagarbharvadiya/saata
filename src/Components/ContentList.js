import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import client from "../client";

const ContentList = (prop) => {
  const [entry, setEntry] = useState([]);
  // const [toggleNews, setToggleNews] = useState(false);
  // const ToggleNews = () => {
  //   setToggleNews(!toggleNews);
  // };
  // const [activeIndex, setActiveIndex] = useState(null);
  const [toggleNews, setToggleNews] = useState(false);
  const toggleNewsHandler = () => setToggleNews(prevState => !prevState);
  const { monthAndYear, type, title, activeLink, onLinkClick } = prop;

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

  // const toggleActive = (index) => {
  //   setActiveIndex(index === activeIndex ? null : index);
  // };

  return (
    <div>

      <div onClick={ToggleNews} className="news-field">
        {title}   
      </div>
      <ul className="news-drop_drown-menu">
        {entry.map((item, index) => {
          const { title, slug } = item.fields;
          const isActive = activeLink === slug;
          return (
            <React.Fragment key={item.sys.id}>
              {toggleNews && (
                <li>
                <NavLink
                  to={`/content/${slug}`}
                  className={isActive ? "activeLink" : ""}
                  onClick={() => {
                    onLinkClick(slug);
                    toggleNewsHandler();
                  }}
                >
                  {title}
                </NavLink>
              </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default ContentList;
