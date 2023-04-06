import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import client from "../client";

const ContentList = (props) => {
  const [entry, setEntry] = useState([]);
  const [toggleNews, setToggleNews] = useState(false);
  const { monthAndYear, type, title } = props;
  const { slug } = useParams();
  const currentSlug = slug;

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "news",
          "fields.monthAndYear": monthAndYear,
          "fields.type": type,
        });

        if (response.items.length) {
          setEntry(response.items.reverse());
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPage();
  }, [monthAndYear, type]);

  return (
    <div>
      <div
        onClick={() => setToggleNews(!toggleNews)}
        className="news-field"
      >
        {title}
      </div>
      <ul className={toggleNews ? "news-drop_drown-menu open" : "news-drop_drown-menu"}>
        {entry.map((item, index) => {
          const { title, slug } = item.fields;
          const isActive = currentSlug === slug;
          return (
            <React.Fragment key={item.sys.id}>
             {toggleNews && (
                 <li className={isActive ? "menu-item active" : "menu-item"}><NavLink to={`/content/${slug}`}>{title}</NavLink></li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default ContentList;
